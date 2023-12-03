import { Directive, ElementRef, HostListener, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[cp11]'
})
export class CP11Directive implements AfterViewInit {
  toggleFlag = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.renderer.listen(this.elRef.nativeElement, 'click', () => {
      this.toggleFlag = (this.toggleFlag === true) ? false : true;

      if (this.toggleFlag) {
        this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
      } else {
        this.renderer.removeStyle(this.elRef.nativeElement, 'color');
      }
    });
  }
}
