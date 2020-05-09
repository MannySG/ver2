import { Component, OnInit } from '@angular/core';
import { ConnectAccountService } from 'src/app/appService/connect-service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  showloading = false;
  animation: any;
  textpass = "";
  showEye = false;
  showPass = false;
  showErr = false;

  public error = ""

  //content-main
  imgEye = "assets/images/Eye.png";
  imgHideEye = "assets/images/eyeHide.png";
  imgSingup = "assets/images/imageLogin.png";
  imgLogin = "assets/images/imageSignup.png";
  constructor(private _connect: ConnectAccountService) { }

  ngOnInit() {
  }
  TogglePassword(){
    this.showPass = !this.showPass
  }

  loginBetter(email, password){
    this.error = "";
    const regEmail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
    const regPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})");

    if(email == "" || password == ""){
      this.showErr = true;
      this.error = "Email and Password can't be blank!";
    }
    if(!regEmail.test(email)){
      this.showErr = true;
      this.error = "Email is invalid!"
    }
    if(!regPass.test(password)){
      this.showErr = true;
      this.error = "Password is invalid!"
    }
    this._connect.loginBetter(email, password)
  }


}
