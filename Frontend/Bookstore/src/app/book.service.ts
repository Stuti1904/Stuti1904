import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs/dist/types/index';
@Injectable({
  providedIn: 'root'
})
export class BookService {
hostrul="https://localhost:44337/api"
  constructor(private http:HttpClient) { }


  getBooks():Observable<Array<any>>{
    var call= this.http.get<Array<any>>(`${this.hostrul}/book`);
    return call;
  }

  getBookByName(name:string): Observable<any>{
    var call=this.http.get<any>(`${this.hostrul}/book/${name}`);
    return call;
  }

  getBookByAuthor(id:number): Observable<Array<any>>{
    var call=this.http.get<any>(`${this.hostrul}/book/authors/${id}`);
    return call;
  }

  postbook(book:any){
    var call=this.http.post(`${this.hostrul}/book`, book);
    return call;
  }
}
