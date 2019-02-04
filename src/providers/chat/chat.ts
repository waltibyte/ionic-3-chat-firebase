import { ChannelMessages } from './../../models/channels/channelMessages.interface';
import { Channels } from './../../models/channels/channels.interface';
// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the ChatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatProvider {

  constructor(public database: AngularFireDatabase) {
  }

  addChannel(channelname: string){
    this.database.list(`/channel-names/`).push({name: channelname});
  }

  getAllChannels(){
    return this.database.list<Channels>(`channel-names`).snapshotChanges();
  }

  getChatRef(channelKey: string){
    return this.database.list<ChannelMessages>(`/channels/${channelKey}`).snapshotChanges();
  }

  async sendChannelChatMessage(channelkey: string, channelmessage: ChannelMessages){
    await this.database.list(`/channels/${channelkey}`).push(channelmessage);
  }

}
