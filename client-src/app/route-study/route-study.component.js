var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var RouteStudyComponent = (function () {
    function RouteStudyComponent() {
    }
    return RouteStudyComponent;
}());
RouteStudyComponent = __decorate([
    Component({
        // moduleId: module.id,
        selector: 'route-study',
        template: "\n    <nav>\n      <a routerLink=\"rshome\" routerLinkActive=\"active\">rshome</a>\n      <a routerLink=\"product\" routerLinkActive=\"active\">product</a>\n      <a routerLink=\"product/list\" routerLinkActive=\"active\">product/list</a>\n      <a routerLink=\"product/detail\" routerLinkActive=\"active\">product/detail</a>\n      <a routerLink=\"product/detail/item\" routerLinkActive=\"active\">product/detail/item</a>\n      <a routerLink=\"product/item2\" routerLinkActive=\"active\">product/detail/item2</a>\n    </nav>\n    <router-outlet></router-outlet>\n\n  "
    })
], RouteStudyComponent);
export { RouteStudyComponent };
//# sourceMappingURL=route-study.component.js.map