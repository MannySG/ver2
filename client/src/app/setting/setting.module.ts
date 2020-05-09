import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DefaultViewComponent } from './default-view/default-view.component';
import { SettingRoutingModule } from './setting-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { EmailComponent } from './email/email.component';
import { PasswordComponent } from './password/password.component';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { TaxInfomationComponent } from './tax-infomation/tax-infomation.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { HelpSupportComponent } from './help-support/help-support.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PaymentsComponent } from './payments/payments.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { ContactConfirmComponent } from './contact-us/contact-confirm/contact-confirm.component';
import { DeactivateConfirmComponent } from './delete-account/deactivate-confirm/deactivate-confirm.component';
import { ConfimDeleteComponent } from './delete-account/confim-delete/confim-delete.component';
import { ConfirmFeedbackComponent } from './delete-account/confim-delete/confirm-feedback/confirm-feedback.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SettingRoutingModule
    ],
    declarations: [
        DefaultViewComponent,
        ProfileComponent,
        EmailComponent,
        PasswordComponent,
        BankAccountComponent,
        TaxInfomationComponent,
        NotificationsComponent,
        HelpSupportComponent,
        ContactUsComponent,
        PaymentsComponent,
        PrivacyPolicyComponent,
        TermsConditionsComponent,
        DeleteAccountComponent,
        ContactConfirmComponent,
        DeactivateConfirmComponent,
        ConfimDeleteComponent,
        ConfirmFeedbackComponent
    ]
})

export class SettingModule {

}