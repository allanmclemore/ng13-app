import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartViewComponent } from './cart-view/cart-view.component';
import { CartIconComponent } from './cart-icon/cart-icon.component';
import { MaterialModule } from '@modules/material/material.module';


@NgModule({
  declarations: [
    CartViewComponent,
    CartIconComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MaterialModule
  ],
  exports: [
    CartIconComponent
  ]

})
export class CartModule { }
