import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chat } from './chat.interface';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private apiUrl = 'http://localhost:3000/api/chats';

  constructor(private http: HttpClient) {}

  getChats(): Observable<Chat[]> {
    return this.http.get<Chat[]>(this.apiUrl);
  }

  getChatById(id: number): Observable<Chat> {
    return this.http.get<Chat>(`${this.apiUrl}/${id}`);
  }

  createChat(chat: Chat): Observable<Chat> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Chat>(this.apiUrl, chat, { headers });
  }

  updateChat(id: number, chat: Partial<Chat>): Observable<Chat> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.patch<Chat>(`${this.apiUrl}/${id}`, chat, { headers });
  }

  deleteChat(id: number): Observable<{}> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  addMessage(
    chatId: number,
    message: { sender: string; content: string }
  ): Observable<Chat> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Chat>(`${this.apiUrl}/${chatId}/messages`, message, {
      headers,
    });
  }
}
