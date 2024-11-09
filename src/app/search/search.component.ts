import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchValue: string = '';
  @Output() recherche = new EventEmitter <string>();
  ModifierSearchValue(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchValue = target.value;
    this.recherche.emit(this.searchValue);
  }
}
