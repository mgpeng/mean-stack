"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item2_router_module_1 = require("./item2.router.module");
var item2_component_1 = require("./item2.component");
var Item2Module = (function () {
    function Item2Module() {
    }
    return Item2Module;
}());
Item2Module = __decorate([
    core_1.NgModule({
        imports: [
            item2_router_module_1.Item2RouterModule
        ],
        declarations: [item2_component_1.Item2Component],
        providers: []
    })
], Item2Module);
exports.Item2Module = Item2Module;
//# sourceMappingURL=item2.module.js.map