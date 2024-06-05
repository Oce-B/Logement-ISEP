import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Chat, Message } from '../chat.interface';
import { ActivatedRoute } from '@angular/router';
import { MOCK_CHATS } from '../mock-messages';
@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  chat!: Chat;
  currentUser: string = 'User1';
  messages?: Message[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!; // Get the listing ID from the route parameter

    for (var chat of MOCK_CHATS) {
      if (chat.id === id) {
        this.chat = chat;
        this.messages = chat.messages;
      }
    }
    console.log(this.chat);
    // this.messages = this.chat.messages;
  }

  sendMessage(message: string) {
    if (message.trim() !== '') {
      this.messages!.push({ user: this.currentUser, content: message });
      // Here you can also send the message to a backend service to save it
    }
    message = '';
  }
}
