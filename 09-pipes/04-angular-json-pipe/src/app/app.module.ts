import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JsonPipeComponent } from './jsonpipe.component';
@NgModule({
  imports: [BrowserModule],
  declarations: [JsonPipeComponent],
  bootstrap: [JsonPipeComponent]
})
export class AppModule { }
