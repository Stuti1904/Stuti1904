import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from '../../node_modules/rxjs/dist/types/index';
@Injectable({
  providedIn: 'root'
})
export class BooksInLanguageService {
  hostrul="https://localhost:44337/api"
  constructor(private http:HttpClient) { }

  getBooksInLanguage():Observable<Array<any>>{
    var call=this.http.get<Array<any>>(`${this.hostrul}/booksinlanguage`);
    return call;
  }

  postNewLanguages(languages:any){
    var call= this.http.post(`${this.hostrul}/booksinlanguage`, languages);
    return call;
  }

  updateLanguage(id:number){
    var call= this.http.put(`${this.hostrul}/booksinlanguage/${id}`, '');
    return call;
  }
}
