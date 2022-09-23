import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthorService } from '../author.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-authors',
  templateUrl: './edit-authors.component.html',
  styleUrls: ['./edit-authors.component.css']
})
export class EditAuthorsComponent implements OnInit {
  NewAuthor=this.fb.group({ 
    authorName:['', Validators.required],
    about:['', Validators.required],
    gender:['', Validators.required],
    isActive:[true]
  });
  Authors:Array<any>=[];
  selectedAuthorId:any;
  tempAuthor:any;
  constructor(private fb: FormBuilder, private service:AuthorService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
this.activatedRoute.params.subscribe((params:any)=>{ 
this.selectedAuthorId = params["id"];
})
    this.service.getAuthors().subscribe((a:any)=>{
      this.Authors=a;
      this.Authors.forEach((element:any)=>{
        if(element.authorId==this.selectedAuthorId){
          this.NewAuthor.controls['authorName'].setValue(element.authorName);
          this.NewAuthor.controls['about'].setValue(element.about);
          this.NewAuthor.controls['isActive'].setValue(element.isActive);
          this.NewAuthor.controls['gender'].setValue(element.gender);
        }
      })
    })
  }

  

    update(id:any){
this.tempAuthor=this.NewAuthor.value;
    this.service.updateAuthor(id, this.tempAuthor ).subscribe((a:any)=>{
      this.tempAuthor=a;
      this.router.navigate(['/author']);
    })
  }

}
