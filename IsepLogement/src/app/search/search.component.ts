import { Component, EventEmitter, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  searchTerm!: string;
  @Output() searchChange = new EventEmitter<string>();
  constructor() {
    this.searchTerm = '';
  }
  onSearchChange(): void {
    if (this.searchTerm !== undefined) {
      this.searchChange.emit(this.searchTerm);
    } else {
      console.error('searchTerm is undefined');
    }
  }
}
