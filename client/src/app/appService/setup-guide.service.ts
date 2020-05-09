import { Injectable } from '@angular/core';
import { ApiService } from './api-service';

@Injectable()

export class SetupGuideService{

    constructor(private _api: ApiService){}

    getJob(){
        return this._api.get(`job`);
    }
}