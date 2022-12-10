import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { addTradersRequest } from 'src/app/Models/add-traders.model';
import { TradersService } from 'src/app/Services/traders.service';

@Component({
  selector: 'app-add-traders',
  templateUrl: './add-traders.component.html',
  styleUrls: ['./add-traders.component.css']
})
export class AddTradersComponent implements OnInit {
  exform!: FormGroup;
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
    this.exform=new FormGroup({
      'traderName':new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z ]+$')]),
      'traderEmail':new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
      'confirmPassword':new FormControl(null,[Validators.required,
      Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]),
      'traderPhoneNumber':new FormControl(
        null,[
          Validators.required,
          Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$'),
          Validators.minLength(10)
        ]
      )
    });
  }

  postTraders(){
    this.tradeservice.addTraders(this.addTraders).subscribe({
      next:(traders)=>{
        this.router.navigate(['products'])
      }
    })
  }
    

}
