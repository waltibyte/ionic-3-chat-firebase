import { ChannelMessages } from './../../models/channels/channelMessages.interface';
import { Component, EventEmitter, Output } from '@angular/core';

/**
 * Generated class for the SendMessageBoxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-send-message-box',
  templateUrl: 'send-message-box.html'
})
export class SendMessageBoxComponent {

  content: string;

  @Output() sendMessage: EventEmitter<string>;

  constructor() {
    this.sendMessage = new EventEmitter<string>();
  }

  send(){
    this.sendMessage.emit(this.content);
    this.content = "";
  }

}
