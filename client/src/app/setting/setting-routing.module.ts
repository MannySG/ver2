import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultViewComponent } from './default-view/default-view.component';
import { ProfileComponent } from './profile/profile.component';
import { EmailComponent } from './email/email.component';
import { PasswordComponent } from './password/password.component';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { HelpSupportComponent } from './help-support/help-support.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PaymentsComponent } from './payments/payments.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { ContactConfirmComponent } from './contact-us/contact-confirm/contact-confirm.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { TaxInfomationComponent } from './tax-infomation/tax-infomation.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { DeactivateConfirmComponent } from './delete-account/deactivate-confirm/deactivate-confirm.component';
import { ConfimDeleteComponent } from './delete-account/confim-delete/confim-delete.component';
import { ConfirmFeedbackComponent } from './delete-account/confim-delete/confirm-feedback/confirm-feedback.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'dashboard'
        },
        children: [
            {
                path: '',
                component: DefaultViewComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'email',
                component: EmailComponent
            },
            {
                path: 'password',
                component: PasswordComponent
            },
            {
                path: 'bank-account',
                component: BankAccountComponent
            },
            {
                path: 'tax-information',
                component: TaxInfomationComponent
            },
            {
                path: 'notifications',
                component: NotificationsComponent
            },
            {
                path: 'help-support',
                component: HelpSupportComponent
            },
            {
                path: 'contact-us',
                component: ContactUsComponent
            },
            {
                path: 'contact-confirm',
                component: ContactConfirmComponent
            },
            {
                path: 'payments-report',
                component: PaymentsComponent
            },
            {
                path: 'privacy-policy',
                component: PrivacyPolicyComponent
            },
            {
                path: 'terms-conditions',
                component: TermsConditionsComponent
            },
            {
                path: 'delete-account',
                component: DeleteAccountComponent
            },
            {
                path: 'activate-confirm',
                component: DeactivateConfirmComponent
            },
            {
                path: 'confirm-delete',
                component: ConfimDeleteComponent
            },
            {
                path: 'confirm-feedback',
                component: ConfirmFeedbackComponent
            }
            
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingRoutingModule {}