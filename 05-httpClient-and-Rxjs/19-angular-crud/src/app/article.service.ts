import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  //URL for CRUD operations
  articleUrl = "/api/articles";

  //Create constructor to get Http instance
  constructor(private http: HttpClient) { }

  //Fetch all articles
  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articleUrl).pipe(
      tap(articles => console.log("Number of articles: " + articles.length)),
      catchError(this.handleError)
    );
  }

  //Create article
  createArticle(article: Article): Observable<number> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<Article>(this.articleUrl + "/" + article.id, article, {
      headers: httpHeaders,
      observe: 'response'
    }
    ).pipe(
      map(res => res.status),
      catchError(this.handleError)
    );
  }

  //Fetch article by id
  getArticleById(articleId: string | number): Observable<Article> {
    return this.http.get<Article>(this.articleUrl + "/" + articleId).pipe(
      tap(article => console.log(article.title + " " + article.category)),
      catchError(this.handleError)
    );
  }

  //Update article
  updateArticle(article: Article): Observable<number> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.put<Article>(this.articleUrl + "/" + article.id, article, {
      headers: httpHeaders,
      observe: 'response'
    }
    ).pipe(
      map(res => res.status),
      catchError(this.handleError)
    );
  }

  //Delete article
  deleteArticleById(articleId: string | number): Observable<number> {
    return this.http.delete<number>(this.articleUrl + "/" + articleId).pipe(
      tap(status => console.log("status: " + status)),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(() => error);
  }
}
