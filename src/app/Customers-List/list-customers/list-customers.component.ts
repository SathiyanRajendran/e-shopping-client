import { Component, OnInit } from '@angular/core';
import { Customers } from 'src/app/Models/customers.model';
import { CustomersService } from 'src/app/Services/customers.service';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {

  customer:Customers[]=[];
  constructor(private customerservice:CustomersService) { }

  ngOnInit(): void {
    this.customerservice.getAllCustomers().subscribe({
      next:(customers)=>{
        this.customer=customers;
       // console.log(customers);
      }
    })
  }

}
