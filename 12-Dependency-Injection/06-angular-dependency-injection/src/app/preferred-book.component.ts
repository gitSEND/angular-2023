import { Component, OnInit } from '@angular/core';
import { PreferredBookService } from './services/preferred-book.service';

@Component({
  selector: 'preferred-book',
  template: `
	  <h3>Preferred Books</h3>
	  {{preferredBooks}}
	`
})
export class PreferredBookComponent implements OnInit {
  preferredBooks!: string;
  constructor(private preferredBookService: PreferredBookService) { }

  ngOnInit() {
    this.preferredBooks = this.preferredBookService.getPreferredBooks();
  }
}

