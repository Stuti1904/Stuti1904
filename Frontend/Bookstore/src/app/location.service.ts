import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from '../../node_modules/rxjs/dist/types/index';
@Injectable({
  providedIn: 'root'
})
export class LocationService {
  hostrul="https://localhost:44337/api"
  constructor(private http:HttpClient) { }

  getLocation():Observable<Array<any>>{
    var call= this.http.get<Array<any>>(`${this.hostrul}/location`);
    return call;
  }
}
