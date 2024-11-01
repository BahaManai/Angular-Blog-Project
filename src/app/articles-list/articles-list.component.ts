import { Component, Input } from '@angular/core';
import { ArticleAddComponent } from "../article-add/article-add.component";
import { Article } from '../model/article';

@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [ArticleAddComponent],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.css'
})
export class ArticlesListComponent {
  @Input() SearchValue: string = '';
  Articles = [
    new Article(0, "Angular", "https://upload.wikimedia.org/wikipedia/commons/f/f7/Angular_gradient.png",  "2024-11-01","Angular est un framework de développement d'applications web côté client, maintenu par Google et basé sur TypeScript. Conçu pour la création de Single Page Applications (SPAs), Angular permet de construire des applications robustes et dynamiques en offrant un ensemble d'outils et de bibliothèques optimisés pour le développement front-end. Il utilise une architecture basée sur des composants, ce qui favorise la réutilisabilité du code et améliore la maintenance. Angular inclut également un puissant système de routage, un support pour les formulaires, et des outils pour la communication HTTP, permettant ainsi aux développeurs de gérer facilement les requêtes asynchrones avec des API."),new Article(1, "React", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s",  "2024-11-01","React.js est une bibliothèque JavaScript open-source développée par Facebook, utilisée pour créer des interfaces utilisateur interactives, principalement pour les applications web. Basée sur une architecture de composants, React permet de construire des éléments réutilisables qui facilitent la gestion et l'organisation du code, même dans des projets de grande envergure. Elle utilise le Virtual DOM pour améliorer les performances, en ne mettant à jour que les parties de l'interface qui ont changé, ce qui rend l'application plus rapide et réactive.React est très populaire pour les Single Page Applications (SPAs) et s'intègre bien avec d'autres bibliothèques ou frameworks, offrant ainsi une grande flexibilité pour les développeurs front-end.")
  ];
  action ="";
  selectedBookId! : number;
  changeAction(action : string){
    this.action = action;
  }
  addArticle(article:Article){
    this.Articles = [...this.Articles,article];
    this.changeAction("");
  }
  moveUp(i:number){
    this.Articles[i].score++;
    this.sortArticles();
  }
  moveDown(i:number){
    if(this.Articles[i].score>0){
      this.Articles[i].score--;
      this.sortArticles();
    }
  }
  // Methode pour trier les articles dans un ordre décroissant selon l'attribut score de la classe Article
  sortArticles() {
    this.Articles.sort((a, b) => b.score - a.score);
  }
  // Methode pour filtrer seulement les articles qui débutent avec la chaine saisie
  filteredArticles() {
    return this.Articles.filter(article =>
      article.title.toLowerCase().startsWith(this.SearchValue.toLowerCase())
    );
  }
}
