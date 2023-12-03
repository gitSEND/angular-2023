import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { AppComponent } from './app.component';
import { ItemService } from './services/item.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    StoreComponent,
    CartComponent
  ],
  providers: [
    ItemService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
