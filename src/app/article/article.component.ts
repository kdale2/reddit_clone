import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Article } from './article.model';
import { FlagServiceService } from 'src/flag-service.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;
  myFlagService: FlagServiceService;

  constructor(flagService: FlagServiceService) {

    //created a service to handled flagging/downvoting articles
    this.myFlagService = flagService;
   }

   voteUp(): boolean {
     this.article.voteUp();
     return false;
   }

   voteDown(): boolean {
     this.article.voteDown();
     return false;
   }

   flagArticle() {
     //STILL TO DO: flagArticle() calls a service function that accepts an article
     //and downvotes the article so it is the lowest voted article
     console.log("Flag button has been clicked");
     this.myFlagService.flagArticle(this.article);
   }

  ngOnInit() {
  }
}
