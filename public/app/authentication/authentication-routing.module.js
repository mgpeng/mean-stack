"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var authentication_component_1 = require("./authentication.component");
var signin_component_1 = require("./signin/signin.component");
// import { SigninComponent } from './signin.component';
var signup_component_1 = require("./signup/signup.component");
exports.AuthenticationRoutes = [{
        path: 'authentication',
        component: authentication_component_1.AuthenticationComponent,
        children: [
            { path: 'signin', component: signin_component_1.SigninComponent },
            { path: 'signup', component: signup_component_1.SignupComponent }
        ]
    }];
var AuthenticationRoutingModule = (function () {
    function AuthenticationRoutingModule() {
    }
    return AuthenticationRoutingModule;
}());
AuthenticationRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(exports.AuthenticationRoutes)],
        exports: [router_1.RouterModule]
    })
], AuthenticationRoutingModule);
exports.AuthenticationRoutingModule = AuthenticationRoutingModule;
//# sourceMappingURL=authentication-routing.module.js.map