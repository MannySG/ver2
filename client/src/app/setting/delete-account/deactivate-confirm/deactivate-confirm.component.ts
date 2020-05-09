import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deactivate-confirm',
  templateUrl: './deactivate-confirm.component.html',
  styleUrls: ['./deactivate-confirm.component.css']
})
export class DeactivateConfirmComponent implements OnInit {
  imgCheck = "assets/images/setup-guide/check.png"
  content = "Your account has been deactivated. This can be undone in settings."
  imgBack = "assets/images/backSetting.png";
  constructor() { }

  ngOnInit() {
  }

}
