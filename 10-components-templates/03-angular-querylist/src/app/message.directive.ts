import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cpMsg]'
})
export class MessageDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
