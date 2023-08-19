import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

import { ArticleService } from '../../services/article.service';
import { Article } from '../../services/article';

@Component({
  templateUrl: './article.edit.component.html'
})
export class ArticleEditComponent implements OnInit {
  article = {} as Article;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params) => this.articleService.getArticle(+params['id']))
    ).subscribe(article => {
      this.article = article ?? {} as Article;
      this.setFormValues();
    });
  }

  articleForm = new FormGroup({
    title: new FormControl(),
    category: new FormControl()
  });
  setFormValues() {
    this.articleForm.setValue({ title: this.article?.title, category: this.article?.category });
  }

  onFormSubmit() {
    this.article.title = this.articleForm.get('title')?.value;
    this.article.category = this.articleForm.get('category')?.value;
    this.articleService.updateArticle(this.article)
      .subscribe(() =>
        this.router.navigate(['../'], { relativeTo: this.route })
      );
  }
}
