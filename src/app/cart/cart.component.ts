import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    const { name, address } = this.checkoutForm.value;

    if (!this.items.length || !name || !address) return;

    // Process checkout data here
    this.items = this.cartService.clearCart();
    window.alert(
      `Thanks ${name}! Your order is being processed and will be delivered to ${address}.`
    );
    this.checkoutForm.reset();
  }
}
