var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
// export function loadDetailModule() { return DetailModule; }
// export function loadListModule() { return ListModule; }
// export function loadItem2Module() { return Item2Module; }
var routes = [
    { path: 'list',
        component: ProductComponent,
        // outlet:'product', 
        loadChildren: './list/list.module#ListModule' },
    { path: 'detail',
        component: ProductComponent,
        // outlet:'detail', 
        loadChildren: './detail/detail.module#DetailModule' },
    { path: 'item',
        // component: ProductComponent,
        // outlet:'detail', 
        loadChildren: './detail/item/item.module#ItemModule' },
    { path: 'item2',
        // component: ProductComponent,
        // outlet:'detail', 
        loadChildren: './detail/item2/item2.module#Item2Module' },
    { path: '', component: ProductComponent }
];
var ProductRouterModule = (function () {
    function ProductRouterModule() {
    }
    return ProductRouterModule;
}());
ProductRouterModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], ProductRouterModule);
export { ProductRouterModule };
//# sourceMappingURL=product.router.module.js.map