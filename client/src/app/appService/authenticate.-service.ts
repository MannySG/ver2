import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class UserActive implements CanActivate{
    
    constructor(private router: Router){

    }
    canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
        if (localStorage.getItem('_token')) {
            return true;
        }
        this.router.navigate(['signup/signin']);
        return false;
    }
}