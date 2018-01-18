import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './productItem.component.html',
  styleUrls: ['./productItem.component.css'],
})
export class ProductItemComponent {
  @Input() product;
  @Input() addToCart;
}
