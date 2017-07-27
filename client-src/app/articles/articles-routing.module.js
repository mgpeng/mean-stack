var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
export var ArticlesRoutes = [
    {
        path: 'articles',
        component: ArticlesComponent,
        children: [
            { path: '', component: ListComponent },
            { path: 'create', component: CreateComponent },
            { path: ':articleId', component: ViewComponent },
            { path: ':articleId/edit', component: EditComponent }
        ]
    }
];
var ArticlesRoutingModule = (function () {
    function ArticlesRoutingModule() {
    }
    return ArticlesRoutingModule;
}());
ArticlesRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(ArticlesRoutes)],
        exports: [RouterModule]
    })
], ArticlesRoutingModule);
export { ArticlesRoutingModule };
//# sourceMappingURL=articles-routing.module.js.map