import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, mergeMap, switchMap, catchError, retry } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { BookService } from './book.service';
import { Book } from './book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html'
})
export class BookComponent implements OnInit {
  allBooks$: Observable<Book[]>;
  favBook$: Observable<Book>;
  myAllfavBooks$ = of([] as Book[]);
  favBookName$ = of('');
  similarBooks$ = of([] as Book[]);
  softBooks: Book[] = [];
  allFavBooks: Book[] = [];
  bookName = '';
  bookId = 0;
  similarFavBooks: Book[] = [];

  constructor(private bookService: BookService) {
    this.allBooks$ = this.bookService.getBooksFromStore();
    this.favBook$ = this.bookService.getFavBookFromStore(101);
  }

  ngOnInit() {
    this.getsoftBooks();
    this.getAllFavBooks();
    this.getBookName();
  }

  getsoftBooks() {
    this.bookService.getBooksFromStore().pipe(retry(3)).subscribe({
      next: books => {
        this.softBooks = books
      },
      error: (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          //A client-side or network error occurred.
          console.log('An error occurred:', err.error.message);
        } else {
          //Backend returns unsuccessful response codes such as 404, 500 etc.
          console.log('Backend returned status code: ', err.status);
          console.log('Response body:', err.error);
        }
      }
    });
  }

  getAllFavBooks() {
    this.myAllfavBooks$ = this.bookService.getFavBookFromStore(101).pipe(
      mergeMap(book => this.bookService.getBooksByCategoryFromStore(book.category))
    );

    // Using subscribe
    this.bookService.getFavBookFromStore(101).pipe(mergeMap(book => {
      let category = book.category;
      return this.bookService.getBooksByCategoryFromStore(category);
    })).subscribe(books => {
      this.allFavBooks = books;
    });
  }

  getBookName() {
    this.favBookName$ = this.bookService.getFavBookFromStore(101).pipe(map(book => book.name));

    // Using subscribe
    this.bookService.getFavBookFromStore(101).pipe(
      map(book => {
        if (book.name.length < 15) {
          return book.name;
        } else {
          throw ('Length less than 15');
        }
      }),
      catchError(error => {
        console.log(error);
        //return of("Default Name");
        throw (error.message || error);
      }))
      .subscribe({
        next: name => {
          this.bookName = name;
          console.log(name);
        },
        error: err => {
          console.log(err);
        }
      });
  }

  searchSimilarBooks(id: number) {
    this.similarBooks$ = this.bookService.getFavBookFromStore(id).pipe(
      switchMap(book => {
        let category = book.category;
        return this.bookService.getBooksByCategoryFromStore(category);
      }),
      catchError(err => of([])));

    // Using subscribe
    this.bookService.getFavBookFromStore(id).pipe(
      switchMap(book => {
        let category = book.category;
        return this.bookService.getBooksByCategoryFromStore(category);
      }),
      catchError(err => of([]))
    ).subscribe(books => {
      this.similarFavBooks = books;
      console.log(books);
    });
  }
}
