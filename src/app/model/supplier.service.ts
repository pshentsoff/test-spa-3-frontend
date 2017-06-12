import {Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import {Supplier} from './supplier';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class SupplierService {
    private url = '//effect.spa/api/suppliers';

    constructor (private http: Http) {}

    public updateOrCreate(data: Supplier): Observable<any> {        
        if(data.suppliers_id) {
            // обновить
            var url = this.url + '/' + data.suppliers_id;
            return this.http.put(url, data)
                .map(this.extractData)
                .catch(this.handleError);
        } else {
            // создать
            return this.http.post(this.url, data)
                .map(this.extractData)
                .catch(this.handleError);
        }
    }

    /**
     * Заполняем объект данными
     * @param obj 
     * @param data 
     */
    public fill(obj: Supplier, data: any){
        obj.name = data['name'];
        obj.suppliers_id = data['suppliers_id'];
    }

    /**
     * Прочитать запись по ID
     * @param id 
     */
    public getSupplier(id): Observable<any>{
        return this.http.get(this.url + '/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    }

    /**
     * Получить список 
     */
    public getSuppliers(): Observable<any> {
        return this.http.get(this.url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    /**
     * Удалить запись
     * @param id 
     */
    public remove(id): Observable<any>{
        return this.http.delete(this.url + '/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError (error: Response | any) {
        let errMsg: string;
        
        if (error instanceof Response) {
            const body = error.json() || '';
            errMsg = JSON.stringify(body);           
        } else {
            errMsg = error.toString();
        }
        
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}