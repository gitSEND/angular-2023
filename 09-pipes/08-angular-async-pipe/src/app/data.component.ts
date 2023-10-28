import { Component, OnInit } from '@angular/core';

import { BookService } from './book.service';
import { Book } from './book';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html'
})
export class DataComponent implements OnInit {
  promiseBook!: Promise<Book>;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.promiseBook = this.bookService.getBookSlowly();
  }
}
