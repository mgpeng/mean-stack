var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
var ListComponent = (function () {
    function ListComponent(_articlesService) {
        this._articlesService = _articlesService;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._articlesService.list().subscribe(function (articles) { return _this.articles = articles; });
    };
    return ListComponent;
}());
ListComponent = __decorate([
    Component({
        selector: 'list',
        templateUrl: './list.component.html'
    }),
    __metadata("design:paramtypes", [ArticlesService])
], ListComponent);
export { ListComponent };
//# sourceMappingURL=list.component.js.map