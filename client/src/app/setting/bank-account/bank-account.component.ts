import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaidLinkService } from 'src/app/appService/plaid-link.service';
import { PlaidLink } from 'src/app/model/plaid.model';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit {

  img3bi = "assets/images/3bi.png"

  public lstBank: PlaidLink[] = [];
  public idBank: string;
  public idDelete: string;

  constructor(private router: Router, private _plaid: PlaidLinkService) { }

  ngOnInit() {
    this.getBank();
  }

  getBank() {
    this.idBank = localStorage.getItem('_userId');
    this._plaid.getBank(this.idBank).subscribe(
      (data: any) => {
        console.log(data)
        this.lstBank = data.data;
      }
    )
  }

  unLink(event) {
    this.idDelete = event;
    this._plaid.unLink(this.idDelete).subscribe(
      (data: any) => {
        this._plaid.getBank(this.idBank).subscribe(
          (data: any) => {
            this.lstBank = data.data;
          }, err => {
            console.log(err)
          })
      }, err => {
        console.log(err)
      })
  }
}
