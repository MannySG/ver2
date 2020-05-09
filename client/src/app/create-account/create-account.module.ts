import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountRoutingModule } from './create-account-routing.module';
import { AccountComponent } from './account/account.component';
import { MobileNumberComponent } from './mobile-number/mobile-number.component';
import { VerifyCodeComponent } from './verify-code/verify-code.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        AccountRoutingModule,
    ],
    declarations: [
        AccountComponent,
        MobileNumberComponent,
        VerifyCodeComponent,
        SigninComponent
    ]
})

export class CreateAccountModule{}