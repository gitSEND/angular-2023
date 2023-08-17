import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Article } from '../services/article';
import { ArticleService } from '../services/article.service';

@Component({
  templateUrl: './article.list.component.html'
})
export class ArticleListComponent implements OnInit {
  articles: Observable<Article[]>;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router) {
    this.articles = this.articleService.getArticles();
  }

  ngOnInit() { }

  goToEdit(article: Article) {
    this.router.navigate([article.articleId], { relativeTo: this.route });
    console.log("🚀 ~ file: article.list.component.ts:25 ~ ArticleListComponent ~ goToEdit ~ this.route:", this.route)
  }
}
