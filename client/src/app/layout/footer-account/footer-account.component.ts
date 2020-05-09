import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-account',
  templateUrl: './footer-account.component.html',
  styleUrls: ['./footer-account.component.css']
})
export class FooterAccountComponent implements OnInit {
   //footer
   imgApp = "assets/images/apple.png";
   imgAndroid = "assets/images/android.png";
   imgHelp = "assets/images/Help.png"

  constructor() { }

  ngOnInit() {
  }

}
