import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BookService } from './book.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html'
})
export class TimeComponent implements OnInit {
  observableTime!: Observable<string>;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.observableTime = this.bookService.getCurrentTime();
  }
}
