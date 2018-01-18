import { Injectable } from '@angular/core';


@Injectable()
export class ProductsService {
  public products;

  constructor() {
    this.products = [{
      id: 1,
      name: 'Samsung Galaxy Note 8',
      price: 67900
    }, {
      id: 2,
      name: 'Samsung S7 Edge',
      price: 49999
    }, {
      id: 3,
      name: 'Samsung Guru Music',
      price: 1625
    }, {
      id: 4,
      name: 'iVooMi',
      price: 6000
    }, {
      id: 5,
      name: 'Asus Zenfone',
      price: 16000
    }, {
      id: 6,
      name: 'Nokia 230 Dual SIM',
      price: 1500
    }];
  }
}
