import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[cpColor]'
})
export class CPColorDirective implements AfterViewInit {
  @Input() cpColor!: string;

  constructor(private elRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.elRef.nativeElement.style.color = this.cpColor;
  }
}
