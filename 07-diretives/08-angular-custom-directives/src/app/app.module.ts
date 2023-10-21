import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CPDefaultThemeDirective } from './attribute-directives/cp-default-theme.directive';
import { CPColorDirective } from './attribute-directives/cp-color.directive';
import { CPCustomThemeDirective } from './attribute-directives/cp-custom-theme.directive';
import { DefaultColorOnEventDirective } from './attribute-directives/default-color-on-event.directive';
import { DynamicColorOnEventDirective } from './attribute-directives/dynamic-color-on-event.directive';
import { CpIfDirective } from './structural-directives/cp-if.directive';
import { CpDelayDirective } from './structural-directives/cp-delay.directive';
import { CpLoopDecorator } from './structural-directives/cp-loop.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    CPDefaultThemeDirective,
    CPColorDirective,
    CPCustomThemeDirective,
    DefaultColorOnEventDirective,
    DynamicColorOnEventDirective,
    CpIfDirective,
    CpDelayDirective,
    CpLoopDecorator
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
