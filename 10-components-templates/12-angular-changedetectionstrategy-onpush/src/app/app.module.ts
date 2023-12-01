import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentComponent } from './student.component';
import { PersonComponent } from './person.component';
import { PersonService } from './person.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    PersonComponent,
    StudentComponent
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
