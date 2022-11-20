import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product: Product = {
    productId: '',
    name: '',
    categoryId: 0,
    price: 0,
    stock: 0,
    active: true,
    image: '',
    category: {
      categoryId: '',
      name: '',
      description: '',
    },
  };
  @Output() addedProduct = new EventEmitter<Product>();

  constructor() {}

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }
}