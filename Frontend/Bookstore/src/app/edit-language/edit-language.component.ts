import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { LanguageService } from '../language.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-language',
  templateUrl: './edit-language.component.html',
  styleUrls: ['./edit-language.component.css']
})
export class EditLanguageComponent implements OnInit {
Languages:Array<any>=[];
  NewLanguage=this.fb.group({
    name: ['', Validators.required],
    isActive:[true]
  });
  tempLanguage:any;
  selectedLanguageId:any;
  constructor(private fb: FormBuilder, private service:LanguageService, private activatedRoute: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params :any)=> {
      this.selectedLanguageId=params["id"];
    })
    this.service.getLanguage().subscribe((a:any)=>{
      this.Languages=a;
      this.Languages.forEach((element)=>{
        if(element.languageId==this.selectedLanguageId){
          this.NewLanguage.controls['name'].setValue(element.name);
          this.NewLanguage.controls['isActive'].setValue(element.isActive);
        }
      })
    })

  }

  update(id:any){
    this.tempLanguage=this.NewLanguage.value;
    this.tempLanguage.isActive=JSON.parse(this.tempLanguage.isActive);
    this.service.updateLanguage(id, this.tempLanguage).subscribe((a:any)=>{
      this.router.navigate(['/language']);
    })
  }

}
