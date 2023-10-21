import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[defColOnEvent]'
})
export class DefaultColorOnEventDirective {
  constructor(private elRef: ElementRef) { }

  @HostListener('mouseover') onMouseOver() {
    this.changeColor('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('black');
  }

  private changeColor(color: string) {
    this.elRef.nativeElement.style.color = color;
  }
}
