import { Component, OnInit, ViewChild, ContentChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectAccountService } from 'src/app/appService/connect-service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        transform: 'translateX(452px)'
      })),
      transition('normal <=> highlighted', animate(500)),
    ]),
    trigger('stateImg', [
      state('imgLeft', style({
        'border-top-left-radius': '12px',
        'border-bottom-left-radius': '12px',
        'border-top-right-radius': '0',
        'border-bottom-right-radius': '0',
      })),
      state('imgRight', style({
        'border-top-left-radius': '0',
        'border-bottom-left-radius': '0',
        'border-top-right-radius': '12px',
        'border-bottom-right-radius': '12px'
      })),
      transition('normal <=> highlighted', animate(500)),
    ]),
    trigger('signIn', [
      state('bottom', style({
        transform: 'translateY(0)'
      })),
      state('top', style({
        transform: 'translateY(-452px)'
      })),
      transition('bottom <=> top', animate(300))
    ])
  ]
})
export class AccountComponent implements OnInit {
  state = "normal";
  state1 = "bottom";
  stateImg = "imgLeft";

  showloading = false;
  animation = true;
  txtpassRegister = "";
  txtpassLogin = "";
  showEye = false;
  showPass = false;

  // register
  error = "";
  showErr = false;
  //content-main
  imgEye = "assets/images/Eye.png";
  imgHideEye = "assets/images/eyeHide.png";
  imgSingup = "assets/images/imageLogin.png";
  imgLogin = "assets/images/imageSignup.png";

  constructor(private router: Router,
    private _connect: ConnectAccountService) { }

  ngOnInit() {
  }

  click() {
    this.state == "normal" ? this.state = 'highlighted' : this.state = 'normal';
    this.state1 == "bottom" ? this.state1 = 'top' : this.state1 = 'bottom';
    this.stateImg == "imgLeft" ? this.stateImg = 'imgRight' : this.stateImg = 'imgLeft';
    this.showloading = !this.showloading;
  }
  mobileNumber() {
    this.router.navigateByUrl('signup/mobile');
  }

  TogglePassword() {
    this.showPass = !this.showPass
  }
  login(email, password) {
    this.error = "";
    const regEmail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
    if (!regEmail.test(email)) {
      this.showErr = true;
      this.error = "Email invalid!";
      return false;
    }
    if (email == "" || password == "") {
      this.showErr = true;
      this.error = "Email or password can't be blank!";
      return false;
    }
    if(email === undefined || password === undefined){
      this.showErr = true;
      this.error = "Incorrect log in credentials!";
      return false;
    }
    this._connect.loginBetter(email, password)
  }

  RegisterAccount(emailRegister, passwordRegister) {
    const regEmail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
    const regPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})");
    this.error = "";
    if (emailRegister == "" || passwordRegister == "") {
      this.showErr = true;
      this.error = "Email or Password can't be blank!";
    }
    if (!regEmail.test(emailRegister)) {
      this.showErr = true;
      this.error = "Email is invalid!";
      return false;
    }
    if (!regPass.test(passwordRegister)) {
      this.showErr = true;
      this.error = 'Password must contain at least 8 characters, one lower case letter, one upper case letter, one number and one of the following symbols: !, @, #, $, %, &, * ';
      return false;
    }
   this._connect.registerBetter(emailRegister, passwordRegister)
  }

}
