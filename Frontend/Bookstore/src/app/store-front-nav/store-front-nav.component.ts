import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-front-nav',
  templateUrl: './store-front-nav.component.html',
  styleUrls: ['./store-front-nav.component.css']
})
export class StoreFrontNavComponent implements OnInit {
  isLoggedIn=false;
  constructor() { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('token');
    this. isLoggedIn=false;
  }
}
