"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var TestComponent = (function () {
    function TestComponent() {
        this.shouldShow = true;
    }
    return TestComponent;
}());
TestComponent = __decorate([
    core_1.Component({
        template: "<ul>\n    <li *ngIf=\"shouldShow\" name=\"One\">1</li>\n    <li *ngIf=\"!shouldShow\" name=\"Two\">2</li>\n  </ul>"
    })
], TestComponent);
describe('ngIf tests', function () {
    var componentFixture;
    beforeEach(function () {
        componentFixture = testing_1.TestBed.configureTestingModule({
            declarations: [TestComponent]
        }).createComponent(TestComponent);
    });
    it('It should render the list properly', function () {
        componentFixture.detectChanges();
        var listItems = componentFixture.debugElement.queryAll(platform_browser_1.By.css('li'));
        expect(listItems.length).toBe(1);
        expect(listItems[0].attributes['name']).toBe('One');
    });
    it('It should rerender the list properly', function () {
        componentFixture.componentInstance.shouldShow = false;
        componentFixture.detectChanges();
        var listItems = componentFixture.debugElement.queryAll(platform_browser_1.By.css('li'));
        expect(listItems.length).toBe(1);
        expect(listItems[0].attributes['name']).toBe('Two');
    });
});
//# sourceMappingURL=directive-ngif.spec.js.map