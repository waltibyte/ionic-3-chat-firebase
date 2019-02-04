import { Observable } from 'rxjs';
import { Channels } from './../../models/channels/channels.interface';
import { ChatProvider } from './../../providers/chat/chat';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ChannelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channels',
  templateUrl: 'channels.html',
})
export class ChannelsPage {

  channels: Observable<Channels[]>;

  constructor(private chat: ChatProvider, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  showAddChannelDialog(){
    this.alertCtrl.create({
      title: 'Channel Name',
      inputs: [{
        name: 'channelName'
      }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: data => {
            this.chat.addChannel(data.channelName)
          }
        }
    ]
    }).present();
  }

  ionViewWillLoad() {
    this.getChannel();
  }

  getChannel(){
    //Get all the channels here
    this.channels = this.chat.getAllChannels().map(names => {
      return names.map(name => ({
        $key: name.payload.key, ...name.payload.val()
      }))
    })
  }

  selectChannel(channel: Channels){
    this.navCtrl.push('ChannelChatPage', { channel });
  }

}
