import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  url = "/api/articles";

  constructor(private http: HttpClient) { }

  createArticle(article: Article): Observable<Article> {
    let httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json');
    let options = {
      headers: httpHeaders
    };

    return this.http.post<Article>(this.url, article, options);
  }

  postArticle(article: Article): Observable<HttpResponse<Article>> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<Article>(this.url, article,
      {
        headers: httpHeaders,
        observe: 'response'
      }
    );
  }

  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.url);
  }
}
