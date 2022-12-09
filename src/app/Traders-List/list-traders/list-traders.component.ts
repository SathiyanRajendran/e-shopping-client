import { Component, OnInit } from '@angular/core';
import { Traders } from 'src/app/Models/traders.model';
import { TradersService } from 'src/app/Services/traders.service';

@Component({
  selector: 'app-list-traders',
  templateUrl: './list-traders.component.html',
  styleUrls: ['./list-traders.component.css']
})
export class ListTradersComponent implements OnInit {

  trader:Traders[]=[];

  constructor(private tradeservice:TradersService) { }

  ngOnInit(): void {
    this.tradeservice.getAllTraders().subscribe({
      next:(traderslist)=>{
 //console.log(traderslist);     
     this.trader=traderslist;
 }

    })

  }




}
