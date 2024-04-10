import { ChangeDetectionStrategy, Component, Injector, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '@data/interfaces/product';
import { ProductService } from '@shared/services/product/product.service';
import { CartService } from '@shared/services/cart.service'; // Update the import path as necessary
import { CartItem } from '@data/models/cart-item';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsViewComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(
    private productService: ProductService,
    private cartService: CartService // Add CartService
  ) {
    this.products = this.productService.getProducts();
  }

  ngOnInit(): void {}

  addToCart(product: Product): void {
    // The following is a simple example; your actual implementation might require additional logic
    const cartItem = new CartItem(product, 1); // Adjust to match the CartItem interface
    this.cartService.addCartItem(cartItem);
  }
}
