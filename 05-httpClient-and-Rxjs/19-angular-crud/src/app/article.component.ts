import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ArticleService } from './article.service';
import { Article } from './article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  //Component properties
  allArticles!: Article[];
  statusCode?: number | null;
  requestProcessing = false;
  articleIdToUpdate: number | null = null;
  processValidation = false;

  //Create form
  articleForm = new FormGroup({
    title: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required)
  });

  //Create constructor to get service instance
  constructor(private articleService: ArticleService) { }

  //Create ngOnInit() and and load articles
  ngOnInit(): void {
    this.getAllArticles();
  }

  //Fetch all articles
  getAllArticles() {
    this.articleService.getAllArticles()
      .subscribe({
        next: data => this.allArticles = data,
        error: errorCode => this.statusCode = errorCode
      });
  }

  //Handle create and update article
  onArticleFormSubmit() {
    this.processValidation = true;
    if (this.articleForm.invalid) {
      return; //Validation failed, exit from method.
    }
    //Form is valid, now perform create or update
    this.preProcessConfigurations();
    let article = this.articleForm.value as Article;
    if (this.articleIdToUpdate === null) {
      //Generate article id then create article
      this.articleService.getAllArticles()
        .subscribe(articles => {
          //Generate article id (logic is for demo)
          let maxIndex = articles.length - 1;
          let articleWithMaxIndex = articles[maxIndex];
          let articleId = articleWithMaxIndex.id + 1;
          article.id = articleId;

          //Create article
          this.articleService.createArticle(article)
            .subscribe({
              next: statusCode => {
                //Expecting success code 201 from server
                this.statusCode = statusCode;
                this.getAllArticles();
                this.backToCreateArticle();
              },
              error: errorCode => this.statusCode = errorCode
            });
        });
    } else {
      //Handle update article
      article.id = this.articleIdToUpdate;
      this.articleService.updateArticle(article)
        .subscribe({
          next: statusCode => {
            //this.statusCode = statusCode;
            //Expecting success code 204 from server
            this.statusCode = 200;
            this.getAllArticles();
            this.backToCreateArticle();
          },
          error: errorCode => this.statusCode = errorCode
        });
    }
  }
  //Load article by id to edit
  loadArticleToEdit(articleId: string | number) {
    this.preProcessConfigurations();
    this.articleService.getArticleById(articleId)
      .subscribe({
        next: article => {
          this.articleIdToUpdate = article.id;
          this.articleForm.setValue({ title: article.title, category: article.category });
          this.processValidation = true;
          this.requestProcessing = false;
        },
        error: errorCode => this.statusCode = errorCode
      });
  }
  //Delete article
  deleteArticle(articleId: string | number) {
    this.preProcessConfigurations();
    this.articleService.deleteArticleById(articleId)
      .subscribe({
        next: successCode => {
          //this.statusCode = successCode;
          //Expecting success code 204 from server
          this.statusCode = 204;
          this.getAllArticles();
          this.backToCreateArticle();
        },
        error: errorCode => this.statusCode = errorCode
      });
  }

  //Perform preliminary processing configurations
  preProcessConfigurations() {
    this.statusCode = null;
    this.requestProcessing = true;
  }

  //Go back from update to create
  backToCreateArticle() {
    this.articleIdToUpdate = null;
    this.articleForm.reset();
    this.processValidation = false;
  }
}
