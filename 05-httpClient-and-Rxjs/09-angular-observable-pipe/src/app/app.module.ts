import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookComponent } from './book.component';
import { BookService } from './book.service';

//For InMemory testing
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TestData } from './test-data';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(TestData)
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
