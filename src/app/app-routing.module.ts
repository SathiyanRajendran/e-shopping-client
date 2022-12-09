import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './Products-Add/add-products/add-products.component';
import { EditProductsComponent } from './Products-Edit/edit-products/edit-products.component';
import { ProductsListComponent } from './Products/products-list/products-list.component';

const routes: Routes = [
  {
    path:'products',
    component:ProductsListComponent
  },
  {
    path:'products/add',
    component:AddProductsComponent
  },
  {
    path:'products/edit/:productId',
    component:EditProductsComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
