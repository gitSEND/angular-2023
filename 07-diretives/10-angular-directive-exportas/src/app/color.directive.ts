import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[color-toggle]',
  exportAs: 'colorToggle'
})
export class ColorDirective {
  constructor(private elRef: ElementRef) { }
  @HostListener('mouseover') onMouseOver() {
    this.toggleColor();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.toggleColor();
  }

  toggleColor() {
    let color = this.elRef.nativeElement.style.color;
    let colorToSet = (color == 'red') ? 'black' : 'red';
    this.elRef.nativeElement.style.color = colorToSet;
  }
}
