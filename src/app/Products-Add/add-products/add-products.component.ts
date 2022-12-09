import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddProducts } from 'src/app/Models/add-products.model';
import { Products } from 'src/app/Models/products.model';
import { ProductsListComponent } from 'src/app/Products/products-list/products-list.component';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor(private prodservice:ProductService,
    private router:Router) { }
  addingProducts:AddProducts={
    productName:'',
    unitPrice:0,
    productImage:'',
    productQuantity:0,
    categoryId:0,
    traderId:0

  }
  ngOnInit(): void {
  }
  addProducts(){
    this.prodservice.addProducts(this.addingProducts).subscribe({
      next:(products)=>{
        this.router.navigate(['products'])
      }
    })
  }


}
