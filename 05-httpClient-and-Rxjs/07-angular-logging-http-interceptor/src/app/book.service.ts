import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable()
export class BookService {
  constructor(private http: HttpClient) { }

  bookUrl = "/api/books";
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl);
  }
}
