var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { LoggerService } from '../logger.service';
var SignupComponent = (function () {
    function SignupComponent(_authenticationService, _router, _loger) {
        this._authenticationService = _authenticationService;
        this._router = _router;
        this._loger = _loger;
        this.user = {};
    }
    SignupComponent.prototype.signup = function () {
        var _this = this;
        this._loger.showLastLog();
        this._authenticationService.signup(this.user)
            .subscribe(function (result) { return _this._router.navigate(['/']); }, function (error) { return _this.errorMessage = error; });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    Component({
        selector: 'signup',
        templateUrl: './signup.component.html',
        providers: [LoggerService]
    }),
    __metadata("design:paramtypes", [AuthenticationService,
        Router,
        LoggerService])
], SignupComponent);
export { SignupComponent };
//# sourceMappingURL=signup.component.js.map