import { Component, Injectable, Injector, OnInit } from '@angular/core';
import { Product } from '@data/interfaces/product';
import { ProductService} from '@shared/services/product/product.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.scss']
})
export class ProductsViewComponent implements OnInit {

  productService: ProductService;
  products: Observable<Product[]>;

  constructor(private injector: Injector) {
    this.productService = this.injector.get(ProductService);
    this.products = this.productService.getProducts();
   }

  ngOnInit(): void {
   
  }
}
