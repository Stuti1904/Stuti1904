import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';
import { BooksInLanguageService } from '../books-in-language.service';
import { LanguageService } from '../language.service';
import { AuthorService } from '../author.service';
import { FormBuilder, Validators } from '@angular/forms';

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
  NewLanguageForBook=this.fb.group({
    book:[, Validators.required],
     language:[ ,Validators.required],
     quantity:[, Validators.required]
  });
tempLanguage:any;

  constructor(private router:ActivatedRoute, private service:BookService, 
    private booksinlan: BooksInLanguageService, private lanaguageservice:LanguageService,
    private authorservice:AuthorService, private fb:FormBuilder, private route:Router) { }

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
  addNewLanguage(){
    this.NewLanguageForBook.controls['book'].setValue(this.selectedBookId);
    console.log(this.NewLanguageForBook.value);
    this.tempLanguage=this.NewLanguageForBook.value;
    this.tempLanguage.book=parseInt(this.tempLanguage.book);
    this.tempLanguage.language=parseInt(this.tempLanguage.language);
    this.tempLanguage.quantity=parseInt(this.tempLanguage.quantity);
this.booksinlan.postNewLanguages(this.tempLanguage).subscribe((a:any)=>{
  this.NewLanguageForBook.reset();
  this.ngOnInit();
});
  }
}
