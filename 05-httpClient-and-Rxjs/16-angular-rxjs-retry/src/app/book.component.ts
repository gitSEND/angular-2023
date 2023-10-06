import { Component, OnInit } from '@angular/core';
import { of, throwError } from 'rxjs';
import { switchMap, debounceTime, catchError, retry, mergeMap, tap } from 'rxjs/operators';

import { BookService } from './book.service';
import { Book } from './book';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book',
  template: `
    <h3>Search Book</h3>
    <form [formGroup]="bookForm">
      ID: <input formControlName="bookId">
    </form>
    <br/>
    <div *ngIf="book">
      Id: {{book.id}}, Name: {{book.name}}, Category: {{book.category}}
    </div>
   `
})
export class BookComponent implements OnInit {
  book!: Book;
  constructor(private bookService: BookService, private formBuilder: FormBuilder) { }
  ngOnInit() {
    //Total max 3 retry, but no success and throw error
    of(1, 2, 3, 4).pipe(
      mergeMap(data => {
        if (data === 3) {
          return throwError(() => 'Error Occurred.');
        }
        return of(data);
      }),
      retry(3)
    ).subscribe({
      next: res => console.log(res),
      error: err => {
        console.log("Retried for 3 times.");
        console.error(err);
      }
    });

    //Total max 5 retry, but subscribe success in 2 retry
    let retryCount = 0;
    of('a', 'b', 'c', 'd').pipe(
      mergeMap(data => {
        if (data === 'c' && retryCount !== 3) {
          retryCount = retryCount + 1;
          return throwError(() => 'Error Occurred.');
        }
        return of(data);
      }),
      retry(5)
    ).subscribe({
      next: res => console.log('res: ', res),
      error: err => {
        console.log("Number of retry: " + retryCount);
        console.error(err);
      },
      complete: () => console.log("Processing Complete. Number of retry: " + retryCount)
    });
    //-------------------------
    this.retryAndHandleError();
    this.searchBook();
  }

  retryAndHandleError() {
    of("A", "B").pipe(
      switchMap(el => {
        if (el === "B") {
          throw new Error("Error occurred.");
        }
        return el;
      }),
      retry(2),
      catchError(err => {
        console.error(err.message);
        console.log("Error is handled");
        return of("X"); //return defualt value as X
      })
    ).subscribe({
      next: el => console.log(el),
      error: err => console.error(err),
      complete: () => console.log("Processing Complete.")
    });
  }

  bookId = new FormControl();
  bookForm: FormGroup = this.formBuilder.group({
    bookId: this.bookId
  });
  searchBook() {
    this.bookId.valueChanges.pipe(
      debounceTime(1000),
      switchMap(id => {
        return this.bookService.getBook(id);
      }),
    ).subscribe({
      next: res => res && (this.book = res),
      error: err => console.log(err)
    });
  }
}
