import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { LocationService } from '../location.service';
import { GenreService } from '../genre.service';
import { AuthorService } from '../author.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.css']
})
export class DisplayBookComponent implements OnInit {

  Books:Array<any>=[];
  Locations:Array<any>=[];
  Genre:Array<any>=[];
  Authors:Array<any>=[];
  tempbook:any;
  tempauthor:any;
  NewBook=this.fb.group({ 
    title:['', Validators.required],
    description:['', Validators.required],
    releasedDate:['', Validators.required],
    author:[, Validators.required],
    genre:[, Validators.required],
    price:[, Validators.required],
    images:['', Validators.required],
    isbn:['', Validators.required]
  });
  NewAuthor=this.fb.group({ 
    authorName:['', Validators.required],
    about:['', Validators.required],
    gender:['', Validators.required],
  })
  constructor(private service:BookService, private services:LocationService,
    private genreservice:GenreService, private authorservice:AuthorService, private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.service.getBooks().subscribe((a: any)=>{
      this.Books= a;
      this.services.getLocation().subscribe((l:any)=>{
        this.Locations=l;
        this.genreservice.getGenre().subscribe((g:any)=>{
          this.Genre=g;
          this.authorservice.getAuthors().subscribe((auth:any)=>{
            this.Authors=auth;
          })
        })
      })
    })
  }

  add(){
    this.tempbook=this.NewBook.value;
    this.tempbook.genre= parseInt(this.tempbook.genre);
    this.tempbook.author=parseInt(this.tempbook.author);
    this.tempbook.price=parseFloat(this.tempbook.price);
   
    console.log(this.tempbook);
    this.service.postbook(this.tempbook).subscribe((a:any)=>{
      this.NewBook.reset();
      this.ngOnInit();
    })

  }
    addauthor(){
      this.tempauthor=this.NewAuthor.value;
      this.authorservice.postAuthor(this.tempauthor).subscribe((a:any)=>{
        this.router.navigate(['/author']);
      })
      console.log(this.NewAuthor.value);
    }
}
