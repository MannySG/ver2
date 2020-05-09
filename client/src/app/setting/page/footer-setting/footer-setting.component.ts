import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-setting',
  templateUrl: './footer-setting.component.html',
  styleUrls: ['./footer-setting.component.css']
})
export class FooterSettingComponent implements OnInit {
  //footer
  imgApp = "assets/images/apple.png";
  imgAndroid = "assets/images/android.png";
  imgHelp = "assets/images/Help.png"

  constructor() { }

  ngOnInit() {
  }

}
