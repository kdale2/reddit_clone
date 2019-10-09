import { Injectable } from '@angular/core';
import { Article } from './app/article/article.model';

@Injectable({
  providedIn: 'root'
})
export class FlagServiceService {

  article: Article;

  constructor() {
   }

   flagArticle(article: Article) {
     
     //when flag button is pressed, this method is called
     //which downvotes the flagged article
     console.log("article being flagged by service method")
     this.article = article;
     this.article.voteDown();
     this.article.voteDown();
     this.article.voteDown();
     this.article.voteDown();
     this.article.voteDown();
     this.article.voteDown();

   }
}
