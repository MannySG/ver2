import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private subject = new Subject<any>();

  constructor(private _api: ApiService) { }

  getJob(){
    return this._api.get(`job`)
  }

  updateProfile(id: string, data?:any){
    return this._api.put(`user/${id}`, data)
  }
  changEmail(data?: any){
    return this._api.post(`user/change-email`, data);
  }
  changePassWord(data?: any){
    return this._api.put(`user/password/change`, data);
  }

  deleteAccount(id: string) {
    return this._api.delete(`user/${id}`);
  }

  deActiveAccount(id: string, lock: boolean, data?:any){
    return this._api.put(`user/admin/lock/${id}?lock=${lock}`, data);
  }

  //active menu
  sendActiveBtn(btn: number){
    this.subject.next({ btn: btn });
  }
  clearActiveBtn(){
    this.subject.next();
  }
  getActiveBtn(): Observable<any>{
    return this.subject.asObservable();
  }
}
