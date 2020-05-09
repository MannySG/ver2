import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //dashboard
  content = "At Better, we provide unique technological solutions for solepreneurs to help them run their business efficiently."
  imgR = "assets/images/image.png";

//start-safehold 
imgL = 'assets/images/safehold-feature.png'
contentStart = "Safehold is Better’s first product feature that enables withholding for solopreneurs. It will calculate and pay taxes for the user, saving time and money. This product feature will provide a level of comfort and convenience not yet seen to date."
imgPolygon = 'assets/images/Polygon.png';

// benefits
imgEase = 'assets/images/ease.png';
imgInfo = 'assets/images/info.png';
imgControl = 'assets/images/control.png';
imgCost = 'assets/images/cost.png';
imgTime = 'assets/images/time.png';

//learnMore
contentLeft = "Setup is quick and easy—tailoring the app to suit your goals. Once complete, we will take care of everything making running your business more efficient.";
imgLM = "assets/images/features.png";

// better-bot
contentBotL = "Set up an account, link to your bank and we’ll take care of the rest—letting you run your business stress free.";
contentBotR = "Want to know more about us or our product? Get in touch and we’ll be happy to help.";
  constructor(private router: Router) { }

  ngOnInit() {
  }
  CreateAccount(){
    this.router.navigateByUrl('signup');
  }
}
