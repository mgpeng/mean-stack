import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
 
@Injectable()
export class ArticlesService {
    private _baseUrl='api/articles';
    // private _otherUrl='api/articles/:articleId';
    constructor(private _http:Http) {}
    create(article:any):Observable<any> {
        return this._http
                   .post(this._baseUrl,article)
                   .map((res:Response) => res.json())
                   .catch(this.handlerError);
    }
    read(id:String):Observable<any> {
        return this._http
                   .get(`${this._baseUrl}/${id}`)
                   .map((res:Response) => {res.json();})
                   .catch(this.handlerError);
    }
    list():Observable<Array<any>> {
        return this._http.get(this._baseUrl)
                         .map((res:Response) => res.json())
                         .catch(this.handlerError);
    }
    update(article:any):Observable<any> {
        return this._http.put(`${this._baseUrl}/${article._id}`,article)
                         .map((res:Response) => res.json())
                         .catch(this.handlerError);
    }
    delete(id:String):Observable<any> {
        return this._http.delete(`${this._baseUrl}/${id}`)
                         .map((res:Response) => res.json())
                         .catch(this.handlerError);
    }
    handlerError(error:Response) {
        console.error(error);
        return Observable.throw(error.json().message || 'Server error !');
    }
}