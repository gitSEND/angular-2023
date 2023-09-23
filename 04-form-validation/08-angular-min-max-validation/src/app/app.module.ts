import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form.component';
import { UserService } from './user-service';
import { CustomMinDirective } from './custom-min-validator.directive';
import { CustomMaxDirective } from './custom-max-validator.directive';

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule
  ],
  declarations: [
      AppComponent,
      ReactiveFormComponent,
      TemplateDrivenFormComponent,
      CustomMinDirective,
      CustomMaxDirective	  
  ],
  providers: [
      UserService
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
