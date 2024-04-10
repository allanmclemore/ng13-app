import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeModule } from '@modules/home/home.module';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@modules/material/material.module';
import { CoreModule } from '@app/core.module';
import { ProductModule } from '@modules/product/product.module';
import { CartModule } from '@modules/cart/cart.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    CartModule,
    CoreModule,
    HomeModule,
    ProductModule,
    MaterialModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
