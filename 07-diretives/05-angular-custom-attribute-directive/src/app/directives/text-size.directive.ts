import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[textSize]'
})
export class TextSizeDirective implements AfterViewInit {
  @Input('textSize') tsize!: string;

  constructor(private elRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.elRef.nativeElement.style.fontSize = this.tsize;
  }
}
