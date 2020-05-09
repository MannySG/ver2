import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipModule } from 'ngx-bootstrap';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { WhyBetterComponent } from './home/why-better/why-better.component';
import { ContactComponent } from './home/contact/contact.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { HeaderAccountComponent } from './layout/header-account/header-account.component';
import { FooterAccountComponent } from './layout/footer-account/footer-account.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SetupGuideComponent } from './setup-guide/setup-guide.component';
import { SettingComponent } from './setting/setting.component';
import { ApiService } from './appService/api-service';
import { ConnectAccountService } from './appService/connect-service';
import { UserActive } from './appService/authenticate.-service';
import { HeaderSettingComponent } from './setting/page/header-setting/header-setting.component';
import { FooterSettingComponent } from './setting/page/footer-setting/footer-setting.component';
import { UserServiceService } from './appService/user-service.service';
import { SetupGuideService } from './appService/setup-guide.service';
import { NgxPlaidLinkService } from './appService/ngx-plaid-link.service';
import { PlaidLinkService } from './appService/plaid-link.service';
import { SettingService } from './appService/setting.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    WhyBetterComponent,
    ContactComponent,
    DashboardComponent,
    HeaderAccountComponent,
    FooterAccountComponent,
    CreateAccountComponent,
    SetupGuideComponent,
    SettingComponent,
    HeaderSettingComponent,
    FooterSettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule
  ],
  providers: [
    BsModalService,
    ApiService,
    ConnectAccountService,
    UserActive,
    UserServiceService,
    SetupGuideService,
    NgxPlaidLinkService,
    PlaidLinkService,
    SettingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
