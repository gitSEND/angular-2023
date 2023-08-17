import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[msgLoop]',
  standalone: true
})
export class MsgDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input('msgLoop') set loop(num: number) {
    for (let i = 0; i < num; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef)
    }
  }

}
