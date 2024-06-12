import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../listing.interface';
import { MOCK_LISTINGS } from '../mock-listings';
import { HeaderComponent } from '../header/header.component';
import { HiddenListingsService } from '../hiden-listings.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  standalone: true,
  imports: [HeaderComponent],
})
export class ListingComponent implements OnInit {
  listing!: Listing;

  constructor(
    private route: ActivatedRoute,
    private hiddenListingsService: HiddenListingsService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    const foundListing = MOCK_LISTINGS.find((listing) => listing.id === id);
    if (foundListing) {
      this.listing = foundListing;
    } else {
    }
  }

  saveListing(): void {}
  hideListing(): void {
    if (this.listing) {
      this.hiddenListingsService.hideListing(this.listing.id);
      console.log(`Listing with ID ${this.listing.id} hidden.`);
    }
  }
}
