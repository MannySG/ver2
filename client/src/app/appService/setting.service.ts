import { Injectable } from '@angular/core';
import { ApiService } from './api-service';

@Injectable()

export class SettingService{

    constructor(private _api: ApiService){}

    helpSupport(){
        return this._api.get(`support`);
    }
}