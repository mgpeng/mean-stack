webpackJsonp([0],{

/***/ 691:
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
var product_router_module_1 = __webpack_require__(708);
var product_component_1 = __webpack_require__(698);
var test_service_1 = __webpack_require__(693);
var ProductModule = (function () {
    function ProductModule() {
    }
    return ProductModule;
}());
ProductModule = __decorate([
    core_1.NgModule({
        imports: [
            product_router_module_1.ProductRouterModule
        ],
        declarations: [product_component_1.ProductComponent],
        providers: [test_service_1.TestService]
    })
], ProductModule);
exports.ProductModule = ProductModule;


/***/ }),

/***/ 693:
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
var TestService = (function () {
    function TestService() {
        console.log('Printing');
    }
    return TestService;
}());
TestService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], TestService);
exports.TestService = TestService;


/***/ }),

/***/ 698:
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
var ProductComponent = (function () {
    function ProductComponent() {
    }
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        // moduleId: module.id,
        selector: 'my-product',
        template: "\n    <div>The route is \"product\".</div>\n    <div style=\"background:red\">\n       <router-outlet></router-outlet>\n    </div>\n    <div style=\"background:blue\">\n       <router-outlet name=\"product\"></router-outlet>\n    </div>\n  ",
    })
], ProductComponent);
exports.ProductComponent = ProductComponent;


/***/ }),

/***/ 708:
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
var product_component_1 = __webpack_require__(698);
var routes = [
    { path: 'list',
        component: product_component_1.ProductComponent,
        // outlet:'product', 
        loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(4).then((function (require) { resolve(__webpack_require__(706)['ListModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); } },
    { path: 'detail',
        component: product_component_1.ProductComponent,
        // outlet:'detail', 
        loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(7).then((function (require) { resolve(__webpack_require__(700)['DetailModule']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); } },
    { path: 'item2',
        // component: ProductComponent,
        // outlet:'detail', 
        loadChildren: function () { return new Promise(function (resolve) { __webpack_require__.e/* require.ensure */(5).then((function (require) { resolve(__webpack_require__(704)['Item2Module']); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe); }); } },
    { path: '', component: product_component_1.ProductComponent }
];
var ProductRouterModule = (function () {
    function ProductRouterModule() {
    }
    return ProductRouterModule;
}());
ProductRouterModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], ProductRouterModule);
exports.ProductRouterModule = ProductRouterModule;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3JvdXRlLXN0dWR5L3Byb2R1Y3QvcHJvZHVjdC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9yb3V0ZS1zdHVkeS9wcm9kdWN0L3Rlc3Quc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvYXBwL3JvdXRlLXN0dWR5L3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC9yb3V0ZS1zdHVkeS9wcm9kdWN0L3Byb2R1Y3Qucm91dGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLG9DQUE4QztBQUU5Qyx1REFBOEQ7QUFDOUQsbURBQStEO0FBQy9ELDhDQUE2QztBQVM3QyxJQUFhLGFBQWE7SUFBMUI7SUFBNkIsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBQztBQUFqQixhQUFhO0lBUHpCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLDJDQUFtQjtTQUNwQjtRQUNELFlBQVksRUFBRSxDQUFDLG9DQUFnQixDQUFDO1FBQ2hDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7S0FDekIsQ0FBQztHQUNXLGFBQWEsQ0FBSTtBQUFqQixzQ0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiMUIsb0NBQTJDO0FBRzNDLElBQWEsV0FBVztJQUNwQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQztBQUpZLFdBQVc7SUFEdkIsaUJBQVUsRUFBRTs7R0FDQSxXQUFXLENBSXZCO0FBSlksa0NBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHhCLG9DQUEwQztBQWdCMUMsSUFBYSxnQkFBZ0I7SUFBN0I7SUFBK0IsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQztBQUFuQixnQkFBZ0I7SUFkNUIsZ0JBQVMsQ0FBQztRQUNULHVCQUF1QjtRQUN2QixRQUFRLEVBQUUsWUFBWTtRQUN0QixRQUFRLEVBQUUsa1BBUVQ7S0FFRixDQUFDO0dBQ1csZ0JBQWdCLENBQUc7QUFBbkIsNENBQWdCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCN0Isb0NBQXFEO0FBQ3JELHVDQUF1RDtBQUV2RCxtREFBK0Q7QUFFL0QsSUFBTSxNQUFNLEdBQVc7SUFDckIsRUFBRSxJQUFJLEVBQUUsTUFBTTtRQUNaLFNBQVMsRUFBRSxvQ0FBZ0I7UUFDM0IscUJBQXFCO1FBQ3JCLFlBQVksRUFBRSxjQUFNLFdBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxJQUFNLG1EQUEyQixVQUFVLE9BQVksSUFBTyxPQUFPLENBQUMsbUJBQU8sQ0FBQyxHQUFvQixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUMsZ0VBQUMsQ0FBQyxFQUFDLENBQUMsRUFBdkosQ0FBdUosRUFBRTtJQUMvSyxFQUFFLElBQUksRUFBRSxRQUFRO1FBQ2QsU0FBUyxFQUFFLG9DQUFnQjtRQUMzQixvQkFBb0I7UUFDcEIsWUFBWSxFQUFFLGNBQU0sV0FBSSxPQUFPLENBQUMsVUFBVSxPQUFPLElBQU0sbURBQTJCLFVBQVUsT0FBWSxJQUFPLE9BQU8sQ0FBQyxtQkFBTyxDQUFDLEdBQXdCLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQyxnRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUE3SixDQUE2SixFQUFFO0lBQ3JMLEVBQUUsSUFBSSxFQUFFLE9BQU87UUFDYiwrQkFBK0I7UUFDL0Isb0JBQW9CO1FBQ3BCLFlBQVksRUFBRSxjQUFNLFdBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxJQUFNLG1EQUEyQixVQUFVLE9BQVksSUFBTyxPQUFPLENBQUMsbUJBQU8sQ0FBQyxHQUE2QixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUMsZ0VBQUMsQ0FBQyxFQUFDLENBQUMsRUFBakssQ0FBaUssRUFBRTtJQUN6TCxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUcsU0FBUyxFQUFFLG9DQUFnQixFQUFFO0NBQzNDLENBQUM7QUFNRixJQUFhLG1CQUFtQjtJQUFoQztJQUFrQyxDQUFDO0lBQUQsMEJBQUM7QUFBRCxDQUFDO0FBQXRCLG1CQUFtQjtJQUovQixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBRSxxQkFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBRTtRQUMxQyxPQUFPLEVBQUUsQ0FBRSxxQkFBWSxDQUFFO0tBQzFCLENBQUM7R0FDVyxtQkFBbUIsQ0FBRztBQUF0QixrREFBbUIiLCJmaWxlIjoiMC5jaHVuay5jZWI4M2I2NmQ0ZjlkNmYxN2NkZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUHJvZHVjdFJvdXRlck1vZHVsZSB9IGZyb20gJy4vcHJvZHVjdC5yb3V0ZXIubW9kdWxlJztcbmltcG9ydCB7IFByb2R1Y3RDb21wb25lbnQgfSAgICAgICAgIGZyb20gJy4vcHJvZHVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGVzdFNlcnZpY2UgfSBmcm9tICcuL3Rlc3Quc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBQcm9kdWN0Um91dGVyTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1Byb2R1Y3RDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtUZXN0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdE1vZHVsZSB7IH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL34vYW5ndWxhcjItcm91dGVyLWxvYWRlci9zcmMhLi9wdWJsaWMvYXBwL3JvdXRlLXN0dWR5L3Byb2R1Y3QvcHJvZHVjdC5tb2R1bGUudHMiLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUZXN0U2VydmljZXtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBjb25zb2xlLmxvZygnUHJpbnRpbmcnKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi9hbmd1bGFyMi10ZW1wbGF0ZS1sb2FkZXIhLi9+L2FuZ3VsYXIyLXJvdXRlci1sb2FkZXIvc3JjIS4vcHVibGljL2FwcC9yb3V0ZS1zdHVkeS9wcm9kdWN0L3Rlc3Quc2VydmljZS50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGVzdFNlcnZpY2UgfSBmcm9tICcuL3Rlc3Quc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgLy8gbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdteS1wcm9kdWN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2PlRoZSByb3V0ZSBpcyBcInByb2R1Y3RcIi48L2Rpdj5cbiAgICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDpyZWRcIj5cbiAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQ6Ymx1ZVwiPlxuICAgICAgIDxyb3V0ZXItb3V0bGV0IG5hbWU9XCJwcm9kdWN0XCI+PC9yb3V0ZXItb3V0bGV0PlxuICAgIDwvZGl2PlxuICBgLFxuICAvLyBwcm92aWRlcnM6W1Rlc3RTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0Q29tcG9uZW50IHt9XG5cbiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L2FuZ3VsYXIyLXRlbXBsYXRlLWxvYWRlciEuL34vYW5ndWxhcjItcm91dGVyLWxvYWRlci9zcmMhLi9wdWJsaWMvYXBwL3JvdXRlLXN0dWR5L3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQudHMiLCJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBQcm9kdWN0Q29tcG9uZW50IH0gICAgICAgICBmcm9tICcuL3Byb2R1Y3QuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHsgcGF0aDogJ2xpc3QnLFxuICAgIGNvbXBvbmVudDogUHJvZHVjdENvbXBvbmVudCxcbiAgICAvLyBvdXRsZXQ6J3Byb2R1Y3QnLCBcbiAgICBsb2FkQ2hpbGRyZW46ICgpID0+IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7ICAocmVxdWlyZSBhcyBhbnkpLmVuc3VyZShbXSwgZnVuY3Rpb24gKHJlcXVpcmU6IGFueSkgeyAgICByZXNvbHZlKHJlcXVpcmUoJy4vbGlzdC9saXN0Lm1vZHVsZScpWydMaXN0TW9kdWxlJ10pOyAgfSk7fSkgfSxcbiAgeyBwYXRoOiAnZGV0YWlsJywgXG4gICAgY29tcG9uZW50OiBQcm9kdWN0Q29tcG9uZW50LFxuICAgIC8vIG91dGxldDonZGV0YWlsJywgXG4gICAgbG9hZENoaWxkcmVuOiAoKSA9PiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkgeyAgKHJlcXVpcmUgYXMgYW55KS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlOiBhbnkpIHsgICAgcmVzb2x2ZShyZXF1aXJlKCcuL2RldGFpbC9kZXRhaWwubW9kdWxlJylbJ0RldGFpbE1vZHVsZSddKTsgIH0pO30pIH0sXG4gIHsgcGF0aDogJ2l0ZW0yJywgIFxuICAgIC8vIGNvbXBvbmVudDogUHJvZHVjdENvbXBvbmVudCxcbiAgICAvLyBvdXRsZXQ6J2RldGFpbCcsIFxuICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgIChyZXF1aXJlIGFzIGFueSkuZW5zdXJlKFtdLCBmdW5jdGlvbiAocmVxdWlyZTogYW55KSB7ICAgIHJlc29sdmUocmVxdWlyZSgnLi9kZXRhaWwvaXRlbTIvaXRlbTIubW9kdWxlJylbJ0l0ZW0yTW9kdWxlJ10pOyAgfSk7fSkgfSxcbiAgeyBwYXRoOiAnJywgIGNvbXBvbmVudDogUHJvZHVjdENvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbIFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpIF0sXG4gIGV4cG9ydHM6IFsgUm91dGVyTW9kdWxlIF1cbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFJvdXRlck1vZHVsZSB7fVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vYW5ndWxhcjItdGVtcGxhdGUtbG9hZGVyIS4vfi9hbmd1bGFyMi1yb3V0ZXItbG9hZGVyL3NyYyEuL3B1YmxpYy9hcHAvcm91dGUtc3R1ZHkvcHJvZHVjdC9wcm9kdWN0LnJvdXRlci5tb2R1bGUudHMiXSwic291cmNlUm9vdCI6IiJ9