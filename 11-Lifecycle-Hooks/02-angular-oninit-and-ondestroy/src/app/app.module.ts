import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CP1Component } from './cp1.component';
import { CP2Component } from './cp2.component';
import { CounterComponent } from './counter.component';
import { CPDirective } from './cp.directive';
import { LoggerService } from './logger.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    CP1Component,
    CP2Component,
    CounterComponent,
    CPDirective
  ],
  providers: [
    LoggerService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
