import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ViewDetailComponent } from './home/view-detail.component';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateBookComponent } from './manage-book/update-book.component';
import { ManageBookComponent } from './manage-book/manage-book.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    ViewDetailComponent,
    AddBookComponent,
    ManageBookComponent,
    UpdateBookComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
