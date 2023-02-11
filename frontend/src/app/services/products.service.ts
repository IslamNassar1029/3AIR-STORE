import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = 'http://localhost:4001/product';
  constructor(private client:HttpClient) {}


getAllProducts(){

  return this.client.get(this.baseUrl)
}
getProductById(productId:number){

  return this.client.get(`${this.baseUrl}/${productId}`)
}
addProduct(product:any){

  return this.client.post(this.baseUrl,product)
}
editProduct(productId:number,product:any){

  return this.client.put(`${this.baseUrl}/${productId}`,product)
}
deleteProduct(productId:number){

  return this.client.delete(`${this.baseUrl}/${productId}`)
}





}