import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from './products';

interface ShippingOption {
  type: string;
  price: number;
}

const SHIPPING_OPTIONS_URL = '/assets/shipping.json';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {}

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<ShippingOption[]>(SHIPPING_OPTIONS_URL);
  }
}
