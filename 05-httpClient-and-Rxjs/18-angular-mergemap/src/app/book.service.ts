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

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.bookUrl, book);
  }

  removeBook(id: number) {
    return this.http.delete<any>(this.bookUrl + "/" + id);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(this.bookUrl + "/" + id);
  }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl);
  }
}
