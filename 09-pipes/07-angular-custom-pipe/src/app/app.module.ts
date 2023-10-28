import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CustomPipeComponent } from './custompipe.component';
import { WelcomePipe } from './welcome.pipe';
import { StrFormatPipe } from './strformat.pipe';
import { MyUppercaseOnePipe } from './myuppercaseone.pipe';
import { MyUppercaseTwoPipe } from './myuppercasetwo.pipe';
import { DivisionPipe } from './division.pipe';
import { RepeatPipe } from './repeat.pipe';
import { MyJSONPipe } from './myjson.pipe';
import { CompanyOnePipe } from './companyone.pipe';
import { CompanyTwoPipe } from './companytwo.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    WelcomePipe,
    StrFormatPipe,
    MyUppercaseOnePipe,
    MyUppercaseTwoPipe,
    DivisionPipe,
    RepeatPipe,
    MyJSONPipe,
    CompanyOnePipe,
    CompanyTwoPipe,
    CustomPipeComponent],
  bootstrap: [CustomPipeComponent]
})
export class AppModule { }
