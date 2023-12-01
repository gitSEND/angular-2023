import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentComponent } from './student.component';
import { MyDirective } from './my.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    StudentComponent,
    MyDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
