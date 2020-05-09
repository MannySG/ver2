import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-setting',
  templateUrl: './header-setting.component.html',
  styleUrls: ['./header-setting.component.css']
})
export class HeaderSettingComponent implements OnInit {

  showLoading = false;

  //header
  imgLogo = "assets/images/logoDashboard.png";
  imgToggle = "assets/images/MenuDashboard.png";
  imgNotifi = "assets/images/Notification.png";
  imgBack = "assets/images/Back.png"
  constructor(private router: Router) { }

  ngOnInit() {
  }
  NextEmail(){
    this.router.navigate(['dashboard/profile']);
    this.showLoading = true;
  }
  BackDashboard(){
    this.router.navigate(['dashboard']);
    this.showLoading = false;
  }

  logOut(){
    localStorage.removeItem('_token');
    localStorage.removeItem('_userId');
    this.router.navigate(['signup/signin']);
  }
}
