import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { BookService } from '../book.service';
import { LocationService } from '../location.service';
import { GenreService } from '../genre.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit {
  Locations:Array<any>=[];
  Genre:Array<any>=[];
  LocationsWithSpace:Array<any>=[];   
  tempGenre:any;
  NewGenre=this.fb.group({
    genreName:['', Validators.required],
    location:[ ,Validators.required],
    isActive:[true]
  });
  selectGenreId:any;
  tempcount: any;
  constructor(private fb:FormBuilder, private service:BookService, private services:LocationService,
    private genreservice:GenreService, private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
        this.services.getLocation().subscribe((l:any)=>{
        this.Locations=l;
        this.genreservice.getGenre().subscribe((g:any)=>{
          this.Genre=g;
          this.activatedRoute.params.subscribe((params:any)=>{
            this.selectGenreId=params["id"];
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
            this.Genre.forEach((element)=>{
              if(element.genreId==this.selectGenreId){
                this.NewGenre.controls['genreName'].setValue(element.genreName);
                this.NewGenre.controls['location'].setValue(element.location);
                this.NewGenre.controls['isActive'].setValue(element.isActive);
              }
            })
          })
        });
      });
    
  }

  update(id:any){
    this.tempGenre=this.NewGenre.value;
    this.tempGenre.location=parseInt(this.tempGenre.location);
    this.tempGenre.isActive=JSON.parse(this.tempGenre.isActive);
    this.service.updateBook(id, this.tempGenre).subscribe((a:any)=>{
      this.ngOnInit();
    })
  }
}
