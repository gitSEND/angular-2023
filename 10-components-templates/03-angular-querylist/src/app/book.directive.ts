import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'book'
})
export class BookDirective {
  @Input() bookId = '';
  @Input() bookName = '';
}
