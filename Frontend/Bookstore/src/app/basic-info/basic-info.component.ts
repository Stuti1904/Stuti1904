import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { LocationService } from '../location.service';
import { GenreService } from '../genre.service';
import { AuthorService } from '../author.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LanguageService } from '../language.service';
import { BooksInLanguageService } from '../books-in-language.service';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {
  Information:Array<any>=[];
  tempbook:any;
  tempauthor:Array<any>=[];
  BooksInLanguage:Array<any>=[];
  tempcount=0;
  LocationsWithSpace:Array<any>=[];   
tempGenre:any;
  page = 1;
  count = 0;
  pageSize = 8;
searchtext:any='';
cartBooks:Array<any>=[];
  constructor(private booksinlan: BooksInLanguageService, private service:InfoService, private services:BookService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getInfo().subscribe((info:any)=>{
      this.Information=info;
      this.services.getBooks().subscribe((book:any)=>{
        this.tempbook=book;
      })
    })
    
  }

  handlePageChange(event : any) {
    console.log(event);
    this.page = event;

  }

  addToCart(id:any) {



    if (localStorage.getItem('books')) {

      this.cartBooks = JSON.parse(localStorage.getItem('books') || '[]');

    }




    this.tempbook.forEach((element:any) => {

      if (element.title == id) {

          this.cartBooks.push(element);
      }

    });

    localStorage.setItem('books', JSON.stringify(this.cartBooks));



    console.log(localStorage.getItem('books'));

      this.router.navigate(['checkout'], {relativeTo:this.route})

  }

}
