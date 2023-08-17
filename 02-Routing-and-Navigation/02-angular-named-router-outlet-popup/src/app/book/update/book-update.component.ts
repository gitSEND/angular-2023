import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Book } from '../../book';
import { BookService } from '../../book.service';

@Component({
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {
  book = {} as Book | undefined;

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params) => this.bookService.getBook(+params['book-id']))
    ).subscribe(book => this.book = book);
  }

  update() {
    this.router.navigate([{ outlets: { bookPopup: null } }]);
  }
}
