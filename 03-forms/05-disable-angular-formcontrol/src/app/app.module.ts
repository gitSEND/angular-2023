import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form.component';
import { EnableDisableDirective } from './enable-disable.directive';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    EnableDisableDirective
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
