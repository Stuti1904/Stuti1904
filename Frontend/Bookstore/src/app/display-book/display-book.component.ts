import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { LocationService } from '../location.service';
import { GenreService } from '../genre.service';
import { AuthorService } from '../author.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LanguageService } from '../language.service';

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
  count=0;
  LocationsWithSpace:Array<any>=[];
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
  });
NewGenre=this.fb.group({
  genreName:['', Validators.required],
  location:[ ,Validators.required]
});

NewLanguage=this.fb.group({
  name: ['', Validators.required]
});
tempLanguage:any;

  constructor(private service:BookService, private services:LocationService,
    private genreservice:GenreService, private authorservice:AuthorService, private fb:FormBuilder, private router:Router,
    private languageservice:LanguageService) { }

  ngOnInit(): void {
    this.service.getBooks().subscribe((a: any)=>{
      this.Books= a;
      this.services.getLocation().subscribe((l:any)=>{
        this.Locations=l;
        this.genreservice.getGenre().subscribe((g:any)=>{
          this.Genre=g;
          this.authorservice.getAuthors().subscribe((auth:any)=>{
            this.Authors=auth;
              this.Locations.forEach((location)=>{
                this.Genre.forEach((genre)=>{
                  if(location.locationId==genre.location){
                    this.count=this.count+1;
                  }
                })
                // console.log(this.count, location.locationId);
                if(this.count<2){
                  this.LocationsWithSpace.push(location);
                }
                this.count=0;
              })            
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

    addgenre(){
      console.log(this.NewGenre.value);
      this.NewGenre.reset();
    }

    addlanguage(){
        this.tempLanguage=this.NewLanguage.value;
        console.log(this.tempLanguage);
        this.languageservice.postlanguage(this.tempLanguage).subscribe((a:any)=>{

          this.NewLanguage.reset();
        })
    }

    deleteBook(id:any){
      this.service.deleteBook(id).subscribe((a:any)=>{
        this.ngOnInit();
      })
    }
}
