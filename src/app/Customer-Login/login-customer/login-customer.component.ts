import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerLogin } from 'src/app/Models/login-customer.model';
import { CustomersService } from 'src/app/Services/customers.service';

@Component({
  selector: 'app-login-customer',
  templateUrl: './login-customer.component.html',
  styleUrls: ['./login-customer.component.css']
})
export class LoginCustomerComponent implements OnInit {

  exform3!: FormGroup;

  constructor(private customerservice:CustomersService,private router:Router,private toastr:ToastrService) { }

  SigninCustomer:CustomerLogin={
    customerEmail:'',
    password:'',
    confirmPassword:''
  }

  ngOnInit(): void {
    this.exform3=new FormGroup({
      'customerEmail':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')])
    })
  }
  custLogin(){
    this.customerservice.loginCustomer(this.SigninCustomer).subscribe({
      next:(customerlogin)=>{
        localStorage.setItem('email',this.SigninCustomer.customerEmail);
        localStorage.setItem('password',this.SigninCustomer.password);
        //console.log(customerlogin)
        this.toastr.success("Welcome You are successfully logged in.")
        this.router.navigate(['productslist'])    
      },
      error:(response)=>{
        //alert("Invalid Credentials: Please enter a Valid Details")
        this.toastr.error("You are something wrong.Please enter a valid Credentials")
      }
    })
  }

}
