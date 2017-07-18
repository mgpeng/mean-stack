webpackJsonp([5],{

/***/ 696:
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
var Item2Component = (function () {
    function Item2Component(_ts) {
        this._ts = _ts;
        console.log('In item2');
        _ts;
    }
    return Item2Component;
}());
Item2Component = __decorate([
    core_1.Component({
        // moduleId: module.id,
        selector: 'my-product-detail-item2',
        template: "\n    <div>The route is \"product/detail/item2\".</div>\n  "
    }),
    __metadata("design:paramtypes", [test_service_1.TestService])
], Item2Component);
exports.Item2Component = Item2Component;


/***/ }),

/***/ 704:
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
var item2_router_module_1 = __webpack_require__(705);
var item2_component_1 = __webpack_require__(696);
var Item2Module = (function () {
    function Item2Module() {
    }
    return Item2Module;
}());
Item2Module = __decorate([
    core_1.NgModule({
        imports: [
            item2_router_module_1.Item2RouterModule
        ],
        declarations: [item2_component_1.Item2Component],
        providers: []
    })
], Item2Module);
exports.Item2Module = Item2Module;


/***/ }),

/***/ 705:
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
var item2_component_1 = __webpack_require__(696);
var routes = [
    { path: '',
        // outlet: 'product', 
        component: item2_component_1.Item2Component }
];
var Item2RouterModule = (function () {
    function Item2RouterModule() {
    }
    return Item2RouterModule;
}());
Item2RouterModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], Item2RouterModule);
exports.Item2RouterModule = Item2RouterModule;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3JvdXRlLXN0dWR5L3Byb2R1Y3QvZGV0YWlsL2l0ZW0yL2l0ZW0yLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3JvdXRlLXN0dWR5L3Byb2R1Y3QvZGV0YWlsL2l0ZW0yL2l0ZW0yLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3JvdXRlLXN0dWR5L3Byb2R1Y3QvZGV0YWlsL2l0ZW0yL2l0ZW0yLnJvdXRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBMEM7QUFDMUMsOENBQWlEO0FBUWpELElBQWEsY0FBYztJQUN6Qix3QkFBb0IsR0FBZTtRQUFmLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2QixHQUFHLENBQUM7SUFDTixDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDO0FBTFksY0FBYztJQVAxQixnQkFBUyxDQUFDO1FBQ1QsdUJBQXVCO1FBQ3ZCLFFBQVEsRUFBRSx5QkFBeUI7UUFDbkMsUUFBUSxFQUFFLDZEQUVUO0tBQ0YsQ0FBQztxQ0FFd0IsMEJBQVc7R0FEeEIsY0FBYyxDQUsxQjtBQUxZLHdDQUFjOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1QzQixvQ0FBOEM7QUFFOUMscURBQTBEO0FBQzFELGlEQUEyRDtBQVMzRCxJQUFhLFdBQVc7SUFBeEI7SUFBMkIsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FBQztBQUFmLFdBQVc7SUFQdkIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsdUNBQWlCO1NBQ2xCO1FBQ0QsWUFBWSxFQUFFLENBQUMsZ0NBQWMsQ0FBQztRQUM5QixTQUFTLEVBQUUsRUFBRztLQUNmLENBQUM7R0FDVyxXQUFXLENBQUk7QUFBZixrQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaeEIsb0NBQXFEO0FBQ3JELHVDQUF1RDtBQUV2RCxpREFBMkQ7QUFFM0QsSUFBTSxNQUFNLEdBQVc7SUFDckIsRUFBRSxJQUFJLEVBQUUsRUFBRTtRQUNSLHNCQUFzQjtRQUN0QixTQUFTLEVBQUUsZ0NBQWMsRUFBRTtDQUM5QixDQUFDO0FBTUYsSUFBYSxpQkFBaUI7SUFBOUI7SUFBZ0MsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FBQztBQUFwQixpQkFBaUI7SUFKN0IsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUUscUJBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUU7UUFDMUMsT0FBTyxFQUFFLENBQUUscUJBQVksQ0FBRTtLQUMxQixDQUFDO0dBQ1csaUJBQWlCLENBQUc7QUFBcEIsOENBQWlCIiwiZmlsZSI6IjUuY2h1bmsuY2ViODNiNjZkNGY5ZDZmMTdjZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRlc3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdGVzdC5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICAvLyBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ215LXByb2R1Y3QtZGV0YWlsLWl0ZW0yJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2PlRoZSByb3V0ZSBpcyBcInByb2R1Y3QvZGV0YWlsL2l0ZW0yXCIuPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgSXRlbTJDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF90czpUZXN0U2VydmljZSl7XG4gICBjb25zb2xlLmxvZygnSW4gaXRlbTInKTtcbiAgICBfdHM7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL34vYW5ndWxhcjItcm91dGVyLWxvYWRlci9zcmMhLi9wdWJsaWMvYXBwL3JvdXRlLXN0dWR5L3Byb2R1Y3QvZGV0YWlsL2l0ZW0yL2l0ZW0yLmNvbXBvbmVudC50cyIsImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSXRlbTJSb3V0ZXJNb2R1bGUgfSBmcm9tICcuL2l0ZW0yLnJvdXRlci5tb2R1bGUnO1xuaW1wb3J0IHsgSXRlbTJDb21wb25lbnQgfSAgICAgICAgIGZyb20gJy4vaXRlbTIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEl0ZW0yUm91dGVyTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0l0ZW0yQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbIF1cbn0pXG5leHBvcnQgY2xhc3MgSXRlbTJNb2R1bGUgeyB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L2FuZ3VsYXIyLXJvdXRlci1sb2FkZXIvc3JjIS4vcHVibGljL2FwcC9yb3V0ZS1zdHVkeS9wcm9kdWN0L2RldGFpbC9pdGVtMi9pdGVtMi5tb2R1bGUudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBJdGVtMkNvbXBvbmVudCB9ICAgICAgICAgZnJvbSAnLi9pdGVtMi5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgeyBwYXRoOiAnJywgXG4gICAgLy8gb3V0bGV0OiAncHJvZHVjdCcsIFxuICAgIGNvbXBvbmVudDogSXRlbTJDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogWyBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKSBdLFxuICBleHBvcnRzOiBbIFJvdXRlck1vZHVsZSBdXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW0yUm91dGVyTW9kdWxlIHt9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L2FuZ3VsYXIyLXJvdXRlci1sb2FkZXIvc3JjIS4vcHVibGljL2FwcC9yb3V0ZS1zdHVkeS9wcm9kdWN0L2RldGFpbC9pdGVtMi9pdGVtMi5yb3V0ZXIubW9kdWxlLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==