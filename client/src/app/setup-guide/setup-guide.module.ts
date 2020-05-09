import { NgModule } from '@angular/core';
import { IntroComponent } from './intro/intro.component';
import { LocationComponent } from './location/location.component';
import { MarialStatusComponent } from './marial-status/marial-status.component';
import { MethodComponent } from './method/method.component';
import { W2Component } from './w2/w2.component';
import { WhatyoudoComponent } from './whatyoudo/whatyoudo.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SetupGuideRoutingModule } from './setup-guide-routing.module';
import { HeaderSetupComponent } from './page/header-setup/header-setup.component';
import { ChildComponent } from './marial-status/child/child.component';
import { DesiredOutcomeComponent } from './desired-outcome/desired-outcome.component';
import { IntegrateBankComponent } from './integrate-bank/integrate-bank.component';
import { ManualComponent } from './manual/manual.component';
import { CompleteComponent } from './complete/complete.component';
import { NgxPlaidLinkModule } from 'ngx-plaid-link';
import { NgxPlaidLinkButtonComponent } from './integrate-bank/ngx-plaid-link-button.component';
import { LogInComponent } from './log-in/log-in.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SetupGuideRoutingModule,
        NgxPlaidLinkModule
    ],
    declarations:[
        IntroComponent,
        LocationComponent,
        MarialStatusComponent,
        MethodComponent,
        W2Component,
        WhatyoudoComponent,
        HeaderSetupComponent,
        ChildComponent,
        DesiredOutcomeComponent,
        IntegrateBankComponent,
        ManualComponent,
        LogInComponent,
        CompleteComponent,
        NgxPlaidLinkButtonComponent

    ]
})

export class SetupGuideModule{}