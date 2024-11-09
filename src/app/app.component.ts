import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticlesListComponent } from "./articles-list/articles-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ArticlesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My_Angular_Blog';
}
