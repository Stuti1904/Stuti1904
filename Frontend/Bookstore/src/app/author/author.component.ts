import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
Authors:Array<any>=[];
  constructor(private service:AuthorService) { }

  ngOnInit(): void {
    this.service.getAuthors().subscribe((auth:any)=>{
      this.Authors=auth;
    })
  }

}
