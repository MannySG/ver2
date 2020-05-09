import { Injectable } from '@angular/core';
import { ApiService } from './api-service';

@Injectable()
export class PlaidLinkService{

    constructor(private _api: ApiService){}

    getBank(id: string){
        return this._api.get(`plaid/${id}`)
    }

    unLink(id: string, body?: any){
        return this._api.post(`plaid/unlink/${id}`, body)
    }
}