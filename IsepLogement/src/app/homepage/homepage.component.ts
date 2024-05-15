import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ListingCardComponent } from '../listing-card/listing-card.component';
import { RouterLink } from '@angular/router';
import { Listing } from '../listing.interface';
import { MOCK_LISTINGS } from '../mock-listings';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HeaderComponent, ListingCardComponent, RouterLink, CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  listings: Listing[] = MOCK_LISTINGS;
}
