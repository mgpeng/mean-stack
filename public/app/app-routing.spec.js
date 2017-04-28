"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/router/testing");
var common_1 = require("@angular/common");
var app_module_1 = require("./app.module");
var app_component_1 = require("./app.component");
var router;
// let location: SpyLocation;
var location;
describe('AppComponent Routing', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [app_module_1.AppModule, testing_2.RouterTestingModule]
        }).compileComponents();
    }));
    beforeEach(testing_1.fakeAsync(function () {
        var injector = testing_1.TestBed.createComponent(app_component_1.AppComponent).debugElement.injector;
        location = injector.get(common_1.Location);
    }));
    it('Should navigate to home', testing_1.fakeAsync(function () {
        location.go('/');
        expect(location.path()).toEqual('/');
    }));
    it('Should navigate to signin', testing_1.fakeAsync(function () {
        location.go('/authentication/signin');
        expect(location.path()).toEqual('/authentication/signin');
    }));
    it('Should navigate to signup', testing_1.fakeAsync(function () {
        location.go('/authentication/signup');
        expect(location.path()).toEqual('/authentication/signup');
    }));
});
//# sourceMappingURL=app-routing.spec.js.map