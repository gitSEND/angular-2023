import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormGroupDemoComponent } from './formgroup.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    FormGroupDemoComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
