import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersViewComponent } from '@modules/order/orders-view/orders-view.component';

const routes: Routes = [
  
  {
    path: '',
    loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule)
  },
 /*
  {
    path: '',
    component: HomePageComponent,
  },
  */
  {
    path: 'products',
    loadChildren: () => import('@modules/product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('@modules/order/order.module').then(m => m.OrderModule)
  },
 
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}