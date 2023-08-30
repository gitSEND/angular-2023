import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserReactiveComponent } from './user-component/user-reactive.component';
import { UserTemplateDrivenComponent } from './user-component/user-templatedriven.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    UserReactiveComponent,
    UserTemplateDrivenComponent
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
