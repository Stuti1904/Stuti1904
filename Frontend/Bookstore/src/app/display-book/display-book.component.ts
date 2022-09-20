import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { LocationService } from '../location.service';
import { GenreService } from '../genre.service';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.css']
})
export class DisplayBookComponent implements OnInit {

  Books:Array<any>=[];
  Locations:Array<any>=[];
  Genre:Array<any>=[];
  constructor(private service:BookService, private services:LocationService,
    private genreservice:GenreService) { }

  ngOnInit(): void {
    this.service.getBooks().subscribe((a: any)=>{
      this.Books= a;
      this.services.getLocation().subscribe((l:any)=>{
        this.Locations=l;
        this.genreservice.getGenre().subscribe((g:any)=>{
          this.Genre=g;
        })
      })
    })
  }

}
