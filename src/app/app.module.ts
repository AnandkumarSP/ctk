import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ProductItemComponent } from './components/productItem/productItem.component';
import { CartItemComponent } from './components/cartItem/cartItem.component';

import { ProductsService } from './services/products.service';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    CartItemComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CartService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
