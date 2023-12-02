import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AfterViewInitDemoComponent } from './afterviewinit-demo.component';
import { LifecycleHookComponent } from './lifecycle-hook.component';
import { MessageComponent } from './message.component';
import { MessageDirective } from './message.directive';

@NgModule({
  imports: [     
      BrowserModule,
  ],
  declarations: [
      AppComponent,
      AfterViewInitDemoComponent,
      LifecycleHookComponent,
      MessageComponent,
      MessageDirective
  ],
  providers: [
  ],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
