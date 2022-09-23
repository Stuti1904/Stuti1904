import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
Authors:Array<any>=[];
page=1;
count=0;
pageSize=5;
  constructor(private service:AuthorService) { }

  ngOnInit(): void {
    this.service.getAuthors().subscribe((auth:any)=>{
      this.Authors=auth;
    })
  }
deleteauthors(id:any){
  this.service.deletAuthor(id).subscribe((auth:any)=>{
    this.ngOnInit();
  })
}
handlePageChange(even:any){
  console.log(even);
  this.page=even;
}
}
