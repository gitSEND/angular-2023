import { Component, Input } from '@angular/core';

@Component({
  selector: 'writer',
  template: `
       {{writerName}} - {{bookName}}
  `
})
export class WriterComponent {
	@Input('name') writerName = '';
	@Input('book') bookName = '';
}