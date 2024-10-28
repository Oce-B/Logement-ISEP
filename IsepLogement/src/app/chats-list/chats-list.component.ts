import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Chat, Message } from '../chat.interface';
import { ChatComponent } from '../chat/chat.component';

import { RouterLink } from '@angular/router';
import { ChatCardComponent } from '../chat-card/chat-card.component';
import { ChatService } from '../chat.service';
@Component({
  selector: 'app-chats-list',
  standalone: true,
  imports: [RouterLink, HeaderComponent, ChatComponent, ChatCardComponent],
  templateUrl: './chats-list.component.html',
  styleUrl: './chats-list.component.scss',
})
export class ChatsListComponent {
  chats: Chat[] = [];
  ngOnInit() {}
  constructor(private chatService: ChatService) {
    this.chatService.getChats().subscribe((chat) => {
      this.chats = chat;
      console.log(this.chats);
    });
  }
}
