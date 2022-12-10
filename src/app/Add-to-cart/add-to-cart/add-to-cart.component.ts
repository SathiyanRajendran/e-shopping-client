import { Component, OnInit } from '@angular/core';
import { Carts } from 'src/app/Models/cart.model';
import { CustomersService } from 'src/app/Services/customers.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  cart:Carts={
    cartId:0,
    productId:0,
    productQuantity:0,
    customerId:0
  }

  constructor(private custservice:CustomersService ) { }

  ngOnInit(): void {
  }
  addCart(){
    this.custservice.cartAdd(this.cart).subscribe({
      next:(carts)=>{
        console.log(carts)
      }
    })

  }

}
