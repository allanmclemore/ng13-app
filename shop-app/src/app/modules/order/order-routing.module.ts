import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersViewComponent } from './orders-view/orders-view.component';
import { OrderReviewViewComponent } from './order-review-view/order-review-view.component';
import { OrderConfirmationViewComponent } from './order-confirmation-view/order-confirmation-view.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersViewComponent,
  },
  {
    path: 'review-order',
    component: OrderReviewViewComponent,
  },
  {
    path: 'order-confirmation',
    component: OrderConfirmationViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
