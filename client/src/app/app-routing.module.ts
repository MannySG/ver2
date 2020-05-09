import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { ContactComponent } from './home/contact/contact.component';
import { WhyBetterComponent } from './home/why-better/why-better.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { SetupGuideComponent } from './setup-guide/setup-guide.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { UserActive } from './appService/authenticate.-service';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: "home",
        pathMatch: 'full',
    },
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'home',
                component: DashboardComponent
            },
            {
                path: 'about-us',
                component: AboutUsComponent
            },
            {
                path: 'why-better',
                component: WhyBetterComponent
            },
        ]
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'signup',
        component: CreateAccountComponent,
        children: [
            {
                path: '',
                loadChildren: './create-account/create-account.module#CreateAccountModule'
            },
        ]
    },
    {
        path: 'setup-guide',
        canActivate: [UserActive],
        component: SetupGuideComponent,
        children: [
            {
                path: '',
                loadChildren: './setup-guide/setup-guide.module#SetupGuideModule'
            }
        ]
    },
    {
        path: '',
        canActivate: [UserActive],
        component: SettingComponent,
        children: [
          
            {
                path: 'dashboard',
                loadChildren: './setting/setting.module#SettingModule'
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
