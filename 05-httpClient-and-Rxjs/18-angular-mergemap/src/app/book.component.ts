import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { mergeMap, switchMap, catchError, map, delay } from 'rxjs/operators';
import { BookService } from './book.service';
import { Book } from './book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html'
})
export class BookComponent implements OnInit {
  book!: Book;
  allBooks$!: Observable<Book[]>;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.searchBook();
    this.getAllBooks();

    console.log("--mergeMap--");
    of('x', 'y', 'z').pipe(
      mergeMap(el => of(1, 2).pipe(
        delay(2000),
        map(num => el + num)
      ))
    ).subscribe(res => console.log(res));

  }

  id = 102;
  addMoreBooks() {
    let book1 = new Book(++this.id, "Book-" + this.id);
    let book2 = new Book(++this.id, "Book-" + this.id);
    let book3 = new Book(++this.id, "Book-" + this.id);
    of(book1, book2, book3).pipe(
      mergeMap(book => {
        delay(2000);
        return this.bookService.addBook(book);
      }),
      catchError(err => {
        console.error(err.message);
        return of(new Book(100, "Default Book"));
      })
    ).subscribe(book => {
      console.log(book.id + ":" + book.name);
      this.getAllBooks();
    });
  }

  bookId = new FormControl();
  searchBook() {
    this.bookId.valueChanges.pipe(
      switchMap(id => {
        delay(2000);
        if (id > this.id || id < 101) {
          return of(null);
        }
        return this.bookService.getBookById(id);
      })
    ).subscribe(res => res && (this.book = res));
  }

  getAllBooks() {
    this.allBooks$ = this.bookService.getAllBooks();
  }
}
