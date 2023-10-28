import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber, lastValueFrom } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = "api/books";
  constructor(private http: HttpClient) { }

  //Returns Observable<Book[]>
  getBooksWithObservable(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }

  //Returns Promise<Book[]>
  getBooksWithPromise(): Promise<Book[]> {
    return lastValueFrom(this.http.get<Book[]>(this.url));
  }

  //Returns Observable<string>
  getCurrentTime(): Observable<string> {
    return new Observable<string>((observer: Subscriber<string>) => {
      //1 second interval
      setInterval(() => observer.next(new Date().toString()), 1000);
    });
  }
  //Returns Promise<Book>
  getBookSlowly(): Promise<Book> {
    return new Promise(resolve => {
      let book = new Book();
      book.id = 100;
      book.name = 'jQuery Tutorials';
      // Delay by 3 second
      setTimeout(() => resolve(book), 3000);
    });
  }
}
