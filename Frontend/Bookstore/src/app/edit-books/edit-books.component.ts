import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GenreService } from '../genre.service';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-edit-books',
  templateUrl: './edit-books.component.html',
  styleUrls: ['./edit-books.component.css']
})
export class EditBooksComponent implements OnInit {
Books:Array<any>=[];
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

tempBook:any;
Genre:Array<any>=[];
Authors:Array<any>=[];
selectedBookId:any;
  constructor(private service:BookService, private fb:FormBuilder, private activatedRoute:ActivatedRoute,    private genreservice:GenreService, private authorservice:AuthorService,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:any)=>{ this.selectedBookId=params["id"];})
    this.service.getBooks().subscribe((a: any)=>{
      this.Books= a;
      this.Books.forEach((element)=>{
        if(element.bookId ==this.selectedBookId){
          console.log(element, this.selectedBookId);
          this.NewBook.controls['title'].setValue(element.title);
          this.NewBook.controls['description'].setValue(element.description);
          this.NewBook.controls['price'].setValue(element.price);
          this.NewBook.controls['images'].setValue(element.images);
          this.NewBook.controls['isActive'].setValue(element.isActive);
          this.NewBook.controls['isbn'].setValue(element.isbn);
          this.NewBook.controls['genre'].setValue(element.genre);
          this.NewBook.controls['author'].setValue(element.author);
          this.NewBook.controls['releasedDate'].setValue(element.releasedDate);
        }
      })
      this.genreservice.getGenre().subscribe((g:any)=>{
        this.Genre=g;
        this.authorservice.getAuthors().subscribe((auth:any)=>{
          this.Authors=auth;
    })
  });
})
  }
  update(id:any){
    this.tempBook=this.NewBook.value;
    this.tempBook.genre= parseInt(this.tempBook.genre);
    this.tempBook.author=parseInt(this.tempBook.author);
    this.tempBook.price=parseFloat(this.tempBook.price);
    this.tempBook.isActive=JSON.parse(this.tempBook.isActive);
    this.service.updateBook(id, this.tempBook).subscribe((book:any)=>{
      this.tempBook=book;
      this.NewBook.reset();
      this.router.navigate(['/details',id])
    })
  }
}
