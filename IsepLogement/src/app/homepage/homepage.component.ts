import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ListingCardComponent } from '../listing-card/listing-card.component';
import { RouterLink } from '@angular/router';
import { Listing } from '../listing.interface';
import { MOCK_LISTINGS } from '../mock-listings';
import { HiddenListingsService } from '../hiden-listings.service';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HeaderComponent, ListingCardComponent, RouterLink, SearchComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  listings: Listing[] = MOCK_LISTINGS;
  visibleListings: Listing[] = this.getvisibleListings();
  filteredListings: Listing[] = [];
  searchTerm: string = '';

  constructor(private hiddenListingsService: HiddenListingsService) {
    this.searchTerm = '';
  }

  getvisibleListings(): Listing[] {
    return this.listings.filter(
      (listing) => !this.hiddenListingsService.isListingHidden(listing.id)
    );
  }
  onSearch(searchTerm: string): void {
    this.searchTerm = searchTerm;
  }
  getfilteredListings(): Listing[] {
    return this.listings.filter((listing) =>
      listing.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
