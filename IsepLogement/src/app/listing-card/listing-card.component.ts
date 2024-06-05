import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Listing } from '../listing.interface';

@Component({
  selector: 'app-listing-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './listing-card.component.html',
  styleUrl: './listing-card.component.scss',
})
export class ListingCardComponent {
  @Input() listing!: Listing;
}
