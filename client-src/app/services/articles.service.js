var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
var ArticlesService = (function () {
    // private _otherUrl='api/articles/:articleId';
    function ArticlesService(_http) {
        this._http = _http;
        this._baseUrl = 'api/articles';
    } //
    ArticlesService.prototype.create = function (article) {
        return this._http
            .post(this._baseUrl, article)
            .map(function (res) { return res.json(); })
            .catch(this.handlerError);
    };
    ArticlesService.prototype.read = function (id) {
        return this._http
            .get(this._baseUrl + "/" + id)
            .map(function (res) { res.json(); })
            .catch(this.handlerError);
    };
    ArticlesService.prototype.list = function () {
        return this._http.get(this._baseUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handlerError);
    };
    ArticlesService.prototype.update = function (article) {
        return this._http.put(this._baseUrl + "/" + article._id, article)
            .map(function (res) { return res.json(); })
            .catch(this.handlerError);
    };
    ArticlesService.prototype.delete = function (id) {
        return this._http.delete(this._baseUrl + "/" + id)
            .map(function (res) { return res.json(); })
            .catch(this.handlerError);
    };
    ArticlesService.prototype.handlerError = function (error) {
        console.error(error);
        return Observable.throw(error.json().message || 'Server error !');
    };
    return ArticlesService;
}());
ArticlesService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], ArticlesService);
export { ArticlesService };
//# sourceMappingURL=articles.service.js.map