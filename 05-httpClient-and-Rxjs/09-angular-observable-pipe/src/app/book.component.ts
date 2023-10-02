import { Component, OnInit } from '@angular/core';
import { Observable, interval, of, pipe, throwError } from 'rxjs';
import {
  mergeMap, switchMap, retry,
  map, catchError, filter, scan, tap
} from 'rxjs/operators';
import { BookService } from './book.service';
import { Book } from './book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html'
})
export class BookComponent implements OnInit {
  softBooks: Book[] = [];
  allFavBooks: Book[] = [];
  similarBooks: Book[] = [];
  bookId!: number;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.calculateNumbers1();
    this.calculateNumbers2();
    this.getSoftBooks();
    this.getAllFavBooks();
  }

  //Using Observable.pipe with filter, map and scan
  calculateNumbers1() {
    this.bookService.getNumbers().pipe(
      filter(n => n % 2 === 1),
      map(n => n + 10),
      scan((sum, n) => sum + n)
    ).subscribe(result => console.log(result));
  }

  //Using Standalone pipe
  calculateNumbers2() {
    //Create a function to accept Observable instance
    const calculationFun = pipe(
      filter((n: number) => n % 2 === 1),
      map((n: number) => n + 10),
      scan((sum, n) => sum + n)
    );

    //Instantiate response Observable
    const calculation$ = calculationFun(this.bookService.getNumbers());

    //Subscribe the Observable instance
    calculation$.subscribe(result => console.log(result));
  }

  //Using retry() and catchError operator
  getSoftBooks() {
    this.bookService.getBooksFromStore().pipe(
      tap(res => console.log('tap: ', res)),
      map(books => {
        console.log('books: ', books);
        if (books.length < 5) {  //It will throw error in console
          throw new Error('Not enough books');
        }
        return books;
      }),
      retry(3),
      catchError(err => {
        console.error(err);
        return of([]);
      })
    ).subscribe(books => this.softBooks = books);
  }

  //Using mergeMap
  getAllFavBooks() {
    this.bookService.getFavBookFromStore(101).pipe(
      mergeMap(book => {
        let category = book.category;
        return this.bookService.getBooksByCategoryFromStore(category);
      })
    ).subscribe(books => {
      this.allFavBooks = books;
    });
  }

  //Using switchMap
  searchSimilarBooks(id: number) {
    this.bookService.getFavBookFromStore(id).pipe(
      switchMap(book => {
        let category = book.category;
        return this.bookService.getBooksByCategoryFromStore(category);
      }),
      catchError(err => of([]))
    ).subscribe(books => {
      this.similarBooks = books;
      console.log(books);
    });
  }
}
