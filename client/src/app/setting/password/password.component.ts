import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/appService/user-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  public error = "";
  showErr = false;
  constructor(private router: Router, private _user: UserServiceService,
    private _toar: ToastrService) { }

  ngOnInit() {
  }

  changePassWord(currentPass, newPass, confirmPass){
    const regPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})");
    if(!regPass.test(currentPass)) {
      this.showErr = true;
      this.error = "Password is invalid!";
      return false;
    }
    if(!regPass.test(newPass)) {
      this.showErr = true;
      this.error = "Password must contain at least 8 characters, one lower case letter, one upper case letter, one number and one of the following symbols: !, @, #, $, %, &, * ";
      return false;
    }
    if(confirmPass != newPass){
      this.showErr = true;
      this.error = "New Password and Confirm Password incorrect!";
      return false;
    }
    const data: any = {
      "oldPassword": currentPass,
	    "newPassword": newPass,
	    "retryPassword": confirmPass
    }
    return this._user.changePassWord(data).subscribe(
      dt => {
        this.checkSMS(dt);
      }, err => {
        this.checkSMS(err);
      }
    )
  }

  checkSMS(dt){
    if(dt['status'] == 200){
      this._toar.success("Changed Password Successfully!");
      this.router.navigate(['dashboard/profile']);
    }else{
      this._toar.error("Changed Password error!")
    }
  }

}
