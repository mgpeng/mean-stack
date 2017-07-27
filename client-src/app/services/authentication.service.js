var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.user = window['user'];
        this._signinURL = 'api/auth/signin';
        this._signupURL = 'api/auth/signup';
    }
    AuthenticationService.prototype.isLoggedIn = function () {
        return (!!this.user);
    };
    AuthenticationService.prototype.signin = function (credentials) {
        var _this = this;
        var body = JSON.stringify(credentials);
        var headers = new Headers({ 'Content-Type': 'text/plain' });
        var options = new RequestOptions({ headers: headers });
        return this.http.post(this._signinURL, body, options)
            .map(function (res) { return _this.user = res.json(); })
            .catch(this.handleError);
    };
    AuthenticationService.prototype.signup = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        return this.http.post(this._signupURL, body, options)
            .map(function (res) { return _this.user = res.json(); })
            .catch(this.handleError);
    };
    AuthenticationService.prototype.handleError = function (error) {
        return Observable.throw(error.json().message || 'Server error');
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], AuthenticationService);
export { AuthenticationService };
//# sourceMappingURL=authentication.service.js.map