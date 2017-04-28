"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var route_study_routing_module_1 = require("./route-study-routing.module");
var route_study_component_1 = require("./route-study.component");
var RouteStudyModule = (function () {
    function RouteStudyModule() {
    }
    return RouteStudyModule;
}());
RouteStudyModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            route_study_routing_module_1.RouteStudyRoutingModule
        ],
        declarations: [
            route_study_component_1.RouteStudyComponent
        ],
        providers: []
    })
], RouteStudyModule);
exports.RouteStudyModule = RouteStudyModule;
//# sourceMappingURL=route-study.module.js.map