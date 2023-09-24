import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { BookService } from './book.service';
import { Book } from './book';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html'
})
export class ObservableComponent {
  observableBooks: Observable<Book[]>;
  books: Book[] = [];
  errorMessage = '';

  constructor(private bookService: BookService) {
    this.observableBooks = this.bookService.getBooksWithObservable();
    this.observableBooks.subscribe({
      next: books => this.books = books,
      error: error => this.errorMessage = error,
      complete: () => console.log('Ejecucion del complete')
    });
  }
}
