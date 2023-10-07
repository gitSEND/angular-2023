import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BookComponent } from './book.component';

//For InMemory testing
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TestData } from './test-data';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(TestData, { delay: 2000 })
  ],
  declarations: [
    AppComponent,
    BookComponent
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
