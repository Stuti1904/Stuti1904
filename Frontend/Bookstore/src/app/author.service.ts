import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from '../../node_modules/rxjs/dist/types/index';
@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  hostrul="https://localhost:44337/api"
  constructor(private http:HttpClient) { }

  getAuthors():Observable<Array<any>>{
    var call=this.http.get<Array<any>>(`${this.hostrul}/author`);
    return call;
  }

  postAuthor(author:any){
    var call=this.http.post(`${this.hostrul}/author`, author);
    return call;
  }
  deletAuthor(id:number){
    var call= this.http.delete(`${this.hostrul}/author/${id}`);
    return call;
  }
  updateAuthor(id:number, author:any){
var call=this.http.put(`${this.hostrul}/author/${id}`, author);
return call;
  }
}
