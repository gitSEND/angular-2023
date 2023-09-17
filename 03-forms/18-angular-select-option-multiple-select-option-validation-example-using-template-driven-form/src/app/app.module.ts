import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { UserComponent }  from './user-component/user.component';
import { UserService }  from './services/user-service';

@NgModule({
  imports: [     
        BrowserModule,
		FormsModule
  ],
  declarations: [
        AppComponent,
		UserComponent
  ],
  providers: [
        UserService
  ],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { }
