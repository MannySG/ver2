import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.css']
})
export class VerifyCodeComponent implements OnInit {

  showloading = false;
  animation: any;
  textpass = "";
  showEye = false;

  error = "";
  showErr = false;

  imgEye = "assets/images/Eye.png"
  imgLogin = "assets/images/imageLogin.png";
  content = "Verifying your account keeps you safe online.";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  setupGuide(smsCode) {
    this.error = "";
    if (smsCode == "") {
      this.showErr = true;
      this.error = "SmsCode can't be blank!";
      document.getElementById("cofirmCode").focus();
    }
    else {
      this.router.navigateByUrl('signup/signin')
    }
  }
}
