import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ObservableComponent } from './observable.component';
import { PromiseComponent } from './promise.component';
import { TimeComponent } from './time.component';
import { DataComponent } from './data.component';

//For InMemory testing
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TestData } from './test-data';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(TestData)
  ],
  declarations: [
    AppComponent,
    ObservableComponent,
    PromiseComponent,
    TimeComponent,
    DataComponent
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
