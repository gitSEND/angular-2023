import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NewsComponent } from './news.component';
import { MathComponent } from './math.component';
import { AppComponent } from './app.component';
@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, NewsComponent, MathComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
