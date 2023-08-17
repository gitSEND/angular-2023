import { Directive, ElementRef } from '@angular/core';
import { MouseEventDirective } from './mouseevent.directive';
import { ThemeDirective } from './theme.directive';

@Directive({
  selector: '[appMessage]',
  standalone: true,
  hostDirectives: [
    MouseEventDirective,
    ThemeDirective
  ]
})
export class MessageDirective {

  constructor(elRef: ElementRef) {
    console.log('%c[Constructor] MessageDirective', "color: blue; font-weight: bold;");

    elRef.nativeElement.style.backgroundColor = 'gray';
  }

  ngOnInit() {
    console.log('%c[NgOnInit] MessageDirective', "color: blue; font-weight: bold;");
  }
}
