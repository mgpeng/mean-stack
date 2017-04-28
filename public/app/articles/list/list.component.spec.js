"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Rx_1 = require("rxjs/Rx");
var core_1 = require("@angular/core");
var testing_1 = require("@angular/core/testing");
var articles_service_1 = require("../../services/articles.service");
var list_component_1 = require("./list.component");
var MockArticlesService = (function () {
    function MockArticlesService() {
        this.articles = [{
                _id: '12345678',
                title: 'An Article about MEAN',
                content: 'MEAN rocks!',
                created: new Date(),
                creator: {
                    fullName: 'John Doe'
                }
            }];
    }
    MockArticlesService.prototype.list = function () {
        return Rx_1.Observable.of(this.articles);
    };
    return MockArticlesService;
}());
;
var RouterLinkStubDirective = (function () {
    function RouterLinkStubDirective() {
        this.navigatedTo = null;
    }
    RouterLinkStubDirective.prototype.onClick = function () {
        this.navigatedTo = this.linkParams;
    };
    return RouterLinkStubDirective;
}());
__decorate([
    core_1.Input('routerLink'),
    __metadata("design:type", Object)
], RouterLinkStubDirective.prototype, "linkParams", void 0);
RouterLinkStubDirective = __decorate([
    core_1.Directive({
        selector: '[routerLink]',
        host: {
            '(click)': 'onClick()'
        }
    })
], RouterLinkStubDirective);
exports.RouterLinkStubDirective = RouterLinkStubDirective;
describe('List component tests', function () {
    var componentFixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [list_component_1.ListComponent, RouterLinkStubDirective],
            providers: [{ provide: articles_service_1.ArticlesService, useClass: MockArticlesService }]
        }).compileComponents();
    }));
    beforeEach(testing_1.fakeAsync(function () {
        componentFixture = testing_1.TestBed.createComponent(list_component_1.ListComponent);
    }));
    it('Should render list', function () {
        componentFixture.detectChanges();
        var mockArticleService = new MockArticlesService();
        var listComponentElement = componentFixture.nativeElement;
        var articleElements = listComponentElement.querySelectorAll('li');
        var articleElement = articleElements[0];
        var articleTitleElement = articleElement.querySelector('a');
        var articleContentElement = articleElement.querySelector('p');
        var mockArticleList = mockArticleService.articles;
        var mockArticle = mockArticleList[0];
        var mockArticleTitle = mockArticle.title;
        var mockArticleContent = mockArticle.content;
        expect(articleElements.length).toBe(mockArticleList.length);
        expect(articleTitleElement.innerHTML).toBe(mockArticleTitle);
        expect(articleContentElement.innerHTML).toBe(mockArticleContent);
    });
});
//# sourceMappingURL=list.component.spec.js.map