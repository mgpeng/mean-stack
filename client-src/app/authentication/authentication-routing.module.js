var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { SigninComponent } from './signin/signin.component';
// import { SigninComponent } from './signin.component';
import { SignupComponent } from './signup/signup.component';
export var AuthenticationRoutes = [{
        path: 'authentication',
        component: AuthenticationComponent,
        children: [
            { path: 'signin', component: SigninComponent },
            { path: 'signup', component: SignupComponent }
        ]
    }];
var AuthenticationRoutingModule = (function () {
    function AuthenticationRoutingModule() {
    }
    return AuthenticationRoutingModule;
}());
AuthenticationRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(AuthenticationRoutes)],
        exports: [RouterModule]
    })
], AuthenticationRoutingModule);
export { AuthenticationRoutingModule };
//# sourceMappingURL=authentication-routing.module.js.map