import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { addCustomerRequest } from '../Models/add-customers.model';
import { Customers } from '../Models/customers.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private httpClient: HttpClient) { }
  CustomerapibaseUrl = environment.apiBaseUrl;
  getAllCustomers(): Observable<Customers[]> {
    return this.httpClient.get<Customers[]>(this.CustomerapibaseUrl + '/api/customers')
  }
  addCustomers(postcustreq: addCustomerRequest): Observable<Customers> {
    return this.httpClient.post<Customers>(this.CustomerapibaseUrl + '/api/customers', postcustreq)
  }
}
