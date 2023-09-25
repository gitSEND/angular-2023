import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'

import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = "api/books";

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.http.get(this.url).pipe(
      map(this.extractData),
      catchError(this.handleError)
    )
  }

  getBookById(bookId: string): Observable<Book[]> {
    const myHeaders = new HttpHeaders();
    myHeaders.append('Content-Type', 'application/json');

    // const myParams = new HttpParams();
    // myParams.append('id', bookId);
    // console.log({ bookId });


    return this.http.get(`${this.url}?id=${bookId}`, { headers: myHeaders }).pipe(
      tap(res => console.log(res)),
      map(this.extractData),
      catchError(this.handleError)
    )
  }

  getBooksAfterFilter(catg: string, wtr: string): Observable<Book[]> {
    const myHeaders = new HttpHeaders();
    myHeaders.set('Content-Type', 'application/json');

    // const myParams = new HttpParams();
    // myParams.set('category', catg);
    // myParams.set('writer', wtr);

    console.log({ catg });
    console.log({ wtr });


    const options = { headers: myHeaders };

    return this.http.get(`${this.url}?category=${catg}&writer=${wtr}`, options).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  private extractData(res: any) {
    console.log('extractData : ', res);

    let body = res;
    return body;
  }

  private handleError(error: Response | any) {
    console.error(error.message || error);
    return throwError(() => error.message || error);
  }
}
