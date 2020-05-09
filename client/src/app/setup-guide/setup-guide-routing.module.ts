import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { LocationComponent } from './location/location.component';
import { WhatyoudoComponent } from './whatyoudo/whatyoudo.component';
import { MethodComponent } from './method/method.component';
import { W2Component } from './w2/w2.component';
import { MarialStatusComponent } from './marial-status/marial-status.component';
import { DesiredOutcomeComponent } from './desired-outcome/desired-outcome.component';
import { IntegrateBankComponent } from './integrate-bank/integrate-bank.component';
import { ManualComponent } from './manual/manual.component';
import { CompleteComponent } from './complete/complete.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'setup-guide'
        },
        children: [
            {
                path: "",
                component: IntroComponent
            },
            {
                path: 'location',
                component: LocationComponent
            },
            {
                path: 'what-you-do',
                component: WhatyoudoComponent
            },
            {
                path: 'method',
                component: MethodComponent
            },
            {
                path: 'w2',
                component: W2Component
            },
            {
                path : 'marital-status',
                component : MarialStatusComponent
            },
            {
                path : 'desired-outcome',
                component : DesiredOutcomeComponent
            },
            {
                path : 'integrate-bank',
                component : IntegrateBankComponent
            },
            {
                path : 'manual',
                component : ManualComponent
            },            
            {
                path : 'log-in',
                component : LogInComponent
            },
           {
                path : 'setup-complete',
                component : CompleteComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SetupGuideRoutingModule {

}