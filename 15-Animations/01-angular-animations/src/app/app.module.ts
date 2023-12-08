import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BookComponent } from './book.component';
import { AddBookComponent } from './addbook.component';
import { BookDetailComponent } from './book-detail.component';
import { BookService } from './book.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    BookComponent,
    AddBookComponent,
    BookDetailComponent
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
