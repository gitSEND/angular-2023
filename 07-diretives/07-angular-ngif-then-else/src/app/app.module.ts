import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgIfComponent } from './ngif.component';
import { NgIfElseComponent } from './ngif-else.component';
import { NgIfThenElseComponent } from './ngif-then-else.component';
import { NgIfAsyncComponent } from './ngif-async.component';
import { MessageService } from './message.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    NgIfComponent,
    NgIfAsyncComponent,
    NgIfElseComponent,
    NgIfThenElseComponent
  ],
  providers: [
    MessageService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
