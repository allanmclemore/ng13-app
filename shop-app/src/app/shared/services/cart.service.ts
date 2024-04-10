import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { CartItem } from '@data/models/cart-item';
import { Product } from '@data/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSource = new BehaviorSubject<CartItem[]>([]);
  
  public cartItems$: Observable<CartItem[]> = this.cartItemsSource.asObservable();
  public cartItemCount$: Observable<number>;

  constructor() {
    console.log("CartService constructor called");
    this.cartItemCount$ = this.cartItems$.pipe(
      // Just count the number of unique items.
      map(items => items.length)
    );
  }

  

  addCartItem(item: CartItem) {
    const currentItems = this.cartItemsSource.value;
    const existingItem = currentItems
    .find(i => i.ProductId === item.ProductId);

    if (existingItem) {
      existingItem.Quantity += item.Quantity;
    } else {
      currentItems.push(item);
    }

    this.cartItemsSource.next(currentItems);
    console.log('Cart Items Updated:', currentItems);
  }

  removeCartItem(productId: number) {
    const updatedItems = this.cartItemsSource.value
    .filter(item => item.ProductId !== productId);

    this.cartItemsSource.next(updatedItems);
  }

  updateQuantity(productId: number, quantity: number) {
    const currentItems = this.cartItemsSource.value;
    const item = currentItems
    .find(item => item.ProductId === productId);

    if (item) {
      item.Quantity = quantity;
      if (item.Quantity <= 0) {
        this.removeCartItem(productId);
      } else {
        this.cartItemsSource.next(currentItems);
      }
    }
  }
}
