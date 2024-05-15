import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  currentUser: string = 'User 1';
  sender: string = 'User 2';
  messages: { user: string; content: string }[] = [];

  ngOnInit() {
    // Here you can fetch the messages from a backend service
    this.messages = [
      { user: 'User 1', content: 'Hello' },
      { user: 'User 2', content: 'Hi' },
    ];
    console.log(this.messages);
  }
  sendMessage(message: string) {
    if (message.trim() !== '') {
      this.messages.push({ user: this.currentUser, content: message });
      // Here you can also send the message to a backend service to save it
    }
    message = '';
  }
}
