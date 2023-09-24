import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form.component';
import { UserService } from './services/user-service';

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule
  ],
  declarations: [
      AppComponent,
      TemplateDrivenFormComponent,
      ReactiveFormComponent
  ],
  providers: [
      UserService
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
