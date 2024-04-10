import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '@shared/services/cart.service'

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.scss']
})
export class CartIconComponent {
  public cartItemCount$: Observable<number>;


  constructor(private cartService: CartService) {
    this.cartItemCount$ = cartService.cartItemCount$
  }
}
