import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectAccountService } from 'src/app/appService/connect-service';

@Component({
  selector: 'app-mobile-number',
  templateUrl: './mobile-number.component.html',
  styleUrls: ['./mobile-number.component.css']
})
export class MobileNumberComponent implements OnInit {

  showloading = false;
  animation: any;
  textpass = "";
  showEye = false;
  
  phoneNumber = "+84"
  error = "";
  showErr = false;

  imgEye = "assets/images/Eye.png"
  imgLogin = "assets/images/imageLogin.png";
  content = "Verifying your account keeps you safe online.";

  constructor(private router: Router,
     private _connect: ConnectAccountService) { }

  ngOnInit() {
  }
  
  ConfirmCode(phoneNumber){
    this.error = "";
    const regPhone = new RegExp("^((\\+\\d{1,4}[ -]*)?|(0[ -]*))*\\d{3}[ -]*\\d{3}[ -]*\\d{4}$");
    if (phoneNumber == "") {
      this.showErr = true;
      this.error = "Phone Number can't be blank!";
      document.getElementById("phoneNull").focus();
      return false;
    }
    if (!regPhone.test(phoneNumber)) {
      this.showErr = true;
      this.error = "Phone Number invalid!";
      return false;
    }
    this._connect.PhoneNumber(phoneNumber)
  }
}
