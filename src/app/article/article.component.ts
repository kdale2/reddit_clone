import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor() {
    //article is populated by the Input now,
    //so we dont need anything here
   }

   voteUp(): boolean {
     this.article.voteUp();
     return false;
   }

   voteDown(): boolean {
     this.article.voteDown();
     return false;
   }

  ngOnInit() {
  }
}
