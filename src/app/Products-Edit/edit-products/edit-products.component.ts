import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Products } from 'src/app/Models/products.model';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {

  productDetails:Products={
    productId:0,
    productName:'',
    productQuantity:0,
    unitPrice:0,
    productImage:'',
    categoryId:0,
    traderId:0
  }
  constructor(private route:ActivatedRoute,private prodservice:ProductService,
    private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id=params.get('productId');
        if(id){
          //call api
          this.prodservice.getProductById(id)
          .subscribe({
            next:(response)=>{
              this.toastr.info("Here is the product you selected")
              this.productDetails=response;
            }
          })
        }
      }
    })
  }
  updateProduct(){
    this.prodservice.updateProducts(this.productDetails.productId,this.productDetails)
    .subscribe({
      next:(response)=>{
        this.toastr.success("Products Edited Successfully")
        this.router.navigate(['products']);
      }
    })
  }
  deleteProduct(productId:number|string){
    this.prodservice.deleteProducts(this.productDetails.productId)
    .subscribe({
      next:(response)=>{
        this.toastr.info("Product Deleted Successfully")
        this.router.navigate(['products'])
      }
    })
    
  }

}
