import { Component, OnInit, OnDestroy } from '@angular/core';
import { filter } from "rxjs/operators";
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {
  public subcription:Subscription;

  imgF = "assets/images/LogoFooter.png";
  content = "Because being independent shouldn’t mean you’re alone."
  constructor(private router: Router) { }

  ngOnInit() {
    this.ScrollTo();
  }

  ScrollTo(){
    this.subcription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe( () => window.scrollTo(0,90))
  }
  ngOnDestroy(){
    this.subcription.unsubscribe();
  }

}
