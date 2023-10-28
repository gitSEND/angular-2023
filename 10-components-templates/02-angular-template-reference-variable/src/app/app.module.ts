import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataComponent } from './data.component';
import { FormComponent } from './form.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, DataComponent, FormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
