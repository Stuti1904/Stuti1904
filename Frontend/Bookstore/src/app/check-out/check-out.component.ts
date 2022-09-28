import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { BooksInLanguageService } from '../books-in-language.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
Cart:Array<any>=[];
Books:Array<any>=[];
  constructor(private service:BookService, private services:BooksInLanguageService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
this.Cart=JSON.parse(localStorage.getItem('books')||'[]');
this.service.getBooks().subscribe((b:any)=>{
  this.Books=b;
})
  }

  checkout(){
this.Cart.forEach((element:any)=>{
  this.Books.forEach((item:any)=>{
    if(element.title==item.title){
      this.services.updateLanguage(item.bookId).subscribe((a:any)=>{
        localStorage.removeItem('books');
        alert("DONE");
        this.router.navigate(['storefront/basicInfo']);
      })
    }
  })
})
  }
}
