// listing.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listing } from './listing.interface';

@Injectable({
  providedIn: 'root',
})
export class ListingService {
  private apiUrl = 'http://localhost:3000/api/listings'; // Adjust the URL based on your backend setup

  constructor(private http: HttpClient) {}

  getListings(): Observable<Listing[]> {
    return this.http.get<Listing[]>(this.apiUrl);
  }

  getListingById(id: number): Observable<Listing> {
    return this.http.get<Listing>(`${this.apiUrl}/${id}`);
  }

  createListing(listing: Listing): Observable<Listing> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Listing>(this.apiUrl, listing, { headers });
  }

  updateListing(id: number, listing: Partial<Listing>): Observable<Listing> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.patch<Listing>(`${this.apiUrl}/${id}`, listing, {
      headers,
    });
  }

  deleteListing(id: number): Observable<{}> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
