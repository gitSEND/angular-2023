import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MsgComponent } from './msg.component';
import { AliasComponent } from './alias.component';
import { TextBoxComponent } from './textbox.component';
import { TextSizeComponent } from './textsize.component';
import { SelectBoxComponent } from './selectbox.component';
import { CaseComponent } from './case.component';
import { UpperCaseComponent } from './uppercase.component';
@NgModule({
  imports: [BrowserModule,
    FormsModule],
  declarations: [AppComponent,
    MsgComponent,
    AliasComponent,
    TextBoxComponent,
    TextSizeComponent,
    SelectBoxComponent,
    CaseComponent,
    UpperCaseComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
