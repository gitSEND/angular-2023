import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

import { ROUND_ANTICLOCK_ANIMATION } from '../../animations/round-anticlock.animation';
import { Book } from '../../book';
import { BookService } from '../../book.service';

@Component({
  templateUrl: './addbook.component.html',
  styles: [':host { position: absolute; top: 20%; left: 5%; border: 3px solid black; }'],
  animations: [
    ROUND_ANTICLOCK_ANIMATION
  ]
})
export class AddBookComponent {
  @HostBinding('@roundAntiClockTrigger') roundAntiClockTrigger = 'in';
  book = {} as Book;

  constructor(private bookService: BookService, private router: Router) { }

  add() {
    this.bookService.addBook(this.book).then(
      () => this.router.navigate([{ outlets: { bookPopup: null } }])
    );
  }
}
