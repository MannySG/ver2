(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./create-account/create-account.module": [
		"./src/app/create-account/create-account.module.ts",
		"create-account-create-account-module"
	],
	"./setting/setting.module": [
		"./src/app/setting/setting.module.ts",
		"setting-setting-module"
	],
	"./setup-guide/setup-guide.module": [
		"./src/app/setup-guide/setup-guide.module.ts",
		"setup-guide-setup-guide-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/about-us/about-us.component */ "./src/app/home/about-us/about-us.component.ts");
/* harmony import */ var _home_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/contact/contact.component */ "./src/app/home/contact/contact.component.ts");
/* harmony import */ var _home_why_better_why_better_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/why-better/why-better.component */ "./src/app/home/why-better/why-better.component.ts");
/* harmony import */ var _create_account_create_account_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-account/create-account.component */ "./src/app/create-account/create-account.component.ts");
/* harmony import */ var _home_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/dashboard/dashboard.component */ "./src/app/home/dashboard/dashboard.component.ts");
/* harmony import */ var _setup_guide_setup_guide_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./setup-guide/setup-guide.component */ "./src/app/setup-guide/setup-guide.component.ts");
/* harmony import */ var _appService_authenticate_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./appService/authenticate.-service */ "./src/app/appService/authenticate.-service.ts");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./setting/setting.component */ "./src/app/setting/setting.component.ts");












var routes = [
    {
        path: '',
        redirectTo: "home",
        pathMatch: 'full',
    },
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        children: [
            {
                path: 'home',
                component: _home_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"]
            },
            {
                path: 'about-us',
                component: _home_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__["AboutUsComponent"]
            },
            {
                path: 'why-better',
                component: _home_why_better_why_better_component__WEBPACK_IMPORTED_MODULE_6__["WhyBetterComponent"]
            },
        ]
    },
    {
        path: 'contact',
        component: _home_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]
    },
    {
        path: 'signup',
        component: _create_account_create_account_component__WEBPACK_IMPORTED_MODULE_7__["CreateAccountComponent"],
        children: [
            {
                path: '',
                loadChildren: './create-account/create-account.module#CreateAccountModule'
            },
        ]
    },
    {
        path: 'setup-guide',
        canActivate: [_appService_authenticate_service__WEBPACK_IMPORTED_MODULE_10__["UserActive"]],
        component: _setup_guide_setup_guide_component__WEBPACK_IMPORTED_MODULE_9__["SetupGuideComponent"],
        children: [
            {
                path: '',
                loadChildren: './setup-guide/setup-guide.module#SetupGuideModule'
            }
        ]
    },
    {
        path: '',
        canActivate: [_appService_authenticate_service__WEBPACK_IMPORTED_MODULE_10__["UserActive"]],
        component: _setting_setting_component__WEBPACK_IMPORTED_MODULE_11__["SettingComponent"],
        children: [
            {
                path: 'dashboard',
                loadChildren: './setting/setting.module#SettingModule'
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet> \r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'better-web';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _home_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/about-us/about-us.component */ "./src/app/home/about-us/about-us.component.ts");
/* harmony import */ var _home_why_better_why_better_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/why-better/why-better.component */ "./src/app/home/why-better/why-better.component.ts");
/* harmony import */ var _home_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/contact/contact.component */ "./src/app/home/contact/contact.component.ts");
/* harmony import */ var _home_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/dashboard/dashboard.component */ "./src/app/home/dashboard/dashboard.component.ts");
/* harmony import */ var _layout_header_account_header_account_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./layout/header-account/header-account.component */ "./src/app/layout/header-account/header-account.component.ts");
/* harmony import */ var _layout_footer_account_footer_account_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./layout/footer-account/footer-account.component */ "./src/app/layout/footer-account/footer-account.component.ts");
/* harmony import */ var _create_account_create_account_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./create-account/create-account.component */ "./src/app/create-account/create-account.component.ts");
/* harmony import */ var _setup_guide_setup_guide_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./setup-guide/setup-guide.component */ "./src/app/setup-guide/setup-guide.component.ts");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./setting/setting.component */ "./src/app/setting/setting.component.ts");
/* harmony import */ var _appService_api_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./appService/api-service */ "./src/app/appService/api-service.ts");
/* harmony import */ var _appService_connect_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./appService/connect-service */ "./src/app/appService/connect-service.ts");
/* harmony import */ var _appService_authenticate_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./appService/authenticate.-service */ "./src/app/appService/authenticate.-service.ts");
/* harmony import */ var _setting_page_header_setting_header_setting_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./setting/page/header-setting/header-setting.component */ "./src/app/setting/page/header-setting/header-setting.component.ts");
/* harmony import */ var _setting_page_footer_setting_footer_setting_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./setting/page/footer-setting/footer-setting.component */ "./src/app/setting/page/footer-setting/footer-setting.component.ts");
/* harmony import */ var _appService_user_service_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./appService/user-service.service */ "./src/app/appService/user-service.service.ts");
/* harmony import */ var _appService_setup_guide_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./appService/setup-guide.service */ "./src/app/appService/setup-guide.service.ts");
/* harmony import */ var _appService_ngx_plaid_link_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./appService/ngx-plaid-link.service */ "./src/app/appService/ngx-plaid-link.service.ts");
/* harmony import */ var _appService_plaid_link_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./appService/plaid-link.service */ "./src/app/appService/plaid-link.service.ts");
/* harmony import */ var _appService_setting_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./appService/setting.service */ "./src/app/appService/setting.service.ts");



































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _layout_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _home_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_15__["AboutUsComponent"],
                _home_why_better_why_better_component__WEBPACK_IMPORTED_MODULE_16__["WhyBetterComponent"],
                _home_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"],
                _home_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"],
                _layout_header_account_header_account_component__WEBPACK_IMPORTED_MODULE_19__["HeaderAccountComponent"],
                _layout_footer_account_footer_account_component__WEBPACK_IMPORTED_MODULE_20__["FooterAccountComponent"],
                _create_account_create_account_component__WEBPACK_IMPORTED_MODULE_21__["CreateAccountComponent"],
                _setup_guide_setup_guide_component__WEBPACK_IMPORTED_MODULE_22__["SetupGuideComponent"],
                _setting_setting_component__WEBPACK_IMPORTED_MODULE_23__["SettingComponent"],
                _setting_page_header_setting_header_setting_component__WEBPACK_IMPORTED_MODULE_27__["HeaderSettingComponent"],
                _setting_page_footer_setting_footer_setting_component__WEBPACK_IMPORTED_MODULE_28__["FooterSettingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot({
                    timeOut: 2000,
                    positionClass: 'toast-top-center',
                    preventDuplicates: true,
                }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]
            ],
            providers: [
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"],
                _appService_api_service__WEBPACK_IMPORTED_MODULE_24__["ApiService"],
                _appService_connect_service__WEBPACK_IMPORTED_MODULE_25__["ConnectAccountService"],
                _appService_authenticate_service__WEBPACK_IMPORTED_MODULE_26__["UserActive"],
                _appService_user_service_service__WEBPACK_IMPORTED_MODULE_29__["UserServiceService"],
                _appService_setup_guide_service__WEBPACK_IMPORTED_MODULE_30__["SetupGuideService"],
                _appService_ngx_plaid_link_service__WEBPACK_IMPORTED_MODULE_31__["NgxPlaidLinkService"],
                _appService_plaid_link_service__WEBPACK_IMPORTED_MODULE_32__["PlaidLinkService"],
                _appService_setting_service__WEBPACK_IMPORTED_MODULE_33__["SettingService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/appService/api-service.ts":
/*!*******************************************!*\
  !*** ./src/app/appService/api-service.ts ***!
  \*******************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.env = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    ApiService.prototype.mapResponseDefault = function (res) {
        var out = null;
        try {
            out = res.json();
        }
        catch (e) {
        }
        return out;
    };
    ;
    ApiService.prototype.get = function (pathApi) {
        var _token = localStorage.getItem('_token');
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + _token
            })
        };
        return this.http.get("" + this.env + pathApi, options);
    };
    ApiService.prototype.post = function (pathApi, body, mapResponse) {
        var _token = localStorage.getItem('_token');
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + _token
            })
        };
        if (mapResponse && mapResponse !== 0 && typeof mapResponse !== 'function')
            mapResponse = 0;
        if (!mapResponse || mapResponse === 0)
            mapResponse = this.mapResponseDefault;
        return this.http.post("" + this.env + pathApi, body, options);
    };
    ApiService.prototype.delete = function (pathApi) {
        var _token = localStorage.getItem('_token');
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + _token
            })
        };
        return this.http.delete("" + this.env + pathApi, options);
    };
    ApiService.prototype.put = function (pathApi, body) {
        var _token = localStorage.getItem('_token');
        var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + _token
            })
        };
        return this.http.put("" + this.env + pathApi, body, options);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/appService/authenticate.-service.ts":
/*!*****************************************************!*\
  !*** ./src/app/appService/authenticate.-service.ts ***!
  \*****************************************************/
/*! exports provided: UserActive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActive", function() { return UserActive; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var UserActive = /** @class */ (function () {
    function UserActive(router) {
        this.router = router;
    }
    UserActive.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('_token')) {
            return true;
        }
        this.router.navigate(['signup/signin']);
        return false;
    };
    UserActive = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserActive);
    return UserActive;
}());



/***/ }),

/***/ "./src/app/appService/connect-service.ts":
/*!***********************************************!*\
  !*** ./src/app/appService/connect-service.ts ***!
  \***********************************************/
/*! exports provided: ConnectAccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectAccountService", function() { return ConnectAccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-service */ "./src/app/appService/api-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var ConnectAccountService = /** @class */ (function () {
    function ConnectAccountService(_api, router, _toar) {
        this._api = _api;
        this.router = router;
        this._toar = _toar;
    }
    ConnectAccountService.prototype.loginBetter = function (email, password) {
        var _this = this;
        var api = "auth/login";
        var data = {
            'email': email,
            'password': password,
            'osType': 'web'
        };
        this._api.post(api, data)
            .subscribe(function (data) {
            _this.saveAccToken(data);
            _this.checkSMS(data);
            _this.router.navigate(['setup-guide']);
        }, function (err) {
            _this.checkSMS(data);
            console.log(err);
        });
    };
    ConnectAccountService.prototype.registerBetter = function (emailRegister, passwordRegister) {
        var _this = this;
        var api = "auth/register";
        var data = {
            'email': emailRegister,
            'password': passwordRegister,
            'osType': 'web'
        };
        this._api.post(api, data)
            .subscribe(function (dt) {
            _this.saveAccToken(dt);
            _this.checkSMS(data);
            _this.router.navigate(['signup/mobile']);
        }, function (err) {
            _this.checkSMS(data);
            console.log(err);
        });
    };
    ConnectAccountService.prototype.PhoneNumber = function (phoneNumber) {
        var _this = this;
        var api = "auth/sms/send-phone";
        var data = {
            'phone': phoneNumber
        };
        this._api.post(api, data).subscribe(function (dt) {
            if (dt['status'] == 200) {
                _this.router.navigate(['signup/verify-code']);
            }
            else {
                return false;
            }
        });
    };
    ConnectAccountService.prototype.saveAccToken = function (data) {
        if (data && data['status'] == 200) {
            console.log(data);
            localStorage.setItem('_token', data['data']['accessToken']);
            localStorage.setItem('_userId', data['data']['userId']);
            return true;
        }
        else {
            localStorage.removeItem('_token');
            return false;
        }
    };
    ConnectAccountService.prototype.checkSMS = function (dt) {
        if (dt['status'] == 200) {
            this._toar.success("Successfully!", dt.D);
        }
        if (dt['status'] != 200) {
            this._toar.error("Incorrect log in credentials!", dt.D);
        }
    };
    ConnectAccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], ConnectAccountService);
    return ConnectAccountService;
}());



/***/ }),

/***/ "./src/app/appService/ngx-plaid-link-handler.ts":
/*!******************************************************!*\
  !*** ./src/app/appService/ngx-plaid-link-handler.ts ***!
  \******************************************************/
/*! exports provided: PlaidLinkHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaidLinkHandler", function() { return PlaidLinkHandler; });
var PlaidLinkHandler = /** @class */ (function () {
    /**
     * Constructor configures the Plaid Link handler with given config options.
     * @param PlaidConfig config
     */
    function PlaidLinkHandler(config) {
        this.plaidLink = Plaid.create(config);
    }
    /**
     * Open the Plaid Link window for this handler.
     * @param string institution The name of the institution to open
     */
    PlaidLinkHandler.prototype.open = function (institution) {
        this.plaidLink.open(institution);
    };
    /**
     * Closes the currently open Plaid Link window if any.
     */
    PlaidLinkHandler.prototype.exit = function () {
        this.plaidLink.exit();
    };
    return PlaidLinkHandler;
}());



/***/ }),

/***/ "./src/app/appService/ngx-plaid-link.service.ts":
/*!******************************************************!*\
  !*** ./src/app/appService/ngx-plaid-link.service.ts ***!
  \******************************************************/
/*! exports provided: NgxPlaidLinkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPlaidLinkService", function() { return NgxPlaidLinkService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_plaid_link_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngx-plaid-link-handler */ "./src/app/appService/ngx-plaid-link-handler.ts");



var NgxPlaidLinkService = /** @class */ (function () {
    function NgxPlaidLinkService() {
    }
    /**
     * Create a Plaid Link instance as soon as Plaid Link has loaded.
     * @param PlaidConfig config
     * @returns Promise<PlaidLinkHandler>
     */
    NgxPlaidLinkService.prototype.createPlaid = function (config) {
        return this.loadPlaid().then(function () {
            return new _ngx_plaid_link_handler__WEBPACK_IMPORTED_MODULE_2__["PlaidLinkHandler"](config);
        });
    };
    /**
     * Load or wait for the Plaid Link library to load.
     * @returns Promise<void>
     */
    NgxPlaidLinkService.prototype.loadPlaid = function () {
        if (!this.loaded) {
            this.loaded = new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = 'https://cdn.plaid.com/link/v2/stable/link-initialize.js';
                script.onerror = function (e) { return reject(e); };
                if (script.readyState) {
                    script.onreadystatechange = function () {
                        if (script.readyState === 'loaded' || script.readyState === 'complete') {
                            script.onreadystatechange = null;
                            resolve();
                        }
                    };
                }
                else {
                    script.onload = function () {
                        resolve();
                    };
                }
                document.getElementsByTagName('body')[0].appendChild(script);
            });
        }
        return this.loaded;
    };
    NgxPlaidLinkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NgxPlaidLinkService);
    return NgxPlaidLinkService;
}());



/***/ }),

/***/ "./src/app/appService/plaid-link.service.ts":
/*!**************************************************!*\
  !*** ./src/app/appService/plaid-link.service.ts ***!
  \**************************************************/
/*! exports provided: PlaidLinkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaidLinkService", function() { return PlaidLinkService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-service */ "./src/app/appService/api-service.ts");



var PlaidLinkService = /** @class */ (function () {
    function PlaidLinkService(_api) {
        this._api = _api;
    }
    PlaidLinkService.prototype.getBank = function (id) {
        return this._api.get("plaid/" + id);
    };
    PlaidLinkService.prototype.unLink = function (id, body) {
        return this._api.post("plaid/unlink/" + id, body);
    };
    PlaidLinkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], PlaidLinkService);
    return PlaidLinkService;
}());



/***/ }),

/***/ "./src/app/appService/setting.service.ts":
/*!***********************************************!*\
  !*** ./src/app/appService/setting.service.ts ***!
  \***********************************************/
/*! exports provided: SettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingService", function() { return SettingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-service */ "./src/app/appService/api-service.ts");



var SettingService = /** @class */ (function () {
    function SettingService(_api) {
        this._api = _api;
    }
    SettingService.prototype.helpSupport = function () {
        return this._api.get("support");
    };
    SettingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], SettingService);
    return SettingService;
}());



/***/ }),

/***/ "./src/app/appService/setup-guide.service.ts":
/*!***************************************************!*\
  !*** ./src/app/appService/setup-guide.service.ts ***!
  \***************************************************/
/*! exports provided: SetupGuideService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupGuideService", function() { return SetupGuideService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-service */ "./src/app/appService/api-service.ts");



var SetupGuideService = /** @class */ (function () {
    function SetupGuideService(_api) {
        this._api = _api;
    }
    SetupGuideService.prototype.getJob = function () {
        return this._api.get("job");
    };
    SetupGuideService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], SetupGuideService);
    return SetupGuideService;
}());



/***/ }),

/***/ "./src/app/appService/user-service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/appService/user-service.service.ts ***!
  \****************************************************/
/*! exports provided: UserServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceService", function() { return UserServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-service */ "./src/app/appService/api-service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var UserServiceService = /** @class */ (function () {
    function UserServiceService(_api) {
        this._api = _api;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    UserServiceService.prototype.getJob = function () {
        return this._api.get("job");
    };
    UserServiceService.prototype.updateProfile = function (id, data) {
        return this._api.put("user/" + id, data);
    };
    UserServiceService.prototype.changEmail = function (data) {
        return this._api.post("user/change-email", data);
    };
    UserServiceService.prototype.changePassWord = function (data) {
        return this._api.put("user/password/change", data);
    };
    UserServiceService.prototype.deleteAccount = function (id) {
        return this._api.delete("user/" + id);
    };
    UserServiceService.prototype.deActiveAccount = function (id, lock, data) {
        return this._api.put("user/admin/lock/" + id + "?lock=" + lock, data);
    };
    //active menu
    UserServiceService.prototype.sendActiveBtn = function (btn) {
        this.subject.next({ btn: btn });
    };
    UserServiceService.prototype.clearActiveBtn = function () {
        this.subject.next();
    };
    UserServiceService.prototype.getActiveBtn = function () {
        return this.subject.asObservable();
    };
    UserServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], UserServiceService);
    return UserServiceService;
}());



/***/ }),

/***/ "./src/app/create-account/create-account.component.css":
/*!*************************************************************!*\
  !*** ./src/app/create-account/create-account.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1hY2NvdW50L2NyZWF0ZS1hY2NvdW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/create-account/create-account.component.html":
/*!**************************************************************!*\
  !*** ./src/app/create-account/create-account.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-account></app-header-account>\r\n<router-outlet></router-outlet>\r\n<app-footer-account></app-footer-account>"

/***/ }),

/***/ "./src/app/create-account/create-account.component.ts":
/*!************************************************************!*\
  !*** ./src/app/create-account/create-account.component.ts ***!
  \************************************************************/
/*! exports provided: CreateAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountComponent", function() { return CreateAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CreateAccountComponent = /** @class */ (function () {
    function CreateAccountComponent() {
    }
    CreateAccountComponent.prototype.ngOnInit = function () {
    };
    CreateAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-account',
            template: __webpack_require__(/*! ./create-account.component.html */ "./src/app/create-account/create-account.component.html"),
            styles: [__webpack_require__(/*! ./create-account.component.css */ "./src/app/create-account/create-account.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CreateAccountComponent);
    return CreateAccountComponent;
}());



/***/ }),

/***/ "./src/app/home/about-us/about-us.component.css":
/*!******************************************************!*\
  !*** ./src/app/home/about-us/about-us.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#scrollTo{\r\n    position: fixed;\r\n    bottom: 70px;\r\n    right: 50px;\r\n    width: 50px;\r\n    height: 50px;\r\n    border: none;\r\n    background: #FF9100;\r\n    border-radius: 50%;\r\n    font-family: xx-large;\r\n    cursor: pointer;\r\n    color: #FFF;\r\n    outline: 0;\r\n    box-shadow: 2px 4px 16px rgba(0, 0, 0, 1);\r\n    z-index: 1;\r\n    opacity: 0;\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n    visibility: hidden;\r\n    transition: .2s;\r\n}\r\n\r\n#scrollTo.show{\r\n    opacity: 1;\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    visibility: visible;\r\n}\r\n\r\n.about-us{\r\n    margin-top: 68px;\r\n    font-family: Lato;\r\n    position: relative;\r\n    width: 1440px;\r\n    padding: 0 95px;\r\n}\r\n\r\n#about-us-top{\r\n    display: flex;\r\n}\r\n\r\n.about-us-left{\r\n    padding-top: 116px;\r\n}\r\n\r\n.about-us-left h1 {\r\n    font-size: 52px;\r\n    font-style: normal;\r\n    font-weight: 900;\r\n    line-height: normal;\r\n    width: 347px;\r\n    height: 72px;\r\n    color: #001527;\r\n}\r\n\r\n.about-us-left p{\r\n    line-height: 34px;\r\n    font-size: 22px;\r\n    color: #757575;\r\n    margin-top: 45px;\r\n    margin-bottom: 61px;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    width: 468px;\r\n    height: 111px;\r\n}\r\n\r\n.about-us-left button{\r\n    background: #FF9100;\r\n    border-radius: 44px;\r\n    color: #FFF;\r\n    border: none;\r\n    width: 240px;\r\n    height: 54px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    outline: 0;\r\n}\r\n\r\n.about-us-right{\r\n    position: absolute;\r\n    width: 798px;\r\n    height: 590px;\r\n    left: 563px;\r\n    top: 0;\r\n}\r\n\r\n/* about-helping */\r\n\r\n#about-helping{\r\n    margin-top: 313px;\r\n    display: flex;\r\n}\r\n\r\n.about-helping-left img{\r\n    width: 706px !important;\r\n    height: 423px !important;\r\n    margin-left: -37px;\r\n}\r\n\r\n.about-helping-right{\r\n    padding-top: 50px;\r\n    position: absolute;\r\n    left: 802px;\r\n}\r\n\r\n.about-helping-right h2 {\r\n    font-size: 32px;\r\n    width: 490px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    height: 77px;\r\n    color: #001527;\r\n}\r\n\r\n.about-helping-right p{\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    font-style: normal;\r\n    width: 543px;\r\n    height: 222px;\r\n    font-weight: normal;\r\n    color: #757575;\r\n    margin-top: 32px;\r\n}\r\n\r\n/* our-values */\r\n\r\n#our-values{\r\n    margin-top: 242px;\r\n}\r\n\r\n#our-values h2{\r\n    font-size: 32px;\r\n    width: 793px;\r\n    height: 77px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    color: #04B7FF;\r\n    margin: auto;\r\n}\r\n\r\n.content-values{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin-top: 229px;\r\n\r\n}\r\n\r\n.item-content{\r\n    flex: 0 0 50%;\r\n    box-sizing: border-box;\r\n    display: -webkit-inline-box;\r\n}\r\n\r\n.item-content .icon-img{\r\n    padding-top: 7px;\r\n}\r\n\r\n.item-content .item-icon{\r\n    margin-left: 21px;\r\n}\r\n\r\n.item-content .item-icon span{\r\n    font-size: 32px;\r\n    color: #001527;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.item-content .item-icon p {\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    color: #757575;\r\n    margin-top: 25px;\r\n    margin-bottom: 44px;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n}\r\n\r\n.item-content:first-child .item-icon span{\r\n    width: 121px;\r\n    height: 39px;\r\n}\r\n\r\n.item-content:first-child .item-icon p{\r\n    width: 494px !important;\r\n    height: 148px !important;\r\n}\r\n\r\n.item-content:nth-child(2) .item-icon span{\r\n    width: 142px;\r\n    height: 39px;\r\n}\r\n\r\n.item-content:nth-child(2) .item-icon p{\r\n    width: 523px !important;\r\n    height: 185px !important;\r\n}\r\n\r\n.item-content:nth-child(3) .item-icon span{\r\n    width: 169px;\r\n    height: 39px;\r\n}\r\n\r\n.item-content:nth-child(3) .item-icon p{\r\n    width: 494px !important;\r\n    height: 148px !important;\r\n}\r\n\r\n.item-content:nth-child(4) .item-icon span{\r\n    width: 165px;\r\n    height: 39px;\r\n}\r\n\r\n.item-content:nth-child(4) .item-icon p{\r\n    width: 494px !important;\r\n    height: 144px !important;\r\n}\r\n\r\n.item-content:nth-child(5) .item-icon span{\r\n    width: 126px;\r\n    height: 39px;\r\n}\r\n\r\n.item-content:nth-child(5) .item-icon p{\r\n    width: 494px !important;\r\n    height: 74px !important;\r\n}\r\n\r\n/* first-product */\r\n\r\n#first-product{\r\n    margin-top: 121px;\r\n    display: flex;\r\n}\r\n\r\n.first-product-left{\r\n    padding-top: 160px;\r\n}\r\n\r\n.first-product-left h2{\r\n    font-size: 32px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    color: #001527;\r\n    width: 242px;\r\n    height: 39px;\r\n}\r\n\r\n.first-product-left p{\r\n    line-height: 34px;\r\n    font-size: 22px;\r\n    color: #757575;\r\n    margin-bottom: 54px;\r\n    margin-top: 32px;\r\n    width: 409px;\r\n    height: 148px;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n}\r\n\r\n.first-product-left .learn-more{\r\n    position: relative;\r\n}\r\n\r\n.first-product-left .learn-more a{\r\n    font-size: 22px;\r\n    color: #FF9100;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    width: 262px;\r\n    height: 27px;\r\n}\r\n\r\n.first-product-left .learn-more a img{\r\n    position: absolute;\r\n    top: 2px;\r\n    left: 278px\r\n}\r\n\r\n.first-product-right{\r\n    position: absolute;\r\n    width: 798px;\r\n    height: 608px;\r\n    left: 609px;\r\n    z-index: 0;\r\n}\r\n\r\n/* about-us-bot */\r\n\r\n#about-us-bot{\r\n    margin-top: 351px;\r\n    margin-bottom: 213px;\r\n    display: flex;\r\n}\r\n\r\n#about-us-bot h2{\r\n    color: #000;\r\n    font-size: 32px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    width: 303px;\r\n    height: 39px;\r\n}\r\n\r\n#about-us-bot p{\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    color: #757575;\r\n    opacity: 0.6;\r\n    margin-top: 32px;\r\n    margin-bottom: 42px;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    width: 524px;\r\n    height: 74px;\r\n}\r\n\r\n#about-us-bot button{\r\n    border: 3px solid #FF9100;\r\n    box-sizing: border-box;\r\n    border-radius: 44px;\r\n    color: #FFF;\r\n    background: #FF9100;\r\n    font-size: 20px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    height: 54px;\r\n    width: 240px;\r\n    outline: 0;\r\n}\r\n\r\n#about-us-bot .better-right{\r\n    position: absolute;\r\n    left: 821px;\r\n}\r\n\r\n#about-us-bot .better-right button{\r\n    background: unset;\r\n    color: #001527;\r\n    font-size: 20px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    height: 54px;\r\n    width: 240px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0lBQ1gsMENBQTBDO0lBQzFDLFdBQVc7SUFDWCxXQUFXO0lBQ1gsNEJBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksV0FBVztJQUNYLDRCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0NBQ3ZCOztBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGdCQUFnQjtDQUNuQjs7QUFDRDtJQUNJLGNBQWM7Q0FDakI7O0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGFBQWE7SUFDYixlQUFlO0NBQ2xCOztBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixjQUFjO0NBQ2pCOztBQUNEO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsV0FBVztDQUNkOztBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixjQUFjO0lBQ2QsWUFBWTtJQUNaLE9BQU87Q0FDVjs7QUFFRCxtQkFBbUI7O0FBQ25CO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7Q0FDakI7O0FBQ0Q7SUFDSSx3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtDQUN0Qjs7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtDQUNmOztBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsZUFBZTtDQUNsQjs7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixpQkFBaUI7Q0FDcEI7O0FBRUQsZ0JBQWdCOztBQUNoQjtJQUNJLGtCQUFrQjtDQUNyQjs7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixhQUFhO0NBQ2hCOztBQUNEO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7O0NBRXJCOztBQUNEO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2Qiw0QkFBNEI7Q0FDL0I7O0FBQ0Q7SUFDSSxpQkFBaUI7Q0FDcEI7O0FBQ0Q7SUFDSSxrQkFBa0I7Q0FDckI7O0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtDQUN2Qjs7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtDQUN2Qjs7QUFDRDtJQUNJLGFBQWE7SUFDYixhQUFhO0NBQ2hCOztBQUNEO0lBQ0ksd0JBQXdCO0lBQ3hCLHlCQUF5QjtDQUM1Qjs7QUFDRDtJQUNJLGFBQWE7SUFDYixhQUFhO0NBQ2hCOztBQUNEO0lBQ0ksd0JBQXdCO0lBQ3hCLHlCQUF5QjtDQUM1Qjs7QUFDRDtJQUNJLGFBQWE7SUFDYixhQUFhO0NBQ2hCOztBQUNEO0lBQ0ksd0JBQXdCO0lBQ3hCLHlCQUF5QjtDQUM1Qjs7QUFDRDtJQUNJLGFBQWE7SUFDYixhQUFhO0NBQ2hCOztBQUNEO0lBQ0ksd0JBQXdCO0lBQ3hCLHlCQUF5QjtDQUM1Qjs7QUFDRDtJQUNJLGFBQWE7SUFDYixhQUFhO0NBQ2hCOztBQUNEO0lBQ0ksd0JBQXdCO0lBQ3hCLHdCQUF3QjtDQUMzQjs7QUFFRCxtQkFBbUI7O0FBQ25CO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7Q0FDakI7O0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGFBQWE7SUFDYixhQUFhO0NBQ2hCOztBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixvQkFBb0I7Q0FDdkI7O0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixhQUFhO0NBQ2hCOztBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxXQUFXO0NBQ2Q7O0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztDQUNkOztBQUVELGtCQUFrQjs7QUFDbEI7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGNBQWM7Q0FDakI7O0FBQ0Q7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixhQUFhO0NBQ2hCOztBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsYUFBYTtDQUNoQjs7QUFDRDtJQUNJLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGFBQWE7SUFDYixXQUFXO0NBQ2Q7O0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtDQUNmOztBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzY3JvbGxUb3tcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogNzBweDtcclxuICAgIHJpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkY5MTAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZm9udC1mYW1pbHk6IHh4LWxhcmdlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbn1cclxuXHJcbiNzY3JvbGxUby5zaG93e1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcbi5hYm91dC11c3tcclxuICAgIG1hcmdpbi10b3A6IDY4cHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxNDQwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDk1cHg7XHJcbn1cclxuI2Fib3V0LXVzLXRvcHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmFib3V0LXVzLWxlZnR7XHJcbiAgICBwYWRkaW5nLXRvcDogMTE2cHg7XHJcbn1cclxuLmFib3V0LXVzLWxlZnQgaDEge1xyXG4gICAgZm9udC1zaXplOiA1MnB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICB3aWR0aDogMzQ3cHg7XHJcbiAgICBoZWlnaHQ6IDcycHg7XHJcbiAgICBjb2xvcjogIzAwMTUyNztcclxufVxyXG4uYWJvdXQtdXMtbGVmdCBwe1xyXG4gICAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIG1hcmdpbi10b3A6IDQ1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2MXB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHdpZHRoOiA0NjhweDtcclxuICAgIGhlaWdodDogMTExcHg7XHJcbn1cclxuLmFib3V0LXVzLWxlZnQgYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZDogI0ZGOTEwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQ0cHg7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICAgIGhlaWdodDogNTRweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6IDA7XHJcbn1cclxuLmFib3V0LXVzLXJpZ2h0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDc5OHB4O1xyXG4gICAgaGVpZ2h0OiA1OTBweDtcclxuICAgIGxlZnQ6IDU2M3B4O1xyXG4gICAgdG9wOiAwO1xyXG59XHJcblxyXG4vKiBhYm91dC1oZWxwaW5nICovXHJcbiNhYm91dC1oZWxwaW5ne1xyXG4gICAgbWFyZ2luLXRvcDogMzEzcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5hYm91dC1oZWxwaW5nLWxlZnQgaW1ne1xyXG4gICAgd2lkdGg6IDcwNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDQyM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogLTM3cHg7XHJcbn1cclxuLmFib3V0LWhlbHBpbmctcmlnaHR7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDgwMnB4O1xyXG59XHJcbi5hYm91dC1oZWxwaW5nLXJpZ2h0IGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIHdpZHRoOiA0OTBweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGhlaWdodDogNzdweDtcclxuICAgIGNvbG9yOiAjMDAxNTI3O1xyXG59XHJcbi5hYm91dC1oZWxwaW5nLXJpZ2h0IHB7XHJcbiAgICBsaW5lLWhlaWdodDogMzdweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIHdpZHRoOiA1NDNweDtcclxuICAgIGhlaWdodDogMjIycHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG59XHJcblxyXG4vKiBvdXItdmFsdWVzICovXHJcbiNvdXItdmFsdWVze1xyXG4gICAgbWFyZ2luLXRvcDogMjQycHg7XHJcbn1cclxuI291ci12YWx1ZXMgaDJ7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICB3aWR0aDogNzkzcHg7XHJcbiAgICBoZWlnaHQ6IDc3cHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzA0QjdGRjtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4uY29udGVudC12YWx1ZXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWFyZ2luLXRvcDogMjI5cHg7XHJcblxyXG59XHJcbi5pdGVtLWNvbnRlbnR7XHJcbiAgICBmbGV4OiAwIDAgNTAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcclxufVxyXG4uaXRlbS1jb250ZW50IC5pY29uLWltZ3tcclxuICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbn1cclxuLml0ZW0tY29udGVudCAuaXRlbS1pY29ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIxcHg7XHJcbn1cclxuLml0ZW0tY29udGVudCAuaXRlbS1pY29uIHNwYW57XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBjb2xvcjogIzAwMTUyNztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuLml0ZW0tY29udGVudCAuaXRlbS1pY29uIHAge1xyXG4gICAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0NHB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4uaXRlbS1jb250ZW50OmZpcnN0LWNoaWxkIC5pdGVtLWljb24gc3BhbntcclxuICAgIHdpZHRoOiAxMjFweDtcclxuICAgIGhlaWdodDogMzlweDtcclxufVxyXG4uaXRlbS1jb250ZW50OmZpcnN0LWNoaWxkIC5pdGVtLWljb24gcHtcclxuICAgIHdpZHRoOiA0OTRweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxNDhweCAhaW1wb3J0YW50O1xyXG59XHJcbi5pdGVtLWNvbnRlbnQ6bnRoLWNoaWxkKDIpIC5pdGVtLWljb24gc3BhbntcclxuICAgIHdpZHRoOiAxNDJweDtcclxuICAgIGhlaWdodDogMzlweDtcclxufVxyXG4uaXRlbS1jb250ZW50Om50aC1jaGlsZCgyKSAuaXRlbS1pY29uIHB7XHJcbiAgICB3aWR0aDogNTIzcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTg1cHggIWltcG9ydGFudDtcclxufVxyXG4uaXRlbS1jb250ZW50Om50aC1jaGlsZCgzKSAuaXRlbS1pY29uIHNwYW57XHJcbiAgICB3aWR0aDogMTY5cHg7XHJcbiAgICBoZWlnaHQ6IDM5cHg7XHJcbn1cclxuLml0ZW0tY29udGVudDpudGgtY2hpbGQoMykgLml0ZW0taWNvbiBwe1xyXG4gICAgd2lkdGg6IDQ5NHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDE0OHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLml0ZW0tY29udGVudDpudGgtY2hpbGQoNCkgLml0ZW0taWNvbiBzcGFue1xyXG4gICAgd2lkdGg6IDE2NXB4O1xyXG4gICAgaGVpZ2h0OiAzOXB4O1xyXG59XHJcbi5pdGVtLWNvbnRlbnQ6bnRoLWNoaWxkKDQpIC5pdGVtLWljb24gcHtcclxuICAgIHdpZHRoOiA0OTRweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxNDRweCAhaW1wb3J0YW50O1xyXG59XHJcbi5pdGVtLWNvbnRlbnQ6bnRoLWNoaWxkKDUpIC5pdGVtLWljb24gc3BhbntcclxuICAgIHdpZHRoOiAxMjZweDtcclxuICAgIGhlaWdodDogMzlweDtcclxufVxyXG4uaXRlbS1jb250ZW50Om50aC1jaGlsZCg1KSAuaXRlbS1pY29uIHB7XHJcbiAgICB3aWR0aDogNDk0cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNzRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBmaXJzdC1wcm9kdWN0ICovXHJcbiNmaXJzdC1wcm9kdWN0e1xyXG4gICAgbWFyZ2luLXRvcDogMTIxcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5maXJzdC1wcm9kdWN0LWxlZnR7XHJcbiAgICBwYWRkaW5nLXRvcDogMTYwcHg7XHJcbn1cclxuLmZpcnN0LXByb2R1Y3QtbGVmdCBoMntcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjMDAxNTI3O1xyXG4gICAgd2lkdGg6IDI0MnB4O1xyXG4gICAgaGVpZ2h0OiAzOXB4O1xyXG59XHJcbi5maXJzdC1wcm9kdWN0LWxlZnQgcHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1NHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxuICAgIHdpZHRoOiA0MDlweDtcclxuICAgIGhlaWdodDogMTQ4cHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcbi5maXJzdC1wcm9kdWN0LWxlZnQgLmxlYXJuLW1vcmV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmZpcnN0LXByb2R1Y3QtbGVmdCAubGVhcm4tbW9yZSBhe1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6ICNGRjkxMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICB3aWR0aDogMjYycHg7XHJcbiAgICBoZWlnaHQ6IDI3cHg7XHJcbn1cclxuLmZpcnN0LXByb2R1Y3QtbGVmdCAubGVhcm4tbW9yZSBhIGltZ3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMnB4O1xyXG4gICAgbGVmdDogMjc4cHhcclxufVxyXG4uZmlyc3QtcHJvZHVjdC1yaWdodHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA3OThweDtcclxuICAgIGhlaWdodDogNjA4cHg7XHJcbiAgICBsZWZ0OiA2MDlweDtcclxuICAgIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi8qIGFib3V0LXVzLWJvdCAqL1xyXG4jYWJvdXQtdXMtYm90e1xyXG4gICAgbWFyZ2luLXRvcDogMzUxcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMTNweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuI2Fib3V0LXVzLWJvdCBoMntcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgd2lkdGg6IDMwM3B4O1xyXG4gICAgaGVpZ2h0OiAzOXB4O1xyXG59XHJcbiNhYm91dC11cy1ib3QgcHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzN3B4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDJweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB3aWR0aDogNTI0cHg7XHJcbiAgICBoZWlnaHQ6IDc0cHg7XHJcbn1cclxuI2Fib3V0LXVzLWJvdCBidXR0b257XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjRkY5MTAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQ0cHg7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGJhY2tncm91bmQ6ICNGRjkxMDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59XHJcbiNhYm91dC11cy1ib3QgLmJldHRlci1yaWdodHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDgyMXB4O1xyXG59XHJcbiNhYm91dC11cy1ib3QgLmJldHRlci1yaWdodCBidXR0b257XHJcbiAgICBiYWNrZ3JvdW5kOiB1bnNldDtcclxuICAgIGNvbG9yOiAjMDAxNTI3O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA1NHB4O1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/about-us/about-us.component.html":
/*!*******************************************************!*\
  !*** ./src/app/home/about-us/about-us.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button id=\"scrollTo\">\r\n  <i class=\"fa fa-arrow-up\"></i>\r\n</button>\r\n<div class=\"about-us\">\r\n  <div id=\"about-us-top\">\r\n    <div class=\"about-us-left\">\r\n      <h1>Why Better?</h1>\r\n      <p>{{contentLeft}}</p>\r\n      <button type=\"button\"> Get Safehold </button>\r\n    </div>\r\n    <div class=\"about-us-right\">\r\n      <img [src]=\"img1\" class=\"img-fluid\">\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"about-helping\">\r\n    <div class=\"about-helping-left\">\r\n      <img [src]=\"img2\" class=\"img-fluid\">\r\n    </div>\r\n    <div class=\"about-helping-right\">\r\n      <h2>Helping solopreneurs via technology solutions</h2>\r\n      <p>{{contentRight}}</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"our-values\">\r\n    <h2 class=\"text-center\">Our values set the guiding principles for everything we do and everything we build.</h2>\r\n    <div class=\"content-values\">\r\n      <div class=\"item-content\">\r\n        <div class=\"icon-img\">\r\n          <img [src]=\"imgIcon\">\r\n        </div>\r\n        <div class=\"item-icon\">\r\n          <span>Stability</span>\r\n          <p>{{content1}}</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"item-content\">\r\n        <div class=\"icon-img\">\r\n          <img [src]=\"imgIcon\">\r\n        </div>\r\n        <div class=\"item-icon\">\r\n          <span>Optimism</span>\r\n          <p>{{content2}}</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"item-content\">\r\n        <div class=\"icon-img\">\r\n          <img [src]=\"imgIcon\">\r\n        </div>\r\n        <div class=\"item-icon\">\r\n          <span>Community</span>\r\n          <p>{{content3}}</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"item-content\">\r\n        <div class=\"icon-img\">\r\n          <img [src]=\"imgIcon\">\r\n        </div>\r\n        <div class=\"item-icon\">\r\n          <span>Practicality</span>\r\n          <p>{{content4}}</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"item-content\">\r\n        <div class=\"icon-img\">\r\n          <img [src]=\"imgIcon\">\r\n        </div>\r\n        <div class=\"item-icon\">\r\n          <span>Progess</span>\r\n          <p>{{content5}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"first-product\">\r\n    <div class=\"first-product-left\">\r\n      <h2>Our first product</h2>\r\n      <p>{{contentProduct}}</p>\r\n      <span class=\"learn-more\">\r\n        <a href=\"#\">Learn more about safehold\r\n          <img [src]=\"imgPolygon\">\r\n        </a>\r\n      </span>\r\n    </div>\r\n    <div class=\"first-product-right\">\r\n      <img [src]=\"imgRight\" class=\"img-fluid\">\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"about-us-bot\">\r\n      <div class=\"better-left\">\r\n        <h2>Ready to get started?</h2>\r\n        <p>{{contentBotL}}</p>\r\n        <button type=\"button\" (click)=\"createAccount()\">Create an account</button>\r\n      </div>\r\n      <div class=\"better-right\">\r\n        <h2>Have a question?</h2>\r\n        <p>{{contentBotR}}</p>\r\n        <button type=\"button\">Get in touch</button>\r\n      </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/about-us/about-us.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/about-us/about-us.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent(router) {
        var _this = this;
        this.router = router;
        // about-us-top
        this.img1 = "assets/images/about-us.png";
        this.contentLeft = "Betters aim is to protect and empower solopreneurs with technology solutions, starting with the tax safeholding app.";
        // about-helping
        this.img2 = "assets/images/About-us(2).png";
        this.contentRight = "Better provides unique technological solutions that link companies and the on-demand workforce to ensure that both parties truly benefit from the partnership. Better seeks to become an indispensable platform of tools and services designed around being a human, to make “getting yours” in this new economy as easy as joining it.";
        // our-values
        this.imgIcon = "assets/images/Icon1(about-us).png";
        this.content1 = "We believe that when people feel comfortable in their livelihood they’re more apt to thrive, so we aspire to build tools that enable solopreneurs to feel that assurance.";
        this.content2 = "We believe in the boundless potential of entrepreneurship. Ourselves, our partners, and our customers are all building our dreams from the ground up. Overcoming our challenges requires hope, optimism, and a trust in ourselves that we will succeed.";
        this.content3 = "We recognize the importance of not feeling alone within solopreneurship, so we aspire to build a sense of community to make the whole solopreneur economy greater than the sum of its parts.";
        this.content4 = "We believe that practical solutions will always win over radical ones, even though sometimes the practical can be radical.";
        this.content5 = "We aspire to always move forward with purpose and create a sense of forward momentum.";
        // our-first-product 
        this.contentProduct = "Setup is quick and easy—tailoring the app to suit your goals. Once complete, we will take care of everything making running your business more efficient.";
        this.imgPolygon = "assets/images/Polygon.png";
        this.imgRight = "assets/images/features.png";
        // about-us-bot
        this.contentBotL = "Set up an account, link to your bank and we’ll take care of the rest—letting you run your business stress free.";
        this.contentBotR = "Want to know more about us or our product? Get in touch and we’ll be happy to help.";
        window.onload = function () {
            _this.html = document.documentElement;
            _this.body = document.body;
            _this.scrollToTop = document.getElementById("scrollTo");
            _this.testScroll = _this.controlScrollTop();
        };
        window.onscroll = this.testScroll;
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent.prototype.createAccount = function () {
        this.router.navigateByUrl('/signup');
    };
    AboutUsComponent.prototype.controlScrollTop = function () {
        var windowInnerHeight = 2 * window.innerHeight;
        if (this.body.scrollTop > windowInnerHeight || this.html.scrollTop > windowInnerHeight) {
            this.scrollToTop.classList.add("show");
        }
        else {
            this.scrollToTop.classList.remove("show");
        }
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/home/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/home/about-us/about-us.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/home/contact/contact.component.css":
/*!****************************************************!*\
  !*** ./src/app/home/contact/contact.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contact{\r\n    /* margin-top: 30px; */\r\n    font-family: Lato;\r\n    display: flex;\r\n    width: 1440px;\r\n\r\n}\r\n.left-contact{\r\n    background: #FFF url('map.png') left top no-repeat;\r\n    padding-top: 124px;\r\n    height: 900px;\r\n    padding-left: 100px;\r\n    width: 50%;\r\n}\r\n.left-contact h2 {\r\n    font-size: 60px;\r\n    font-style: normal;\r\n    font-weight: 900;\r\n    line-height: normal;;\r\n    color: #000;\r\n    width: 301px;\r\n    height: 72px;\r\n}\r\n.left-contact .text-content{\r\n    font-size: 32px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    color: #757575;\r\n    margin-top: 43px;\r\n    width: 417px;\r\n    height: 77px;\r\n}\r\n.right-contact{\r\n    background: #04B7FF;\r\n    padding-left: 100px;\r\n    padding-right: 90px;\r\n    padding-top: 124px;\r\n    position: relative;\r\n    padding-bottom: 166px;\r\n    width: 50%;\r\n}\r\n.right-contact #icon-close{\r\n    position: absolute;\r\n    top: 40px;\r\n    right: 40px;\r\n    cursor: pointer;\r\n}\r\n.right-contact h2{\r\n    font-style: normal;\r\n    font-weight: 900;\r\n    line-height: normal;\r\n    font-size: 60px;\r\n    color: #FFF;\r\n    margin-bottom: 34px;\r\n    width: 247px;\r\n    height: 72px;\r\n}\r\n.right-contact #form{\r\n    font-size: 22px;\r\n    color: rgba(255, 255, 255, 0.6);\r\n    position: relative;\r\n}\r\n.right-contact #form button{\r\n    position: absolute;\r\n    right: 0;\r\n    height: 64px;\r\n    width: 164px;\r\n    border: 3px solid #FFFFFF;\r\n    box-sizing: border-box;\r\n    border-radius: 12px;\r\n    background: unset;\r\n    color: #FFF;\r\n    cursor: pointer;\r\n    outline: 0;\r\n}\r\n.right-contact #form input::-webkit-input-placeholder, .right-contact #form textarea::-webkit-input-placeholder{\r\n    font-size: 22px;\r\n    color: rgba(255, 255, 255, 0.6);\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n}\r\n.right-contact #form input::-ms-input-placeholder, .right-contact #form textarea::-ms-input-placeholder{\r\n    font-size: 22px;\r\n    color: rgba(255, 255, 255, 0.6);\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n}\r\n.right-contact #form input::placeholder, .right-contact #form textarea::placeholder{\r\n    font-size: 22px;\r\n    color: rgba(255, 255, 255, 0.6);\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n}\r\n.right-contact #form input, .right-contact #form textarea{\r\n    background: #18B6E0;\r\n    opacity: 0.4;\r\n    border-radius: 12px;\r\n    border: none;\r\n    color: rgba(255, 255, 255, 0.6);\r\n    padding-left: 32px;\r\n    height: 64px;\r\n    font-size: 22px;\r\n    padding-top: 0px;\r\n}\r\n.right-contact #form textarea{\r\n    height: 184px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGNBQWM7O0NBRWpCO0FBQ0Q7SUFDSSxtREFBMEU7SUFDMUUsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsV0FBVztDQUNkO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsV0FBVztDQUNkO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxhQUFhO0lBQ2IsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtDQUN2QjtBQU5EO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtDQUN2QjtBQU5EO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLGNBQWM7Q0FDakIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhY3R7XHJcbiAgICAvKiBtYXJnaW4tdG9wOiAzMHB4OyAqL1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDE0NDBweDtcclxuXHJcbn1cclxuLmxlZnQtY29udGFjdHtcclxuICAgIGJhY2tncm91bmQ6ICNGRkYgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9tYXAucG5nXCIpIGxlZnQgdG9wIG5vLXJlcGVhdDtcclxuICAgIHBhZGRpbmctdG9wOiAxMjRweDtcclxuICAgIGhlaWdodDogOTAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG4ubGVmdC1jb250YWN0IGgyIHtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsOztcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgd2lkdGg6IDMwMXB4O1xyXG4gICAgaGVpZ2h0OiA3MnB4O1xyXG59XHJcbi5sZWZ0LWNvbnRhY3QgLnRleHQtY29udGVudHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgbWFyZ2luLXRvcDogNDNweDtcclxuICAgIHdpZHRoOiA0MTdweDtcclxuICAgIGhlaWdodDogNzdweDtcclxufVxyXG4ucmlnaHQtY29udGFjdHtcclxuICAgIGJhY2tncm91bmQ6ICMwNEI3RkY7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogOTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMjRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNjZweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuLnJpZ2h0LWNvbnRhY3QgI2ljb24tY2xvc2V7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQwcHg7XHJcbiAgICByaWdodDogNDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ucmlnaHQtY29udGFjdCBoMntcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNHB4O1xyXG4gICAgd2lkdGg6IDI0N3B4O1xyXG4gICAgaGVpZ2h0OiA3MnB4O1xyXG59XHJcbi5yaWdodC1jb250YWN0ICNmb3Jte1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ucmlnaHQtY29udGFjdCAjZm9ybSBidXR0b257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGhlaWdodDogNjRweDtcclxuICAgIHdpZHRoOiAxNjRweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNGRkZGRkY7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGJhY2tncm91bmQ6IHVuc2V0O1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59XHJcbi5yaWdodC1jb250YWN0ICNmb3JtIGlucHV0OjpwbGFjZWhvbGRlciwgLnJpZ2h0LWNvbnRhY3QgI2Zvcm0gdGV4dGFyZWE6OnBsYWNlaG9sZGVye1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG59XHJcbi5yaWdodC1jb250YWN0ICNmb3JtIGlucHV0LCAucmlnaHQtY29udGFjdCAjZm9ybSB0ZXh0YXJlYXtcclxuICAgIGJhY2tncm91bmQ6ICMxOEI2RTA7XHJcbiAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuICAgIHBhZGRpbmctbGVmdDogMzJweDtcclxuICAgIGhlaWdodDogNjRweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbn1cclxuLnJpZ2h0LWNvbnRhY3QgI2Zvcm0gdGV4dGFyZWF7XHJcbiAgICBoZWlnaHQ6IDE4NHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/contact/contact.component.html":
/*!*****************************************************!*\
  !*** ./src/app/home/contact/contact.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contact\">\r\n    <div class=\"left-contact\">\r\n        <h2>We’re here</h2>\r\n        <div class=\"text-content\">\r\n            1530 the Alameda, Suite 305 San Jose, CA 95126\r\n        </div>\r\n    </div>\r\n    <div class=\"right-contact\">\r\n        <div id=\"icon-close\" (click)=\"ChangePage()\">\r\n            <img [src]=\"imgClose\">\r\n        </div>\r\n        <h2>Let’s talk</h2>\r\n        <div id=\"form\">\r\n            <form>\r\n                <div class=\"form-group\">\r\n                    <!-- <label>Name: </label> -->\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Name\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <!-- <label>Email: </label> -->\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <!-- <label>Phone Number: </label> -->\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Phone Number\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <!-- <label>Message: </label> -->\r\n                    <textarea class=\"form-control\" placeholder=\"Message\"></textarea>\r\n                </div>\r\n                <button type=\"button\">Send</button>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/contact/contact.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/contact/contact.component.ts ***!
  \***************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ContactComponent = /** @class */ (function () {
    function ContactComponent(router) {
        this.router = router;
        this.imgClose = "assets/images/close.png";
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.ChangePage = function () {
        this.router.navigateByUrl('home');
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/home/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/home/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/dashboard/dashboard.component.css":
/*!********************************************************!*\
  !*** ./src/app/home/dashboard/dashboard.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard{\r\n    margin-top: 26px;\r\n    font-family: Lato;\r\n    width: 1250px;\r\n    margin-left: 95px;\r\n}\r\n.bt-left{\r\n    z-index: 1;\r\n}\r\n.bt-left h2{\r\n    font-style: normal;\r\n    font-weight: 900;\r\n    line-height: normal;\r\n    font-size: 60px;\r\n    color: #001527;\r\n    margin-top: 129px;\r\n    width: 636px;\r\n    height: 216px;\r\n    margin-bottom: 0;\r\n\r\n}\r\n#better-top .bt-left p{\r\n    line-height: 34px;\r\n    font-size: 22px;\r\n    color: #757575;\r\n    margin-top: 12px;\r\n    margin-bottom: 54px;\r\n    width: 597px;\r\n    height: 69px;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n}\r\n.btn-acc button{\r\n    border: none;\r\n    background: #FF9100;\r\n    border-radius: 44px;\r\n    cursor: pointer;\r\n    width: 240px;\r\n    height: 54px;\r\n    outline: 0;\r\n}\r\n.btn-acc button span{\r\n    color: #fff;\r\n    font-size: 20px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    text-align: center;\r\n    width: 161px;\r\n    height: 24px;\r\n}\r\n.btn-acc a{\r\n    font-size: 22px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    color: #FF9100;\r\n    margin-left: 74px;\r\n    width: 112px;\r\n    height: 57px;\r\n    padding: 0;\r\n}\r\n.bt-right{\r\n    top: 144px;\r\n    left: 575px;\r\n    width: 1022px !important;\r\n    height: auto;\r\n    position: absolute;\r\n}\r\n/* started-safehold */\r\n#start-Sh{\r\n    margin-top: 240px;\r\n}\r\n.content-start{\r\n    display: flex;\r\n}\r\n.img-L img{\r\n    position: absolute;\r\n    left: 52px;\r\n    width: 604px !important;\r\n    height: 797.28px !important;\r\n}\r\n.text-content-right{\r\n    padding-top: 215px;\r\n    margin-left: 685px;\r\n}\r\n.text-content-right h2{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 32px;\r\n    color: #001527;\r\n    width: 426px;\r\n    height: 77px;\r\n}\r\n.text-content-right p{\r\n    margin-top: 32px;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    color: #757575;\r\n    margin-bottom: 56px;\r\n    width: 565px;\r\n    height: 185px;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n\r\n}\r\n.text-content-right .get-started{\r\n    position: relative;\r\n}\r\n.text-content-right .get-started a{\r\n    font-size: 22px;\r\n    color: #FF9100;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    width: 249px;\r\n    height: 27px;\r\n}\r\n.text-content-right .get-started a img{\r\n    position: absolute;\r\n    left: 265px;\r\n    top: 1px;\r\n}\r\n/* benefits */\r\n#benefits{\r\n    margin-top: 390px;\r\n}\r\n#benefits h2{\r\n    font-size: 32px;\r\n    color: #001527; \r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-style: normal;\r\n    margin: auto;\r\n    height: 39px;\r\n}\r\n.icon-benefits{\r\n    display: flex;\r\n    margin-top: 38px;\r\n    padding: 0 55px;\r\n}\r\n.item-benefits{\r\n    margin-right: 82px;\r\n    text-align: center;\r\n}\r\n.item-benefits:nth-child(2){\r\n    margin-right: 83px;\r\n}\r\n.item-benefits:nth-child(3){\r\n    margin-right: 74px;\r\n}\r\n.item-benefits:nth-child(4){\r\n    margin-right: 91px;\r\n    \r\n}\r\n.item-benefits:last-child{\r\n    margin-right: 0;\r\n}\r\n.item-benefits:first-child .text-top span{\r\n    width: 112px;\r\n}\r\n.item-benefits:nth-child(2) .text-top span{\r\n    width: 119px;\r\n}\r\n.item-benefits:nth-child(3) .text-top span{\r\n    width: 76px;\r\n}\r\n.item-benefits:nth-child(4) .text-top span{\r\n    width: 124px;\r\n}\r\n.item-benefits:nth-child(5) .text-top span{\r\n    width: 128px;\r\n}\r\n.text-top{\r\n    margin-top: 33px;\r\n    margin-bottom: 9px;\r\n    font-size: 22px;\r\n    font-weight: bold;\r\n    color: #001527;\r\n    line-height: normal;\r\n    font-style: normal;\r\n    height: 27px;\r\n    \r\n}\r\n.text-bot{\r\n    font-size: 22px;\r\n    text-align: center;\r\n    color: #757575;\r\n    opacity: 0.6;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    height: 27px;\r\n    width: 162px;\r\n\r\n}\r\n.item-benefits:nth-child(2) .text-bot{\r\n    height: 53px;\r\n}\r\n.item-benefits:nth-child(3) .text-bot{\r\n    height: 53px;\r\n}\r\n.item-benefits:nth-child(4) .text-bot{\r\n    height: 80px;\r\n}\r\n/* LearnMore */\r\n#learnMore{\r\n    margin-top: 188px;\r\n    display: flex;\r\n}\r\n.learn-left{\r\n    padding-top: 160px;\r\n}\r\n.learn-left h2{\r\n    font-size: 32px;\r\n    color: #001527;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    margin-bottom: 32px;\r\n    width: 275px;\r\n    height: 39px;\r\n}\r\n.learn-left p{\r\n    line-height: 34px;\r\n    font-size: 22px;\r\n    color: #757575;\r\n    opacity: 0.6;\r\n    margin-bottom: 54px;\r\n    width: 390px;\r\n    width: 409px;\r\n    height: 138px;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n}\r\n.learn-left .learn-link{\r\n    position: relative;\r\n}\r\n.learn-left .learn-link a{\r\n    font-size: 22px;\r\n    color: #FF9100;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    width: 262px;\r\n    height: 27px;\r\n}\r\n.learn-left .learn-link a img{\r\n    position: absolute;\r\n    left: 278px;\r\n    top: 1px;\r\n}\r\n.learn-right {\r\n    width: 798px !important;\r\n    height: 608px !important;\r\n    position: absolute;\r\n    left: 599px;\r\n    right: 43px;\r\n}\r\n/* better-bot */\r\n#better-bot{\r\n    margin-top: 368px;\r\n    margin-bottom: 213px;\r\n    display: flex;\r\n}\r\n#better-bot h2{\r\n    color: #000;\r\n    font-size: 32px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    width: 303px;\r\n    height: 39px;\r\n}\r\n#better-bot p{\r\n    line-height: 34px;\r\n    font-size: 22px;\r\n    color: #757575;\r\n    opacity: 0.6;\r\n    margin-top: 32px;\r\n    margin-bottom: 69px;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    width: 524px !important;\r\n    height: 74px;\r\n}\r\n#better-bot .better-left button{\r\n    border: 3px solid #FF9100;\r\n    box-sizing: border-box;\r\n    border-radius: 44px;\r\n    background: #FF9100;\r\n    cursor: pointer;\r\n    height: 54px;\r\n    width: 240px;\r\n}\r\n#better-bot .better-left button span{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    color: #FFFFFF;\r\n    width: 162px;\r\n}\r\n#better-bot .better-right{\r\n    position: absolute;\r\n    left: 824px;\r\n}\r\n#better-bot .better-right button{\r\n    border: 3px solid #FF9100;\r\n    background: unset;\r\n    box-sizing: border-box;\r\n    border-radius: 44px;\r\n    cursor: pointer;\r\n    height: 54px;\r\n    width: 240px;\r\n    outline: 0;\r\n}\r\n#better-bot .better-right button span{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    color: #001527;\r\n    width: 110px;\r\n    height: 24px;\r\n}\r\n#better-bot button:active{\r\n    text-decoration: underline;\r\n}\r\n#better-bot .better-right h2{\r\n    width: 242px;\r\n    height: 39px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGNBQWM7SUFDZCxpQkFBaUI7O0NBRXBCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixhQUFhO0lBQ2IsV0FBVztDQUNkO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7SUFDYixXQUFXO0NBQ2Q7QUFDRDtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7Q0FDdEI7QUFFRCxzQkFBc0I7QUFDdEI7SUFDSSxrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLGNBQWM7Q0FDakI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLDRCQUE0QjtDQUMvQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixhQUFhO0lBQ2IsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixvQkFBb0I7O0NBRXZCO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osU0FBUztDQUNaO0FBRUQsY0FBYztBQUNkO0lBQ0ksa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLG1CQUFtQjs7Q0FFdEI7QUFDRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksYUFBYTtDQUNoQjtBQUNEO0lBQ0ksYUFBYTtDQUNoQjtBQUNEO0lBQ0ksWUFBWTtDQUNmO0FBQ0Q7SUFDSSxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsYUFBYTs7Q0FFaEI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsYUFBYTs7Q0FFaEI7QUFDRDtJQUNJLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGFBQWE7Q0FDaEI7QUFDRCxlQUFlO0FBQ2Y7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztDQUNqQjtBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsYUFBYTtJQUNiLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osU0FBUztDQUNaO0FBQ0Q7SUFDSSx3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osWUFBWTtDQUNmO0FBR0QsZ0JBQWdCO0FBQ2hCO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtDQUNmO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixhQUFhO0lBQ2IsV0FBVztDQUNkO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixhQUFhO0lBQ2IsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksMkJBQTJCO0NBQzlCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZHtcclxuICAgIG1hcmdpbi10b3A6IDI2cHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIHdpZHRoOiAxMjUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOTVweDtcclxufVxyXG4uYnQtbGVmdHtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuLmJ0LWxlZnQgaDJ7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIGNvbG9yOiAjMDAxNTI3O1xyXG4gICAgbWFyZ2luLXRvcDogMTI5cHg7XHJcbiAgICB3aWR0aDogNjM2cHg7XHJcbiAgICBoZWlnaHQ6IDIxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHJcbn1cclxuI2JldHRlci10b3AgLmJ0LWxlZnQgcHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTRweDtcclxuICAgIHdpZHRoOiA1OTdweDtcclxuICAgIGhlaWdodDogNjlweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuLmJ0bi1hY2MgYnV0dG9ue1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGOTEwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQ0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbiAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59XHJcbi5idG4tYWNjIGJ1dHRvbiBzcGFue1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTYxcHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbn1cclxuLmJ0bi1hY2MgYXtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjRkY5MTAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDc0cHg7XHJcbiAgICB3aWR0aDogMTEycHg7XHJcbiAgICBoZWlnaHQ6IDU3cHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5idC1yaWdodHtcclxuICAgIHRvcDogMTQ0cHg7XHJcbiAgICBsZWZ0OiA1NzVweDtcclxuICAgIHdpZHRoOiAxMDIycHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLyogc3RhcnRlZC1zYWZlaG9sZCAqL1xyXG4jc3RhcnQtU2h7XHJcbiAgICBtYXJnaW4tdG9wOiAyNDBweDtcclxufVxyXG4uY29udGVudC1zdGFydHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmltZy1MIGltZ3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUycHg7XHJcbiAgICB3aWR0aDogNjA0cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNzk3LjI4cHggIWltcG9ydGFudDtcclxufVxyXG4udGV4dC1jb250ZW50LXJpZ2h0e1xyXG4gICAgcGFkZGluZy10b3A6IDIxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDY4NXB4O1xyXG59XHJcbi50ZXh0LWNvbnRlbnQtcmlnaHQgaDJ7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBjb2xvcjogIzAwMTUyNztcclxuICAgIHdpZHRoOiA0MjZweDtcclxuICAgIGhlaWdodDogNzdweDtcclxufVxyXG4udGV4dC1jb250ZW50LXJpZ2h0IHB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIG1hcmdpbi1ib3R0b206IDU2cHg7XHJcbiAgICB3aWR0aDogNTY1cHg7XHJcbiAgICBoZWlnaHQ6IDE4NXB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHJcbn1cclxuLnRleHQtY29udGVudC1yaWdodCAuZ2V0LXN0YXJ0ZWR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnRleHQtY29udGVudC1yaWdodCAuZ2V0LXN0YXJ0ZWQgYXtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjRkY5MTAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgd2lkdGg6IDI0OXB4O1xyXG4gICAgaGVpZ2h0OiAyN3B4O1xyXG59XHJcbi50ZXh0LWNvbnRlbnQtcmlnaHQgLmdldC1zdGFydGVkIGEgaW1ne1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMjY1cHg7XHJcbiAgICB0b3A6IDFweDtcclxufVxyXG5cclxuLyogYmVuZWZpdHMgKi9cclxuI2JlbmVmaXRze1xyXG4gICAgbWFyZ2luLXRvcDogMzkwcHg7XHJcbn1cclxuI2JlbmVmaXRzIGgye1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7IFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAzOXB4O1xyXG59XHJcbi5pY29uLWJlbmVmaXRze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDM4cHg7XHJcbiAgICBwYWRkaW5nOiAwIDU1cHg7XHJcbn1cclxuLml0ZW0tYmVuZWZpdHN7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDgycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLml0ZW0tYmVuZWZpdHM6bnRoLWNoaWxkKDIpe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4M3B4O1xyXG59XHJcbi5pdGVtLWJlbmVmaXRzOm50aC1jaGlsZCgzKXtcclxuICAgIG1hcmdpbi1yaWdodDogNzRweDtcclxufVxyXG4uaXRlbS1iZW5lZml0czpudGgtY2hpbGQoNCl7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDkxcHg7XHJcbiAgICBcclxufSBcclxuLml0ZW0tYmVuZWZpdHM6bGFzdC1jaGlsZHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG4uaXRlbS1iZW5lZml0czpmaXJzdC1jaGlsZCAudGV4dC10b3Agc3BhbntcclxuICAgIHdpZHRoOiAxMTJweDtcclxufVxyXG4uaXRlbS1iZW5lZml0czpudGgtY2hpbGQoMikgLnRleHQtdG9wIHNwYW57XHJcbiAgICB3aWR0aDogMTE5cHg7XHJcbn1cclxuLml0ZW0tYmVuZWZpdHM6bnRoLWNoaWxkKDMpIC50ZXh0LXRvcCBzcGFue1xyXG4gICAgd2lkdGg6IDc2cHg7XHJcbn1cclxuLml0ZW0tYmVuZWZpdHM6bnRoLWNoaWxkKDQpIC50ZXh0LXRvcCBzcGFue1xyXG4gICAgd2lkdGg6IDEyNHB4O1xyXG59XHJcbi5pdGVtLWJlbmVmaXRzOm50aC1jaGlsZCg1KSAudGV4dC10b3Agc3BhbntcclxuICAgIHdpZHRoOiAxMjhweDtcclxufVxyXG4udGV4dC10b3B7XHJcbiAgICBtYXJnaW4tdG9wOiAzM3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOXB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzAwMTUyNztcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICBcclxufVxyXG4udGV4dC1ib3R7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgd2lkdGg6IDE2MnB4O1xyXG5cclxufVxyXG4uaXRlbS1iZW5lZml0czpudGgtY2hpbGQoMikgLnRleHQtYm90e1xyXG4gICAgaGVpZ2h0OiA1M3B4O1xyXG59XHJcbi5pdGVtLWJlbmVmaXRzOm50aC1jaGlsZCgzKSAudGV4dC1ib3R7XHJcbiAgICBoZWlnaHQ6IDUzcHg7XHJcbn1cclxuLml0ZW0tYmVuZWZpdHM6bnRoLWNoaWxkKDQpIC50ZXh0LWJvdHtcclxuICAgIGhlaWdodDogODBweDtcclxufVxyXG4vKiBMZWFybk1vcmUgKi9cclxuI2xlYXJuTW9yZXtcclxuICAgIG1hcmdpbi10b3A6IDE4OHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4ubGVhcm4tbGVmdHtcclxuICAgIHBhZGRpbmctdG9wOiAxNjBweDtcclxufVxyXG4ubGVhcm4tbGVmdCBoMntcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGNvbG9yOiAjMDAxNTI3O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICAgIHdpZHRoOiAyNzVweDtcclxuICAgIGhlaWdodDogMzlweDtcclxufVxyXG4ubGVhcm4tbGVmdCBwe1xyXG4gICAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIG1hcmdpbi1ib3R0b206IDU0cHg7XHJcbiAgICB3aWR0aDogMzkwcHg7XHJcbiAgICB3aWR0aDogNDA5cHg7XHJcbiAgICBoZWlnaHQ6IDEzOHB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4ubGVhcm4tbGVmdCAubGVhcm4tbGlua3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ubGVhcm4tbGVmdCAubGVhcm4tbGluayBhe1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6ICNGRjkxMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICB3aWR0aDogMjYycHg7XHJcbiAgICBoZWlnaHQ6IDI3cHg7XHJcbn1cclxuLmxlYXJuLWxlZnQgLmxlYXJuLWxpbmsgYSBpbWd7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyNzhweDtcclxuICAgIHRvcDogMXB4O1xyXG59XHJcbi5sZWFybi1yaWdodCB7XHJcbiAgICB3aWR0aDogNzk4cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNjA4cHggIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDU5OXB4O1xyXG4gICAgcmlnaHQ6IDQzcHg7XHJcbn1cclxuXHJcblxyXG4vKiBiZXR0ZXItYm90ICovXHJcbiNiZXR0ZXItYm90e1xyXG4gICAgbWFyZ2luLXRvcDogMzY4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMTNweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuI2JldHRlci1ib3QgaDJ7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIHdpZHRoOiAzMDNweDtcclxuICAgIGhlaWdodDogMzlweDtcclxufVxyXG4jYmV0dGVyLWJvdCBwe1xyXG4gICAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2OXB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHdpZHRoOiA1MjRweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA3NHB4O1xyXG59XHJcbiNiZXR0ZXItYm90IC5iZXR0ZXItbGVmdCBidXR0b257XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjRkY5MTAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQ0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkY5MTAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaGVpZ2h0OiA1NHB4O1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG59XHJcbiNiZXR0ZXItYm90IC5iZXR0ZXItbGVmdCBidXR0b24gc3BhbntcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgd2lkdGg6IDE2MnB4O1xyXG59XHJcbiNiZXR0ZXItYm90IC5iZXR0ZXItcmlnaHR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA4MjRweDtcclxufVxyXG4jYmV0dGVyLWJvdCAuYmV0dGVyLXJpZ2h0IGJ1dHRvbntcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNGRjkxMDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB1bnNldDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0NHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaGVpZ2h0OiA1NHB4O1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG4jYmV0dGVyLWJvdCAuYmV0dGVyLXJpZ2h0IGJ1dHRvbiBzcGFue1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7XHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbn1cclxuI2JldHRlci1ib3QgYnV0dG9uOmFjdGl2ZXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbiNiZXR0ZXItYm90IC5iZXR0ZXItcmlnaHQgaDJ7XHJcbiAgICB3aWR0aDogMjQycHg7XHJcbiAgICBoZWlnaHQ6IDM5cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/dashboard/dashboard.component.html":
/*!*********************************************************!*\
  !*** ./src/app/home/dashboard/dashboard.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard\">\r\n  <div id=\"better-top\">\r\n      <div class=\"row\" style=\"margin: 0;\">\r\n          <div class=\"bt-left\">\r\n              <h2>\r\n                  Because being independent shouldn’t mean you’re alone.\r\n              </h2>\r\n              <p>{{content}}</p>\r\n              <div class=\"btn-acc\">\r\n                  <button class=\"col-6\" (click)=\"CreateAccount()\"><span>Create an account</span></button>\r\n                  <a href=\"#\" class=\"col-6\">Learn more</a>\r\n              </div>\r\n          </div>\r\n          <div class=\"bt-right\">\r\n              <img [src]=\"imgR\" class=\"img-fluid\">\r\n          </div>\r\n      </div>\r\n  </div>\r\n\r\n  <div id=\"start-Sh\">\r\n      <div class=\"content-start\">\r\n          <div class=\"img-L\">\r\n              <img [src]=\"imgL\">\r\n          </div>\r\n          <div class=\"text-content-right\">\r\n              <h2>Safehold Feature — Withholding for Solopreneurs</h2>\r\n              <p>{{contentStart}}</p>\r\n              <span class=\"get-started\">\r\n                  <a href=\"#\">Get started with safehold\r\n                      <img [src]=\"imgPolygon\">\r\n                  </a>\r\n              </span>\r\n          </div>\r\n      </div>\r\n  </div>\r\n\r\n  <div id=\"benefits\">\r\n      <div class=\"row\" style=\"margin: 0;\">\r\n          <h2 class=\"text-center\">Benefits of Using Safehold</h2>\r\n          <div class=\"icon-benefits\">\r\n              <div class=\"item-benefits\">\r\n                  <div class=\"item-child\" style=\"text-align: center;\">\r\n                      <img [src]=\"imgEase\" class=\"img-fuild\">\r\n                      <div class=\"text-top\"><span>Ease of Use</span></div>\r\n                      <div class=\"text-bot\">Fully automated</div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"item-benefits\">\r\n                  <div class=\"item-child\" style=\"text-align: center;\">\r\n                      <img [src]=\"imgInfo\" class=\"img-fuild\">\r\n                      <div class=\"text-top\"><span>Information</span></div>\r\n                      <div class=\"text-bot\">Always know what you owe</div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"item-benefits\">\r\n                  <div class=\"item-child\" style=\"text-align: center;\">\r\n                      <img [src]=\"imgControl\" class=\"img-fuild\">\r\n                      <div class=\"text-top\"><span>Control</span></div>\r\n                      <div class=\"text-bot\">Choose your end of year tax result</div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"item-benefits\">\r\n                  <div class=\"item-child\" style=\"text-align: center;\">\r\n                      <img [src]=\"imgCost\" class=\"img-fuild\">\r\n                      <div class=\"text-top\"><span>Cost Savings</span></div>\r\n                      <div class=\"text-bot\">Reduce penalties and prof fees</div>\r\n                  </div>\r\n              </div>\r\n              <div class=\"item-benefits\">\r\n                  <div class=\"item-child\" style=\"text-align: center;\">\r\n                      <img [src]=\"imgTime\" class=\"img-fuild\">\r\n                      <div class=\"text-top\"><span>Time Savings</span></div>\r\n                      <div class=\"text-bot\">We do the work</div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n\r\n  <div id=\"learnMore\">\r\n      <div class=\"learn-left\">\r\n          <h2>Simple and Flexible</h2>\r\n          <p>{{contentLeft}}</p>\r\n          <span class=\"learn-link\">\r\n              <a href=\"#\">Learn more about safehold\r\n                  <img [src]=\"imgPolygon\">\r\n              </a>\r\n          </span>\r\n      </div>\r\n      <div class=\"learn-right\">\r\n          <img [src]=\"imgLM\" class=\"img-fluid\">\r\n      </div>\r\n  </div>\r\n\r\n  <div id=\"better-bot\">\r\n      <div class=\"better-left\">\r\n          <h2>Ready to get started?</h2>\r\n          <p>{{contentBotL}}</p>\r\n          <button type=\"button\" (click)=\"CreateAccount()\"><span>Create an account</span></button>\r\n      </div>\r\n      <div class=\"better-right\">\r\n          <h2>Have a question?</h2>\r\n          <p>{{contentBotR}}</p>\r\n          <button type=\"button\"><span>Get in touch</span></button>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/dashboard/dashboard.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/dashboard/dashboard.component.ts ***!
  \*******************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router) {
        this.router = router;
        //dashboard
        this.content = "At Better, we provide unique technological solutions for solepreneurs to help them run their business efficiently.";
        this.imgR = "assets/images/image.png";
        //start-safehold 
        this.imgL = 'assets/images/safehold-feature.png';
        this.contentStart = "Safehold is Better’s first product feature that enables withholding for solopreneurs. It will calculate and pay taxes for the user, saving time and money. This product feature will provide a level of comfort and convenience not yet seen to date.";
        this.imgPolygon = 'assets/images/Polygon.png';
        // benefits
        this.imgEase = 'assets/images/ease.png';
        this.imgInfo = 'assets/images/info.png';
        this.imgControl = 'assets/images/control.png';
        this.imgCost = 'assets/images/cost.png';
        this.imgTime = 'assets/images/time.png';
        //learnMore
        this.contentLeft = "Setup is quick and easy—tailoring the app to suit your goals. Once complete, we will take care of everything making running your business more efficient.";
        this.imgLM = "assets/images/features.png";
        // better-bot
        this.contentBotL = "Set up an account, link to your bank and we’ll take care of the rest—letting you run your business stress free.";
        this.contentBotR = "Want to know more about us or our product? Get in touch and we’ll be happy to help.";
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.CreateAccount = function () {
        this.router.navigateByUrl('signup');
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/home/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/home/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/why-better/why-better.component.css":
/*!**********************************************************!*\
  !*** ./src/app/home/why-better/why-better.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".why-better{\r\n    margin-top: 131px;\r\n    font-family: Lato;\r\n    width: 1440px;\r\n    padding: 0 95px;\r\n}\r\n#WB-top{\r\n    position: relative;\r\n    display: flex;\r\n}\r\n#WB-top .WB-top-left{\r\n    padding-top: 24px;\r\n}\r\n#WB-top .WB-top-left h2{\r\n    font-size: 52px;\r\n    font-style: normal;\r\n    font-weight: 900;\r\n    line-height: normal;\r\n    color: #001527;\r\n    width: 536px;\r\n    height: 188px;\r\n}\r\n#WB-top .WB-top-left p{\r\n    line-height: 34px;\r\n    font-size: 22px;\r\n    color: #757575;\r\n    margin-top: 40px;\r\n    margin-bottom: 59px;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    width: 597px;\r\n    height: 69px;\r\n}\r\n#WB-top .WB-top-left button{\r\n    height: 62px;\r\n    padding: 0 52px;\r\n    background: #FF9100;\r\n    border-radius: 44px;\r\n    border: none;\r\n    color: #FFF;\r\n    cursor: pointer;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    outline: 0;\r\n}\r\n#WB-top .WB-top-right{\r\n    position: absolute;\r\n    width: 642.77px;\r\n    left: 605px;\r\n    right: 98px;\r\n    height: 558px\r\n}\r\n#WB-top .WB-top-right img:last-child{\r\n    position: absolute;\r\n    right: 25px;\r\n    top: -108px;\r\n}\r\n/* independence */\r\n#Independence{\r\n    margin-top: 348px;\r\n}\r\n#Independence .text-head{\r\n    width: 556px;\r\n    height: 39px;\r\n    font-size: 32px;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    color: rgba(0, 21, 39, 0.6);\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    margin: auto;\r\n}\r\n.content-in{\r\n    display: flex;\r\n    margin-top: 86px\r\n}\r\n.independence-left {\r\n    position: relative;\r\n    width: 629px;\r\n    height: 370px;\r\n}\r\n.independence-left .text-img{\r\n    position: absolute;\r\n    top: 165px;\r\n    left: 229px;\r\n    line-height: 34px;\r\n    font-size: 22px;\r\n    text-align: center;\r\n    color: rgba(0, 21, 39, 0.3);\r\n    font-style: normal;\r\n    font-weight: normal;\r\n}\r\n.independence-right {\r\n    position: absolute;\r\n    left: 802px;\r\n}\r\n.independence-right h2{\r\n    font-size: 32px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    color: #001527;\r\n    margin-bottom: 32px;\r\n    width: 490px;\r\n    height: 77px;\r\n}\r\n.independence-right .content-text{\r\n    line-height: 34px;\r\n    font-size: 22px;\r\n    color: #757575;\r\n    width: 543px;\r\n    height: 279px;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n}\r\n/* Flexible */\r\n#Flexible{\r\n    margin-top: 220px;\r\n\r\n}\r\n#Flexible .text-title{\r\n    font-size: 32px;\r\n    text-align: center;\r\n    color: rgba(0, 21, 39, 0.6);\r\n    height: 39px;\r\n    width: 556px;\r\n    margin: auto;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n}\r\n#Flexible .content-flexible{\r\n    margin-top: 69px;\r\n}\r\n.content-flexible:first-child .item-content{\r\n    margin-top: 13px;\r\n}\r\n.content-flexible .item-content span{\r\n    font-size: 32px;\r\n    margin-bottom: 32px;\r\n    text-align: center;\r\n    color: #001527;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    width: 281px;\r\n    height: 39px;\r\n}\r\n.content-flexible .item-content p{\r\n    line-height: 34px;\r\n    font-size: 22px;\r\n    color: #757575;\r\n    margin-top: 32px;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    width: 383px;\r\n    height: 138px;\r\n}\r\n/* benefits */\r\n#benefits{\r\n    margin-top: 192px;\r\n}\r\n.benefit-left{\r\n    font-size: 32px;\r\n    color: #001527;\r\n    opacity: 0.6;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    width: 287px;\r\n    height: 39px;\r\n}\r\n.inline-benefits{\r\n    display: flex;\r\n    margin-bottom: 68px;\r\n}\r\n.inline-benefits .img-benefits{\r\n    margin-right: 28px;\r\n    padding-top: 15px;\r\n}\r\n.inline-benefits .content-benefits span{\r\n    font-size: 32px;\r\n    color: #001527;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    width: 267px;\r\n    height: 39px;\r\n    line-height: normal;\r\n}\r\n.inline-benefits .content-benefits p{\r\n    line-height: 34px;\r\n    font-size: 22px;\r\n    color: #757575;\r\n    margin-top: 32px;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    width: 580px;\r\n    height: 69px;\r\n}\r\n.inline-benefits .content-benefits:last-child p{\r\n    width: 580px;\r\n    height: 138px;\r\n}\r\n/* How it works */\r\n#works{\r\n    margin-top: 214px;\r\n}\r\n#works .title-work{\r\n    font-size: 32px;\r\n    text-align: center;\r\n    width: 190px;\r\n    height: 39px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    color: rgba(0, 21, 39, 0.6);\r\n    margin: auto;\r\n}\r\n.content-works{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin-top: 80px;\r\n}\r\n.content-works .item-content{\r\n    flex: 0 0 33.3333%;\r\n    box-sizing:border-box;\r\n\r\n    margin-bottom: 53px;\r\n}\r\n.content-works .item-content:nth-child(3){\r\n    padding-right: 0;\r\n}\r\n.img-content {\r\n    margin-bottom: 30px;\r\n}\r\n.text-content span{\r\n    font-size: 32px;\r\n    color: #001527;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    width: 245px;\r\n    height: 39px;\r\n}\r\n.text-content p{\r\n    margin-top: 32px;\r\n    line-height: 34px;\r\n    font-size: 22px;\r\n    color: #757575;\r\n    width: 330px;\r\n    height: 103px;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n}\r\n/* get-started */\r\n#get-started{\r\n    margin-top: 245px;\r\n    margin-bottom: 230px;\r\n}\r\n#get-started h2{\r\n    font-size: 32px;\r\n    color: #000000;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    width: 303px;\r\n    height: 39px;\r\n    margin: auto;\r\n}\r\n#get-started p {\r\n    margin: auto;\r\n    margin-top: 32px;\r\n    margin-bottom: 51px;\r\n    line-height: 34px;\r\n    font-size: 22px;\r\n    color: #757575;\r\n    opacity: 0.6;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    margin-top: 32px;\r\n    margin-bottom: 51px;\r\n    width: 524px;\r\n    height: 69px;\r\n}\r\n#get-started button{\r\n    border: none;\r\n    background: #FF9100;\r\n    border-radius: 44px;\r\n    height: 62px;\r\n    padding: 0 52px;\r\n    color: #FFF;\r\n    font-size: 20px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    cursor: pointer;\r\n    outline: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS93aHktYmV0dGVyL3doeS1iZXR0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixhQUFhO0lBQ2IsY0FBYztDQUNqQjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsV0FBVztDQUNkO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtDQUNoQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0NBQ2Y7QUFFRCxrQkFBa0I7QUFDbEI7SUFDSSxrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsY0FBYztDQUNqQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0NBQ2Y7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixhQUFhO0lBQ2IsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixvQkFBb0I7Q0FDdkI7QUFDRCxjQUFjO0FBQ2Q7SUFDSSxrQkFBa0I7O0NBRXJCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGNBQWM7Q0FDakI7QUFFRCxjQUFjO0FBQ2Q7SUFDSSxrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7SUFDYixvQkFBb0I7Q0FDdkI7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsY0FBYztDQUNqQjtBQUNELGtCQUFrQjtBQUNsQjtJQUNJLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLDRCQUE0QjtJQUM1QixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjs7SUFFdEIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG9CQUFvQjtDQUN2QjtBQUdELGlCQUFpQjtBQUNqQjtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7Q0FDeEI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLFdBQVc7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvd2h5LWJldHRlci93aHktYmV0dGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2h5LWJldHRlcntcclxuICAgIG1hcmdpbi10b3A6IDEzMXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICB3aWR0aDogMTQ0MHB4O1xyXG4gICAgcGFkZGluZzogMCA5NXB4O1xyXG59XHJcbiNXQi10b3B7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiNXQi10b3AgLldCLXRvcC1sZWZ0e1xyXG4gICAgcGFkZGluZy10b3A6IDI0cHg7XHJcbn1cclxuI1dCLXRvcCAuV0ItdG9wLWxlZnQgaDJ7XHJcbiAgICBmb250LXNpemU6IDUycHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjMDAxNTI3O1xyXG4gICAgd2lkdGg6IDUzNnB4O1xyXG4gICAgaGVpZ2h0OiAxODhweDtcclxufVxyXG4jV0ItdG9wIC5XQi10b3AtbGVmdCBwe1xyXG4gICAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1OXB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHdpZHRoOiA1OTdweDtcclxuICAgIGhlaWdodDogNjlweDtcclxufVxyXG4jV0ItdG9wIC5XQi10b3AtbGVmdCBidXR0b257XHJcbiAgICBoZWlnaHQ6IDYycHg7XHJcbiAgICBwYWRkaW5nOiAwIDUycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkY5MTAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDRweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG4jV0ItdG9wIC5XQi10b3AtcmlnaHR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNjQyLjc3cHg7XHJcbiAgICBsZWZ0OiA2MDVweDtcclxuICAgIHJpZ2h0OiA5OHB4O1xyXG4gICAgaGVpZ2h0OiA1NThweFxyXG59XHJcbiNXQi10b3AgLldCLXRvcC1yaWdodCBpbWc6bGFzdC1jaGlsZHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyNXB4O1xyXG4gICAgdG9wOiAtMTA4cHg7XHJcbn1cclxuXHJcbi8qIGluZGVwZW5kZW5jZSAqL1xyXG4jSW5kZXBlbmRlbmNle1xyXG4gICAgbWFyZ2luLXRvcDogMzQ4cHg7XHJcbn1cclxuI0luZGVwZW5kZW5jZSAudGV4dC1oZWFke1xyXG4gICAgd2lkdGg6IDU1NnB4O1xyXG4gICAgaGVpZ2h0OiAzOXB4O1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAyMSwgMzksIDAuNik7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmNvbnRlbnQtaW57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogODZweFxyXG59XHJcbi5pbmRlcGVuZGVuY2UtbGVmdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNjI5cHg7XHJcbiAgICBoZWlnaHQ6IDM3MHB4O1xyXG59XHJcbi5pbmRlcGVuZGVuY2UtbGVmdCAudGV4dC1pbWd7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE2NXB4O1xyXG4gICAgbGVmdDogMjI5cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDIxLCAzOSwgMC4zKTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuLmluZGVwZW5kZW5jZS1yaWdodCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA4MDJweDtcclxufVxyXG4uaW5kZXBlbmRlbmNlLXJpZ2h0IGgye1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gICAgd2lkdGg6IDQ5MHB4O1xyXG4gICAgaGVpZ2h0OiA3N3B4O1xyXG59XHJcbi5pbmRlcGVuZGVuY2UtcmlnaHQgLmNvbnRlbnQtdGV4dHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICB3aWR0aDogNTQzcHg7XHJcbiAgICBoZWlnaHQ6IDI3OXB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4vKiBGbGV4aWJsZSAqL1xyXG4jRmxleGlibGV7XHJcbiAgICBtYXJnaW4tdG9wOiAyMjBweDtcclxuXHJcbn1cclxuI0ZsZXhpYmxlIC50ZXh0LXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMjEsIDM5LCAwLjYpO1xyXG4gICAgaGVpZ2h0OiAzOXB4O1xyXG4gICAgd2lkdGg6IDU1NnB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG59XHJcbiNGbGV4aWJsZSAuY29udGVudC1mbGV4aWJsZXtcclxuICAgIG1hcmdpbi10b3A6IDY5cHg7XHJcbn1cclxuLmNvbnRlbnQtZmxleGlibGU6Zmlyc3QtY2hpbGQgLml0ZW0tY29udGVudHtcclxuICAgIG1hcmdpbi10b3A6IDEzcHg7XHJcbn1cclxuLmNvbnRlbnQtZmxleGlibGUgLml0ZW0tY29udGVudCBzcGFue1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAxNTI3O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgd2lkdGg6IDI4MXB4O1xyXG4gICAgaGVpZ2h0OiAzOXB4O1xyXG59XHJcbi5jb250ZW50LWZsZXhpYmxlIC5pdGVtLWNvbnRlbnQgcHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHdpZHRoOiAzODNweDtcclxuICAgIGhlaWdodDogMTM4cHg7XHJcbn1cclxuXHJcbi8qIGJlbmVmaXRzICovXHJcbiNiZW5lZml0c3tcclxuICAgIG1hcmdpbi10b3A6IDE5MnB4O1xyXG59XHJcbi5iZW5lZml0LWxlZnR7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBjb2xvcjogIzAwMTUyNztcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIHdpZHRoOiAyODdweDtcclxuICAgIGhlaWdodDogMzlweDtcclxufVxyXG4uaW5saW5lLWJlbmVmaXRze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1ib3R0b206IDY4cHg7XHJcbn1cclxuLmlubGluZS1iZW5lZml0cyAuaW1nLWJlbmVmaXRze1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbn1cclxuLmlubGluZS1iZW5lZml0cyAuY29udGVudC1iZW5lZml0cyBzcGFue1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHdpZHRoOiAyNjdweDtcclxuICAgIGhlaWdodDogMzlweDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5pbmxpbmUtYmVuZWZpdHMgLmNvbnRlbnQtYmVuZWZpdHMgcHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHdpZHRoOiA1ODBweDtcclxuICAgIGhlaWdodDogNjlweDtcclxufVxyXG4uaW5saW5lLWJlbmVmaXRzIC5jb250ZW50LWJlbmVmaXRzOmxhc3QtY2hpbGQgcHtcclxuICAgIHdpZHRoOiA1ODBweDtcclxuICAgIGhlaWdodDogMTM4cHg7XHJcbn1cclxuLyogSG93IGl0IHdvcmtzICovXHJcbiN3b3Jrc3tcclxuICAgIG1hcmdpbi10b3A6IDIxNHB4O1xyXG59XHJcbiN3b3JrcyAudGl0bGUtd29ya3tcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxOTBweDtcclxuICAgIGhlaWdodDogMzlweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDIxLCAzOSwgMC42KTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4uY29udGVudC13b3Jrc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG59XHJcbi5jb250ZW50LXdvcmtzIC5pdGVtLWNvbnRlbnR7XHJcbiAgICBmbGV4OiAwIDAgMzMuMzMzMyU7XHJcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcblxyXG4gICAgbWFyZ2luLWJvdHRvbTogNTNweDtcclxufVxyXG4uY29udGVudC13b3JrcyAuaXRlbS1jb250ZW50Om50aC1jaGlsZCgzKXtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbn1cclxuLmltZy1jb250ZW50IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLnRleHQtY29udGVudCBzcGFue1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICB3aWR0aDogMjQ1cHg7XHJcbiAgICBoZWlnaHQ6IDM5cHg7XHJcbn1cclxuLnRleHQtY29udGVudCBwe1xyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICB3aWR0aDogMzMwcHg7XHJcbiAgICBoZWlnaHQ6IDEwM3B4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuXHJcbi8qIGdldC1zdGFydGVkICovXHJcbiNnZXQtc3RhcnRlZHtcclxuICAgIG1hcmdpbi10b3A6IDI0NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjMwcHg7XHJcbn1cclxuI2dldC1zdGFydGVkIGgye1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICB3aWR0aDogMzAzcHg7XHJcbiAgICBoZWlnaHQ6IDM5cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuI2dldC1zdGFydGVkIHAge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUxcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MXB4O1xyXG4gICAgd2lkdGg6IDUyNHB4O1xyXG4gICAgaGVpZ2h0OiA2OXB4O1xyXG59XHJcbiNnZXQtc3RhcnRlZCBidXR0b257XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkY5MTAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDRweDtcclxuICAgIGhlaWdodDogNjJweDtcclxuICAgIHBhZGRpbmc6IDAgNTJweDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZTogMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/why-better/why-better.component.html":
/*!***********************************************************!*\
  !*** ./src/app/home/why-better/why-better.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"why-better\">\r\n  <div id=\"WB-top\">\r\n    <div class=\"WB-top-left\">\r\n      <h2>We help lessen the stress and cost of running your business</h2>\r\n      <p>{{contentTop}}</p>\r\n      <button type=\"button\" (click)=\"createAccount()\">\r\n        Create an account\r\n      </button>\r\n    </div>\r\n    <div class=\"WB-top-right\">\r\n      <img [src]=\"imgAfter\" class=\"img-fluid\">\r\n      <img [src]=\"imgTop\" class=\"img-fluid\">\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"Independence\">\r\n    <div class=\"text-head\">Independence simplified.</div>\r\n    <div class=\"content-in\">\r\n      <div class=\"independence-left\">\r\n        <img [src]='imgScreen' class=\"img-fluid\">\r\n        <div class=\"text-img\">Web app screenshot</div>\r\n      </div>\r\n      <div class=\"independence-right\">\r\n        <h2>Automated Withholding saves you time and money</h2>\r\n        <div class=\"content-text\">\r\n          <p>{{contentIn}}</p>\r\n          <span>Learn how <span style=\"color: #FF9100\">Safehold</span> works.</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"Flexible\">\r\n    <div class=\"text-title\">Flexible for your needs.</div>\r\n    <div class=\"row\">\r\n      <div class=\"content-flexible col-4 text-center\">\r\n        <img [src]=\"img1\">\r\n        <div class=\"item-content\">\r\n          <span>Personalized to you</span>\r\n          <p>{{contentFlexible}}</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"content-flexible col-4 text-center\">\r\n        <img [src]=\"img2\">\r\n        <div class=\"item-content\">\r\n          <span>Decide what you owe</span>\r\n          <p>{{contentFlexible}}</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"content-flexible col-4 text-center\">\r\n        <img [src]=\"img3\">\r\n        <div class=\"item-content\">\r\n          <span>Track your progress</span>\r\n          <p>{{contentFlexible}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"benefits\">\r\n    <div class=\"row\">\r\n      <div class=\"benefit-left col-4\">Benefits of Safehold</div>\r\n      <div class=\"benefit-right col-8\">\r\n        <div class=\"inline-benefits\">\r\n          <div class=\"img-benefits\">\r\n            <img [src]=\"imgB1\">\r\n          </div>\r\n          <div class=\"content-benefits\">\r\n            <span>No More Surprises</span>\r\n            <p>{{contentB1}}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"inline-benefits\">\r\n          <div class=\"img-benefits\">\r\n            <img [src]=\"imgB2\">\r\n          </div>\r\n          <div class=\"content-benefits\">\r\n            <span>Save Money</span>\r\n            <p>{{contentB2}}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"inline-benefits\">\r\n          <div class=\"img-benefits\">\r\n            <img [src]=\"imgB3\">\r\n          </div>\r\n          <div class=\"content-benefits\">\r\n            <span>Convenience</span>\r\n            <p>{{contentB3}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"works\">\r\n    <div class=\"title-work\">How it works</div>\r\n    <div class=\"content-works\">\r\n      <div class=\"item-content\">\r\n        <div class=\"img-content\">\r\n          <img [src]=\"imgW\">\r\n        </div>\r\n        <div class=\"text-content\">\r\n          <span>1. Download app</span>\r\n          <p>{{contentW}}</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"item-content\">\r\n        <div class=\"img-content\">\r\n          <img [src]=\"imgW\">\r\n        </div>\r\n        <div class=\"text-content\">\r\n          <span>2. Give details</span>\r\n          <p>{{contentW}}</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"item-content\">\r\n        <div class=\"img-content\">\r\n          <img [src]=\"imgW\">\r\n        </div>\r\n        <div class=\"text-content\">\r\n          <span>3. Choose result</span>\r\n          <p>{{contentW}}</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"item-content\">\r\n        <div class=\"img-content\">\r\n          <img [src]=\"imgW\">\r\n        </div>\r\n        <div class=\"text-content\">\r\n          <span>4. We calculate</span>\r\n          <p>{{contentW}}</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"item-content\">\r\n        <div class=\"img-content\">\r\n          <img [src]=\"imgW\">\r\n        </div>\r\n        <div class=\"text-content\">\r\n          <span>5. Taxes are paid</span>\r\n          <p>{{contentW}}</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"item-content\">\r\n        <div class=\"img-content\">\r\n          <img [src]=\"imgW\">\r\n        </div>\r\n        <div class=\"text-content\">\r\n          <span>6. Year end report</span>\r\n          <p>{{contentW}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"get-started\" class=\"text-center\">\r\n    <h2>Ready to get started?</h2>\r\n    <p>{{contentGet}}</p>\r\n    <button type=\"button\" (click)=\"createAccount()\">Create an account</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/why-better/why-better.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/why-better/why-better.component.ts ***!
  \*********************************************************/
/*! exports provided: WhyBetterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhyBetterComponent", function() { return WhyBetterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var WhyBetterComponent = /** @class */ (function () {
    function WhyBetterComponent(router) {
        this.router = router;
        //WB-top
        this.contentTop = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat bibendum enim ultricies pellentesque.";
        this.imgTop = 'assets/images/phoneBetter.png';
        this.imgAfter = 'assets/images/Rectangle.png';
        //indenpendence
        this.contentIn = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat, erat in semper tincidunt, erat magna pretium nunc, ut dictum est dui ac enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent scelerisque nunc laoreet orci tempor, vitae ullamcorper arcu interdum. ";
        this.imgScreen = "assets/images/screenshot.png";
        // Flexible
        this.img1 = "assets/images/item1(WB).png";
        this.img2 = "assets/images/item2(WB).png";
        this.img3 = "assets/images/item3(WB).png";
        this.contentFlexible = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat, erat in semper tincidunt, erat magna pretium.";
        // Benefits
        this.imgB1 = "assets/images/benefit1.png";
        this.imgB2 = "assets/images/benefit2.png";
        this.imgB3 = "assets/images/benefit3.png";
        this.contentB1 = "By knowing exactly what you owe, solopreneurs won’t be surprised by end of the year tax bills they can’t afford to pay.";
        this.contentB2 = "Paying on time will reduce late payment penalties and interest on your tax bill.";
        this.contentB3 = "You will no longer have to remember quarterly payments or hassle with antiquated forms and methods for paying. Simply confirm your payment via push notification and the rest is taken care of for you.";
        // How it works
        this.imgW = "assets/images/Icon1(about-us).png";
        this.contentW = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus auctor ligula ac tincidunt.";
        //get-started
        this.contentGet = "Set up an account, link to your bank and we’ll take care of the rest—letting you run your business stress free.";
    }
    WhyBetterComponent.prototype.ngOnInit = function () {
    };
    WhyBetterComponent.prototype.createAccount = function () {
        this.router.navigateByUrl('/signup');
    };
    WhyBetterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-why-better',
            template: __webpack_require__(/*! ./why-better.component.html */ "./src/app/home/why-better/why-better.component.html"),
            styles: [__webpack_require__(/*! ./why-better.component.css */ "./src/app/home/why-better/why-better.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WhyBetterComponent);
    return WhyBetterComponent;
}());



/***/ }),

/***/ "./src/app/layout/footer-account/footer-account.component.css":
/*!********************************************************************!*\
  !*** ./src/app/layout/footer-account/footer-account.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* footer */\r\n\r\nfooter{\r\n    font-family: Lato;\r\n    padding-bottom: 28px;\r\n    background: #F8F8F8;\r\n    width: 1440px;\r\n}\r\n\r\n.content-footer{\r\n    margin-left: 44px;\r\n    height: 32px;\r\n    position: relative;\r\n    padding-top: 4px;\r\n\r\n}\r\n\r\n#footer-left{\r\n    display: flex;\r\n    position: absolute;\r\n}\r\n\r\nfooter .text-content{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 17px;\r\n    color: #757575;\r\n}\r\n\r\n#footer-left span{\r\n    margin-right: 11px;\r\n    padding-top: 5px;\r\n}\r\n\r\n#footer-left .application img{\r\n    width: 24px;\r\n    height: 24px;\r\n}\r\n\r\n#footer-left .application img:first-child{\r\n    margin-right: 7px\r\n}\r\n\r\n#footer-right{\r\n    position: absolute;\r\n    right: 0;\r\n    display: flex;\r\n}\r\n\r\n#footer-right .text-content {\r\n    margin-right: 60px;\r\n    padding-top: 5px;\r\n}\r\n\r\n#footer-right .text-content a{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 17px;\r\n    color: #757575;\r\n}\r\n\r\n#footer-right .help .text-content{\r\n    margin-left: 7px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci1hY2NvdW50L2Zvb3Rlci1hY2NvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFlBQVk7O0FBRVo7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixjQUFjO0NBQ2pCOztBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCOztDQUVwQjs7QUFDRDtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7Q0FDdEI7O0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtDQUNsQjs7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7Q0FDcEI7O0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtDQUNoQjs7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQjs7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsY0FBYztDQUNqQjs7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7Q0FDcEI7O0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtDQUNsQjs7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb290ZXItYWNjb3VudC9mb290ZXItYWNjb3VudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qIGZvb3RlciAqL1xyXG5cclxuZm9vdGVye1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjhweDtcclxuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XHJcbiAgICB3aWR0aDogMTQ0MHB4O1xyXG59XHJcbi5jb250ZW50LWZvb3RlcntcclxuICAgIG1hcmdpbi1sZWZ0OiA0NHB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxuXHJcbn1cclxuI2Zvb3Rlci1sZWZ0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5mb290ZXIgLnRleHQtY29udGVudHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG59XHJcbiNmb290ZXItbGVmdCBzcGFue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG4jZm9vdGVyLWxlZnQgLmFwcGxpY2F0aW9uIGltZ3tcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG59XHJcbiNmb290ZXItbGVmdCAuYXBwbGljYXRpb24gaW1nOmZpcnN0LWNoaWxke1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHhcclxufVxyXG4jZm9vdGVyLXJpZ2h0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiNmb290ZXItcmlnaHQgLnRleHQtY29udGVudCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcbiNmb290ZXItcmlnaHQgLnRleHQtY29udGVudCBhe1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbn1cclxuI2Zvb3Rlci1yaWdodCAuaGVscCAudGV4dC1jb250ZW50e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/footer-account/footer-account.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/footer-account/footer-account.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <div class=\"content-footer\">\r\n    <div id=\"footer-left\">\r\n      <span class=\"text-content\">Download our mobile app</span>\r\n      <div class=\"application\">\r\n        <img [src]=\"imgApp\">\r\n        <img [src]=\"imgAndroid\">\r\n      </div>\r\n    </div>\r\n    <div id=\"footer-right\">\r\n      <div class=\"text-content\">\r\n        <a href=\"mailto: support@getsafehold.com\">support@getsafehold.com</a>\r\n      </div>\r\n      <div class=\"help\">\r\n        <img [src]=\"imgHelp\">\r\n        <span class=\"text-content\">Help & Support</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/layout/footer-account/footer-account.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/footer-account/footer-account.component.ts ***!
  \*******************************************************************/
/*! exports provided: FooterAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterAccountComponent", function() { return FooterAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterAccountComponent = /** @class */ (function () {
    function FooterAccountComponent() {
        //footer
        this.imgApp = "assets/images/apple.png";
        this.imgAndroid = "assets/images/android.png";
        this.imgHelp = "assets/images/Help.png";
    }
    FooterAccountComponent.prototype.ngOnInit = function () {
    };
    FooterAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer-account',
            template: __webpack_require__(/*! ./footer-account.component.html */ "./src/app/layout/footer-account/footer-account.component.html"),
            styles: [__webpack_require__(/*! ./footer-account.component.css */ "./src/app/layout/footer-account/footer-account.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterAccountComponent);
    return FooterAccountComponent;
}());



/***/ }),

/***/ "./src/app/layout/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\r\n    background: #001527;\r\n    padding-bottom: 130px;\r\n    padding-top: 133px;\r\n    font-family: Lato;\r\n    height: 451px;\r\n    width: 1440px;\r\n    padding-left: 95px;\r\n    padding-right: 91px;\r\n}\r\n#footer-Left .content{\r\n    line-height: 34px;\r\n    font-size: 22px;\r\n    color: #FFF;\r\n    opacity: 0.6;   \r\n    margin-top: 24px;\r\n    margin-bottom: 39px;\r\n    width: 335px;\r\n    height: 69px;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n}\r\n#footer-Left .social{\r\n    width: 336px;\r\n    height: 27px;\r\n}\r\n#footer-Left .social a{\r\n    font-size: 22px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    color: #FFFFFF;\r\n    margin: 0 5px;\r\n}\r\n#footer-Left .social a:first-child{\r\n    margin-left: 0;\r\n}\r\n#footer-Left .social span{\r\n    color: #FFF;\r\n}\r\n#navgation h3{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 22px;\r\n    color: #FFF;\r\n    width: 108px;\r\n    height: 27px;\r\n}\r\n.menu{\r\n    margin-top: 25px;\r\n    padding-left: 0;\r\n}\r\n.menu li{\r\n    margin-bottom: 12px;\r\n    list-style: none;\r\n}\r\n#navgation .menu li:first-child a{\r\n    width: 82px;\r\n}\r\n#navgation .menu li:nth-child(2) a{\r\n    width: 111px;\r\n}\r\n#navgation .menu li:nth-child(3) a{\r\n    width: 77px;\r\n}\r\n#navgation .menu li:nth-child(4) a{\r\n    width: 71px;\r\n}\r\n.menu li a{\r\n    font-size: 20px;\r\n    color: #FFF;\r\n    opacity: 0.6;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    height: 24px;\r\n}\r\n#imformation h3{\r\n    width: 119px;\r\n    height: 27px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 22px;\r\n    color: #FFFFFF\r\n}\r\n#imformation .menu li:first-child a{\r\n    width: 42px\r\n}\r\n#imformation .menu li:nth-child(2) a{\r\n    width: 171px;\r\n}\r\n#imformation .menu li:nth-child(3) a{\r\n    width: 66px;\r\n}\r\n#imformation .menu li:nth-child(4) a{\r\n    width: 136px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsY0FBYztDQUNqQjtBQUNEO0lBQ0ksZUFBZTtDQUNsQjtBQUNEO0lBQ0ksWUFBWTtDQUNmO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxZQUFZO0NBQ2Y7QUFDRDtJQUNJLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksWUFBWTtDQUNmO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxXQUFXO0NBQ2Q7QUFDRDtJQUNJLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZDogIzAwMTUyNztcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMzBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMzNweDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgaGVpZ2h0OiA0NTFweDtcclxuICAgIHdpZHRoOiAxNDQwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDk1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA5MXB4O1xyXG59XHJcbiNmb290ZXItTGVmdCAuY29udGVudHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBvcGFjaXR5OiAwLjY7ICAgXHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzlweDtcclxuICAgIHdpZHRoOiAzMzVweDtcclxuICAgIGhlaWdodDogNjlweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuI2Zvb3Rlci1MZWZ0IC5zb2NpYWx7XHJcbiAgICB3aWR0aDogMzM2cHg7XHJcbiAgICBoZWlnaHQ6IDI3cHg7XHJcbn1cclxuI2Zvb3Rlci1MZWZ0IC5zb2NpYWwgYXtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxufVxyXG4jZm9vdGVyLUxlZnQgLnNvY2lhbCBhOmZpcnN0LWNoaWxke1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuI2Zvb3Rlci1MZWZ0IC5zb2NpYWwgc3BhbntcclxuICAgIGNvbG9yOiAjRkZGO1xyXG59XHJcbiNuYXZnYXRpb24gaDN7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIHdpZHRoOiAxMDhweDtcclxuICAgIGhlaWdodDogMjdweDtcclxufVxyXG4ubWVudXtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuLm1lbnUgbGl7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4jbmF2Z2F0aW9uIC5tZW51IGxpOmZpcnN0LWNoaWxkIGF7XHJcbiAgICB3aWR0aDogODJweDtcclxufVxyXG4jbmF2Z2F0aW9uIC5tZW51IGxpOm50aC1jaGlsZCgyKSBhe1xyXG4gICAgd2lkdGg6IDExMXB4O1xyXG59XHJcbiNuYXZnYXRpb24gLm1lbnUgbGk6bnRoLWNoaWxkKDMpIGF7XHJcbiAgICB3aWR0aDogNzdweDtcclxufVxyXG4jbmF2Z2F0aW9uIC5tZW51IGxpOm50aC1jaGlsZCg0KSBhe1xyXG4gICAgd2lkdGg6IDcxcHg7XHJcbn1cclxuLm1lbnUgbGkgYXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbn1cclxuI2ltZm9ybWF0aW9uIGgze1xyXG4gICAgd2lkdGg6IDExOXB4O1xyXG4gICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6ICNGRkZGRkZcclxufVxyXG4jaW1mb3JtYXRpb24gLm1lbnUgbGk6Zmlyc3QtY2hpbGQgYXtcclxuICAgIHdpZHRoOiA0MnB4XHJcbn1cclxuI2ltZm9ybWF0aW9uIC5tZW51IGxpOm50aC1jaGlsZCgyKSBhe1xyXG4gICAgd2lkdGg6IDE3MXB4O1xyXG59XHJcbiNpbWZvcm1hdGlvbiAubWVudSBsaTpudGgtY2hpbGQoMykgYXtcclxuICAgIHdpZHRoOiA2NnB4O1xyXG59XHJcbiNpbWZvcm1hdGlvbiAubWVudSBsaTpudGgtY2hpbGQoNCkgYXtcclxuICAgIHdpZHRoOiAxMzZweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  <div class=\"footer\">\r\n    <div class=\"row\" style=\"margin: 0\">\r\n      <div id=\"footer-Left\" class=\"col-8\" style=\"padding-left: 0;\">\r\n        <div id=\"logoF\">\r\n          <a href=\"home\">\r\n            <img [src]=\"imgF\">\r\n          </a>\r\n        </div>\r\n        <div class=\"content\">{{content}}</div>\r\n        <div class=\"social\">\r\n          <a href=\"#\">Facebook </a> <span class=\"coment\"> / </span>\r\n          <a href=\"#\">Instagram </a> <span class=\"coment\"> / </span>\r\n          <a href=\"#\">Twitter</a>\r\n        </div>\r\n      </div>\r\n      <div id=\"navgation\" class=\"col-2\">\r\n        <h3>Navigation</h3>\r\n        <ul class=\"menu\">\r\n          <li class=\"item-menu\">\r\n            <a [routerLink]=\"['/about-us']\">About Us</a>\r\n          </li>\r\n          <li class=\"item-menu\">\r\n            <a [routerLink]=\"['/why-better']\">Why Better?</a>\r\n          </li>\r\n          <li class=\"item-menu\">\r\n            <a href=\"#\">Safehold</a>\r\n          </li>\r\n          <li class=\"item-menu\">\r\n            <a [routerLink]=\"['/contact']\">Contact</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div id=\"imformation\" class=\"col-2\">\r\n        <h3>Information</h3>\r\n        <ul class=\"menu\">\r\n            <li class=\"item-menu\">\r\n              <a href=\"#\">Help</a>\r\n            </li>\r\n            <li class=\"item-menu\">\r\n              <a href=\"#\">Terms & Conditions</a>\r\n            </li>\r\n            <li class=\"item-menu\">\r\n              <a href=\"#\">Privacy</a>\r\n            </li>\r\n            <li class=\"item-menu\">\r\n              <a href=\"#\">Report an Issue</a>\r\n            </li>\r\n          </ul>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var FooterComponent = /** @class */ (function () {
    function FooterComponent(router) {
        this.router = router;
        this.imgF = "assets/images/LogoFooter.png";
        this.content = "Because being independent shouldn’t mean you’re alone.";
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.ScrollTo();
    };
    FooterComponent.prototype.ScrollTo = function () {
        this.subcription = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; })).subscribe(function () { return window.scrollTo(0, 90); });
    };
    FooterComponent.prototype.ngOnDestroy = function () {
        this.subcription.unsubscribe();
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/layout/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/header-account/header-account.component.css":
/*!********************************************************************!*\
  !*** ./src/app/layout/header-account/header-account.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* header */\r\nheader{\r\n    background: #FFF;\r\n    padding-left: 44px;\r\n    height: 92px;\r\n    line-height: 92px;\r\n}\r\nheader a img{\r\n    width: 31.53px;\r\n    height: 30px;\r\n    cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2hlYWRlci1hY2NvdW50L2hlYWRlci1hY2NvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWTtBQUNaO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9oZWFkZXItYWNjb3VudC9oZWFkZXItYWNjb3VudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaGVhZGVyICovXHJcbmhlYWRlcntcclxuICAgIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQ0cHg7XHJcbiAgICBoZWlnaHQ6IDkycHg7XHJcbiAgICBsaW5lLWhlaWdodDogOTJweDtcclxufVxyXG5oZWFkZXIgYSBpbWd7XHJcbiAgICB3aWR0aDogMzEuNTNweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/header-account/header-account.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/header-account/header-account.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <a href=\"signup\">\r\n    <img [src]=\"imgLogo\">\r\n  </a>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/layout/header-account/header-account.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/header-account/header-account.component.ts ***!
  \*******************************************************************/
/*! exports provided: HeaderAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderAccountComponent", function() { return HeaderAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderAccountComponent = /** @class */ (function () {
    function HeaderAccountComponent() {
        //header 
        this.imgLogo = "assets/images/logoCreate.png";
    }
    HeaderAccountComponent.prototype.ngOnInit = function () {
    };
    HeaderAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-account',
            template: __webpack_require__(/*! ./header-account.component.html */ "./src/app/layout/header-account/header-account.component.html"),
            styles: [__webpack_require__(/*! ./header-account.component.css */ "./src/app/layout/header-account/header-account.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderAccountComponent);
    return HeaderAccountComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    width: 1250px;\r\n    height: 54px;\r\n    margin-left: 95px;\r\n    margin-top: 64px;\r\n    z-index: 1;\r\n    margin-right: 95px;\r\n    line-height: 54px;\r\n    font-family: Lato;\r\n\r\n}\r\n.header #logo a img{\r\n    width: 162px;\r\n    height: 28.35px;\r\n}\r\n#menu .nav li button{\r\n    border: none;\r\n    background: unset;\r\n    cursor: pointer;\r\n    margin-right: 39px;\r\n}\r\n#menu .nav li button span{\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    color: #001527;\r\n}\r\n#menu .nav li:last-child button{\r\n    margin-right: 0;\r\n}\r\n#menu .nav li button:hover{\r\n    border: 2px solid #FF9100;\r\n    box-sizing: border-box;\r\n    border-radius: 12px;\r\n    padding: 0 34px;\r\n}\r\n#menu .nav li button:hover span{\r\n    font-weight: bold;\r\n}\r\nbutton:focus {\r\n    outline:0;\r\n}\r\nbutton.nav-link.router-link-active span {\r\n    border-bottom: 2px solid #FF9100 ;\r\n    font-weight: bold !important;\r\n    outline: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7O0NBRXJCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxVQUFVO0NBQ2I7QUFFRDtJQUNJLGtDQUFrQztJQUNsQyw2QkFBNkI7SUFDN0IsV0FBVztDQUNkIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XHJcbiAgICB3aWR0aDogMTI1MHB4O1xyXG4gICAgaGVpZ2h0OiA1NHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDk1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2NHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG1hcmdpbi1yaWdodDogOTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1NHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcblxyXG59XHJcbi5oZWFkZXIgI2xvZ28gYSBpbWd7XHJcbiAgICB3aWR0aDogMTYycHg7XHJcbiAgICBoZWlnaHQ6IDI4LjM1cHg7XHJcbn1cclxuI21lbnUgLm5hdiBsaSBidXR0b257XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1bnNldDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMzlweDtcclxufVxyXG4jbWVudSAubmF2IGxpIGJ1dHRvbiBzcGFue1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogIzAwMTUyNztcclxufVxyXG4jbWVudSAubmF2IGxpOmxhc3QtY2hpbGQgYnV0dG9ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcbiNtZW51IC5uYXYgbGkgYnV0dG9uOmhvdmVye1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0ZGOTEwMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMCAzNHB4O1xyXG59XHJcbiNtZW51IC5uYXYgbGkgYnV0dG9uOmhvdmVyIHNwYW57XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5idXR0b246Zm9jdXMge1xyXG4gICAgb3V0bGluZTowO1xyXG59XHJcblxyXG5idXR0b24ubmF2LWxpbmsucm91dGVyLWxpbmstYWN0aXZlIHNwYW4ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNGRjkxMDAgO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICAgIG91dGxpbmU6IDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n    <div class=\"row\">\r\n        <div id=\"logo\" class=\"col-lg-4\">\r\n            <a href=\"home\">\r\n                <img [src]=\"imgLg\">\r\n            </a>\r\n        </div>\r\n        <div id=\"menu\" class=\"col-lg-8\">\r\n            <ul class=\"nav justify-content-end\">\r\n                <li class=\"nav-item\">\r\n                    <button class=\"nav-link\" [routerLink]=\"['/about-us']\"\r\n                        routerLinkActive=\"router-link-active\"><span>About Us</span></button>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <button class=\"nav-link\" [routerLink]=\"['/why-better']\"\r\n                        routerLinkActive=\"router-link-active\"><span>Why Better?</span></button>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <button class=\"nav-link\" [routerLink]=\"['/contact']\"\r\n                        routerLinkActive=\"router-link-active\"><span>Contact</span></button>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <button class=\"nav-link \" [routerLink]=\"['/signup/signin']\" routerLinkActive=\"router-link-active\"><span>Log\r\n                            in</span></button>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
        this.imgLg = 'assets/images/logoHeader.png';
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.Login = function () {
        this.router.navigate(['login']);
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/layout/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/setting/page/footer-setting/footer-setting.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/setting/page/footer-setting/footer-setting.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* footer */\r\n\r\nfooter{\r\n    font-family: Lato;\r\n    background: #E0E0E0;\r\n    width: 1440px;\r\n    height: 93px;\r\n}\r\n\r\n.content-footer{\r\n    margin-left: 44px;\r\n    height: 32px;\r\n    position: relative;\r\n    padding-top: 38px;\r\n\r\n}\r\n\r\n#footer-left{\r\n    display: flex;\r\n    position: absolute;\r\n}\r\n\r\nfooter .text-content{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 17px;\r\n    color: #757575;\r\n}\r\n\r\n#footer-left span{\r\n    margin-right: 11px;\r\n    padding-top: 5px;\r\n}\r\n\r\n#footer-left .application img{\r\n    width: 24px;\r\n    height: 24px;\r\n}\r\n\r\n#footer-left .application img:first-child{\r\n    margin-right: 7px\r\n}\r\n\r\n#footer-right{\r\n    position: absolute;\r\n    right: 0;\r\n    display: flex;\r\n}\r\n\r\n#footer-right .text-content {\r\n    margin-right: 60px;\r\n    padding-top: 5px;\r\n}\r\n\r\n#footer-right .text-content a{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 17px;\r\n    color: #757575;\r\n}\r\n\r\n#footer-right .help .text-content{\r\n    margin-left: 7px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZy9wYWdlL2Zvb3Rlci1zZXR0aW5nL2Zvb3Rlci1zZXR0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWTs7QUFFWjtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGFBQWE7Q0FDaEI7O0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7O0NBRXJCOztBQUNEO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtDQUN0Qjs7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0NBQ2xCOztBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtDQUNwQjs7QUFDRDtJQUNJLFlBQVk7SUFDWixhQUFhO0NBQ2hCOztBQUNEO0lBQ0ksaUJBQWlCO0NBQ3BCOztBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxjQUFjO0NBQ2pCOztBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtDQUNwQjs7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0NBQ2xCOztBQUNEO0lBQ0ksaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZy9wYWdlL2Zvb3Rlci1zZXR0aW5nL2Zvb3Rlci1zZXR0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBmb290ZXIgKi9cclxuXHJcbmZvb3RlcntcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgYmFja2dyb3VuZDogI0UwRTBFMDtcclxuICAgIHdpZHRoOiAxNDQwcHg7XHJcbiAgICBoZWlnaHQ6IDkzcHg7XHJcbn1cclxuLmNvbnRlbnQtZm9vdGVye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQ0cHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLXRvcDogMzhweDtcclxuXHJcbn1cclxuI2Zvb3Rlci1sZWZ0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5mb290ZXIgLnRleHQtY29udGVudHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG59XHJcbiNmb290ZXItbGVmdCBzcGFue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG4jZm9vdGVyLWxlZnQgLmFwcGxpY2F0aW9uIGltZ3tcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG59XHJcbiNmb290ZXItbGVmdCAuYXBwbGljYXRpb24gaW1nOmZpcnN0LWNoaWxke1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHhcclxufVxyXG4jZm9vdGVyLXJpZ2h0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiNmb290ZXItcmlnaHQgLnRleHQtY29udGVudCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcbiNmb290ZXItcmlnaHQgLnRleHQtY29udGVudCBhe1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbn1cclxuI2Zvb3Rlci1yaWdodCAuaGVscCAudGV4dC1jb250ZW50e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/setting/page/footer-setting/footer-setting.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/setting/page/footer-setting/footer-setting.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<footer>\r\n    <div class=\"content-footer\">\r\n        <div id=\"footer-left\">\r\n            <span class=\"text-content\">Download our mobile app</span>\r\n            <div class=\"application\">\r\n                <img [src]=\"imgApp\">\r\n                <img [src]=\"imgAndroid\">\r\n            </div>\r\n        </div>\r\n        <div id=\"footer-right\">\r\n            <div class=\"text-content\">\r\n                <a href=\"mailto: support@getsafehold.com\">support@getsafehold.com</a>\r\n            </div>\r\n            <div class=\"help\">\r\n                <img [src]=\"imgHelp\">\r\n                <span class=\"text-content\">Help & Support</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/setting/page/footer-setting/footer-setting.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/setting/page/footer-setting/footer-setting.component.ts ***!
  \*************************************************************************/
/*! exports provided: FooterSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterSettingComponent", function() { return FooterSettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterSettingComponent = /** @class */ (function () {
    function FooterSettingComponent() {
        //footer
        this.imgApp = "assets/images/apple.png";
        this.imgAndroid = "assets/images/android.png";
        this.imgHelp = "assets/images/Help.png";
    }
    FooterSettingComponent.prototype.ngOnInit = function () {
    };
    FooterSettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer-setting',
            template: __webpack_require__(/*! ./footer-setting.component.html */ "./src/app/setting/page/footer-setting/footer-setting.component.html"),
            styles: [__webpack_require__(/*! ./footer-setting.component.css */ "./src/app/setting/page/footer-setting/footer-setting.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterSettingComponent);
    return FooterSettingComponent;
}());



/***/ }),

/***/ "./src/app/setting/page/header-setting/header-setting.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/setting/page/header-setting/header-setting.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header{\r\n    width: 1440px;\r\n    height: 92px;\r\n    line-height: 92px;\r\n    display: flex;\r\n    position: relative;\r\n}\r\n.button-toggle-menu{\r\n    position: absolute;\r\n    left: 44px;\r\n}\r\n.button-toggle-menu img{\r\n    width: 23px;\r\n    height: 17px;\r\n    cursor: pointer;\r\n}\r\n.button-toggle-menu .backSetting img{\r\n    width: 24px;\r\n    height: 24px;\r\n}\r\n.button-toggle-menu .backSetting span{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 16px;\r\n    width: 79px;\r\n    height: 20px;\r\n    color: #757575;\r\n    margin-left: 7px;\r\n}\r\n.logoDashboard{\r\n    position: absolute;\r\n    left: 675px;\r\n}\r\n.logoDashboard img{\r\n    width: 89.5px;\r\n    height: 22px;\r\n    cursor: pointer;\r\n}\r\n.notification{\r\n    position: absolute;\r\n    left: 1257px;\r\n}\r\n.notification img{\r\n    width: 22.3px;\r\n    height: 24px;\r\n    cursor: pointer;\r\n}\r\n.logout{\r\n    position: absolute;\r\n    right: 44px;\r\n}\r\n.logout button{\r\n    width: 96px;\r\n    height: 40px;\r\n    border: 1px solid #E0E0E0;\r\n    box-sizing: border-box;\r\n    border-radius: 8px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 16px;\r\n    color: #001527;\r\n    background: unset;\r\n    cursor: pointer;\r\n    padding: 0;\r\n    outline: 0;\r\n}\r\n.logout button:active{\r\n    outline: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZy9wYWdlL2hlYWRlci1zZXR0aW5nL2hlYWRlci1zZXR0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztDQUNkO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtDQUNmO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksV0FBVztDQUNkIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZy9wYWdlL2hlYWRlci1zZXR0aW5nL2hlYWRlci1zZXR0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXJ7XHJcbiAgICB3aWR0aDogMTQ0MHB4O1xyXG4gICAgaGVpZ2h0OiA5MnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDkycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5idXR0b24tdG9nZ2xlLW1lbnV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA0NHB4O1xyXG59XHJcbi5idXR0b24tdG9nZ2xlLW1lbnUgaW1ne1xyXG4gICAgd2lkdGg6IDIzcHg7XHJcbiAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJ1dHRvbi10b2dnbGUtbWVudSAuYmFja1NldHRpbmcgaW1ne1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbn1cclxuLmJ1dHRvbi10b2dnbGUtbWVudSAuYmFja1NldHRpbmcgc3BhbntcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgd2lkdGg6IDc5cHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbn1cclxuLmxvZ29EYXNoYm9hcmR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA2NzVweDtcclxufVxyXG4ubG9nb0Rhc2hib2FyZCBpbWd7XHJcbiAgICB3aWR0aDogODkuNXB4O1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5ub3RpZmljYXRpb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxMjU3cHg7XHJcbn1cclxuLm5vdGlmaWNhdGlvbiBpbWd7XHJcbiAgICB3aWR0aDogMjIuM3B4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5sb2dvdXR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNDRweDtcclxufVxyXG4ubG9nb3V0IGJ1dHRvbntcclxuICAgIHdpZHRoOiA5NnB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0UwRTBFMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMDAxNTI3O1xyXG4gICAgYmFja2dyb3VuZDogdW5zZXQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG4ubG9nb3V0IGJ1dHRvbjphY3RpdmV7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/setting/page/header-setting/header-setting.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/setting/page/header-setting/header-setting.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <div class=\"button-toggle-menu\">\r\n    <a (click)=\"NextEmail()\" *ngIf=\"!showLoading\">\r\n      <img [src]=\"imgToggle\">\r\n    </a>\r\n    <div class=\"backSetting\" *ngIf=\"showLoading\" (click)=\"BackDashboard()\">\r\n      <a><img [src]=\"imgBack\"></a>\r\n      <span>Dashboard</span>\r\n    </div>\r\n    </div>\r\n  <div class=\"logoDashboard\">\r\n    <a href=\"#\"><img [src]=\"imgLogo\"></a>\r\n  </div>\r\n  <div class=\"notification\">\r\n    <img [src]=\"imgNotifi\">\r\n  </div>\r\n  <div class=\"logout\" (click)=\"logOut()\">\r\n    <button type=\"submit\">Log out</button>\r\n  </div>\r\n</header>"

/***/ }),

/***/ "./src/app/setting/page/header-setting/header-setting.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/setting/page/header-setting/header-setting.component.ts ***!
  \*************************************************************************/
/*! exports provided: HeaderSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderSettingComponent", function() { return HeaderSettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HeaderSettingComponent = /** @class */ (function () {
    function HeaderSettingComponent(router) {
        this.router = router;
        this.showLoading = false;
        //header
        this.imgLogo = "assets/images/logoDashboard.png";
        this.imgToggle = "assets/images/MenuDashboard.png";
        this.imgNotifi = "assets/images/Notification.png";
        this.imgBack = "assets/images/Back.png";
    }
    HeaderSettingComponent.prototype.ngOnInit = function () {
    };
    HeaderSettingComponent.prototype.NextEmail = function () {
        this.router.navigate(['dashboard/profile']);
        this.showLoading = true;
    };
    HeaderSettingComponent.prototype.BackDashboard = function () {
        this.router.navigate(['dashboard']);
        this.showLoading = false;
    };
    HeaderSettingComponent.prototype.logOut = function () {
        localStorage.removeItem('_token');
        localStorage.removeItem('_userId');
        this.router.navigate(['signup/signin']);
    };
    HeaderSettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-setting',
            template: __webpack_require__(/*! ./header-setting.component.html */ "./src/app/setting/page/header-setting/header-setting.component.html"),
            styles: [__webpack_require__(/*! ./header-setting.component.css */ "./src/app/setting/page/header-setting/header-setting.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderSettingComponent);
    return HeaderSettingComponent;
}());



/***/ }),

/***/ "./src/app/setting/setting.component.css":
/*!***********************************************!*\
  !*** ./src/app/setting/setting.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmcvc2V0dGluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/setting/setting.component.html":
/*!************************************************!*\
  !*** ./src/app/setting/setting.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-setting></app-header-setting>\r\n<router-outlet></router-outlet>\r\n<app-footer-setting></app-footer-setting>\r\n"

/***/ }),

/***/ "./src/app/setting/setting.component.ts":
/*!**********************************************!*\
  !*** ./src/app/setting/setting.component.ts ***!
  \**********************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingComponent = /** @class */ (function () {
    function SettingComponent() {
    }
    SettingComponent.prototype.ngOnInit = function () {
    };
    SettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__(/*! ./setting.component.html */ "./src/app/setting/setting.component.html"),
            styles: [__webpack_require__(/*! ./setting.component.css */ "./src/app/setting/setting.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "./src/app/setup-guide/setup-guide.component.html":
/*!********************************************************!*\
  !*** ./src/app/setup-guide/setup-guide.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/setup-guide/setup-guide.component.ts":
/*!******************************************************!*\
  !*** ./src/app/setup-guide/setup-guide.component.ts ***!
  \******************************************************/
/*! exports provided: SetupGuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupGuideComponent", function() { return SetupGuideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SetupGuideComponent = /** @class */ (function () {
    function SetupGuideComponent() {
    }
    SetupGuideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-setup-guide',
            template: __webpack_require__(/*! ./setup-guide.component.html */ "./src/app/setup-guide/setup-guide.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SetupGuideComponent);
    return SetupGuideComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: "https://api.safehold.xyz/api/v1/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Angular-test\better-landing-page\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map