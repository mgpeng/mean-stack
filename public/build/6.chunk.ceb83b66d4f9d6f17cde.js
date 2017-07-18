webpackJsonp([6],{

/***/ 695:
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
var ItemComponent = (function () {
    function ItemComponent() {
        console.log('inside item component');
    }
    return ItemComponent;
}());
ItemComponent = __decorate([
    core_1.Component({
        // moduleId: module.id,
        selector: 'my-product-detail-item',
        template: "\n    <div>The route is \"product/detail/item\".</div>\n  "
    }),
    __metadata("design:paramtypes", [])
], ItemComponent);
exports.ItemComponent = ItemComponent;


/***/ }),

/***/ 702:
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
var item_router_module_1 = __webpack_require__(703);
var item_component_1 = __webpack_require__(695);
var ItemModule = (function () {
    function ItemModule() {
        console.log('inside ItemModule');
    }
    return ItemModule;
}());
ItemModule = __decorate([
    core_1.NgModule({
        imports: [
            item_router_module_1.ItemRouterModule
        ],
        declarations: [item_component_1.ItemComponent],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], ItemModule);
exports.ItemModule = ItemModule;


/***/ }),

/***/ 703:
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
var router_1 = __webpack_require__(18);
var item_component_1 = __webpack_require__(695);
var routes = [
    { path: '',
        // outlet: 'detail', 
        component: item_component_1.ItemComponent }
];
var ItemRouterModule = (function () {
    function ItemRouterModule() {
        console.log("inside ItemRouterModule");
    }
    return ItemRouterModule;
}());
ItemRouterModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    }),
    __metadata("design:paramtypes", [])
], ItemRouterModule);
exports.ItemRouterModule = ItemRouterModule;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3JvdXRlLXN0dWR5L3Byb2R1Y3QvZGV0YWlsL2l0ZW0vaXRlbS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9yb3V0ZS1zdHVkeS9wcm9kdWN0L2RldGFpbC9pdGVtL2l0ZW0ubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3B1YmxpYy9hcHAvcm91dGUtc3R1ZHkvcHJvZHVjdC9kZXRhaWwvaXRlbS9pdGVtLnJvdXRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBMEM7QUFTMUMsSUFBYSxhQUFhO0lBQ3hCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUM7QUFKWSxhQUFhO0lBUHpCLGdCQUFTLENBQUM7UUFDVCx1QkFBdUI7UUFDdkIsUUFBUSxFQUFFLHdCQUF3QjtRQUNsQyxRQUFRLEVBQUUsNERBRVQ7S0FDRixDQUFDOztHQUNXLGFBQWEsQ0FJekI7QUFKWSxzQ0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUMUIsb0NBQThDO0FBRTlDLG9EQUF3RDtBQUN4RCxnREFBeUQ7QUFTekQsSUFBYSxVQUFVO0lBQ3JCO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDRixpQkFBQztBQUFELENBQUM7QUFKVyxVQUFVO0lBUHRCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHFDQUFnQjtTQUNqQjtRQUNELFlBQVksRUFBRSxDQUFDLDhCQUFhLENBQUM7UUFDN0IsU0FBUyxFQUFFLEVBQUc7S0FDZixDQUFDOztHQUNXLFVBQVUsQ0FJckI7QUFKVyxnQ0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNadkIsb0NBQXFEO0FBQ3JELHVDQUF1RDtBQUV2RCxnREFBeUQ7QUFFekQsSUFBTSxNQUFNLEdBQVc7SUFDckIsRUFBRSxJQUFJLEVBQUUsRUFBRTtRQUNSLHFCQUFxQjtRQUNyQixTQUFTLEVBQUUsOEJBQWEsRUFBRTtDQUM3QixDQUFDO0FBTUYsSUFBYSxnQkFBZ0I7SUFDM0I7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQztBQUpZLGdCQUFnQjtJQUo1QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBRSxxQkFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBRTtRQUMxQyxPQUFPLEVBQUUsQ0FBRSxxQkFBWSxDQUFFO0tBQzFCLENBQUM7O0dBQ1csZ0JBQWdCLENBSTVCO0FBSlksNENBQWdCIiwiZmlsZSI6IjYuY2h1bmsuY2ViODNiNjZkNGY5ZDZmMTdjZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbXktcHJvZHVjdC1kZXRhaWwtaXRlbScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdj5UaGUgcm91dGUgaXMgXCJwcm9kdWN0L2RldGFpbC9pdGVtXCIuPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgSXRlbUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgY29uc29sZS5sb2coJ2luc2lkZSBpdGVtIGNvbXBvbmVudCcpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L2FuZ3VsYXIyLXJvdXRlci1sb2FkZXIvc3JjIS4vcHVibGljL2FwcC9yb3V0ZS1zdHVkeS9wcm9kdWN0L2RldGFpbC9pdGVtL2l0ZW0uY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJdGVtUm91dGVyTW9kdWxlIH0gZnJvbSAnLi9pdGVtLnJvdXRlci5tb2R1bGUnO1xuaW1wb3J0IHsgSXRlbUNvbXBvbmVudCB9ICAgICAgICAgZnJvbSAnLi9pdGVtLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBJdGVtUm91dGVyTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0l0ZW1Db21wb25lbnRdLFxuICBwcm92aWRlcnM6IFsgXVxufSlcbmV4cG9ydCBjbGFzcyBJdGVtTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICBjb25zb2xlLmxvZygnaW5zaWRlIEl0ZW1Nb2R1bGUnKTtcbiAgfVxuIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL34vYW5ndWxhcjItcm91dGVyLWxvYWRlci9zcmMhLi9wdWJsaWMvYXBwL3JvdXRlLXN0dWR5L3Byb2R1Y3QvZGV0YWlsL2l0ZW0vaXRlbS5tb2R1bGUudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBJdGVtQ29tcG9uZW50IH0gICAgICAgICBmcm9tICcuL2l0ZW0uY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHsgcGF0aDogJycsXG4gICAgLy8gb3V0bGV0OiAnZGV0YWlsJywgXG4gICAgY29tcG9uZW50OiBJdGVtQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFsgUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcykgXSxcbiAgZXhwb3J0czogWyBSb3V0ZXJNb2R1bGUgXVxufSlcbmV4cG9ydCBjbGFzcyBJdGVtUm91dGVyTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICBjb25zb2xlLmxvZyhcImluc2lkZSBJdGVtUm91dGVyTW9kdWxlXCIpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L2FuZ3VsYXIyLXJvdXRlci1sb2FkZXIvc3JjIS4vcHVibGljL2FwcC9yb3V0ZS1zdHVkeS9wcm9kdWN0L2RldGFpbC9pdGVtL2l0ZW0ucm91dGVyLm1vZHVsZS50cyJdLCJzb3VyY2VSb290IjoiIn0=