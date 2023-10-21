import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[cpCustomTheme]'
})
export class CPCustomThemeDirective implements AfterViewInit {
  @Input() tcolor?: string;
  @Input() tsize?: string;

  constructor(private elRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.tcolor = this.tcolor || 'green';
    this.tsize = this.tsize || '20px';
    this.elRef.nativeElement.style.color = this.tcolor;
    this.elRef.nativeElement.style.fontSize = this.tsize;
  }
}
