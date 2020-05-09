import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/appService/user-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  public error = "";
  showErr = false;

  constructor(private router: Router, private _changeEmail: UserServiceService,
    private _toar: ToastrService) { }

  ngOnInit() {
  }

  ChangeEmail(currentEmail, newEmail){
    const regEmail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
    if(!regEmail.test(currentEmail)){
      this.showErr = true;
      this.error = "Current Email is invalid!"
      return false;
    }
    if(!regEmail.test(newEmail)){
      this.showErr = true;
      this.error = "New Email is invalid!"
      return false;
    }
    const data: any = {
      "email" : currentEmail,
      "newEmail" : newEmail
    }
    this._changeEmail.changEmail(data).subscribe(
        dt => {
          this.checkSMS(dt);
          this.router.navigate(['dashboard/profile'])
        }, err => {
          this.checkSMS(err);
        }
    )
  }

  checkSMS(data){
    if(data['status']== 200){
      this._toar.success('Changed Email Successfully!')
    }else{
      this._toar.error('Changed Email Error!')
    }
  }
}
