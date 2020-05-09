import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
//footer
imgApp = "assets/images/apple.png";
imgAndroid = "assets/images/android.png";
imgHelp = "assets/images/Help.png"
  constructor(private router: Router) { }

  ngOnInit() {
  }
  Location(){
    this.router.navigateByUrl('setup-guide/location')
  }

}
