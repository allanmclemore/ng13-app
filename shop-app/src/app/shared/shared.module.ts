import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsViewComponent } from '../modules/product/products-view/products-view.component';
import { MaterialModule } from '../modules/material/material.module';
import { HeaderComponent } from './ui/header/header.component';
import { SidenavComponent } from './ui/sidenav/sidenav.component';
import { Router, RouterModule } from '@angular/router';
import { TopSideNavLayoutComponent } from './layouts/top-side-nav-layout/top-side-nav-layout.component';
import { OrdersViewComponent } from '../modules/order/orders-view/orders-view.component';
import { NavbarMainComponent } from './ui/navbar-main/navbar-main.component';
import { NavMainComponent } from './ui/nav-main/nav-main.component';
import { ImgFallbackModule } from 'ngx-img-fallback';

@NgModule({
  declarations: [
    HeaderComponent,
    ProductsViewComponent,
    SidenavComponent,
    TopSideNavLayoutComponent,
    OrdersViewComponent,
    NavbarMainComponent,
    NavMainComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ImgFallbackModule
  ],
  exports: [
    HeaderComponent,
    ProductsViewComponent,
    SidenavComponent,
    TopSideNavLayoutComponent,
    OrdersViewComponent,
  ]
})
export class SharedModule { }
