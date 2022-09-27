import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
Cart:Array<any>=[];
  constructor() { }

  ngOnInit(): void {
this.Cart=JSON.parse(localStorage.getItem('books')||'[]');
  }

}
