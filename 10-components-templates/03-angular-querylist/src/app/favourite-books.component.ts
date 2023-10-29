import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { BookDirective } from './book.directive';

@Component({
  selector: 'favourite-books',
  template: `
    <b>Top Favourite Books</b>
    <ng-template ngFor let-book [ngForOf]= "topBooks">
      <br/>{{book.bookId}} - {{book.bookName}}
    </ng-template>

    <br/><b>All Favorite Books</b>
    <ng-template ngFor let-book [ngForOf]= "allBooks">
      <br/>{{book.bookId}} - {{book.bookName}}
    </ng-template>
  `
})
export class FavouriteBooksComponent implements AfterContentInit {
  //QueryList + @ContentChildren + Directive
  @ContentChildren(BookDirective)
  topBooks = {} as QueryList<BookDirective>;

  @ContentChildren(BookDirective, { descendants: true })
  allBooks = {} as QueryList<BookDirective>;

  ngAfterContentInit() {
    console.log('---Book details---');
    this.topBooks.forEach(book => console.log(book.bookId + " - " + book.bookName));
  }
}
