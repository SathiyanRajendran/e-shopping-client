import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/Models/products.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  product:Products[]=[]
  constructor(private prodservice:ProductService) { }

  ngOnInit(): void {
    this.prodservice.getAllProducts()
    .subscribe({
      next:(products)=>{
           this.product=products;
      },
      error:(response)=>{
        
      }
    })

  }

}
