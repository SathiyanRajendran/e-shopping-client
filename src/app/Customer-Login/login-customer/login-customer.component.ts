import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerLogin } from 'src/app/Models/login-customer.model';
import { CustomersService } from 'src/app/Services/customers.service';

@Component({
  selector: 'app-login-customer',
  templateUrl: './login-customer.component.html',
  styleUrls: ['./login-customer.component.css']
})
export class LoginCustomerComponent implements OnInit {


  constructor(private customerservice:CustomersService,private router:Router) { }

  SigninCustomer:CustomerLogin={
    customerEmail:'',
    password:'',
    confirmPassword:''
  }

  ngOnInit(): void {
  }
  custLogin(){
    this.customerservice.loginCustomer(this.SigninCustomer).subscribe({
      next:(customerlogin)=>{
        //console.log(customerlogin)
        this.router.navigate(['productslist'])
      }
    })
  }

}
