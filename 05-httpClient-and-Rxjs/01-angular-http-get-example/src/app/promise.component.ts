import { Component } from '@angular/core';

import { BookService } from './book.service';
import { Book } from './book';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html'
})
export class PromiseComponent {
  promiseBooks: Promise<Book[]>;
  books: Book[] = [];
  errorMessage = '';
  constructor(private bookService: BookService) {
    this.promiseBooks = this.bookService.getBooksWithPromise();
    this.promiseBooks.then(
      books => this.books = books,
      error => this.errorMessage = error);
  }
}
