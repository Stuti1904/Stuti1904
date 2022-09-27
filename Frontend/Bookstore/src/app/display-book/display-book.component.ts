import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { LocationService } from '../location.service';
import { GenreService } from '../genre.service';
import { AuthorService } from '../author.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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
  tempcount=0;
  LocationsWithSpace:Array<any>=[];   
tempGenre:any;
  page = 1;
  count = 0;
  pageSize = 8;


  NewBook=this.fb.group({ 
    title:['', Validators.required],
    description:['', Validators.required],
    releasedDate:['', Validators.required],
    author:[, Validators.required],
    genre:[, Validators.required],
    price:[, Validators.required],
    images:['', Validators.required],
    isbn:['', Validators.required],
    isActive:[true]
  });
  NewAuthor=this.fb.group({ 
    authorName:['', Validators.required],
    about:['', Validators.required],
    gender:['', Validators.required],
    isActive:[true]
  });
NewGenre=this.fb.group({
  genreName:['', Validators.required],
  location:[ ,Validators.required],
  isActive:[true]
});

NewLanguage=this.fb.group({
  name: ['', Validators.required],
  isActive:[true]
});
tempLanguage:any;

  constructor(private service:BookService, private services:LocationService,
    private genreservice:GenreService, private authorservice:AuthorService, private fb:FormBuilder, private router:Router,
    private languageservice:LanguageService, private route:ActivatedRoute) { }

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
                    this.tempcount=this.tempcount+1;
                  }
                })
                // console.log(this.tempcount, location.locationId);
                if(this.tempcount<2){
                  this.LocationsWithSpace.push(location);
                }
                this.tempcount=0;
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
    this.tempbook.isActive=JSON.parse(this.tempbook.isActive);
   
    console.log(this.tempbook);
    this.service.postbook(this.tempbook).subscribe((a:any)=>{
      this.NewBook.reset();
      this.ngOnInit();
    })

  }
    addauthor(){
      this.tempauthor=this.NewAuthor.value;
      this.tempauthor.isActive=JSON.parse(this.tempauthor.isActive);
   
      this.authorservice.postAuthor(this.tempauthor).subscribe((a:any)=>{
        this.router.navigate(['authors'], {relativeTo:this.route})
      })
      console.log(this.NewAuthor.value);
    }

    addgenre(){
      console.log(this.NewGenre.value);
      this.tempGenre=this.NewGenre.value;
      this.tempGenre.location=parseInt(this.tempGenre.location);
      this.tempGenre.isActive=JSON.parse(this.tempGenre.isActive);
      this.genreservice.postgenre(this.tempGenre).subscribe((a:any)=>{
        this.NewGenre.reset();
        this.router.navigate(['genres'], {relativeTo:this.route})
    })
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

    handlePageChange(event : any) {
      console.log(event);
      this.page = event;
  
    }
showdetails(id:any){
this.router.navigate(['details/'+id], {relativeTo: this.route} );
}
   gotoEditPage(id:any){
    this.router.navigate(['editbook/'+id], {relativeTo: this.route} );
   }
}
