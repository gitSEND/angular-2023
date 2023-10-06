import { Component, OnInit } from '@angular/core';
import { Observable, of, pipe, throwError } from 'rxjs';
import { map, switchMap, debounceTime, catchError } from 'rxjs/operators';

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
  book: Book = {} as Book;

  constructor(private bookService: BookService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchBook();

    of("A", "B", "C", "D", "E").pipe(
      map(el => {
        if (el === "C") {
          throw new Error("Error occurred.");
        }
        return el;
      }),
      catchError(err => {
        console.error(err.message);
        console.log("Error is handled");
        return throwError("Error thrown from catchError");
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
      debounceTime(500),
      switchMap(id => {
        console.log(id);
        return this.bookService.getBook(id);
      })
    ).subscribe(res => res && (this.book = res));
  }
}
