import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) {

  }
  public logIn(email:string, password:string){
    let body :any ={
      "email" :email,
    }
    this.httpClient.post(`${environment.apiUrl}/api/auth/login`, body);
  }
  public register(userName:string, email:string, password:string, reTypePassword:string){
    let body :any ={
      "email" :email,
      "userName" : userName,
      "password" : password,
      "reTypePassword" : reTypePassword
    }
    this.httpClient.post(`${environment.apiUrl}/api/auth/register`, body);
  }

}
