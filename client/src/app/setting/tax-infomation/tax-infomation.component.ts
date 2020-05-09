import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tax-infomation',
  templateUrl: './tax-infomation.component.html',
  styleUrls: ['./tax-infomation.component.css']
})
export class TaxInfomationComponent implements OnInit {
  public value:number = 0;

  public check = false;
  public checked = true;
  public money = "$";

  imgRefund = "assets/images/refund.png";
  imgBreakeven = "assets/images/breakeven.png";
  imgOwe = "assets/images/owe.png";
  contentDesired = "Better transfers enough money to cover taxes and a little extra to ensure a refund at the end of the year."


  public valueChildren = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onAdd(){
    this.value++;
  }
  onSub(){
    if(this.value > 0){
      this.value--;
    }else{
      return false;
    }
  }
  ShowCheck(){
    this.check = !this.check
  }
  ShowChecked(){
    this.checked = !this.checked;
  }
  
}
