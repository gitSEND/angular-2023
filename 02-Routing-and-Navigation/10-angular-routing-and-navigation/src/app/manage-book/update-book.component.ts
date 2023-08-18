import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';

import { Book } from '../services/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'update-book-app',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  book: Book = new Book();

  constructor(private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => this.bookService.getBook(+params['id']))
    ).subscribe(book => { if (book) this.book = book });
  }

  goBack(): void {
    this.location.back();
  }
}
