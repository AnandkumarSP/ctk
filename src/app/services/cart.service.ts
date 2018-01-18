import { Injectable } from '@angular/core';


@Injectable()
export class CartService {
  public products;

  constructor() {
    this.products = {};
  }

  public addProduct(product) {
    if (this.products[product.id]) {
      this.products[product.id].count += 1;
    } else {
      this.products[product.id] = {
        product: product,
        count: 1
      };
    }
  }

  public removeProduct(productId) {
    delete this.products[productId];
  }

  public getProductsList() {
    return Object.values(this.products);
  }

  public getTotalPrice() {
    return Object.values(this.products).map((p) => p.product.price * p.count).reduce((a, b) => a + b);
  }

  public getDiscountPrice() {
    return this.getTotalPrice() * 0.95;
  }

  public getDiscount() {
    return this.getTotalPrice() * 0.05;
  }
}
