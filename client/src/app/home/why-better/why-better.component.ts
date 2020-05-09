import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-why-better',
  templateUrl: './why-better.component.html',
  styleUrls: ['./why-better.component.css']
})
export class WhyBetterComponent implements OnInit {
  //WB-top
  contentTop = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat bibendum enim ultricies pellentesque.";
  imgTop = 'assets/images/phoneBetter.png';
  imgAfter = 'assets/images/Rectangle.png'

  //indenpendence
  contentIn = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat, erat in semper tincidunt, erat magna pretium nunc, ut dictum est dui ac enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent scelerisque nunc laoreet orci tempor, vitae ullamcorper arcu interdum. ";
  imgScreen = "assets/images/screenshot.png"

  // Flexible
  img1 = "assets/images/item1(WB).png";
  img2 = "assets/images/item2(WB).png";
  img3 = "assets/images/item3(WB).png";
  contentFlexible = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat, erat in semper tincidunt, erat magna pretium.";

  // Benefits
  imgB1 = "assets/images/benefit1.png";
  imgB2 = "assets/images/benefit2.png";
  imgB3 = "assets/images/benefit3.png";
  contentB1 = "By knowing exactly what you owe, solopreneurs won’t be surprised by end of the year tax bills they can’t afford to pay.";
  contentB2 = "Paying on time will reduce late payment penalties and interest on your tax bill.";
  contentB3 = "You will no longer have to remember quarterly payments or hassle with antiquated forms and methods for paying. Simply confirm your payment via push notification and the rest is taken care of for you.";

  // How it works
  imgW = "assets/images/Icon1(about-us).png";
  contentW = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus auctor ligula ac tincidunt.";

  //get-started
  contentGet = "Set up an account, link to your bank and we’ll take care of the rest—letting you run your business stress free.";


  constructor(private router: Router) { }

  ngOnInit() {
  }

  createAccount(){
    this.router.navigateByUrl('/signup')
  }

}
