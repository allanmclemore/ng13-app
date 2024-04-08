import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsViewComponent } from './views/products-view/products-view.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
