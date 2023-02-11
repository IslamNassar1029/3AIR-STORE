import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = 'http://localhost:4001/user';
  constructor(private client:HttpClient) {}


getAllUsers(){

  return this.client.get(this.baseUrl)
}
getUserById(userId:number){

  return this.client.get(`${this.baseUrl}/${userId}`)
}
addUser(user:any){

  return this.client.post(`${this.baseUrl}/register`,user)
}
login(user:any){

  return this.client.post(`${this.baseUrl}/login`,user)
}
editUser(userId:number,user:any){

  return this.client.put(`${this.baseUrl}/${userId}`,user)
}
deleteUser(userId:number){

  return this.client.delete(`${this.baseUrl}/${userId}`)
}





}
 