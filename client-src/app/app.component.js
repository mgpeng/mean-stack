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
import '../style.scss';
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.name = 'Angular';
        console.log("cp1");
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'app',
        template: "\n            <div> I changed back something</div>\n            <a routerLink=\"route-study\" class=\"strong\">Route study</a>\n            <a routerLink=\"home\" class=\"strong\">Home</a>\n            <a routerLink=\"authentication\" class=\"strong\">Authentication</a>\n            <a routerLink=\"chat\" class=\"strong\">Chat</a>\n            <div class=\"highlight\">\n               <router-outlet></router-outlet>\n            </div>\n  ",
        styleUrls: ['./app.component.scss']
    }),
    __metadata("design:paramtypes", [Router])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map