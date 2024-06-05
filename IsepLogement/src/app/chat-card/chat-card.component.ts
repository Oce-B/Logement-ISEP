import { Component, Input } from '@angular/core';
import { Chat } from '../chat.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-chat-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './chat-card.component.html',
  styleUrl: './chat-card.component.scss',
})
export class ChatCardComponent {
  @Input() chat!: Chat;
}
