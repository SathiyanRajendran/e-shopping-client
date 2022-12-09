import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddProducts } from '../Models/add-products.model';
import { Products } from '../Models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiBaseUrl=environment.apiBaseUrl;

  constructor(private httpClient:HttpClient) { }
  getAllProducts():Observable<Products[]>{
    return this.httpClient.get<Products[]>(this.apiBaseUrl+'/api/products')
  }
  addProducts(addingProducts:AddProducts){
    return this.httpClient.post<Products>(this.apiBaseUrl+'/api/products',addingProducts)
  }
  getProductById(id:number|string){
    return this.httpClient.get<Products>(this.apiBaseUrl+'/api/products/' +id)
  }
  updateProducts(productId:number|string,updateProductRequest:Products):Observable<Products>{
    return this.httpClient.put<Products>(this.apiBaseUrl+'/api/products/' +productId,updateProductRequest)
}
deleteProducts(id:number|string){
   return this.httpClient.delete<Products>(this.apiBaseUrl+'/api/products/'+id)
}
}
