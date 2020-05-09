import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError, first } from 'rxjs/operators';
import { error } from 'util';

@Injectable()

export class ApiService {
    private env: string;
    constructor(private http: HttpClient) {
        this.env = environment.apiUrl;
    }

    public mapResponseDefault(res: Response): any | null {
        let out = null;
        try {
            out = res.json();
        } catch (e) {
        }
        return out;
    };

    public get(pathApi: string, ) {
        const _token = localStorage.getItem('_token');
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${_token}`
            })
        }
        return this.http.get(`${this.env}${pathApi}`, options)
    }

    public post(pathApi: string, body: string, mapResponse?: any) {
        const _token = localStorage.getItem('_token');
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${_token}`
            })
        }
        if (mapResponse && mapResponse !== 0 && typeof mapResponse !== 'function')
            mapResponse = 0;
        if (!mapResponse || mapResponse === 0) mapResponse = this.mapResponseDefault;
        return this.http.post(`${this.env}${pathApi}`, body, options)
    }

    public delete(pathApi: string) {
        const _token = localStorage.getItem('_token');
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${_token}`
            })
        }
        return this.http.delete(`${this.env}${pathApi}`, options)
    }

    public put(pathApi: string, body?: any) {
        const _token = localStorage.getItem('_token');
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${_token}`
            })
        }
        return this.http.put(`${this.env}${pathApi}`, body, options)
    }
}