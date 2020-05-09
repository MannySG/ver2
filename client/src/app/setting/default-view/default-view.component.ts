import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default-view',
  templateUrl: './default-view.component.html',
  styleUrls: ['./default-view.component.css']
})
export class DefaultViewComponent implements OnInit {
  

  //main
  imgDola = "assets/images/dola.png"
  imgChart = "assets/images/chartIncome.png"
  contentKeep = "Keep doing what you're doing! You are on track to receive a refund when you file your tax return."


  //current-pay
  imgMask = "assets/images/maskGroup2.png"
  imgLink = "assets/images/link.png"
  textRight = "Reccomend the Better app to any friend and each of you wil receive $5 to your accounts."

  //content-right
  imgMore = "assets/images/iconMore.png"

   
  constructor(private router: Router) { }

  ngOnInit() {
  }

 
}
