import { Component, OnInit, ViewChild } from '@angular/core';
import { GenreService } from '../genre.service';
import { LocationService } from '../location.service';
import { BookService } from '../book.service';
import { FilterPipe } from 'filterPipe';
import { Router } from '@angular/router';
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
  book:any;
  @ViewChild('closeButton') closeButton:any;
  constructor(private service:BookService, private services:LocationService,
    private genreservice:GenreService,
    private router:Router) { }

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

check(){
 this.service.getBookByName(this.searchText).subscribe((a:any)=>{
this.book=a;
if(this.book==null){
  this.router.navigate(['/', 'error']);
  return ;
}
this.router.navigate([`details/${this.book.bookId}`]);
this.closeButton.nativeElement.click();
 })
}
}
