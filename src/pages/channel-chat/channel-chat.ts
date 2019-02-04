import { Observable } from 'rxjs';
import { ChannelMessages } from './../../models/channels/channelMessages.interface';
import { ChatProvider } from './../../providers/chat/chat';
import { Channels } from './../../models/channels/channels.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChannelChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channel-chat',
  templateUrl: 'channel-chat.html',
})
export class ChannelChatPage {

  channel: Channels;
  channelMessage: Observable<ChannelMessages[]>;

  constructor(private chat: ChatProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.channel = this.navParams.get('channel');
    this.channelMessage = this.chat.getChatRef(this.channel.$key).map(messages => {
      return messages.map(message => ({
         ...message.payload.val()
      }))
    })
  }

  sendMessages(content: string){
    let channelMess: ChannelMessages = {
      content
    }
    this.chat.sendChannelChatMessage(this.channel.$key, channelMess);
  }

}
