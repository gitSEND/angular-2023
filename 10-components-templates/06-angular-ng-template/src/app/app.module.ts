import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgTemplateNgForComponent } from './ng-template-ngfor.component';
import { NgTemplateNgIfComponent } from './ng-template-ngif.component';
import { NgTemplateNgSwitchComponent } from './ng-template-ngswitch.component';
import { CpIfDemoComponent } from './cp-if-demo.component';
import { CpMsgComponent } from './cp-msg.component';
import { MessageDirective } from './message.directive';
import { CpIfDirective } from './cp-if.directive';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    NgTemplateNgForComponent,
    NgTemplateNgIfComponent,
    NgTemplateNgSwitchComponent,
    CpIfDemoComponent,
    CpMsgComponent,
    MessageDirective,
    CpIfDirective
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
