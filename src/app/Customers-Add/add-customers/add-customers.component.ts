import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { addCustomerRequest } from 'src/app/Models/add-customers.model';
import { CustomersService } from 'src/app/Services/customers.service';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css']
})
export class AddCustomersComponent implements OnInit {
 exform2!: FormGroup;
  constructor(private customerservice:CustomersService,private router:Router) { }
  addCustomerPost:addCustomerRequest={
    customerName:'',
    customerEmail:'',
    Password:'',
    confirmPassword:'',
    mobileNumber:'',
    customerCity:'',
    pincode:'',
    securityQuestion:'',
    answer:'',
    status:true,
    securityCode:'',
    creationDate:new Date()
    
  }

  ngOnInit(): void {
    this.exform2=new FormGroup({
      'customerName':new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z ]+$')]),
      'customerEmail':new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
      'confirmPassword':new FormControl(null,[Validators.required,
      Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
      'mobileNumber':new FormControl(
        null,[
          Validators.required,
          Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$'),
          Validators.minLength(10)
        ]
      ),
      customerCity:new FormControl(null,Validators.required),
      'pincode':new FormControl(null,Validators.required),
      
    });
  }

addCustomers(){
    this.customerservice.addCustomers(this.addCustomerPost).subscribe({
      next:(customers)=>{
        this.router.navigate(['login']);
        //console.log(customers)
        
      }
    })
}

}
