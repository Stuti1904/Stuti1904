import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { BooksInLanguageService } from '../books-in-language.service';
import { LanguageService } from '../language.service';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  selectedBookId: any;
  Books:Array<any>=[];
  BooksInLanguage:Array<any>=[];
  Languages:Array<any>=[];
  Authors:Array<any>=[];
  constructor(private router:ActivatedRoute, private service:BookService, 
    private booksinlan: BooksInLanguageService, private lanaguageservice:LanguageService,
    private authorservice:AuthorService) { }

  ngOnInit(): void {
    this.router.params.subscribe((params:any )=> {
      this.selectedBookId=params["id"];
      console.log(this.selectedBookId);
      this.service.getBooks().subscribe((b:any)=>{
        this.Books=b;
        this.booksinlan.getBooksInLanguage().subscribe((a:any)=>{
          this.BooksInLanguage=a;
          this.lanaguageservice.getLanguage().subscribe((lan:any)=>{
            this.Languages=lan;
            this.authorservice.getAuthors().subscribe((aut:any)=>{
              this.Authors=aut;
            })
          })
        })
      })
    })
  }

}
