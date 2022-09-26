import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginAndSignupService {

   hostrul="https://localhost:44337/api";
  constructor(private http:HttpClient) { }

  login(user:any){
    var call=this.http.post(`${this.hostrul}/login`, user);
    return call;
  }
}
