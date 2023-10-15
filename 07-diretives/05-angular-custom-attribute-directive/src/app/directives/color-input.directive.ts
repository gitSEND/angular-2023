import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[myColor]'
})
export class ColorInputDirective implements AfterViewInit {
  @Input() inputColor!: string;

  constructor(private elRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.elRef.nativeElement.style.color = this.inputColor;
  }
}
