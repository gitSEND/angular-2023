import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyRedDirective } from './directives/red.directive';
import { NiceThemeDirective } from './directives/theme.directive';
import { CustomThemeDirective } from './directives/custom-theme.directive';
import { ColorInputDirective } from './directives/color-input.directive';
import { TextSizeDirective } from './directives/text-size.directive';
import { MouseActionDirective } from './directives/mouse.directive';
import { DynamicColorDirective } from './directives/dynamic-color.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MyRedDirective,
    NiceThemeDirective,
    CustomThemeDirective,
    ColorInputDirective,
    TextSizeDirective,
    MouseActionDirective,
    DynamicColorDirective
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
