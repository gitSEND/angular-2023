import {Directive, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[appMouseevent]',
  standalone: true
})
export class MouseEventDirective {
  @Input('initialColor')
  initialColor!: string;

  @Output('colorChanged')
  colorChanged = new EventEmitter();

  constructor(private elRef: ElementRef) {
    console.log('%c[Constructor] MouseEventDirective', "color: green; font-weight: bold;");
    this.elRef.nativeElement.style.color = this.initialColor;
    console.log('%c[Constructor] initialColor input: ' + this.initialColor, "color: green; font-weight: bold; background-color: yellow;");

  }

  ngOnInit() {
    console.log('%c[NgOnInit] MouseEventDirective', "color: green; font-weight: bold;");
    this.elRef.nativeElement.style.color = this.initialColor;
    console.log('%c[NgOnInit] initialColor input: ' + this.initialColor, "color: green; font-weight: bold; background-color: yellow;");
  }

  @HostListener('mouseover') onMouseOver() {
    this.changeColor('blue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('black');
  }

  changeColor(color: string) {
    this.elRef.nativeElement.style.color = color;
    this.colorChanged.emit();
  }
}
