import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {AppComponent}  from './app.component';
import {UpperCasePipeComponent}  from './uppercasepipe.component';
import {LowerCasePipeComponent}  from './lowercasepipe.component';
@NgModule({
  imports:      [BrowserModule],
  declarations: [AppComponent,
                 UpperCasePipeComponent,
				 LowerCasePipeComponent],
  bootstrap:    [AppComponent]
})
export class AppModule { }
  