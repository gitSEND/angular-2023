import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BookService } from './book.service';
import { Book } from './book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html'
})
export class BookComponent implements OnInit {
  books$: Observable<Book[]> = of([]);

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.books$ = this.bookService.getBooks();
  }
}
