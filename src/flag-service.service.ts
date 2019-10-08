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
     
     //currently this just downvotes it a few times which wont always work
     console.log("article being flagged by service method")
     this.article = article;
     this.article.voteDown();
     this.article.voteDown();
     this.article.voteDown();
     this.article.voteDown();


   }
}
