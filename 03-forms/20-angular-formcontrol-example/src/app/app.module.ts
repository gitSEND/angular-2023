import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormControlDemoComponent } from './formcontrol.component';
import { FormGroupDemoComponent } from './formgroup.component';
import { FormArrayDemoComponent } from './formarray.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    FormControlDemoComponent,
    FormGroupDemoComponent,
    FormArrayDemoComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
