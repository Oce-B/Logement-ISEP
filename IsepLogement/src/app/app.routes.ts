import { Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListingComponent } from './listing/listing.component';

export const routes: Routes = [
  { path: 'chat', component: ChatComponent },
  { path: 'listing/:id', component: ListingComponent },
  { path: '**', component: HomepageComponent },
];
