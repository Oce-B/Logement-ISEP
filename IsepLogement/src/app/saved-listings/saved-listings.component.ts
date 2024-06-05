import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ListingCardComponent } from '../listing-card/listing-card.component';
import { Listing } from '../listing.interface';
import { MOCK_LISTINGS, MOCK_SAVED_LISTINGS } from '../mock-listings';
@Component({
  selector: 'app-saved-listings',
  standalone: true,
  imports: [HeaderComponent, ListingCardComponent],
  templateUrl: './saved-listings.component.html',
  styleUrl: './saved-listings.component.scss',
})
export class SavedListingsComponent {
  listings: Listing[] = MOCK_LISTINGS;
  savedListings: Listing[] = MOCK_SAVED_LISTINGS;
}
