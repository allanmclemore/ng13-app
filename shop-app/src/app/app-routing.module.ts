import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '@modules/home/home-page/home-page.component';
import { OrdersViewComponent } from '@shared/views/orders-view/orders-view.component';
import { ProductsViewComponent } from '@shared/views/products-view/products-view.component';

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
    component: ProductsViewComponent,
  },
  {
    path: 'orders',
    component: OrdersViewComponent,
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