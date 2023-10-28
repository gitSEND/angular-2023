import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BookService } from './book.service';
import { Book } from './book';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html'
})
export class ObservableComponent implements OnInit {
  observableBooks!: Observable<Book[]>;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.observableBooks = this.bookService.getBooksWithObservable();
  }
}
