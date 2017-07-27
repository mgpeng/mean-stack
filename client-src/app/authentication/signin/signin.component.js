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
var SigninComponent = (function () {
    function SigninComponent(_authenticationService, _router, _logger) {
        this._authenticationService = _authenticationService;
        this._router = _router;
        this._logger = _logger;
        this.credentials = {};
        _logger.showAllLogs();
    }
    SigninComponent.prototype.signin = function () {
        var _this = this;
        this._logger.showLastLog();
        this._authenticationService.signin(this.credentials)
            .subscribe(function (result) { return _this._router.navigate(['/']); }, function (error) { return _this.errorMessage = error; });
    };
    return SigninComponent;
}());
SigninComponent = __decorate([
    Component({
        selector: 'signin',
        templateUrl: './signin.component.html'
    }),
    __metadata("design:paramtypes", [AuthenticationService,
        Router,
        LoggerService])
], SigninComponent);
export { SigninComponent };
//# sourceMappingURL=signin.component.js.map