import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookUrl = "/api/books";

  constructor(private http: HttpClient) { }

  getBooksFromStore(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl);
  }

  getFavBookFromStore(id: number): Observable<Book> {
    return this.http.get<Book>(this.bookUrl + "/" + id);
  }

  getBooksByCategoryFromStore(category: string): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl + "?category=" + category);
  }
}
