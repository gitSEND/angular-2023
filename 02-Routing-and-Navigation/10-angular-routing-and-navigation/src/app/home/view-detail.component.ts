import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';

import { Book } from '../services/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'view-detail-app',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {
  book: Book = new Book();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private location: Location) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => this.bookService.getBook(+params['id']))
    ).subscribe(book => { if (book) this.book = book; });
  }

  goBack(): void {
    this.location.back();
  }

  updateBook(id: number): void {
    this.router.navigate(['/update-book', id]);
  }
}
