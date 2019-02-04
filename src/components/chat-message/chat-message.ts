import { Message } from './../../models/messages/message.interface';
import { Component, Input } from '@angular/core';

/**
 * Generated class for the ChatMessageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-chat-message',
  templateUrl: 'chat-message.html'
})
export class ChatMessageComponent {

  @Input() chatMessage: Message
  @Input() chatIndex: number;

  constructor() {
  }

}
