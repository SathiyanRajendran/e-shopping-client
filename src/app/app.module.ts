import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './Products/products-list/products-list.component';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { AddProductsComponent } from './Products-Add/add-products/add-products.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProductsComponent } from './Products-Edit/edit-products/edit-products.component';
import { ListTradersComponent } from './Traders-List/list-traders/list-traders.component';
import { AddTradersComponent } from './Register-Traders/add-traders/add-traders.component';
import { ListCustomersComponent } from './Customers-List/list-customers/list-customers.component';
import { AddCustomersComponent } from './Customers-Add/add-customers/add-customers.component';
import { LoginCustomerComponent } from './Customer-Login/login-customer/login-customer.component';
import { CustViewProductComponent } from './Customer-view-products/cust-view-product/cust-view-product.component';
import { AddToCartComponent } from './Add-to-cart/add-to-cart/add-to-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    AddProductsComponent,
    EditProductsComponent,
    ListTradersComponent,
    AddTradersComponent,
    ListCustomersComponent,
    AddCustomersComponent,
    LoginCustomerComponent,
    CustViewProductComponent,
    AddToCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
