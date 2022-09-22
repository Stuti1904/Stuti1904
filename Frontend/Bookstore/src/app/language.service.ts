import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from '../../node_modules/rxjs/dist/types/index';
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  hostrul="https://localhost:44337/api"
  constructor(private http:HttpClient) { }

  getLanguage():Observable<Array<any>>{
    var call=this.http.get<Array<any>>(`${this.hostrul}/language`);
    return call;
  }

  postlanguage(language:any){
    var call=this.http.post(`${this.hostrul}/language`, language);
    return call;
  }
}
