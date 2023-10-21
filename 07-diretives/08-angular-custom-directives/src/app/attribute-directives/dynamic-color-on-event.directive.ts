import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[dynamicColOnEvent]'
})
export class DynamicColorOnEventDirective {
  @Input('dynamicColOnEvent') dynamicColor?: string;
  @Input() defaultValue!: string;

  constructor(private elRef: ElementRef) { }

  @HostListener('mouseover') onMouseOver() {
    this.changeBackgroundColor(this.dynamicColor || this.defaultValue);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor('white');
  }

  private changeBackgroundColor(color: string) {
    this.elRef.nativeElement.style.backgroundColor = color;
  }
}
