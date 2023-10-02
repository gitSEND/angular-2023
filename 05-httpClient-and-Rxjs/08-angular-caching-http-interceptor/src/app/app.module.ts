import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookComponent } from './book.component';
import { BookService } from './services/book.service';
import { httpInterceptorProviders } from './http-interceptors/index';
import { Cache } from './services/cache';
import { CacheMapService } from './services/cache-map.service';

//For InMemory testing
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TestData } from './test-data';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(TestData)
  ],
  declarations: [
    AppComponent,
    BookComponent
  ],
  providers: [
    BookService,
    httpInterceptorProviders,
    CacheMapService,
    { provide: Cache, useClass: CacheMapService }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
