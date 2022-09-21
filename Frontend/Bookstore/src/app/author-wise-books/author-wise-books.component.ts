import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author-wise-books',
  templateUrl: './author-wise-books.component.html',
  styleUrls: ['./author-wise-books.component.css']
})
export class AuthorWiseBooksComponent implements OnInit {
selectedAuthorID:any;
Books:Array<any>=[];
Authors:Array<any>=[];
  constructor(private activatedRoute: ActivatedRoute, private bookservice:BookService, private authorservice:AuthorService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:any)=>{
      this.selectedAuthorID = params['id'];
      console.log(this.selectedAuthorID);
      this.bookservice.getBookByAuthor(this.selectedAuthorID).subscribe((a:any)=>{
        this.Books=a;
        this.authorservice.getAuthors().subscribe((authors:any)=>{
          this.Authors=authors;
        })
      })
    })
  }

}
