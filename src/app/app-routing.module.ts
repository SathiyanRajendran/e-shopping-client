import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCartComponent } from './Add-to-cart/add-to-cart/add-to-cart.component';
import { LoginCustomerComponent } from './Customer-Login/login-customer/login-customer.component';
import { CustViewProductComponent } from './Customer-view-products/cust-view-product/cust-view-product.component';
import { AddCustomersComponent } from './Customers-Add/add-customers/add-customers.component';
import { ListCustomersComponent } from './Customers-List/list-customers/list-customers.component';
import { AddProductsComponent } from './Products-Add/add-products/add-products.component';
import { EditProductsComponent } from './Products-Edit/edit-products/edit-products.component';
import { ProductsListComponent } from './Products/products-list/products-list.component';
import { AddTradersComponent } from './Register-Traders/add-traders/add-traders.component';
import { ListTradersComponent } from './Traders-List/list-traders/list-traders.component';

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
  },
  {
    path:'traders',
    component:ListTradersComponent
  },
  {
    path:'traders/add',
    component:AddTradersComponent
  },
  {
    path:'customers',
    component:ListCustomersComponent
  },
  {
    path:'customers/add',
    component:AddCustomersComponent
  },
  {
    path:'customers/login',
    component:LoginCustomerComponent
  },
  {
  path:'productslist',
  component:CustViewProductComponent
  },
  {
    path:'addtocart',
    component:AddToCartComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
