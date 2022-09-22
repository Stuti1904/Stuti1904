import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BookService } from '../book.service';
import { BooksInLanguageService } from '../books-in-language.service';
import { LanguageService } from '../language.service';
import { AuthorService } from '../author.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '../location.service';
import { GenreService } from '../genre.service';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {
  NewGenre=this.fb.group({
    genreName:['', Validators.required],
    location:[ ,Validators.required]
  });
  Books:Array<any>=[];
  Locations:Array<any>=[];
  Genre:Array<any>=[];
  Authors:Array<any>=[];
  tempbook:any;
  tempauthor:any;
  count=0;
  LocationsWithSpace:Array<any>=[];
  tempGenre:any;
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
  addgenre(){
    console.log(this.NewGenre.value);
    this.tempGenre=this.NewGenre.value;
    this.tempGenre.location=parseInt(this.tempGenre.location);
    this.genreservice.postgenre(this.tempGenre).subscribe((a:any)=>{
      this.NewGenre.reset();
      this.router.navigate(['/books']);
    })
  }
}
