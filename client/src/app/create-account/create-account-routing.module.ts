import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobileNumberComponent } from './mobile-number/mobile-number.component';
import { VerifyCodeComponent } from './verify-code/verify-code.component';
import { CreateAccountComponent } from './create-account.component';
import { AccountComponent } from './account/account.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title : 'signup'
        },
        children: [
            {
                path: '',
                component: AccountComponent
            },
            {
                path: 'mobile',
                component: MobileNumberComponent
            },
            {
                path: 'verify-code',
                component: VerifyCodeComponent
            },
            {
                path: 'signin',
                component: SigninComponent
            }
        ]

    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AccountRoutingModule {}