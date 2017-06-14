import {Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import {Goods} from './goods';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';


@Injectable()
export class GoodsService {
    private url = '//effect.spa/api/goods';

    constructor (private http: Http) {}

    public updateOrCreate(data: Goods): Observable<any> {        
        if(data.goods_id) {
            // обновить
            var url = this.url + '/' + data.goods_id;
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
    public fill(obj: Goods, data: any){
        obj.goods_id = data['goods_id'];
        obj.name = data['name']; // Название
        obj.code = data['code']; // Артикул
        obj.price = data['price']; // Цена
        obj.price_date = data['price_date']; // Дата прайса        
        obj.suppliers_id = data['suppliers_id'];
    }

    /**
     * Прочитать запись по ID
     * @param id 
     */
    public getGoods(id): Observable<any>{
        return this.http.get(this.url + '/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    }

    /**
     * Получить список 
     */
    public getGoodsList(): Observable<any> {
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