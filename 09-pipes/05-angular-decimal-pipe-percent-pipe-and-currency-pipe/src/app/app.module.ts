import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DecimalPipeComponent } from './decimalpipe.component';
import { PercentPipeComponent } from './percentpipe.component';
import { CurrencyPipeComponent } from './currencypipe.component';
@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    DecimalPipeComponent,
    PercentPipeComponent,
    CurrencyPipeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
