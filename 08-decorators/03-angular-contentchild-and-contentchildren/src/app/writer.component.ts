import { Component, ContentChild } from '@angular/core';
import { BookDirective } from './book.directive';

@Component({
  selector: 'writer',
  template: `
    Name: {{writerName}}
		<br/>Latest Book: {{book.bookId}} - {{book.bookName}}
  `
})
export class WriterComponent {
  @ContentChild(BookDirective) book = {} as BookDirective;
  writerName = 'Mahesh';
}
