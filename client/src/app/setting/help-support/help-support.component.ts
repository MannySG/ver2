import { Component, OnInit } from '@angular/core';
import { SettingService } from 'src/app/appService/setting.service';
import { HelpSupport } from 'src/app/model/help-support.model';

@Component({
  selector: 'app-help-support',
  templateUrl: './help-support.component.html',
  styleUrls: ['./help-support.component.css']
})
export class HelpSupportComponent implements OnInit {

  public lstHelp: HelpSupport[] = [];

  constructor(private _setting: SettingService) { }

  ngOnInit() {
    this.getHelpSupport()
  }

  getHelpSupport(){
    this._setting.helpSupport().subscribe(
      (data:any) => {
        console.log(data);
        this.lstHelp = data.data.data;
      }
    )

  }

}
