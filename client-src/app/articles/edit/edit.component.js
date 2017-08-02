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
import { Router, ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../../services/articles.service';
var EditComponent = (function () {
    function EditComponent(_router, _route, _articlesService) {
        this._router = _router;
        this._route = _route;
        this._articlesService = _articlesService;
        this.article = {};
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsObserver = this._route.params.subscribe(function (params) {
            var articleId = params['articleId'];
            _this._articlesService.read(articleId).subscribe(function (article) {
                _this.article = article;
            }, function (error) { return _this._router.navigate(['/articles']); });
        });
    };
    EditComponent.prototype.ngOnDestroy = function () {
        this.paramsObserver.unsubscribe();
    };
    EditComponent.prototype.update = function () {
        var _this = this;
        this._articlesService
            .update(this.article)
            .subscribe(function (savedArticle) { return _this._router.navigate(['/articles', savedArticle._id]); }, function (error) { return _this.errorMessage = error; });
    };
    return EditComponent;
}());
EditComponent = __decorate([
    Component({
        selector: 'edit',
        templateUrl: './edit.component.html'
    }),
    __metadata("design:paramtypes", [Router,
        ActivatedRoute,
        ArticlesService])
], EditComponent);
export { EditComponent };
//# sourceMappingURL=edit.component.js.map