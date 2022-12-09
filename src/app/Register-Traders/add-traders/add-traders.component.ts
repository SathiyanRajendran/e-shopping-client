import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { addTradersRequest } from 'src/app/Models/add-traders.model';
import { TradersService } from 'src/app/Services/traders.service';

@Component({
  selector: 'app-add-traders',
  templateUrl: './add-traders.component.html',
  styleUrls: ['./add-traders.component.css']
})
export class AddTradersComponent implements OnInit {
  addTraders:addTradersRequest={
    traderName:'',
    traderEmail:'',
    password:'',
    confirmPassword:'',
    traderPhoneNumber:''
  }

  constructor(private tradeservice:TradersService,
    private router:Router) { }

  ngOnInit(): void {
  }

  postTraders(){
    this.tradeservice.addTraders(this.addTraders).subscribe({
      next:(traders)=>{
        this.router.navigate(['products'])
      }
    })
  }
    

}
