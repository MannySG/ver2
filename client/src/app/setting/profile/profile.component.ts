import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/appService/user-service.service';
import { UserModel } from 'src/app/model/user.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public idUser: string;
  public lstJob: UserModel[] = [];

  constructor(private router: Router, private _user: UserServiceService,
    private _toar: ToastrService) { 
    }

  ngOnInit() {
    this.getJob();
  }

  updateProfile(firstName, Middle, lastName, job, zipCode){
    const regZip = new RegExp("/^(?!0{5})(?!0{4})\d{5}$/");
    if(!regZip.test(zipCode)){
      this._toar.error('error!')
      return false;
    }
    this.idUser = localStorage.getItem('_userId');
    const data: any = {
      "firstName": firstName,
	    "lastName": lastName,
      "middleInitial": Middle,
      "job": job,
	    "zipCode": zipCode
    }
    this._user.updateProfile(this.idUser,data).subscribe(
      data => {
        this.checkSMS(data);
      }, err => {
        this.checkSMS(err)
      }
    )
  }

  getJob(){
    return this._user.getJob().subscribe(
      (dt:any) => {
        console.log(dt)
        this.lstJob = dt.data.data;
      }
    )
  }

  checkSMS(dt){
    if(dt['status'] == 200){
      this._toar.success('Updated User Successfully!');
      this.router.navigate(['dashboard']);
    }else{
      this._toar.info('Updated User Error!');
    }
    
  }
}
