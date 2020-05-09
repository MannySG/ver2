import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/appService/user-service.service';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {
  contentDeactivate = "Deactivating your account turns off all transactions until you decide to reactive."
  contentDelete = "This action is permanent. All of your account history will no longer be accessible."

  showBlur1 = false;
  showBlur2 = false;

  public idDelete: string;
  public lock:boolean = true;

  constructor(private router: Router, private _user: UserServiceService) { 
    this.idDelete = localStorage.getItem('_userId');
  }

  ngOnInit() {
  }

  BlurContent1() {
    this.showBlur1 = true;
  }
  BlurContent2() {
    this.showBlur2 = true;
  }
  DeActivateAccount() {
    this._user.deActiveAccount(this.idDelete,this.lock).subscribe(
      (data: any) => {
        localStorage.removeItem('_token');
        localStorage.removeItem('_userId');
        this.showBlur1 = false;
        this.router.navigate(['dashboard/activate-confirm']);
      }
    )
  }
  DeleteAccount() {
    this._user.deleteAccount(this.idDelete).subscribe(
      (data: any) => {
        this.showBlur2 = false;
        localStorage.removeItem('_token');
        localStorage.removeItem('_userId');
        this.router.navigate(['dashboard/confirm-delete']);
      }, err => {
        console.log(err)
      })
  }
  deCline1() {
    this.showBlur1 = false;
  }
  deCline2() {
    this.showBlur2 = false;
  }



}
