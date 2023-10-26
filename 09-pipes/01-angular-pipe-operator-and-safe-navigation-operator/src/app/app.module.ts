import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PipeOperatorComponent } from './pipe.operator.component';
import { SafeNavigationOperatorComponent } from './safe.navigation.operator.component';
@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, PipeOperatorComponent, SafeNavigationOperatorComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
