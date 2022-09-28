import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store-front-nav',
  templateUrl: './store-front-nav.component.html',
  styleUrls: ['./store-front-nav.component.css']
})
export class StoreFrontNavComponent implements OnInit {
  isLoggedIn=false;
  constructor(private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('token');
    this. isLoggedIn=false;
  }

  goToCheckout(){
    this.router.navigate(['checkout'], {relativeTo:this.route})
  }

  goToHomePage(){
    this.router.navigate(['storefront/basicInfo']);
  }
}
