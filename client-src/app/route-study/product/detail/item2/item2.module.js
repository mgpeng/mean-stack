var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { Item2RouterModule } from './item2.router.module';
import { Item2Component } from './item2.component';
var Item2Module = (function () {
    function Item2Module() {
    }
    return Item2Module;
}());
Item2Module = __decorate([
    NgModule({
        imports: [
            Item2RouterModule
        ],
        declarations: [Item2Component],
        providers: []
    })
], Item2Module);
export { Item2Module };
//# sourceMappingURL=item2.module.js.map