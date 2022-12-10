import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/Models/products.model';
import { AuthService } from 'src/app/Services/auth.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-cust-view-product',
  templateUrl: './cust-view-product.component.html',
  styleUrls: ['./cust-view-product.component.css']
})
export class CustViewProductComponent implements OnInit {

  product:Products[]=[];

  constructor(private router:Router,private prodservice:ProductService,
    private auth:AuthService) { }

  ngOnInit(): void {
    //this.auth.canAccess();
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
