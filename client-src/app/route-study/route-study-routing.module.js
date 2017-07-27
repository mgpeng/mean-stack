var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { RouteStudyComponent } from './route-study.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
var routes = [
    { path: 'route-study',
        // outlet: 'product',
        component: RouteStudyComponent,
        children: [
            { path: 'rshome',
                loadChildren: './rshome/rshome.module#RSHomeModule' },
            { path: 'product',
                loadChildren: './product/product.module#ProductModule' },
        ]
    }
];
var RouteStudyRoutingModule = (function () {
    function RouteStudyRoutingModule() {
    }
    return RouteStudyRoutingModule;
}());
RouteStudyRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], RouteStudyRoutingModule);
export { RouteStudyRoutingModule };
// ,
//   { path: '**', redirectTo: '', pathMatch: 'full' }, 
//# sourceMappingURL=route-study-routing.module.js.map