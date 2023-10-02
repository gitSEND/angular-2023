import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookUrl = "/api/books";

  constructor(private http: HttpClient) { }

  getNumbers(): Observable<number> {
    return of(1, 2, 3, 4, 5, 6, 7);
  }

  getBooksFromStore(): Observable<Book[]> {
    console.log('getBooksFromStore');

    return this.http.get<Book[]>(this.bookUrl);
  }

  getFavBookFromStore(id: number): Observable<Book> {
    return this.http.get<Book>(this.bookUrl + "/" + id);
  }

  getBooksByCategoryFromStore(category: string): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl + "?category=" + category);
  }
}
