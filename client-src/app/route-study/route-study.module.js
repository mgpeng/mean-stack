var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteStudyRoutingModule } from './route-study-routing.module';
import { RouteStudyComponent } from './route-study.component';
// import { RSHomeModule } from './rshome/rshome.module';
// import { ProductModule } from './product/product.module';
// import { DetailModule } from './product/detail/detail.module';
// import { ListModule } from './product/list/list.module';
// import { ItemModule } from './product/detail/item/item.module';
// import { Item2Module } from  './product/detail/item2/item2.module';
var RouteStudyModule = (function () {
    function RouteStudyModule() {
    }
    return RouteStudyModule;
}());
RouteStudyModule = __decorate([
    NgModule({
        imports: [
            BrowserModule,
            // RSHomeModule,
            // ProductModule,
            // DetailModule,
            // ListModule,
            // ItemModule,
            // Item2Module
            RouteStudyRoutingModule,
        ],
        declarations: [
            RouteStudyComponent,
        ],
        providers: []
    })
], RouteStudyModule);
export { RouteStudyModule };
//# sourceMappingURL=route-study.module.js.map