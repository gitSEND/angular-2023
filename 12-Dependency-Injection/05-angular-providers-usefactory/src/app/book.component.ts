import { Component, OnInit, InjectionToken, Inject } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import { PREFERRED_BOOKS, preferredBooksFactory } from './preferred-books'

const JAVA_BOOK = new Book('Thinking in Java', 'Java');

@Component({
  selector: 'book',
  providers: [
    BookService,
    { provide: Book, useValue: JAVA_BOOK },
    { provide: PREFERRED_BOOKS, useFactory: preferredBooksFactory(3), deps: [Book, BookService] }
  ],
  template: `
	  <h3>Preferred Books</h3>
	  {{preferredBooks}}
	`
})
export class BookComponent implements OnInit {
  constructor(@Inject(PREFERRED_BOOKS) public preferredBooks: string) { }

  ngOnInit() {
  }
}

