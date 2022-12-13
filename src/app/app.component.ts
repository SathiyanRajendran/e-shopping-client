import { Component, OnInit } from '@angular/core';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'e-shopping-client';
  constructor(public auth:AuthService){}
  //isAuthenticated1:boolean=false;

  ngOnInit():void{
     
  }
}
