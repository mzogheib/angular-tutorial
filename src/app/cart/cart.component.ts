import { Component } from '@angular/core';

import { CartForm } from '../cart-form/cart-form.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  items = this.cartService.getItems();

  constructor(private cartService: CartService) {}

  onSubmit(values: CartForm): void {
    const { name, address } = values;

    if (!name || !address) return;

    window.alert(
      `Thanks ${name}! Your order is being processed and will be delivered to ${address}.`
    );

    this.items = this.cartService.clearCart();
  }
}
