import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  // about-us-top
  img1 = "assets/images/about-us.png";
  contentLeft = "Betters aim is to protect and empower solopreneurs with technology solutions, starting with the tax safeholding app.";

  // about-helping
  img2 = "assets/images/About-us(2).png";
  contentRight = "Better provides unique technological solutions that link companies and the on-demand workforce to ensure that both parties truly benefit from the partnership. Better seeks to become an indispensable platform of tools and services designed around being a human, to make “getting yours” in this new economy as easy as joining it."

  // our-values
  imgIcon = "assets/images/Icon1(about-us).png";
  content1 = "We believe that when people feel comfortable in their livelihood they’re more apt to thrive, so we aspire to build tools that enable solopreneurs to feel that assurance.";
  content2 = "We believe in the boundless potential of entrepreneurship. Ourselves, our partners, and our customers are all building our dreams from the ground up. Overcoming our challenges requires hope, optimism, and a trust in ourselves that we will succeed.";
  content3 = "We recognize the importance of not feeling alone within solopreneurship, so we aspire to build a sense of community to make the whole solopreneur economy greater than the sum of its parts.";
  content4 = "We believe that practical solutions will always win over radical ones, even though sometimes the practical can be radical.";
  content5 = "We aspire to always move forward with purpose and create a sense of forward momentum.";

  // our-first-product 
  contentProduct = "Setup is quick and easy—tailoring the app to suit your goals. Once complete, we will take care of everything making running your business more efficient.";
  imgPolygon = "assets/images/Polygon.png";
  imgRight = "assets/images/features.png";

  // about-us-bot
  contentBotL = "Set up an account, link to your bank and we’ll take care of the rest—letting you run your business stress free.";
  contentBotR = "Want to know more about us or our product? Get in touch and we’ll be happy to help."

  constructor(private router: Router) {
    window.onload = () => {
      this.html = document.documentElement;
      this.body = document.body;
      this.scrollToTop = document.getElementById("scrollTo");
      this.testScroll = this.controlScrollTop();
    }
    window.onscroll = this.testScroll;
   }

  ngOnInit() {
    
  }

  createAccount() {
    this.router.navigateByUrl('/signup');
  }

  public html: any;
  public body: any;
  public scrollToTop: any;
  public testScroll: any;

  controlScrollTop() {
    let windowInnerHeight = 2 * window.innerHeight;
    if (this.body.scrollTop > windowInnerHeight || this.html.scrollTop > windowInnerHeight) {
      this.scrollToTop.classList.add("show")
    } else {
      this.scrollToTop.classList.remove("show")      
    }
  }

}
