import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { addCustomerRequest } from 'src/app/Models/add-customers.model';
import { CustomersService } from 'src/app/Services/customers.service';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css']
})
export class AddCustomersComponent implements OnInit {

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
  }

addCustomers(){
    this.customerservice.addCustomers(this.addCustomerPost).subscribe({
      next:(customers)=>{
        this.router.navigate(['products']);
        //console.log(customers)
        
      }
    })
}

}
