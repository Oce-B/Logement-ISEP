import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HiddenListingsService {
  getHiddenListings() {
    throw new Error('Method not implemented.');
  }
  hiddenListings: number[] = [2];

  constructor() {}

  // Add a listing to the hidden list
  hideListing(listingId: number) {
    if (!this.hiddenListings.includes(listingId)) {
      this.hiddenListings.push(listingId);
    }
  }

  // Remove a listing from the hidden list
  unhideListing(listingId: number) {
    this.hiddenListings = this.hiddenListings.filter((id) => id !== listingId);
  }

  // Check if a listing is hidden
  isListingHidden(listingId: number): boolean {
    return this.hiddenListings.includes(listingId);
  }
}
