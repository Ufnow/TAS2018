import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';

import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private baseUrl:string='http://localhost:8080/api/products/';
private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

constructor(private _http:HttpClient) { }

getProducts (): Observable<Product[]> {
  return this._http.get(this.baseUrl).pipe(map(data => data as Product[]));
    
}
getProduct(id: number): Observable<Product> {
  return this._http.get<Product>(`${this.baseUrl}/${id}`);
}


deleteProduct(id: number): Observable<Product> {
  return this._http.delete<Product>(`${this.baseUrl}/${id}`, {headers: this.httpHeaders});
}
updateProduct(product: Product): Observable<Product> {
  return this._http.put<Product>(this.baseUrl, product, {headers: this.httpHeaders});
}
createProduct(product: Product): Observable<Product[]> {
  
  return this._http.post<Product[]>(this.baseUrl, product, {headers: this.httpHeaders});
  
}

}