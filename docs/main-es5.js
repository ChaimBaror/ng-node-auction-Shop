function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_loging_loging_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/loging/loging.component */
    "./src/app/components/loging/loging.component.ts");
    /* harmony import */


    var _components_loging_sign_on_sign_on_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/loging/sign-on/sign-on.component */
    "./src/app/components/loging/sign-on/sign-on.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/user-page/user-page.component */
    "./src/app/components/user-page/user-page.component.ts");
    /* harmony import */


    var _components_page_products_page_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/page-products/page-products.component */
    "./src/app/components/page-products/page-products.component.ts");

    var routes = [{
      path: 'loging',
      component: _components_loging_loging_component__WEBPACK_IMPORTED_MODULE_2__["LogingComponent"]
    }, {
      path: 'SignUn',
      component: _components_loging_sign_on_sign_on_component__WEBPACK_IMPORTED_MODULE_3__["SignOnComponent"]
    }, {
      path: 'home',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'UserPage',
      component: _components_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_5__["UserPageComponent"]
    }, {
      path: 'pageProduct',
      component: _components_page_products_page_products_component__WEBPACK_IMPORTED_MODULE_6__["PageProductsComponent"]
    }, {
      path: '',
      component: _components_loging_loging_component__WEBPACK_IMPORTED_MODULE_2__["LogingComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'ng-node-auction';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        }
      },
      directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_loging_loging_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/loging/loging.component */
    "./src/app/components/loging/loging.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _components_loging_sign_on_sign_on_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/loging/sign-on/sign-on.component */
    "./src/app/components/loging/sign-on/sign-on.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/user-page/user-page.component */
    "./src/app/components/user-page/user-page.component.ts");
    /* harmony import */


    var _components_page_products_page_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/page-products/page-products.component */
    "./src/app/components/page-products/page-products.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _components_loging_loging_component__WEBPACK_IMPORTED_MODULE_5__["LogingComponent"], _components_loging_sign_on_sign_on_component__WEBPACK_IMPORTED_MODULE_7__["SignOnComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _components_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_11__["UserPageComponent"], _components_page_products_page_products_component__WEBPACK_IMPORTED_MODULE_12__["PageProductsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _components_loging_loging_component__WEBPACK_IMPORTED_MODULE_5__["LogingComponent"], _components_loging_sign_on_sign_on_component__WEBPACK_IMPORTED_MODULE_7__["SignOnComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _components_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_11__["UserPageComponent"], _components_page_products_page_products_component__WEBPACK_IMPORTED_MODULE_12__["PageProductsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FooterComponent_li_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/category/", category_r1.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r1.name);
      }
    }

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 69,
      vars: 1,
      consts: [["id", "footer"], [1, "container"], [1, "row", "text-center", "text-xs-center", "text-sm-left", "text-md-left"], [1, "col-xs-12", "col-sm-4", "col-md-4"], [1, "list-unstyled", "quick-links"], ["routerLink", "/"], [1, "fa", "fa-angle-double-right"], ["href", "javascript:void();"], [4, "ngFor", "ngForOf"], [1, "fa", "fa-facebook"], [1, "fa", "fa-twitter"], [1, "fa", "fa-instagram"], ["href", "#"], [1, "fa", "fa-google-plus"], ["href", "#", "target", "_blank"], [1, "fa", "fa-envelope"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "mt-2", "mt-sm-2", "text-center", "text-white"], ["href", "https://github.com"], [1, "h6"], ["href", "https://github.com", "target", "_blank", 1, "text-green", "ml-2"], [3, "routerLink"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u05E9\u05D0\u05DC\u05D5\u05EA \u05E0\u05E4\u05D5\u05E6\u05D5\u05EA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u05E1\u05D5\u05D2\u05D9 \u05DE\u05DB\u05D9\u05E8\u05D5\u05EA \u05E4\u05D5\u05DE\u05D1\u05D9\u05D5\u05EA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u05D4\u05DE\u05D3\u05D9\u05E0\u05D9\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u05EA\u05D9\u05E7 \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, FooterComponent_li_29_Template, 4, 2, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u05DB\u05DC \u05D4\u05E7\u05D1\u05E6\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u05D4\u05EA\u05D7\u05D1\u05E8 \u05D0\u05DC\u05D9\u05E0\u05D5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Facebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Twitter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Instragram");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Google+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "ch.baror@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\u05D0\u05EA\u05E8 \u05D4\u05EA\u05D5\u05DE\u05DA \u05D1\u05DE\u05DB\u05D9\u05E8\u05D4 \u05E4\u05D5\u05DE\u05D1\u05D9\u05EA \u05DE\u05E7\u05D5\u05D5\u05E0\u05EA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " \u05E2\u05D6\u05D5\u05E8 \u05DC\u05DE\u05DB\u05D9\u05E8\u05D4 \u05E4\u05D5\u05DE\u05D1\u05D9\u05EA \u05DC\u05E7\u05E8\u05D5\u05EA \u05D1\u05DE\u05D4\u05D9\u05E8\u05D5\u05EA, \u05D1\u05DE\u05D3\u05D5\u05D9\u05E7 \u05D5\u05D1\u05E0\u05D5\u05D7\u05D5\u05EA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Built and developed by CHAIM BAROR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\nsection[_ngcontent-%COMP%] {\r\n    padding: 60px 0;\r\n}\r\nsection[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: rgb(161, 158, 158);\r\n    margin-bottom: 50px;\r\n    text-transform: uppercase;\r\n}\r\n#footer[_ngcontent-%COMP%] {\r\n    background: rgb(161, 158, 158) !important;\r\n    margin-top: 100px;\r\n}\r\n#footer[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\r\n\tpadding-left: 10px;\r\n    border-left: 3px solid #eeeeee;\r\n    padding-bottom: 6px;\r\n    margin-bottom: 20px;\r\n    color:#ffffff;\r\n}\r\n#footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n    text-decoration: none !important;\r\n    background-color: transparent;\r\n    -webkit-text-decoration-skip: objects;\r\n}\r\n#footer[_ngcontent-%COMP%]   ul.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n\tpadding: 3px 0;\r\n}\r\n#footer[_ngcontent-%COMP%]   ul.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    margin-right: 5px;\r\n\tfont-size:25px;\r\n\ttransition: .5s all ease;\r\n}\r\n#footer[_ngcontent-%COMP%]   ul.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n\tfont-size:30px;\r\n\tmargin-top:-10px;\r\n}\r\n#footer[_ngcontent-%COMP%]   ul.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%]   ul.quick-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n\tcolor:#ffffff;\r\n}\r\n#footer[_ngcontent-%COMP%]   ul.social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n\tcolor:#eeeeee;\r\n}\r\n#footer[_ngcontent-%COMP%]   ul.quick-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n\tpadding: 3px 0;\r\n\ttransition: .5s all ease;\r\n}\r\n#footer[_ngcontent-%COMP%]   ul.quick-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{\r\n\tpadding: 3px 0;\r\n\tmargin-left:5px;\r\n\tfont-weight:700;\r\n}\r\n#footer[_ngcontent-%COMP%]   ul.quick-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n\tmargin-right: 5px;\r\n}\r\n#footer[_ngcontent-%COMP%]   ul.quick-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-weight: 700;\r\n}\r\n@media (max-width:767px){\r\n\t#footer[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    padding-left: 0;\r\n    border-left: transparent;\r\n    padding-bottom: 0px;\r\n    margin-bottom: 10px;\r\n}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEZBQTBGO0FBQzFGO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5Q0FBeUM7SUFDekMsaUJBQWlCO0FBQ3JCO0FBQ0E7Q0FDQyxrQkFBa0I7SUFDZiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3QixxQ0FBcUM7QUFDekM7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0lBQ0ksaUJBQWlCO0NBQ3BCLGNBQWM7Q0FHZCx3QkFBd0I7QUFDekI7QUFDQTtDQUNDLGNBQWM7Q0FDZCxnQkFBZ0I7QUFDakI7QUFDQTs7Q0FFQyxhQUFhO0FBQ2Q7QUFDQTtDQUNDLGFBQWE7QUFDZDtBQUNBO0NBQ0MsY0FBYztDQUdkLHdCQUF3QjtBQUN6QjtBQUNBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixlQUFlO0FBQ2hCO0FBQ0E7Q0FDQyxpQkFBaUI7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0NBQ0M7SUFDRyxlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7QUFDQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcycpO1xyXG5zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDYwcHggMDtcclxufVxyXG5cclxuc2VjdGlvbiAuc2VjdGlvbi10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmdiKDE2MSwgMTU4LCAxNTgpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuI2Zvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTYxLCAxNTgsIDE1OCkgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG59XHJcbiNmb290ZXIgaDV7XHJcblx0cGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZWVlZWVlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBjb2xvcjojZmZmZmZmO1xyXG59XHJcbiNmb290ZXIgYSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOiBvYmplY3RzO1xyXG59XHJcbiNmb290ZXIgdWwuc29jaWFsIGxpe1xyXG5cdHBhZGRpbmc6IDNweCAwO1xyXG59XHJcbiNmb290ZXIgdWwuc29jaWFsIGxpIGEgaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHRmb250LXNpemU6MjVweDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IC41cyBhbGwgZWFzZTtcclxuXHQtbW96LXRyYW5zaXRpb246IC41cyBhbGwgZWFzZTtcclxuXHR0cmFuc2l0aW9uOiAuNXMgYWxsIGVhc2U7XHJcbn1cclxuI2Zvb3RlciB1bC5zb2NpYWwgbGk6aG92ZXIgYSBpIHtcclxuXHRmb250LXNpemU6MzBweDtcclxuXHRtYXJnaW4tdG9wOi0xMHB4O1xyXG59XHJcbiNmb290ZXIgdWwuc29jaWFsIGxpIGEsXHJcbiNmb290ZXIgdWwucXVpY2stbGlua3MgbGkgYXtcclxuXHRjb2xvcjojZmZmZmZmO1xyXG59XHJcbiNmb290ZXIgdWwuc29jaWFsIGxpIGE6aG92ZXJ7XHJcblx0Y29sb3I6I2VlZWVlZTtcclxufVxyXG4jZm9vdGVyIHVsLnF1aWNrLWxpbmtzIGxpe1xyXG5cdHBhZGRpbmc6IDNweCAwO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogLjVzIGFsbCBlYXNlO1xyXG5cdC1tb3otdHJhbnNpdGlvbjogLjVzIGFsbCBlYXNlO1xyXG5cdHRyYW5zaXRpb246IC41cyBhbGwgZWFzZTtcclxufVxyXG4jZm9vdGVyIHVsLnF1aWNrLWxpbmtzIGxpOmhvdmVye1xyXG5cdHBhZGRpbmc6IDNweCAwO1xyXG5cdG1hcmdpbi1sZWZ0OjVweDtcclxuXHRmb250LXdlaWdodDo3MDA7XHJcbn1cclxuI2Zvb3RlciB1bC5xdWljay1saW5rcyBsaSBhIGl7XHJcblx0bWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuI2Zvb3RlciB1bC5xdWljay1saW5rcyBsaTpob3ZlciBhIGkge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpe1xyXG5cdCNmb290ZXIgaDUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgYm9yZGVyLWxlZnQ6IHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/products.service */
    "./src/app/services/products.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeComponent_3_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_3_ng_template_0_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.pageId(item_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u05D4\u05DE\u05DB\u05D9\u05E8\u05D4 \u05D4\u05E4\u05D5\u05DE\u05D1\u05D9\u05EA \u05E2\u05D5\u05DE\u05D3\u05EA \u05DC\u05D4\u05EA\u05E7\u05D9\u05D9\u05DD \u05D1 -30 \u05D1\u05E0\u05D5\u05D1\u05DE\u05D1\u05E8 2020");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_3_ng_template_0_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.pageId(item_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "by now");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_3_ng_template_0_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.pageId(item_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "New offer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.nameProduct);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.message);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", item_r1.price, "");
      }
    }

    function HomeComponent_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_3_ng_template_0_Template, 18, 4, "ng-template", 1);
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(productsSer) {
        _classCallCheck(this, HomeComponent);

        this.productsSer = productsSer;
        this.products = [];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.products = this.productsSer.getAllProducts();
        }
      }, {
        key: "pageId",
        value: function pageId(id) {
          console.log("pageId", id);
          this.productsSer.getproductById(id);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 4,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-6"], [1, "picsum-img-wrapper"], ["alt", "Random first slide", "height", "300", 3, "src"], [1, "carousel-caption"], [1, "by", "now", "btn", "btn-danger", 3, "click"], [1, "by", "now", "btn", "btn-info", 3, "click"], [1, "by", "now", "btn", "btn-warning", 3, "click"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngb-carousel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_3_Template, 1, 0, undefined, 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbSlide"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/loging/loging.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/loging/loging.component.ts ***!
    \*******************************************************/

  /*! exports provided: LogingComponent */

  /***/
  function srcAppComponentsLogingLogingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogingComponent", function () {
      return LogingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_loging_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/loging.service */
    "./src/app/services/loging.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");

    function LogingComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05E0\u05D3\u05E8\u05E9 \u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LogingComponent_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LogingComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05E0\u05D3\u05E8\u05E9 \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LogingComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LogingComponent_ng_template_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
      }
    }

    var LogingComponent = /*#__PURE__*/function () {
      function LogingComponent(fb, loggingSer) {
        _classCallCheck(this, LogingComponent);

        this.fb = fb;
        this.loggingSer = loggingSer;
        this.signfrom = this.fb.group({
          firstName: ['admin', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]],
          lastName: ['mnager', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]],
          email: ['maneer@admin.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z][a-zA-Z0-9_\.]+@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,}$')]],
          phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('0[0-9\s.-]{5,13}')]],
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(4)]],
          agree: [true],
          img: ['../assets/images/icon/avataricon.png']
        });
      }

      _createClass(LogingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          console.log(this.signfrom.value);
          console.log(this.signfrom.controls.firstName.value);
          this.loggingSer.setUser({
            uid: 0,
            firstName: this.signfrom.controls.firstName.value,
            lastName: this.signfrom.controls.lastName.value,
            email: this.signfrom.controls.email.value,
            password: this.signfrom.controls.password.value,
            phone: this.signfrom.controls.phoneNumber.value,
            agree: this.signfrom.controls.agree.value,
            img: this.signfrom.controls.img.value
          });
          this.signfrom.reset();
        }
      }]);

      return LogingComponent;
    }();

    LogingComponent.ɵfac = function LogingComponent_Factory(t) {
      return new (t || LogingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_loging_service__WEBPACK_IMPORTED_MODULE_2__["LogingService"]));
    };

    LogingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LogingComponent,
      selectors: [["app-loging"]],
      decls: 41,
      vars: 10,
      consts: [[1, "body"], [1, "text-center", "box"], [1, "form-signin", 3, "formGroup"], [1, "h3", "mb-3", "font-weight-normal"], ["for", "inputName", 1, "sr-only"], ["type", "text", "id", "inputName", "formControlName", "firstName", "placeholder", "first Name", "required", "", "autofocus", "", 1, "form-control"], ["type", "text", "id", "inputName", "formControlName", "lastName", "placeholder", "last Name", 1, "form-control"], ["id", "inputName", "formControlName", "phoneNumber", "placeholder", "phone number", "required", "", "autofocus", "", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "email", "id", "inputEmail", "placeholder", "Email", 1, "form-control"], ["for", "inputPassword", 1, "sr-only"], ["type", "password", "id", "inputPassword", "formControlName", "password", "placeholder", "Password", "required", "", 1, "form-control"], [1, "checkbox", "mb-3"], ["type", "checkbox", "formControlName", "agree", "value", "remember-me"], [1, "btn", "btn-lg", "btn-primary", "btn-block", 3, "disabled", "click"], ["href", "/SignUn"], [1, "mt-5", "mb-3", "text-muted"], ["memberTemplate", ""], [1, "invalid-feedback"]],
      template: function LogingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "loging works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Please sign in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "first Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "last Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, LogingComponent_div_18_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LogingComponent_div_19_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LogingComponent_div_22_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, LogingComponent_div_23_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Remember me ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogingComponent_Template_button_click_33_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "LOGING");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Sign Un");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\xA9 2019-2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, LogingComponent_ng_template_39_Template, 1, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signfrom);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.signfrom.get("phoneNumber").invalid && ctx.signfrom.get("phoneNumber").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signfrom.get("phoneNumber").errors == null ? null : ctx.signfrom.get("phoneNumber").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signfrom.get("phoneNumber").errors == null ? null : ctx.signfrom.get("phoneNumber").errors.pattern);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.signfrom.get("email").invalid && ctx.signfrom.get("email").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signfrom.get("email").errors == null ? null : ctx.signfrom.get("email").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signfrom.get("email").errors == null ? null : ctx.signfrom.get("email").errors.pattern);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.signfrom.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]],
      styles: ["@import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i&subset=greek-ext');\r\n\r\n.body[_ngcontent-%COMP%]{\r\n\tbackground-image: url(\"https://images.pexels.com/photos/891252/pexels-photo-891252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260\");\r\n\tbackground-position: center;\r\n    background-origin: content-box;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n\tmin-height:100vh;\r\n\tfont-family: 'Noto Sans', sans-serif;\r\n}\r\n\r\n.box[_ngcontent-%COMP%]{\r\n\tposition:absolute;\r\n\tleft:50%;\r\n\ttop:50%;\r\n\ttransform: translate(-50%,-50%);\r\n    background-color: rgba(0, 0, 0, 0.89);\r\n    color: white;\r\n\tborder-radius:3px;\r\n\tpadding:70px 100px;\r\n}\r\n\r\n.input-container[_ngcontent-%COMP%]{\r\n\tposition:relative;\r\n\tmargin-bottom:25px;\r\n}\r\n\r\n.input-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n\tposition:absolute;\r\n\ttop:0px;\r\n\tleft:0px;\r\n\tfont-size:16px;\r\n\tcolor:#fff;\t\r\n    pointer-event:none;\r\n\ttransition: all 0.5s ease-in-out;\r\n}\r\n\r\n.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{ \r\n  border:0;\r\n  border-bottom:1px solid #555;  \r\n  background:transparent;\r\n  width:100%;\r\n  padding:8px 0 5px 0;\r\n  font-size:16px;\r\n  color:#fff;\r\n}\r\n\r\n.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{ \r\n border:none;\t\r\n outline:none;\r\n border-bottom:1px solid #e74c3c;\t\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]{\r\n\tcolor:#fff;\r\n\tbackground-color:#e74c3c;\r\n\toutline: none;\r\n    border: 0;\r\n    color: #fff;\r\n\tpadding:10px 20px;\r\n\ttext-transform:uppercase;\r\n\tmargin-top:50px;\r\n\tborder-radius:2px;\r\n\tcursor:pointer;\r\n\tposition:relative;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 330px;\r\n    padding: 15px;\r\n    margin: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbmcvbG9naW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUdBQW1HOztBQUVuRztDQUNDLHNJQUFzSTtDQUN0SSwyQkFBMkI7SUFDeEIsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QixzQkFBc0I7Q0FDekIsZ0JBQWdCO0NBQ2hCLG9DQUFvQztBQUNyQzs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixRQUFRO0NBQ1IsT0FBTztDQUNQLCtCQUErQjtJQUM1QixxQ0FBcUM7SUFDckMsWUFBWTtDQUNmLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsa0JBQWtCO0FBQ25COztBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLE9BQU87Q0FDUCxRQUFRO0NBQ1IsY0FBYztDQUNkLFVBQVU7SUFDUCxrQkFBa0I7Q0FDckIsZ0NBQWdDO0FBQ2pDOztBQUNBO0VBQ0UsUUFBUTtFQUNSLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsVUFBVTtBQUNaOztBQUNBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWiwrQkFBK0I7QUFDaEM7O0FBQ0E7Q0FDQyxVQUFVO0NBQ1Ysd0JBQXdCO0NBQ3hCLGFBQWE7SUFDVixTQUFTO0lBQ1QsV0FBVztDQUNkLGlCQUFpQjtDQUNqQix3QkFBd0I7Q0FDeEIsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixjQUFjO0NBQ2QsaUJBQWlCO0FBQ2xCOztBQUtBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW5nL2xvZ2luZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Ob3RvK1NhbnM6NDAwLDQwMGksNzAwLDcwMGkmc3Vic2V0PWdyZWVrLWV4dCcpO1xyXG5cclxuLmJvZHl7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvODkxMjUyL3BleGVscy1waG90by04OTEyNTIuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0yJmg9NzUwJnc9MTI2MFwiKTtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLW9yaWdpbjogY29udGVudC1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRtaW4taGVpZ2h0OjEwMHZoO1xyXG5cdGZvbnQtZmFtaWx5OiAnTm90byBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJveHtcclxuXHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRsZWZ0OjUwJTtcclxuXHR0b3A6NTAlO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODkpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cdGJvcmRlci1yYWRpdXM6M3B4O1xyXG5cdHBhZGRpbmc6NzBweCAxMDBweDtcclxufVxyXG4uaW5wdXQtY29udGFpbmVye1xyXG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdG1hcmdpbi1ib3R0b206MjVweDtcclxufVxyXG4uaW5wdXQtY29udGFpbmVyIGxhYmVse1xyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdHRvcDowcHg7XHJcblx0bGVmdDowcHg7XHJcblx0Zm9udC1zaXplOjE2cHg7XHJcblx0Y29sb3I6I2ZmZjtcdFxyXG4gICAgcG9pbnRlci1ldmVudDpub25lO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5pbnB1dC1jb250YWluZXIgaW5wdXR7IFxyXG4gIGJvcmRlcjowO1xyXG4gIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICM1NTU7ICBcclxuICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgcGFkZGluZzo4cHggMCA1cHggMDtcclxuICBmb250LXNpemU6MTZweDtcclxuICBjb2xvcjojZmZmO1xyXG59XHJcbi5pbnB1dC1jb250YWluZXIgaW5wdXQ6Zm9jdXN7IFxyXG4gYm9yZGVyOm5vbmU7XHRcclxuIG91dGxpbmU6bm9uZTtcclxuIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNlNzRjM2M7XHRcclxufVxyXG4uYnRue1xyXG5cdGNvbG9yOiNmZmY7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojZTc0YzNjO1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuXHRwYWRkaW5nOjEwcHggMjBweDtcclxuXHR0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcblx0bWFyZ2luLXRvcDo1MHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6MnB4O1xyXG5cdGN1cnNvcjpwb2ludGVyO1xyXG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4uZm9ybS1zaWduaW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDMzMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-loging',
          templateUrl: './loging.component.html',
          styleUrls: ['./loging.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: src_app_services_loging_service__WEBPACK_IMPORTED_MODULE_2__["LogingService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/loging/sign-on/sign-on.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/loging/sign-on/sign-on.component.ts ***!
    \****************************************************************/

  /*! exports provided: SignOnComponent */

  /***/
  function srcAppComponentsLogingSignOnSignOnComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignOnComponent", function () {
      return SignOnComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SignOnComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05E0\u05D3\u05E8\u05E9 \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignOnComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05DC\u05D0 \u05EA\u05E7\u05D9\u05E0\u05D4 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignOnComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D3\u05E8\u05D5\u05E9\u05D4 \u05E1\u05D9\u05E1\u05DE\u05D0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignOnComponent_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u05D4\u05E1\u05D9\u05E1\u05DE\u05D4 \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05DB\u05D9\u05DC 8 \u05EA\u05D5\u05D5\u05D9\u05DD \u05DC\u05E4\u05D7\u05D5\u05EA ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SignOnComponent = /*#__PURE__*/function () {
      function SignOnComponent(fb) {
        _classCallCheck(this, SignOnComponent);

        this.fb = fb;
        this.signfrom = this.fb.group({
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z][a-zA-Z0-9_\.]+@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,}$')]],
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('.{8,}$')]],
          agree: [true]
        });
      }

      _createClass(SignOnComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          console.log(this.signfrom.value);
        }
      }]);

      return SignOnComponent;
    }();

    SignOnComponent.ɵfac = function SignOnComponent_Factory(t) {
      return new (t || SignOnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    SignOnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignOnComponent,
      selectors: [["app-sign-on"]],
      decls: 23,
      vars: 10,
      consts: [[1, "body"], [1, "text-center", "box"], [1, "form-signin", 3, "formGroup"], ["formControlName", "email", "id", "inputEmail", "placeholder", "Email", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "inputPassword", 1, "sr-only"], ["formControlName", "password", "type", "password", "id", "inputPassword", "placeholder", "Password", 1, "form-control"], [1, "checkbox", "mb-3"], ["type", "checkbox", "formControlName", "agree", "value", "remember-me"], [1, "btn", "btn-lg", "btn-primary", "btn-block", 3, "disabled", "click"], [1, "mt-5", "mb-3", "text-muted"], [1, "invalid-feedback"]],
      template: function SignOnComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "sign-on works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SignOnComponent_div_6_Template, 2, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SignOnComponent_div_7_Template, 2, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SignOnComponent_div_12_Template, 2, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SignOnComponent_div_13_Template, 2, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Remember me ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignOnComponent_Template_button_click_19_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sign in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\xA9 2019-2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signfrom);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.signfrom.get("email").invalid && ctx.signfrom.get("email").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signfrom.get("email").errors == null ? null : ctx.signfrom.get("email").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signfrom.get("email").errors == null ? null : ctx.signfrom.get("email").errors.pattern);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.signfrom.get("password").invalid && ctx.signfrom.get("password").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signfrom.get("password").errors == null ? null : ctx.signfrom.get("password").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signfrom.get("password").errors == null ? null : ctx.signfrom.get("password").errors.pattern);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.signfrom.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]],
      styles: ["@import url('https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i&subset=greek-ext');\r\n\r\n.body[_ngcontent-%COMP%]{\r\n\tbackground-position: center;\r\n    background-origin: content-box;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n\tmin-height:100vh;\r\n\tfont-family: 'Noto Sans', sans-serif;\r\n}\r\n\r\n.box[_ngcontent-%COMP%]{\r\n\tposition:absolute;\r\n\tleft:50%;\r\n\ttop:50%;\r\n\ttransform: translate(-50%,-50%);\r\n    background-color: rgba(0, 0, 0, 0.89);\r\n    color: white;\r\n\tborder-radius:3px;\r\n\tpadding:70px 100px;\r\n}\r\n\r\n.input-container[_ngcontent-%COMP%]{\r\n\tposition:relative;\r\n\tmargin-bottom:25px;\r\n}\r\n\r\n.input-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\r\n\tposition:absolute;\r\n\ttop:0px;\r\n\tleft:0px;\r\n\tfont-size:16px;\r\n\tcolor:#fff;\t\r\n    pointer-event:none;\r\n\ttransition: all 0.5s ease-in-out;\r\n}\r\n\r\n.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{ \r\n  border:0;\r\n  border-bottom:1px solid #555;  \r\n  background:transparent;\r\n  width:100%;\r\n  padding:8px 0 5px 0;\r\n  font-size:16px;\r\n  color:#fff;\r\n}\r\n\r\n.input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{ \r\n border:none;\t\r\n outline:none;\r\n border-bottom:1px solid #e74c3c;\t\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]{\r\n\tcolor:#fff;\r\n\tbackground-color:#e74c3c;\r\n\toutline: none;\r\n    border: 0;\r\n    color: #fff;\r\n\tpadding:10px 20px;\r\n\ttext-transform:uppercase;\r\n\tmargin-top:50px;\r\n\tborder-radius:2px;\r\n\tcursor:pointer;\r\n\tposition:relative;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 330px;\r\n    padding: 15px;\r\n    margin: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbmcvc2lnbi1vbi9zaWduLW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUdBQW1HOztBQUVuRztDQUNDLDJCQUEyQjtJQUN4Qiw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLHNCQUFzQjtDQUN6QixnQkFBZ0I7Q0FDaEIsb0NBQW9DO0FBQ3JDOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLFFBQVE7Q0FDUixPQUFPO0NBQ1AsK0JBQStCO0lBQzVCLHFDQUFxQztJQUNyQyxZQUFZO0NBQ2YsaUJBQWlCO0NBQ2pCLGtCQUFrQjtBQUNuQjs7QUFDQTtDQUNDLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsT0FBTztDQUNQLFFBQVE7Q0FDUixjQUFjO0NBQ2QsVUFBVTtJQUNQLGtCQUFrQjtDQUNyQixnQ0FBZ0M7QUFDakM7O0FBQ0E7RUFDRSxRQUFRO0VBQ1IsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxVQUFVO0FBQ1o7O0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLCtCQUErQjtBQUNoQzs7QUFDQTtDQUNDLFVBQVU7Q0FDVix3QkFBd0I7Q0FDeEIsYUFBYTtJQUNWLFNBQVM7SUFDVCxXQUFXO0NBQ2QsaUJBQWlCO0NBQ2pCLHdCQUF3QjtDQUN4QixlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZCxpQkFBaUI7QUFDbEI7O0FBS0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbmcvc2lnbi1vbi9zaWduLW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU5vdG8rU2Fuczo0MDAsNDAwaSw3MDAsNzAwaSZzdWJzZXQ9Z3JlZWstZXh0Jyk7XHJcblxyXG4uYm9keXtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLW9yaWdpbjogY29udGVudC1ib3g7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRtaW4taGVpZ2h0OjEwMHZoO1xyXG5cdGZvbnQtZmFtaWx5OiAnTm90byBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJveHtcclxuXHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRsZWZ0OjUwJTtcclxuXHR0b3A6NTAlO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODkpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cdGJvcmRlci1yYWRpdXM6M3B4O1xyXG5cdHBhZGRpbmc6NzBweCAxMDBweDtcclxufVxyXG4uaW5wdXQtY29udGFpbmVye1xyXG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdG1hcmdpbi1ib3R0b206MjVweDtcclxufVxyXG4uaW5wdXQtY29udGFpbmVyIGxhYmVse1xyXG5cdHBvc2l0aW9uOmFic29sdXRlO1xyXG5cdHRvcDowcHg7XHJcblx0bGVmdDowcHg7XHJcblx0Zm9udC1zaXplOjE2cHg7XHJcblx0Y29sb3I6I2ZmZjtcdFxyXG4gICAgcG9pbnRlci1ldmVudDpub25lO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5pbnB1dC1jb250YWluZXIgaW5wdXR7IFxyXG4gIGJvcmRlcjowO1xyXG4gIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICM1NTU7ICBcclxuICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgcGFkZGluZzo4cHggMCA1cHggMDtcclxuICBmb250LXNpemU6MTZweDtcclxuICBjb2xvcjojZmZmO1xyXG59XHJcbi5pbnB1dC1jb250YWluZXIgaW5wdXQ6Zm9jdXN7IFxyXG4gYm9yZGVyOm5vbmU7XHRcclxuIG91dGxpbmU6bm9uZTtcclxuIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNlNzRjM2M7XHRcclxufVxyXG4uYnRue1xyXG5cdGNvbG9yOiNmZmY7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojZTc0YzNjO1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuXHRwYWRkaW5nOjEwcHggMjBweDtcclxuXHR0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcblx0bWFyZ2luLXRvcDo1MHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6MnB4O1xyXG5cdGN1cnNvcjpwb2ludGVyO1xyXG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4uZm9ybS1zaWduaW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDMzMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignOnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sign-on',
          templateUrl: './sign-on.component.html',
          styleUrls: ['./sign-on.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_loging_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/loging.service */
    "./src/app/services/loging.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function NavbarComponent_ng_container_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function NavbarComponent_ng_template_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "logging");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign Un");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function NavbarComponent_ng_template_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_ng_template_20_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.signOut();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "sign Out");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.currentUser.firstName);
      }
    }

    var NavbarComponent = /*#__PURE__*/function () {
      // public currentUser:Users =new Users();
      function NavbarComponent(logingSer) {
        _classCallCheck(this, NavbarComponent);

        this.logingSer = logingSer;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.logingSer.getCurrentUser().subscribe(function (user) {
            return _this.currentUser = Object.assign({}, user);
          });
          console.log("%c ".concat(this.currentUser.uid), 'color:red');
        }
      }, {
        key: "signOut",
        value: function signOut() {
          console.log("this out");
          this.logingSer.signOut(); // this.currentUser = this.logingSer.currentUser

          console.log("%c ".concat(this.currentUser, " this.logingSer.signOut"), 'color:blue');
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_loging_service__WEBPACK_IMPORTED_MODULE_1__["LogingService"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 22,
      vars: 3,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["href", "#", 1, "navbar-brand"], ["src", "assets/images/logo.png", "alt", "Logo", 2, "width", "40px"], ["href", "home", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["href", "/home", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], ["href", "UserPage", 1, "nav-link"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["loginButton", ""], ["outTemplate", ""], ["routerLink", "loging", 1, "btn", "btn-outline-success", "my-2", "my-sm-0"], ["routerLink", "SignUn", 1, "btn", "btn-outline-success", "my-2", "my-sm-0"], ["href", "/UserPage", 2, "color", "yellow"], [1, "btn", "btn-outline-danger", "my-2", "my-sm-0", 3, "click"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "User Page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NavbarComponent_ng_container_17_Template, 1, 0, "ng-container", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NavbarComponent_ng_template_18_Template, 4, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NavbarComponent_ng_template_20_Template, 4, 1, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser.uid)("ngIfThen", _r3)("ngIfElse", _r1);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_loging_service__WEBPACK_IMPORTED_MODULE_1__["LogingService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/page-products/page-products.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/page-products/page-products.component.ts ***!
    \*********************************************************************/

  /*! exports provided: PageProductsComponent */

  /***/
  function srcAppComponentsPageProductsPageProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageProductsComponent", function () {
      return PageProductsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/products.service */
    "./src/app/services/products.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function PageProductsComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Buy It Now");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " ...\u05D7\u05D6\u05D5\u05E8");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.pageProducts.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.pageProducts.nameProduct);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", ctx_r0.pageProducts.price, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.pageProducts.message);
      }
    }

    function PageProductsComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "....\u05D0\u05D9\u05DF \u05DC\u05DA \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Now");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var PageProductsComponent = /*#__PURE__*/function () {
      function PageProductsComponent(productsSer) {
        _classCallCheck(this, PageProductsComponent);

        this.productsSer = productsSer;
      }

      _createClass(PageProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.pageProducts = this.productsSer.getOneProducts();
        }
      }]);

      return PageProductsComponent;
    }();

    PageProductsComponent.ɵfac = function PageProductsComponent_Factory(t) {
      return new (t || PageProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]));
    };

    PageProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageProductsComponent,
      selectors: [["app-page-products"]],
      decls: 4,
      vars: 2,
      consts: [["class", "card", 4, "ngIf"], [1, "card"], ["alt", "", "width", "100%", "height", "auto", 3, "src"], [1, "price"], ["href", "/home"], ["routerLink", "/home"]],
      template: function PageProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page-products works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PageProductsComponent_div_2_Template, 13, 4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PageProductsComponent_div_3_Template, 6, 0, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pageProducts);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.pageProducts);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: [".card[_ngcontent-%COMP%] {\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    max-width: 300px;\r\n    margin: auto;\r\n    text-align: center;\r\n    font-family: arial;\r\n    \r\n  }\r\n  \r\n  .price[_ngcontent-%COMP%] {\r\n    color: grey;\r\n    font-size: 22px;\r\n  }\r\n  \r\n  .card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    border: none;\r\n    outline: 0;\r\n    padding: 12px;\r\n    color: white;\r\n    background-color: #000;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    font-size: 18px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlLXByb2R1Y3RzL3BhZ2UtcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBDQUEwQztJQUMxQyxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7O0VBRXBCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osVUFBVTtJQUNWLGFBQWE7SUFDYixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2UtcHJvZHVjdHMvcGFnZS1wcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAucHJpY2Uge1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkIGJ1dHRvbiB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-products',
          templateUrl: './page-products.component.html',
          styleUrls: ['./page-products.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/user-page/user-page.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/user-page/user-page.component.ts ***!
    \*************************************************************/

  /*! exports provided: UserPageComponent */

  /***/
  function srcAppComponentsUserPageUserPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPageComponent", function () {
      return UserPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_loging_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/loging.service */
    "./src/app/services/loging.service.ts");

    var UserPageComponent = /*#__PURE__*/function () {
      function UserPageComponent(logingSer) {
        _classCallCheck(this, UserPageComponent);

        this.logingSer = logingSer;
      }

      _createClass(UserPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.logingSer.getCurrentUser().subscribe(function (user) {
            return _this2.currentUser = Object.assign({}, user);
          });
          console.log("%c ".concat(this.currentUser.lastName), 'color:red');
        }
      }]);

      return UserPageComponent;
    }();

    UserPageComponent.ɵfac = function UserPageComponent_Factory(t) {
      return new (t || UserPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_loging_service__WEBPACK_IMPORTED_MODULE_1__["LogingService"]));
    };

    UserPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserPageComponent,
      selectors: [["app-user-page"]],
      decls: 47,
      vars: 10,
      consts: [[1, "row"], [1, "card", 2, "width", "15rem"], [1, "list-group"], [1, "list-group-item"], ["alt", "...", "width", "120", "height", "120", "srcset", "", 3, "src"], [1, "list-group-item", "list-group-item-primary"], ["for", ""], [3, "href"], [1, "list-group-item", "list-group-item-secondary"], [1, "list-group-item", "list-group-item-success"], [1, "list-group-item", "list-group-item-danger"], [1, "list-group-item", "list-group-item-warning"], [1, "list-group-item", "list-group-item-info"], [1, "col"], ["role", "group", "aria-label", "Basic example", 1, "btn-group", 2, "height", "3rem"], ["type", "button", 1, "btn", "btn-secondary"], [2, "background", "rgb(158, 156, 156)", "width", "auto", "height", "auto"]],
      template: function UserPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "id : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "firstName : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "lastName : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "email : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "phone number : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "password : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "My products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Messages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Buy payment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "No products ........");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "No payment .......");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "No messages to display");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.currentUser.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.currentUser.firstName, " ", ctx.currentUser.lastName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.currentUser.uid, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentUser.uid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentUser.firstName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentUser.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentUser.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentUser.phone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentUser.password);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1wYWdlL3VzZXItcGFnZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-page',
          templateUrl: './user-page.component.html',
          styleUrls: ['./user-page.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_loging_service__WEBPACK_IMPORTED_MODULE_1__["LogingService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/loging.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/loging.service.ts ***!
    \********************************************/

  /*! exports provided: LogingService */

  /***/
  function srcAppServicesLogingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogingService", function () {
      return LogingService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LogingService = /*#__PURE__*/function () {
      function LogingService(_router) {
        _classCallCheck(this, LogingService);

        this._router = _router;
        this.currentUser$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
          img: "../assets/images/icon/avataricon.png"
        }); // currentUser: Users = new Users();

        this.arrayUsers = [];
      }

      _createClass(LogingService, [{
        key: "signUp",
        value: function signUp(newUser) {
          console.log("%c ".concat((newUser.email, newUser.firstName)), "color : red"); // this.currentUser =  newUser
        }
      }, {
        key: "setUser",
        value: function setUser(user) {
          user.uid = Math.floor(Math.random() * 100000);
          console.log("%c ".concat(user.uid), 'color :blue'); // this.currentUser = user

          this.currentUser$.next(user);
          this.arrayUsers.push(user);

          this._router.navigate(['/UserPage']);

          this.currentUser$.subscribe(console.log);
        }
      }, {
        key: "signOut",
        value: function signOut() {
          // this.currentUser.uid = null
          // this.currentUser.firstName =''
          // this.currentUser.lastName =''
          // this.currentUser.email = ''
          // this.currentUser.password = ''
          // this.currentUser.phone = ''
          // this.currentUser.img = ''
          // this.currentUser.agree = null
          this.currentUser$.next(null);
          console.log("%c ".concat(this.currentUser$), 'color:yellow');

          this._router.navigate(['/loging']);
        }
      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          return this.currentUser$.asObservable();
        }
      }]);

      return LogingService;
    }();

    LogingService.ɵfac = function LogingService_Factory(t) {
      return new (t || LogingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    LogingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LogingService,
      factory: LogingService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/products.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/products.service.ts ***!
    \**********************************************/

  /*! exports provided: ProductsService */

  /***/
  function srcAppServicesProductsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsService", function () {
      return ProductsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ProductsService = /*#__PURE__*/function () {
      function ProductsService(_router) {
        _classCallCheck(this, ProductsService);

        this._router = _router;
        this.arrayProducts = [];
        this.arrayProducts = [{
          id: "10",
          image: "../assets/images/logo3.gif",
          nameProduct: "chaim bar-or 1 מכירה הפומבית",
          message: "chaim bar-or auction",
          price: 10
        }, {
          id: "11",
          image: "../assets/images/logo1.gif",
          nameProduct: "chaim bar-or 2",
          message: "chaim AvraTech 07",
          price: 24
        }, {
          id: "12",
          image: "../assets/images/logo5.png",
          nameProduct: "chaim bar-or 3",
          message: "chaim bar-or auction",
          price: 100
        }, {
          id: "13",
          image: "../assets/images/logo6.gif",
          nameProduct: "chaim bar-or 4 מכירה הפומבית",
          message: "chaim > AvraTech 07",
          price: 54
        }, {
          id: "14",
          image: "../assets/images/logo3.gif",
          nameProduct: "chaim bar-or 5",
          message: "chaim bar-or auction",
          price: 250
        }];
      }

      _createClass(ProductsService, [{
        key: "getAllProducts",
        value: function getAllProducts() {
          return this.arrayProducts;
        }
      }, {
        key: "getproductById",
        value: function getproductById(id) {
          for (var i = 0; i < this.arrayProducts.length; i++) {
            if (this.arrayProducts[i].id === id) {
              this.pageProducts = this.arrayProducts[i];

              this._router.navigate(['/pageProduct']);
            }
          }
        }
      }, {
        key: "getOneProducts",
        value: function getOneProducts() {
          return this.pageProducts;
        }
      }]);

      return ProductsService;
    }();

    ProductsService.ɵfac = function ProductsService_Factory(t) {
      return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProductsService,
      factory: ProductsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\stu\Desktop\node\angular\ng-node-auction\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map