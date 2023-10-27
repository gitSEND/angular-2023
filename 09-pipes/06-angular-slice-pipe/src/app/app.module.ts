import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StringSlicePipeComponent } from './string.slicepipe.component';
import { ArraySlicePipeComponent } from './array.slicepipe.component';
@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, ArraySlicePipeComponent, StringSlicePipeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
