import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CpIfDirective } from './directives/cp-if.directive';
import { CpDelayDirective } from './directives/cp-delay.directive';
import { CpLoopDecorator } from './directives/cp-loop.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    CpIfDirective,
    CpDelayDirective,
    CpLoopDecorator
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
