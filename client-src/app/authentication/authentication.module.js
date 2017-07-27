var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { SigninComponent } from './signin/signin.component';
// import { SigninComponent } from './signin.component';
import { SignupComponent } from './signup/signup.component';
import { LoggerService } from './logger.service';
var AuthenticationModule = (function () {
    function AuthenticationModule() {
    }
    return AuthenticationModule;
}());
AuthenticationModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            AuthenticationRoutingModule,
        ],
        declarations: [
            AuthenticationComponent,
            SigninComponent,
            SignupComponent,
        ],
        providers: [LoggerService]
    })
], AuthenticationModule);
export { AuthenticationModule };
//# sourceMappingURL=authentication.module.js.map