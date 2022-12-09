import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './Products/products-list/products-list.component';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { AddProductsComponent } from './Products-Add/add-products/add-products.component'
import { FormsModule } from '@angular/forms';
import { EditProductsComponent } from './Products-Edit/edit-products/edit-products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    AddProductsComponent,
    EditProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
