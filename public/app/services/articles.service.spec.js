"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/Rx");
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/http/testing");
var http_1 = require("@angular/http");
var articles_service_1 = require("./articles.service");
var backend;
var service;
var mockArticle = {
    title: 'An Article about MEAN',
    content: 'MEAN rocks!',
    creator: {
        fullName: 'John Doe'
    }
};
describe('Articles service tests', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [http_1.HttpModule],
            providers: [
                articles_service_1.ArticlesService,
                { provide: http_1.XHRBackend, useClass: testing_2.MockBackend }
            ]
        })
            .compileComponents();
    }));
    beforeEach(testing_1.inject([http_1.Http, http_1.XHRBackend], function (_http, _mockBackend) {
        backend = _mockBackend;
        service = new articles_service_1.ArticlesService(_http);
    }));
    it('Should create a single article', function (done) {
        var options = new http_1.ResponseOptions({ status: 200, body: mockArticle });
        var response = new http_1.Response(options);
        backend.connections.subscribe(function (connection) { return connection.mockRespond(response); });
        service.create(mockArticle).do(function (article) {
            expect(article).toBeDefined();
            expect(article.title).toEqual(mockArticle.title);
            expect(article.content).toEqual(mockArticle.content);
            done();
        }).toPromise();
    });
});
//# sourceMappingURL=articles.service.spec.js.map