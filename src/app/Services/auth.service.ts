import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router,private httpClient:HttpClient) { }
  isAuthenticated():boolean{
    if(sessionStorage.getItem('email,password')!==null){
      return true;
    }
    return false;
  }
  // canAccess(){
  //   if(!this.isAuthenticated()){
  //     //redirect to login
  //     this.router.navigate(['login'])
  //   }
  //   else{
  //   this.router.navigate(['productslist'])
  //   }
  // }
 
}
