import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FLY_IN_OUT_ANIMATION } from '../../animations/fly-in-out.animation';
import { Book } from '../../book';
import { BookService } from '../../book.service';

@Component({
  templateUrl: './book-detail.component.html',
  styles: [':host { position: absolute; top: 20%; left: 5%; border: 3px solid black; }'],
  animations: [
    FLY_IN_OUT_ANIMATION
  ]
})
export class BookDetailComponent implements OnInit {
  @HostBinding('@flyInOutTrigger') flyInOutTrigger = 'in';
  books: Promise<Book[]>;

  constructor(private bookService: BookService, private router: Router) {
    this.books = this.bookService.getBooks();
  }

  ngOnInit() { }

  close() {
    this.router.navigate([{ outlets: { bookList: null } }]);
  }
}
