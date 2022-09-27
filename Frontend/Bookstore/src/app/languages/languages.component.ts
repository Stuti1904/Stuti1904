import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
Languages:Array<any>=[];
page = 1;
  count = 0;
  pageSize = 5;
  constructor(private service: LanguageService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.service.getLanguage().subscribe((a:any)=>{
      this.Languages= a;
    })
  }
  handlePageChange(event : any) {
    console.log(event);
    this.page = event;
  }

  delete(id:any){
    this.service.deleteLanguage(id).subscribe((a:any)=>{
      this.ngOnInit();
    })
  }
  gotoEditPage(id:any){
    this.router.navigate(['editLanguage/'+id], {relativeTo: this.route} );
  }
}
