import { Component, OnInit } from '@angular/core';
import { GenreService } from '../genre.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  Genre:Array<any>=[];
page = 1;
  count = 0;
  pageSize = 5;
tempGenre:any;
  constructor(private genreservice:GenreService) { }

  ngOnInit(): void {

    this.genreservice.getGenre().subscribe((g:any)=>{
      this.Genre=g;
    })
  }
  handlePageChange(event : any) {
    console.log(event);
    this.page = event;

  }

}
