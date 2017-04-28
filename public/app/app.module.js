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
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var core_module_1 = require("./coremodule/core.module");
var app_routing_module_1 = require("./app-routing.module");
var authentication_module_1 = require("./authentication/authentication.module");
var home_module_1 = require("./home/home.module");
var articles_module_1 = require("./articles/articles.module");
var route_study_module_1 = require("./route-study/route-study.module");
var chat_module_1 = require("./chat/chat.module");
// import { AuthenticationService } from './services/authentication.service';  
// import { ArticlesService } from './services/articles.service';
var app_component_1 = require("./app.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule,
            core_module_1.CoreModule,
            chat_module_1.ChatModule,
            articles_module_1.ArticlesModule,
            authentication_module_1.AuthenticationModule,
            home_module_1.HomeModule,
            route_study_module_1.RouteStudyModule,
            app_routing_module_1.AppRoutingModule,
        ],
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map