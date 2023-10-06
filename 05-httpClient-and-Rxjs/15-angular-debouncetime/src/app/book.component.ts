import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { switchMap, debounceTime, tap, map } from 'rxjs/operators';

import { BookService } from './book.service';
import { Book } from './book';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book',
  template: `
    <div id="myelement">
      Mouse over
    </div>
    <h3>Search Book By Id</h3>
    <form [formGroup]="bookForm">
      ID: <input formControlName="bookId">
    </form>
    <div *ngIf="book">
      Id: {{book.id}}, Name: {{book.name}}, Category: {{book.category}}
    </div>
   `
})
export class BookComponent implements OnInit {
  book!: Book;

  constructor(private bookService: BookService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchBook();
    fromEvent(document.getElementById('myelement') as HTMLElement, 'mouseover').pipe(
      debounceTime(200),
      map(data => data.target)
    ).subscribe(val => console.log(val));
  }

  bookId = new FormControl();
  bookForm: FormGroup = this.formBuilder.group({
    bookId: this.bookId
  });
  searchBook() {
    this.bookId.valueChanges.pipe(
      debounceTime(1000),
      switchMap(id => {
        console.log(id);
        return this.bookService.getBook(id);
      })
    ).subscribe(res => res && (this.book = res));
  }
}
