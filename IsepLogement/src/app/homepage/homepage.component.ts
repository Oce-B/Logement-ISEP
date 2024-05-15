import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ListingCardComponent } from '../listing-card/listing-card.component';
import { RouterLink } from '@angular/router';
import { Listing } from '../listing.interface';
import { MOCK_LISTINGS } from '../mock-listings';
import { HiddenListingsService } from '../hiden-listings.service';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HeaderComponent, ListingCardComponent, RouterLink],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  listings: Listing[] = MOCK_LISTINGS;
  visibleListings: Listing[] = this.getvisibleListings();

  constructor(private hiddenListingsService: HiddenListingsService) {}

  getvisibleListings(): Listing[] {
    return this.listings.filter(
      (listing) => !this.hiddenListingsService.isListingHidden(listing.id)
    );
  }
}
