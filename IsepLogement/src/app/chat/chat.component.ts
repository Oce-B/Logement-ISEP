import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chat, Message } from '../chat.interface';
import { ChatService } from '../chat.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  chat: Chat = { id: 0, messages: [] };
  currentUser: string = 'User1';
  messages: Message[] = [];

  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.chatService.getChatById(id).subscribe((chat) => {
      this.chat = chat;
      this.messages = chat.messages;
    });
  }

  sendMessage(message: string) {
    if (message.trim() !== '') {
      this.chatService
        .addMessage(this.chat.id, {
          sender: this.currentUser,
          content: message,
        })
        .subscribe((updatedChat) => {
          this.chat = updatedChat;
          this.messages = updatedChat.messages;
        });
    }
  }
}
