import { Component, OnInit } from '@angular/core';
import { GenreService } from '../genre.service';
import { LocationService } from '../location.service';
import { BookService } from '../book.service';
import { FilterPipe } from 'filterPipe';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  Books:Array<any>=[];
  Locations:Array<any>=[];
  Genre:Array<any>=[];
  searchText:any;
  constructor(private service:BookService, private services:LocationService,
    private genreservice:GenreService) { }

  ngOnInit(): void {

    this.service.getBooks().subscribe((a: any)=>{
      this.service.getBooks().subscribe((a: any)=>{
        this.Books= a;
        this.services.getLocation().subscribe((l:any)=>{
          this.Locations=l;
          this.genreservice.getGenre().subscribe((g:any)=>{
            this.Genre=g;
          })
        })
      })
  });


}
}
