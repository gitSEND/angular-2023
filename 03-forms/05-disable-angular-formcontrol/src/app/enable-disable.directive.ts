import { NgControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';


@Directive({
  selector: '[enableDisable]'
})
export class EnableDisableDirective {
  @Input() set enableDisable(action: string) {
    // this.ngControl.control[action]();

    if (action === 'enable') {
      this.ngControl.control?.enable();
    }

    if (action === 'disable') {
      this.ngControl.control?.disable();
    }

  }
  constructor(private ngControl: NgControl) { }
}
