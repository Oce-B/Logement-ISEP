// listing.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../listing.interface'; // Import the Listing interface
import { MOCK_LISTINGS } from '../mock-listings'; // Import the mock listings

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {
  listing!: Listing;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!; // Get the listing ID from the route parameter
    const foundListing = MOCK_LISTINGS.find((listing) => listing.id === id);
    if (foundListing) {
      this.listing = foundListing;
    } else {
      // Handle case where listing is not found
      console.error(`Listing with ID ${id} not found.`);
    }
  }

  saveListing(): void {}
  hideListing(): void {}
}
