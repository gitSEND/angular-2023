import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Book } from './book';
import { BookService } from './book.service';

@Component({
  template: `
    <div *ngIf="book">
      Id: {{book.id}}, Name: {{book.name}}, Category: {{book.category}}
    </div>
   `
})
export class FavBookComponent implements OnInit {
  book!: Book;

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params) => this.bookService.getBook(+params['id']))
    ).subscribe(book => this.book = book);
  }
}
