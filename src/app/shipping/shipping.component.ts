import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CartService, ShippingOption } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss'],
})
export class ShippingComponent implements OnInit {
  shippingOptions!: Observable<ShippingOption[]>;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.shippingOptions = this.cartService.getShippingOptions();
  }
}
