import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <app-form-control></app-form-control>
    <app-form-group></app-form-group>
    <app-form-array></app-form-array>
  `
})
export class AppComponent {
}
