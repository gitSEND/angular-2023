import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Book } from './book';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookUrl = "/api/books";

  constructor(private http: HttpClient) { }

  getBook(id: number): Observable<Book | null> {
    return this.http.get<Book>(this.bookUrl + "/" + id).pipe(
      retry(3),
      catchError(err => {
        console.log(err);
        return of(null);
      })
    );
  }
}
