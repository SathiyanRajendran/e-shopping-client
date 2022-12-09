import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { addTradersRequest } from '../Models/add-traders.model';
import { Traders } from '../Models/traders.model';

@Injectable({
  providedIn: 'root'
})
export class TradersService {

  constructor(private httpClient:HttpClient) { }
  TraderapiBaseUrl=environment.apiBaseUrl;

  getAllTraders():Observable<Traders[]>{
    return this.httpClient.get<Traders[]>(this.TraderapiBaseUrl+'/api/traders')
  }
  addTraders(addTradersreq:addTradersRequest){
    return this.httpClient.post(this.TraderapiBaseUrl+'/api/traders',addTradersreq)
  }

}
