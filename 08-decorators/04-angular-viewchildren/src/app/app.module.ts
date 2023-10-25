import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WriterComponent } from './writer.component';
import { VCOneDemoComponent } from './vc-demo1.component';
import { VCTwoDemoComponent } from './vc-demo2.component';
import { VCThreeDemoComponent } from './vc-demo3.component';
import { MessageDirective } from './message.directive';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    WriterComponent,
    VCOneDemoComponent,
    VCTwoDemoComponent,
    VCThreeDemoComponent,
    MessageDirective
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
