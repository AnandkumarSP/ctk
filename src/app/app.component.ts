import { Component } from '@angular/core';

import { ProductsService } from './services/products.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public productsService: ProductsService, public cartService: CartService) {
    this.addToCart = this.addToCart.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
  }

  public addToCart(product) {
    this.cartService.addProduct(product);
  }

  public removeProduct(product) {
    this.cartService.removeProduct(product.id);
  }
}
