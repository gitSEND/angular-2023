import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user.component';
import { EmployeeComponent } from './employee.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
