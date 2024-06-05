import { Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListingComponent } from './listing/listing.component';
import { SavedListingsComponent } from './saved-listings/saved-listings.component';
export const routes: Routes = [
  { path: 'chat', component: ChatComponent },
  { path: 'listing/:id', component: ListingComponent },
  { path: 'saved', component: SavedListingsComponent },
  { path: '**', component: HomepageComponent },
];
