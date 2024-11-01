import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticlesListComponent } from "./articles-list/articles-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticlesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My_Angular_Blog';
  searchValue: string = '';

  // j'ai fait une recherche l'événement Input qui déclenche directement en écrivant sur le champ input de la barre de recherche
  ModifierSearchValue(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchValue = target.value;
  }
}
