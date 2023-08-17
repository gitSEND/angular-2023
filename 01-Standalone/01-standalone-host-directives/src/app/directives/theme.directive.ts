import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTheme]',
  standalone: true
})
export class ThemeDirective {

  constructor(elRef: ElementRef) {
    console.log('%c[Constructor] ThemeDirective', "color: red; font-weight: bold;");

    elRef.nativeElement.style.fontStyle = 'italic';
    elRef.nativeElement.style.fontSize = '50px';
  }

  ngOnInit() {
    console.log('%c[NgOnInit] ThemeDirective', "color: red; font-weight: bold;");
  }

}
