"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var articles_component_1 = require("./articles.component");
var create_component_1 = require("./create/create.component");
var list_component_1 = require("./list/list.component");
var view_component_1 = require("./view/view.component");
var edit_component_1 = require("./edit/edit.component");
exports.ArticlesRoutes = [
    {
        path: 'articles',
        component: articles_component_1.ArticlesComponent,
        children: [
            { path: '', component: list_component_1.ListComponent },
            { path: 'create', component: create_component_1.CreateComponent },
            { path: ':articleId', component: view_component_1.ViewComponent },
            { path: ':articleId/edit', component: edit_component_1.EditComponent }
        ]
    }
];
var ArticlesRoutingModule = (function () {
    function ArticlesRoutingModule() {
    }
    return ArticlesRoutingModule;
}());
ArticlesRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(exports.ArticlesRoutes)],
        exports: [router_1.RouterModule]
    })
], ArticlesRoutingModule);
exports.ArticlesRoutingModule = ArticlesRoutingModule;
//# sourceMappingURL=articles-routing.module.js.map