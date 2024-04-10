import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderReviewViewComponent } from './order-review-view/order-review-view.component';
import { OrderConfirmationViewComponent } from './order-confirmation-view/order-confirmation-view.component';
import { OrderShipToViewComponent } from './order-ship-to-view/order-ship-to-view.component';
import { OrderBillToViewComponent } from './order-bill-to-view/order-bill-to-view.component';


@NgModule({
  declarations: [
    OrderReviewViewComponent,
    OrderConfirmationViewComponent,
    OrderShipToViewComponent,
    OrderBillToViewComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
