import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { BookComponent } from './book.component';
import { BookService } from './book.service';
import { BookData } from './book-data';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(BookData, { delay: 500 })
  ],
  declarations: [
    AppComponent,
    BookComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
