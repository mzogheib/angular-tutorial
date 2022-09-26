import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

export interface CartForm {
  name: string;
  address: string;
}

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.scss'],
})
export class CartFormComponent {
  @Output() submit = new EventEmitter<CartForm>();

  form = this.formBuilder.group<CartForm>({
    name: '',
    address: '',
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    const { name, address } = this.form.value;

    if (!name || !address) return;

    this.submit.emit({ name, address });

    this.form.reset();
  }
}
