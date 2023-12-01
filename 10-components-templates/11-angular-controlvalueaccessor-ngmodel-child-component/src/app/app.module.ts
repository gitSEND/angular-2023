import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentCVAccessorComponent } from './student-cvaccessor.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    StudentCVAccessorComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
