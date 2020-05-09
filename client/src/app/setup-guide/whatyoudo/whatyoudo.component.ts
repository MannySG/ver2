import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SetupGuideService } from 'src/app/appService/setup-guide.service';
import { UserModel } from 'src/app/model/user.model';

@Component({
  selector: 'app-whatyoudo',
  templateUrl: './whatyoudo.component.html',
  styleUrls: ['./whatyoudo.component.css']
})
export class WhatyoudoComponent implements OnInit {

  public lstJob: UserModel[] = [];
  public Jobtitle: string = "";

  constructor(private Router: Router,
    private _setupGuide: SetupGuideService) { }

  ngOnInit() {
    this.getJob();
  }

  Location(){
    this.Router.navigateByUrl('setup-guide/location')
  }
  
  Method(){
    this.Router.navigateByUrl('setup-guide/method')
  }

  getJob(){
    this._setupGuide.getJob().subscribe(
      (dt: any) => {
        this.lstJob = dt.data.data;
      }
    )
  }
}
