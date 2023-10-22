import { Component, ViewChild } from '@angular/core';
import { CpColorDirective } from './cpcolor.directive';

@Component({
  selector: 'app-cpcolor-parent',
  templateUrl: './cpcolor-parent.component.html'
})
export class CpColorParentComponent {
  @ViewChild(CpColorDirective)
  private cpColorDirective = {} as CpColorDirective;

  changeColor(color: string) {
    this.cpColorDirective.change(color);
  }
}
