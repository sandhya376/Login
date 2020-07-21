import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppHttpService } from './app-http.service';
import { RegisterModel } from '../models/register.model';
import { LoginModel } from '../models/login.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl = "http://localhost:4200/api/register";
  private loginUrl = "http://localhost:4200/api/login";
  router: any;
  setLoggedIn: any;
  email: any;
  auth: any;
  getAuth: any;
  constructor(private http: HttpClient, private appHttp: AppHttpService) { }

  registerUser(user: RegisterModel) {
    return this.appHttp.post('users/register', user)
    .pipe(map((response: any) => response.json()));
  }

  authenticateUser(user: LoginModel) {
   return this.appHttp.post('users/login', user)
   .pipe(map((response: any) => response.json()));
  }


  loginUser(user) {
  return this.http.post(this.loginUrl, user)
  }

  
  loggedIn(){
    return !!localStorage.getItem('token') 
  }

  logoutUser() {
   return localStorage.removeItems('token')
   this.router.navigate(['/home'])
  }
  getToken() {
    return localStorage.getItem('token')
  }
}

