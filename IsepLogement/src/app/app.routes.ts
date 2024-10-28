import { Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListingComponent } from './listing/listing.component';
import { SavedListingsComponent } from './saved-listings/saved-listings.component';
import { ChatsListComponent } from './chats-list/chats-list.component';
import { ListingListComponent } from './listing-list/listing-list.component';
export const routes: Routes = [
  { path: 'chat', component: ChatsListComponent },
  { path: 'chat/:id', component: ChatComponent },
  { path: 'listing', component: ListingListComponent },
  { path: 'listing/:id', component: ListingComponent },
  { path: 'saved', component: SavedListingsComponent },
  { path: '**', component: HomepageComponent },
];
