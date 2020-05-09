import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-account',
  templateUrl: './header-account.component.html',
  styleUrls: ['./header-account.component.css']
})
export class HeaderAccountComponent implements OnInit {
    //header 
    imgLogo = "assets/images/logoCreate.png";
  constructor() { }

  ngOnInit() {
  }

}
