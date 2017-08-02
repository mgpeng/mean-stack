var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from '../../services/articles.service';
var CreateComponent = (function () {
    function CreateComponent(_router, _injector, _articlesService) {
        this._router = _router;
        this._injector = _injector;
        this._articlesService = _articlesService;
        this.article = {};
        this.errorMessage = '';
        debugger;
        console.log('cp2 inside CreateComponent');
        console.log(_injector);
    }
    CreateComponent.prototype.create = function () {
        var _this = this;
        this._articlesService
            .create(this.article)
            .subscribe(function (createdArticle) { return _this._router.navigate(['/articles', createdArticle._id]); }, function (error) { return _this.errorMessage = error; });
    };
    return CreateComponent;
}());
CreateComponent = __decorate([
    Component({
        selector: 'create',
        templateUrl: './create.component.html'
    }),
    __metadata("design:paramtypes", [Router, Injector,
        ArticlesService])
], CreateComponent);
export { CreateComponent };
//# sourceMappingURL=create.component.js.map