import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NumberComponent } from './number.component';
import { NumberParentComponent } from './number-parent.component';
import { StopwatchComponent } from './stopwatch.component';
import { StopwatchParentComponent } from './stopwatch-parent.component';
import { CpColorDirective } from './cpcolor.directive';
import { CpColorParentComponent } from './cpcolor-parent.component';
import { CpThemeComponent } from './cptheme.component';
import { UIElementComponent } from './ui-element.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    NumberComponent,
    NumberParentComponent,
    StopwatchComponent,
    StopwatchParentComponent,
    CpColorDirective,
    CpColorParentComponent,
    CpThemeComponent,
    UIElementComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
