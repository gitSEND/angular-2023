import { Injectable } from '@angular/core';
import { Observable, lastValueFrom, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = "api/books";

  constructor(private http: HttpClient) { }

  getBooksWithObservable(): Observable<Book[]> {
    return this.http.get(this.url).pipe(
      map(this.extractData),
      catchError(this.handleErrorObservable)
    );
  }

  addBookWithObservable(book: Book): Observable<Book> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    return this.http.post(this.url, book, { headers: httpHeaders }).pipe(
      map(this.extractData),
      catchError(this.handleErrorObservable)
    );
  }

  getBooksWithPromise(): Promise<Book[]> {
    return lastValueFrom(this.http.get(this.url))
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  addBookWithPromise(book: Book): Promise<Book> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    });
    return lastValueFrom(this.http.post(this.url, book, { headers: httpHeaders }))
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  private extractData(res: any) {
    let body = res;
    return body;
  }

  private handleErrorObservable(error: any) {
    console.error(error.message || error);
    return throwError(error);
  }

  private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
}
