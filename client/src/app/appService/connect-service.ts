import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()

export class ConnectAccountService {

    constructor(
        private _api: ApiService,
        private router: Router,
        private _toar: ToastrService
    ) { }

    public loginBetter(email, password) {
        const api = `auth/login`;
        const data: any = {
            'email': email,
            'password': password,
            'osType': 'web'
        }
        this._api.post(api, data)
            .subscribe(data => {
                this.saveAccToken(data);
                this.checkSMS(data);
                this.router.navigate(['setup-guide']);

            }, err => {
                this.checkSMS(data);
                console.log(err)
            })
    }

    public registerBetter(emailRegister, passwordRegister) {
        const api = `auth/register`;
        const data: any = {
            'email': emailRegister,
            'password': passwordRegister,
            'osType': 'web'
        }
        this._api.post(api, data)
            .subscribe(
                dt => {
                    this.saveAccToken(dt);
                    this.checkSMS(data);
                    this.router.navigate(['signup/mobile'])
                }, err => {
                    this.checkSMS(data);
                    console.log(err)
                }
            )
    }

    public PhoneNumber(phoneNumber) {
        const api = `auth/sms/send-phone`;
        const data: any = {
            'phone': phoneNumber
        }
        this._api.post(api, data).subscribe(
            dt => {
                if (dt['status'] == 200) {
                    this.router.navigate(['signup/verify-code'])
                } else {
                    return false;
                }
            }
        )
    }

    public saveAccToken(data: any) {
        if (data && data['status'] == 200) {
            console.log(data);
            localStorage.setItem('_token', data['data']['accessToken']);
            localStorage.setItem('_userId', data['data']['userId'])
            return true;
        } else {
            localStorage.removeItem('_token');
            return false;
        }
    }

    checkSMS(dt) {
        if (dt['status'] == 200) {
            this._toar.success("Successfully!", dt.D)
        }
        if (dt['status'] != 200) {
            this._toar.error("Incorrect log in credentials!", dt.D)
        }
    }
}