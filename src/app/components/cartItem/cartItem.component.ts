import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cartItem.component.html',
  styleUrls: ['./cartItem.component.css'],
})
export class CartItemComponent {
  @Input() product;
  @Input() removeProduct;

  public productCountUpdated() {
    if (this.product.count <= 0) {
      this.removeProduct(this.product.product);
    }
  }
}
