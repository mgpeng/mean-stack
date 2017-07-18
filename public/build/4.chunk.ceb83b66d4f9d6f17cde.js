webpackJsonp([4],{

/***/ 697:
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__(3);
var test_service_1 = __webpack_require__(693);
var ListComponent = (function () {
    function ListComponent(_ts) {
        this._ts = _ts;
        _ts;
    }
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        // moduleId: module.id,
        selector: 'my-product-list',
        template: "\n    <div>The route is \"product/list\".</div>\n  "
    }),
    __metadata("design:paramtypes", [test_service_1.TestService])
], ListComponent);
exports.ListComponent = ListComponent;


/***/ }),

/***/ 706:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var list_router_module_1 = __webpack_require__(707);
var list_component_1 = __webpack_require__(697);
var ListModule = (function () {
    function ListModule() {
    }
    return ListModule;
}());
ListModule = __decorate([
    core_1.NgModule({
        imports: [
            list_router_module_1.ListRouterModule
        ],
        declarations: [list_component_1.ListComponent],
        providers: []
    })
], ListModule);
exports.ListModule = ListModule;


/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(3);
var router_1 = __webpack_require__(18);
var list_component_1 = __webpack_require__(697);
var routes = [
    { path: '',
        outlet: 'product',
        component: list_component_1.ListComponent }
];
var ListRouterModule = (function () {
    function ListRouterModule() {
    }
    return ListRouterModule;
}());
ListRouterModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], ListRouterModule);
exports.ListRouterModule = ListRouterModule;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3JvdXRlLXN0dWR5L3Byb2R1Y3QvbGlzdC9saXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3JvdXRlLXN0dWR5L3Byb2R1Y3QvbGlzdC9saXN0Lm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3JvdXRlLXN0dWR5L3Byb2R1Y3QvbGlzdC9saXN0LnJvdXRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBMEM7QUFDMUMsOENBQThDO0FBUzlDLElBQWEsYUFBYTtJQUN4Qix1QkFBb0IsR0FBZTtRQUFmLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDakMsR0FBRyxDQUFDO0lBQ04sQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQztBQUpZLGFBQWE7SUFQekIsZ0JBQVMsQ0FBQztRQUNULHVCQUF1QjtRQUN2QixRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFFBQVEsRUFBRSxxREFFVDtLQUNGLENBQUM7cUNBRXdCLDBCQUFXO0dBRHhCLGFBQWEsQ0FJekI7QUFKWSxzQ0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWMUIsb0NBQThDO0FBRTlDLG9EQUF3RDtBQUN4RCxnREFBeUQ7QUFTekQsSUFBYSxVQUFVO0lBQXZCO0lBQTBCLENBQUM7SUFBRCxpQkFBQztBQUFELENBQUM7QUFBZCxVQUFVO0lBUHRCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHFDQUFnQjtTQUNqQjtRQUNELFlBQVksRUFBRSxDQUFDLDhCQUFhLENBQUM7UUFDN0IsU0FBUyxFQUFFLEVBQUc7S0FDZixDQUFDO0dBQ1csVUFBVSxDQUFJO0FBQWQsZ0NBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWnZCLG9DQUFxRDtBQUNyRCx1Q0FBdUQ7QUFFdkQsZ0RBQXlEO0FBRXpELElBQU0sTUFBTSxHQUFXO0lBQ3JCLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDUixNQUFNLEVBQUUsU0FBUztRQUNqQixTQUFTLEVBQUUsOEJBQWEsRUFBRTtDQUM3QixDQUFDO0FBTUYsSUFBYSxnQkFBZ0I7SUFBN0I7SUFBK0IsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQztBQUFuQixnQkFBZ0I7SUFKNUIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUUscUJBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUU7UUFDMUMsT0FBTyxFQUFFLENBQUUscUJBQVksQ0FBRTtLQUMxQixDQUFDO0dBQ1csZ0JBQWdCLENBQUc7QUFBbkIsNENBQWdCIiwiZmlsZSI6IjQuY2h1bmsuY2ViODNiNjZkNGY5ZDZmMTdjZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRlc3RTZXJ2aWNlIH0gZnJvbSAnLi4vdGVzdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbXktcHJvZHVjdC1saXN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2PlRoZSByb3V0ZSBpcyBcInByb2R1Y3QvbGlzdFwiLjwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF90czpUZXN0U2VydmljZSl7XG4gICAgX3RzO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L2FuZ3VsYXIyLXJvdXRlci1sb2FkZXIvc3JjIS4vcHVibGljL2FwcC9yb3V0ZS1zdHVkeS9wcm9kdWN0L2xpc3QvbGlzdC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExpc3RSb3V0ZXJNb2R1bGUgfSBmcm9tICcuL2xpc3Qucm91dGVyLm1vZHVsZSc7XG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gICAgICAgICBmcm9tICcuL2xpc3QuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIExpc3RSb3V0ZXJNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbTGlzdENvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogWyBdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RNb2R1bGUgeyB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L2FuZ3VsYXIyLXJvdXRlci1sb2FkZXIvc3JjIS4vcHVibGljL2FwcC9yb3V0ZS1zdHVkeS9wcm9kdWN0L2xpc3QvbGlzdC5tb2R1bGUudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gICAgICAgICBmcm9tICcuL2xpc3QuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHsgcGF0aDogJycsXG4gICAgb3V0bGV0OiAncHJvZHVjdCcsIFxuICAgIGNvbXBvbmVudDogTGlzdENvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbIFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpIF0sXG4gIGV4cG9ydHM6IFsgUm91dGVyTW9kdWxlIF1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFJvdXRlck1vZHVsZSB7fVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9hbmd1bGFyMi1yb3V0ZXItbG9hZGVyL3NyYyEuL3B1YmxpYy9hcHAvcm91dGUtc3R1ZHkvcHJvZHVjdC9saXN0L2xpc3Qucm91dGVyLm1vZHVsZS50cyJdLCJzb3VyY2VSb290IjoiIn0=