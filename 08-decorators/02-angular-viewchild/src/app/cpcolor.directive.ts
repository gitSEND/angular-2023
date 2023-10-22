import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[cpColor]'
})
export class CpColorDirective implements AfterViewInit {
  constructor(private elRef: ElementRef) { }

  ngAfterViewInit() {
    this.elRef.nativeElement.style.color = 'red';
  }

  change(changedColor: String) {
    this.elRef.nativeElement.style.color = changedColor;
  }
}
