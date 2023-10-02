import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from './services/book.service';
import { Book } from './book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html'
})
export class BookComponent implements OnInit {
  books$!: Observable<Book[]>;
  searchQuery!: string;

  constructor(private bookService: BookService) { }

  ngOnInit() { }

  searchBooks() {
    this.books$ = this.bookService.searchBooksByTitle(this.searchQuery);
  }
}
