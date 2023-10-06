import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Book } from './book';
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookUrl = "/api/books";

  constructor(private http: HttpClient) { }

  getBook(id: number): Observable<Book | null> {
    let url = this.bookUrl + "/" + id;
    let contador = 0;
    return this.http.get<Book>(url).pipe(
      tap(() => console.log(url)),
      catchError(err => {
        retry(3),  // retry the failed request up to 3 times
          contador = contador + 1;
        console.log(err, { contador });
        return of(null);
      })
    );
  }
}
