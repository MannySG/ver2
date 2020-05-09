(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setup-guide-setup-guide-module"],{

/***/ "./node_modules/ngx-plaid-link/fesm5/ngx-plaid-link.js":
/*!*************************************************************!*\
  !*** ./node_modules/ngx-plaid-link/fesm5/ngx-plaid-link.js ***!
  \*************************************************************/
/*! exports provided: NgxPlaidLinkService, NgxPlaidLinkButtonComponent, NgxPlaidLinkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPlaidLinkService", function() { return NgxPlaidLinkService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPlaidLinkButtonComponent", function() { return NgxPlaidLinkButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPlaidLinkModule", function() { return NgxPlaidLinkModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
     * @param {?=} institution
     * @return {?}
     */
    PlaidLinkHandler.prototype.open = /**
     * Open the Plaid Link window for this handler.
     * @param {?=} institution
     * @return {?}
     */
    function (institution) {
        this.plaidLink.open(institution);
    };
    /**
     * Closes the currently open Plaid Link window if any.
     * @return {?}
     */
    PlaidLinkHandler.prototype.exit = /**
     * Closes the currently open Plaid Link window if any.
     * @return {?}
     */
    function () {
        this.plaidLink.exit();
    };
    return PlaidLinkHandler;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxPlaidLinkService = /** @class */ (function () {
    function NgxPlaidLinkService() {
    }
    /**
     * Create a Plaid Link instance as soon as Plaid Link has loaded.
     * @param {?} config
     * @return {?} Promise<PlaidLinkHandler>
     */
    NgxPlaidLinkService.prototype.createPlaid = /**
     * Create a Plaid Link instance as soon as Plaid Link has loaded.
     * @param {?} config
     * @return {?} Promise<PlaidLinkHandler>
     */
    function (config) {
        return this.loadPlaid().then(function () {
            return new PlaidLinkHandler(config);
        });
    };
    /**
     * Load or wait for the Plaid Link library to load.
     * @return {?} Promise<void>
     */
    NgxPlaidLinkService.prototype.loadPlaid = /**
     * Load or wait for the Plaid Link library to load.
     * @return {?} Promise<void>
     */
    function () {
        if (!this.loaded) {
            this.loaded = new Promise(function (resolve, reject) {
                /** @type {?} */
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
    NgxPlaidLinkService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NgxPlaidLinkService.ctorParameters = function () { return []; };
    return NgxPlaidLinkService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function getWindow() {
    return window;
}
var NgxPlaidLinkButtonComponent = /** @class */ (function () {
    function NgxPlaidLinkButtonComponent(plaidLinkLoader) {
        this.plaidLinkLoader = plaidLinkLoader;
        this.defaultProps = {
            apiVersion: 'v2',
            env: 'sandbox',
            institution: null,
            token: null,
            style: {
                'background-color': '#0085e4',
                'transition-duration': '350ms',
                'transition-property': 'background-color, box-shadow',
                'transition-timing-function': 'ease-in-out',
                '-webkit-appearance': 'button',
                'border': '0',
                'border-radius': '4px',
                'box-shadow': '0 2px 4px 0 rgba(0,0,0,0.1), inset 0 1px 0 0 rgba(255,255,255,0.1)',
                'color': '#fff',
                'font-size': '20px',
                'height': '56px',
                'outline': '0',
                'text-align': 'center',
                'text-transform': 'none',
                'padding': '0 2em',
                'cursor': 'pointer'
            },
            buttonText: 'Log In To Your Bank Account',
            webhook: '',
            product: ['auth'],
            className: 'plaid-link-button'
        };
        this.apiVersion = this.defaultProps.apiVersion;
        this.env = this.defaultProps.env;
        this.institution = this.defaultProps.institution;
        this.product = this.defaultProps.product;
        this.token = this.defaultProps.token;
        this.webhook = this.defaultProps.webhook;
        this.style = this.defaultProps.style;
        this.className = this.defaultProps.className;
        this.buttonText = this.defaultProps.buttonText;
        this.Event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.Click = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.Load = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.Exit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.Success = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.disabledButton = true;
    }
    Object.defineProperty(NgxPlaidLinkButtonComponent.prototype, "nativeWindow", {
        get: /**
         * @return {?}
         */
        function () {
            return getWindow();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxPlaidLinkButtonComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var self = this;
        this.plaidLinkLoader.createPlaid({
            env: self.env,
            key: self.publicKey,
            product: self.product,
            apiVersion: 'v2',
            clientName: self.clientName,
            onSuccess: function (public_token, metadata) {
                self.onSuccess(public_token, metadata);
            },
            onExit: function (err, metadata) {
                self.onExit(err, metadata);
            },
            onEvent: function (eventName, metadata) {
                self.onEvent(eventName, metadata);
            },
            onLoad: function () {
                self.onLoad();
            },
            token: self.token || null,
            webhook: self.webhook || null
        }).then(function (handler) {
            _this.disabledButton = false;
            _this.plaidLinkHandler = handler;
        });
    };
    /**
     * @return {?}
     */
    NgxPlaidLinkButtonComponent.prototype.onScriptError = /**
     * @return {?}
     */
    function () {
        console.error('There was an issue loading the link-initialize.js script');
    };
    /**
     * @param {?} error
     * @param {?} metadata
     * @return {?}
     */
    NgxPlaidLinkButtonComponent.prototype.onExit = /**
     * @param {?} error
     * @param {?} metadata
     * @return {?}
     */
    function (error, metadata) {
        this.Exit.emit({
            error: error,
            metadata: metadata
        });
    };
    /**
     * @param {?} eventName
     * @param {?} metadata
     * @return {?}
     */
    NgxPlaidLinkButtonComponent.prototype.onEvent = /**
     * @param {?} eventName
     * @param {?} metadata
     * @return {?}
     */
    function (eventName, metadata) {
        this.Event.emit({
            eventName: eventName,
            metadata: metadata
        });
    };
    /**
     * @param {?} public_token
     * @param {?} metadata
     * @return {?}
     */
    NgxPlaidLinkButtonComponent.prototype.onSuccess = /**
     * @param {?} public_token
     * @param {?} metadata
     * @return {?}
     */
    function (public_token, metadata) {
        this.Success.emit({
            token: public_token,
            metadata: metadata
        });
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgxPlaidLinkButtonComponent.prototype.onClick = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.Click.emit($event);
        /** @type {?} */
        var institution = this.institution || null;
        if (this.plaidLinkHandler) {
            this.plaidLinkHandler.open(institution);
        }
    };
    /**
     * @param {?=} $event
     * @return {?}
     */
    NgxPlaidLinkButtonComponent.prototype.onLoad = /**
     * @param {?=} $event
     * @return {?}
     */
    function ($event) {
        if ($event === void 0) { $event = 'link_loaded'; }
        this.Load.emit($event);
    };
    NgxPlaidLinkButtonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'mr-ngx-plaid-link-button',
                    template: "\n    <button\n      (click)=\"onClick($event)\"\n      [class]=\"className\"\n      [disabled]=\"disabledButton\"\n      [ngStyle]=\"style\">\n      {{buttonText}}\n    </button>\n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    NgxPlaidLinkButtonComponent.ctorParameters = function () { return [
        { type: NgxPlaidLinkService }
    ]; };
    NgxPlaidLinkButtonComponent.propDecorators = {
        apiVersion: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        clientName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        env: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        institution: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        publicKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        product: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        token: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        webhook: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        style: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        className: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        buttonText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        Event: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        Click: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        Load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        Exit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        Success: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return NgxPlaidLinkButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgxPlaidLinkModule = /** @class */ (function () {
    function NgxPlaidLinkModule() {
    }
    NgxPlaidLinkModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                    ],
                    providers: [
                        NgxPlaidLinkService
                    ],
                    declarations: [NgxPlaidLinkButtonComponent],
                    exports: [NgxPlaidLinkButtonComponent]
                },] },
    ];
    return NgxPlaidLinkModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBsYWlkLWxpbmsuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1wbGFpZC1saW5rL2xpYi9uZ3gtcGxhaWQtbGluay1oYW5kbGVyLnRzIiwibmc6Ly9uZ3gtcGxhaWQtbGluay9saWIvbmd4LXBsYWlkLWxpbmsuc2VydmljZS50cyIsIm5nOi8vbmd4LXBsYWlkLWxpbmsvbGliL25neC1wbGFpZC1saW5rLWJ1dHRvbi5jb21wb25lbnQudHMiLCJuZzovL25neC1wbGFpZC1saW5rL2xpYi9uZ3gtcGxhaWQtbGluay5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxhaWRDb25maWcgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG5kZWNsYXJlIGxldCBQbGFpZDogYW55O1xuXG5leHBvcnQgY2xhc3MgUGxhaWRMaW5rSGFuZGxlciB7XG5cbiAgLyoqXG4gICAqIEhvbGRzIHRoZSBQbGFpZCBMaW5rIGluc3RhbmNlLlxuICAgKi9cbiAgcHJpdmF0ZSBwbGFpZExpbms6IGFueTtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3IgY29uZmlndXJlcyB0aGUgUGxhaWQgTGluayBoYW5kbGVyIHdpdGggZ2l2ZW4gY29uZmlnIG9wdGlvbnMuXG4gICAqIEBwYXJhbSBQbGFpZENvbmZpZyBjb25maWdcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogUGxhaWRDb25maWcpIHtcbiAgICB0aGlzLnBsYWlkTGluayA9IFBsYWlkLmNyZWF0ZShjb25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW4gdGhlIFBsYWlkIExpbmsgd2luZG93IGZvciB0aGlzIGhhbmRsZXIuXG4gICAqIEBwYXJhbSBzdHJpbmcgaW5zdGl0dXRpb24gVGhlIG5hbWUgb2YgdGhlIGluc3RpdHV0aW9uIHRvIG9wZW5cbiAgICovXG4gIHB1YmxpYyBvcGVuKGluc3RpdHV0aW9uPzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5wbGFpZExpbmsub3BlbihpbnN0aXR1dGlvbik7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSBjdXJyZW50bHkgb3BlbiBQbGFpZCBMaW5rIHdpbmRvdyBpZiBhbnkuXG4gICAqL1xuICBwdWJsaWMgZXhpdCgpOiB2b2lkIHtcbiAgICB0aGlzLnBsYWlkTGluay5leGl0KCk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGxhaWRDb25maWcgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgUGxhaWRMaW5rSGFuZGxlciB9IGZyb20gJy4vbmd4LXBsYWlkLWxpbmstaGFuZGxlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ3hQbGFpZExpbmtTZXJ2aWNlIHtcblxuICBwcml2YXRlIGxvYWRlZDogUHJvbWlzZTx2b2lkPjtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBQbGFpZCBMaW5rIGluc3RhbmNlIGFzIHNvb24gYXMgUGxhaWQgTGluayBoYXMgbG9hZGVkLlxuICAgKiBAcGFyYW0gUGxhaWRDb25maWcgY29uZmlnXG4gICAqIEByZXR1cm5zIFByb21pc2U8UGxhaWRMaW5rSGFuZGxlcj5cbiAgICovXG4gIHB1YmxpYyBjcmVhdGVQbGFpZChjb25maWc6IFBsYWlkQ29uZmlnKTogUHJvbWlzZTxQbGFpZExpbmtIYW5kbGVyPiB7XG4gICAgcmV0dXJuIHRoaXMubG9hZFBsYWlkKCkudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFBsYWlkTGlua0hhbmRsZXIoY29uZmlnKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIG9yIHdhaXQgZm9yIHRoZSBQbGFpZCBMaW5rIGxpYnJhcnkgdG8gbG9hZC5cbiAgICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxuICAgKi9cbiAgcHVibGljIGxvYWRQbGFpZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIXRoaXMubG9hZGVkKSB7XG4gICAgICB0aGlzLmxvYWRlZCA9IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3Qgc2NyaXB0OiBhbnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgc2NyaXB0LnNyYyA9ICdodHRwczovL2Nkbi5wbGFpZC5jb20vbGluay92Mi9zdGFibGUvbGluay1pbml0aWFsaXplLmpzJztcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoZTogYW55KSA9PiByZWplY3QoZSk7XG4gICAgICAgIGlmIChzY3JpcHQucmVhZHlTdGF0ZSkge1xuICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2NyaXB0LnJlYWR5U3RhdGUgPT09ICdsb2FkZWQnIHx8IHNjcmlwdC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubG9hZGVkO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBQbGFpZEVycm9yTWV0YWRhdGEsXG4gIFBsYWlkRXJyb3JPYmplY3QsXG4gIFBsYWlkRXZlbnRNZXRhZGF0YSxcbiAgUGxhaWRPbkV2ZW50QXJncyxcbiAgUGxhaWRPbkV4aXRBcmdzLFxuICBQbGFpZE9uU3VjY2Vzc0FyZ3MsXG4gIFBsYWlkU3VjY2Vzc01ldGFkYXRhLFxuICBQbGFpZENvbmZpZ1xufSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgTmd4UGxhaWRMaW5rU2VydmljZSB9IGZyb20gJy4vbmd4LXBsYWlkLWxpbmsuc2VydmljZSc7XG5pbXBvcnQgeyBQbGFpZExpbmtIYW5kbGVyIH0gZnJvbSAnLi9uZ3gtcGxhaWQtbGluay1oYW5kbGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBJQ3VzdG9tV2luZG93IGV4dGVuZHMgV2luZG93IHtcbiAgUGxhaWQ6IHtcbiAgICBjcmVhdGU6IEZ1bmN0aW9uO1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRXaW5kb3coKTogYW55IHtcbiAgcmV0dXJuIHdpbmRvdztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXItbmd4LXBsYWlkLWxpbmstYnV0dG9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnV0dG9uXG4gICAgICAoY2xpY2spPVwib25DbGljaygkZXZlbnQpXCJcbiAgICAgIFtjbGFzc109XCJjbGFzc05hbWVcIlxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkQnV0dG9uXCJcbiAgICAgIFtuZ1N0eWxlXT1cInN0eWxlXCI+XG4gICAgICB7e2J1dHRvblRleHR9fVxuICAgIDwvYnV0dG9uPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE5neFBsYWlkTGlua0J1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuXG4gIHByaXZhdGUgcGxhaWRMaW5rSGFuZGxlcjogUGxhaWRMaW5rSGFuZGxlcjtcblxuICBwcml2YXRlIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhcGlWZXJzaW9uOiAndjInLFxuICAgIGVudjogJ3NhbmRib3gnLFxuICAgIGluc3RpdHV0aW9uOiBudWxsLFxuICAgIHRva2VuOiBudWxsLFxuICAgIHN0eWxlOiB7XG4gICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcjMDA4NWU0JyxcbiAgICAgICd0cmFuc2l0aW9uLWR1cmF0aW9uJzogJzM1MG1zJyxcbiAgICAgICd0cmFuc2l0aW9uLXByb3BlcnR5JzogJ2JhY2tncm91bmQtY29sb3IsIGJveC1zaGFkb3cnLFxuICAgICAgJ3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJzogJ2Vhc2UtaW4tb3V0JyxcbiAgICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAnYnV0dG9uJyxcbiAgICAgICdib3JkZXInOiAnMCcsXG4gICAgICAnYm9yZGVyLXJhZGl1cyc6ICc0cHgnLFxuICAgICAgJ2JveC1zaGFkb3cnOiAnMCAycHggNHB4IDAgcmdiYSgwLDAsMCwwLjEpLCBpbnNldCAwIDFweCAwIDAgcmdiYSgyNTUsMjU1LDI1NSwwLjEpJyxcbiAgICAgICdjb2xvcic6ICcjZmZmJyxcbiAgICAgICdmb250LXNpemUnOiAnMjBweCcsXG4gICAgICAnaGVpZ2h0JzogJzU2cHgnLFxuICAgICAgJ291dGxpbmUnOiAnMCcsXG4gICAgICAndGV4dC1hbGlnbic6ICdjZW50ZXInLFxuICAgICAgJ3RleHQtdHJhbnNmb3JtJzogJ25vbmUnLFxuICAgICAgJ3BhZGRpbmcnOiAnMCAyZW0nLFxuICAgICAgJ2N1cnNvcic6ICdwb2ludGVyJ1xuICAgIH0sXG4gICAgYnV0dG9uVGV4dDogJ0xvZyBJbiBUbyBZb3VyIEJhbmsgQWNjb3VudCcsXG4gICAgd2ViaG9vazogJycsXG4gICAgcHJvZHVjdDogWydhdXRoJ10sXG4gICAgY2xhc3NOYW1lOiAncGxhaWQtbGluay1idXR0b24nXG4gIH07XG5cbiAgZGlzYWJsZWRCdXR0b246IGJvb2xlYW47XG5cbiAgQElucHV0KCkgYXBpVmVyc2lvbj86IHN0cmluZyA9IHRoaXMuZGVmYXVsdFByb3BzLmFwaVZlcnNpb247XG4gIEBJbnB1dCgpIGNsaWVudE5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgZW52Pzogc3RyaW5nID0gdGhpcy5kZWZhdWx0UHJvcHMuZW52O1xuICBASW5wdXQoKSBpbnN0aXR1dGlvbj86IHN0cmluZyA9IHRoaXMuZGVmYXVsdFByb3BzLmluc3RpdHV0aW9uO1xuICBASW5wdXQoKSBwdWJsaWNLZXk6IHN0cmluZztcbiAgQElucHV0KCkgcHJvZHVjdD86IEFycmF5PHN0cmluZz4gPSB0aGlzLmRlZmF1bHRQcm9wcy5wcm9kdWN0O1xuICBASW5wdXQoKSB0b2tlbj86IHN0cmluZyA9IHRoaXMuZGVmYXVsdFByb3BzLnRva2VuO1xuICBASW5wdXQoKSB3ZWJob29rPzogc3RyaW5nID0gdGhpcy5kZWZhdWx0UHJvcHMud2ViaG9vaztcbiAgQElucHV0KCkgc3R5bGU/OiBhbnkgPSB0aGlzLmRlZmF1bHRQcm9wcy5zdHlsZTtcbiAgQElucHV0KCkgY2xhc3NOYW1lPzogc3RyaW5nID0gdGhpcy5kZWZhdWx0UHJvcHMuY2xhc3NOYW1lO1xuICBASW5wdXQoKSBidXR0b25UZXh0Pzogc3RyaW5nID0gdGhpcy5kZWZhdWx0UHJvcHMuYnV0dG9uVGV4dDtcblxuICBAT3V0cHV0KCkgRXZlbnQ6IEV2ZW50RW1pdHRlcjxQbGFpZE9uRXZlbnRBcmdzPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIExvYWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgRXhpdDogRXZlbnRFbWl0dGVyPFBsYWlkT25FeGl0QXJncz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBTdWNjZXNzOiBFdmVudEVtaXR0ZXI8UGxhaWRPblN1Y2Nlc3NBcmdzPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBnZXQgbmF0aXZlV2luZG93KCk6IElDdXN0b21XaW5kb3cge1xuICAgIHJldHVybiBnZXRXaW5kb3coKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGxhaWRMaW5rTG9hZGVyOiBOZ3hQbGFpZExpbmtTZXJ2aWNlKSB7XG4gICAgdGhpcy5kaXNhYmxlZEJ1dHRvbiA9IHRydWU7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5wbGFpZExpbmtMb2FkZXIuY3JlYXRlUGxhaWQoe1xuICAgICAgZW52OiBzZWxmLmVudixcbiAgICAgIGtleTogc2VsZi5wdWJsaWNLZXksXG4gICAgICBwcm9kdWN0OiBzZWxmLnByb2R1Y3QsXG4gICAgICBhcGlWZXJzaW9uOiAndjInLFxuICAgICAgY2xpZW50TmFtZTogc2VsZi5jbGllbnROYW1lLFxuICAgICAgb25TdWNjZXNzOiBmdW5jdGlvbiAocHVibGljX3Rva2VuLCBtZXRhZGF0YSkge1xuICAgICAgICBzZWxmLm9uU3VjY2VzcyhwdWJsaWNfdG9rZW4sIG1ldGFkYXRhKTtcbiAgICAgIH0sXG4gICAgICBvbkV4aXQ6IGZ1bmN0aW9uIChlcnIsIG1ldGFkYXRhKSB7XG4gICAgICAgIHNlbGYub25FeGl0KGVyciwgbWV0YWRhdGEpO1xuICAgICAgfSxcbiAgICAgIG9uRXZlbnQ6IGZ1bmN0aW9uIChldmVudE5hbWUsIG1ldGFkYXRhKSB7XG4gICAgICAgIHNlbGYub25FdmVudChldmVudE5hbWUsIG1ldGFkYXRhKTtcbiAgICAgIH0sXG4gICAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5vbkxvYWQoKTtcbiAgICAgIH0sXG4gICAgICB0b2tlbjogc2VsZi50b2tlbiB8fCBudWxsLFxuICAgICAgd2ViaG9vazogc2VsZi53ZWJob29rIHx8IG51bGxcbiAgICB9KS50aGVuKChoYW5kbGVyOiBQbGFpZExpbmtIYW5kbGVyKSA9PiB7XG4gICAgICB0aGlzLmRpc2FibGVkQnV0dG9uID0gZmFsc2U7XG4gICAgICB0aGlzLnBsYWlkTGlua0hhbmRsZXIgPSBoYW5kbGVyO1xuICAgIH0pO1xuICB9XG5cbiAgb25TY3JpcHRFcnJvcigpIHtcbiAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYW4gaXNzdWUgbG9hZGluZyB0aGUgbGluay1pbml0aWFsaXplLmpzIHNjcmlwdCcpO1xuICB9XG5cbiAgcHVibGljIG9uRXhpdChlcnJvcjogUGxhaWRFcnJvck9iamVjdCwgbWV0YWRhdGE6IFBsYWlkRXJyb3JNZXRhZGF0YSkge1xuICAgIHRoaXMuRXhpdC5lbWl0KHtcbiAgICAgIGVycm9yOiBlcnJvcixcbiAgICAgIG1ldGFkYXRhOiBtZXRhZGF0YVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG9uRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIG1ldGFkYXRhOiBQbGFpZEV2ZW50TWV0YWRhdGEpIHtcbiAgICB0aGlzLkV2ZW50LmVtaXQoe1xuICAgICAgZXZlbnROYW1lOiBldmVudE5hbWUsXG4gICAgICBtZXRhZGF0YTogbWV0YWRhdGFcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvblN1Y2Nlc3MocHVibGljX3Rva2VuOiBzdHJpbmcsIG1ldGFkYXRhOiBQbGFpZFN1Y2Nlc3NNZXRhZGF0YSkge1xuICAgIHRoaXMuU3VjY2Vzcy5lbWl0KHtcbiAgICAgIHRva2VuOiBwdWJsaWNfdG9rZW4sXG4gICAgICBtZXRhZGF0YTogbWV0YWRhdGFcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2xpY2soJGV2ZW50KSB7XG4gICAgdGhpcy5DbGljay5lbWl0KCRldmVudCk7XG4gICAgLy8gT3BlbiB0byBhIHNwZWNpZmljIGluc3RpdHV0aW9uIGlmIG5lY2Vzc2FyeTtcbiAgICBjb25zdCBpbnN0aXR1dGlvbiA9IHRoaXMuaW5zdGl0dXRpb24gfHwgbnVsbDtcbiAgICBpZiAodGhpcy5wbGFpZExpbmtIYW5kbGVyKSB7XG4gICAgICB0aGlzLnBsYWlkTGlua0hhbmRsZXIub3BlbihpbnN0aXR1dGlvbik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uTG9hZCgkZXZlbnQgPSAnbGlua19sb2FkZWQnKSB7XG4gICAgdGhpcy5Mb2FkLmVtaXQoJGV2ZW50KTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5neFBsYWlkTGlua0J1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vbmd4LXBsYWlkLWxpbmstYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hQbGFpZExpbmtTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtcGxhaWQtbGluay5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBOZ3hQbGFpZExpbmtTZXJ2aWNlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW05neFBsYWlkTGlua0J1dHRvbkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtOZ3hQbGFpZExpbmtCdXR0b25Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE5neFBsYWlkTGlua01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsSUFBQTs7Ozs7SUFXRSwwQkFBWSxNQUFtQjtRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDdkM7Ozs7OztJQU1NLCtCQUFJOzs7OztjQUFDLFdBQW9CO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzs7Ozs7SUFNNUIsK0JBQUk7Ozs7O1FBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7MkJBL0IxQjtJQWtDQyxDQUFBOzs7Ozs7QUNsQ0Q7SUFTRTtLQUFpQjs7Ozs7O0lBT1YseUNBQVc7Ozs7O2NBQUMsTUFBbUI7UUFDcEMsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQzNCLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQyxDQUFDLENBQUM7Ozs7OztJQU9FLHVDQUFTOzs7OztRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQU8sVUFBQyxPQUFPLEVBQUUsTUFBTTs7Z0JBQzlDLElBQU0sTUFBTSxHQUFRLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3JELE1BQU0sQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7Z0JBQ2hDLE1BQU0sQ0FBQyxHQUFHLEdBQUcseURBQXlELENBQUM7Z0JBQ3ZFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsVUFBQyxDQUFNLElBQUssT0FBQSxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUEsQ0FBQztnQkFDdkMsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFO29CQUNyQixNQUFNLENBQUMsa0JBQWtCLEdBQUc7d0JBQzFCLElBQUksTUFBTSxDQUFDLFVBQVUsS0FBSyxRQUFRLElBQUksTUFBTSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUU7NEJBQ3RFLE1BQU0sQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7NEJBQ2pDLE9BQU8sRUFBRSxDQUFDO3lCQUNYO3FCQUNGLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsTUFBTSxDQUFDLE1BQU0sR0FBRzt3QkFDZCxPQUFPLEVBQUUsQ0FBQztxQkFDWCxDQUFDO2lCQUNIO2dCQUNELFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDOUQsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7OztnQkE3Q3RCLFVBQVU7Ozs7OEJBSlg7Ozs7Ozs7QUNBQTs7O0FBb0JBO0lBQ0UsT0FBTyxNQUFNLENBQUM7Q0FDZjs7SUF3RUMscUNBQW9CLGVBQW9DO1FBQXBDLG9CQUFlLEdBQWYsZUFBZSxDQUFxQjs0QkFyRGpDO1lBQ3JCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLEdBQUcsRUFBRSxTQUFTO1lBQ2QsV0FBVyxFQUFFLElBQUk7WUFDakIsS0FBSyxFQUFFLElBQUk7WUFDWCxLQUFLLEVBQUU7Z0JBQ0wsa0JBQWtCLEVBQUUsU0FBUztnQkFDN0IscUJBQXFCLEVBQUUsT0FBTztnQkFDOUIscUJBQXFCLEVBQUUsOEJBQThCO2dCQUNyRCw0QkFBNEIsRUFBRSxhQUFhO2dCQUMzQyxvQkFBb0IsRUFBRSxRQUFRO2dCQUM5QixRQUFRLEVBQUUsR0FBRztnQkFDYixlQUFlLEVBQUUsS0FBSztnQkFDdEIsWUFBWSxFQUFFLG9FQUFvRTtnQkFDbEYsT0FBTyxFQUFFLE1BQU07Z0JBQ2YsV0FBVyxFQUFFLE1BQU07Z0JBQ25CLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixTQUFTLEVBQUUsR0FBRztnQkFDZCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsZ0JBQWdCLEVBQUUsTUFBTTtnQkFDeEIsU0FBUyxFQUFFLE9BQU87Z0JBQ2xCLFFBQVEsRUFBRSxTQUFTO2FBQ3BCO1lBQ0QsVUFBVSxFQUFFLDZCQUE2QjtZQUN6QyxPQUFPLEVBQUUsRUFBRTtZQUNYLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNqQixTQUFTLEVBQUUsbUJBQW1CO1NBQy9COzBCQUk4QixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVU7bUJBRW5DLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRzsyQkFDYixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVc7dUJBRTFCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTztxQkFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLO3VCQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87cUJBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSzt5QkFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTOzBCQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVU7cUJBRVQsSUFBSSxZQUFZLEVBQUU7cUJBQy9CLElBQUksWUFBWSxFQUFFO29CQUNuQixJQUFJLFlBQVksRUFBRTtvQkFDTixJQUFJLFlBQVksRUFBRTt1QkFDWixJQUFJLFlBQVksRUFBRTtRQU90RSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztLQUM1QjtJQU5ELHNCQUFJLHFEQUFZOzs7O1FBQWhCO1lBQ0UsT0FBTyxTQUFTLEVBQUUsQ0FBQztTQUNwQjs7O09BQUE7Ozs7SUFNRCxxREFBZTs7O0lBQWY7UUFBQSxpQkEwQkM7O1FBekJDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQztZQUMvQixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDYixHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDbkIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixTQUFTLEVBQUUsVUFBVSxZQUFZLEVBQUUsUUFBUTtnQkFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDeEM7WUFDRCxNQUFNLEVBQUUsVUFBVSxHQUFHLEVBQUUsUUFBUTtnQkFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDNUI7WUFDRCxPQUFPLEVBQUUsVUFBVSxTQUFTLEVBQUUsUUFBUTtnQkFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDbkM7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2Y7WUFDRCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJO1lBQ3pCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUk7U0FDOUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQXlCO1lBQ2hDLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQzVCLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUM7U0FDakMsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCxtREFBYTs7O0lBQWI7UUFDRSxPQUFPLENBQUMsS0FBSyxDQUFDLDBEQUEwRCxDQUFDLENBQUM7S0FDM0U7Ozs7OztJQUVNLDRDQUFNOzs7OztjQUFDLEtBQXVCLEVBQUUsUUFBNEI7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDYixLQUFLLEVBQUUsS0FBSztZQUNaLFFBQVEsRUFBRSxRQUFRO1NBQ25CLENBQUMsQ0FBQzs7Ozs7OztJQUdFLDZDQUFPOzs7OztjQUFDLFNBQWlCLEVBQUUsUUFBNEI7UUFDNUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDZCxTQUFTLEVBQUUsU0FBUztZQUNwQixRQUFRLEVBQUUsUUFBUTtTQUNuQixDQUFDLENBQUM7Ozs7Ozs7SUFHRSwrQ0FBUzs7Ozs7Y0FBQyxZQUFvQixFQUFFLFFBQThCO1FBQ25FLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ2hCLEtBQUssRUFBRSxZQUFZO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1NBQ25CLENBQUMsQ0FBQzs7Ozs7O0lBR0wsNkNBQU87Ozs7SUFBUCxVQUFRLE1BQU07UUFDWixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzs7UUFFeEIsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUM7UUFDN0MsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN6QztLQUNGOzs7OztJQUVNLDRDQUFNOzs7O2NBQUMsTUFBc0I7UUFBdEIsdUJBQUEsRUFBQSxzQkFBc0I7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7OztnQkF6STFCLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxRQUFRLEVBQUUseUxBUVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQUU7aUJBQ1g7Ozs7Z0JBekJRLG1CQUFtQjs7OzZCQTZEekIsS0FBSzs2QkFDTCxLQUFLO3NCQUNMLEtBQUs7OEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzBCQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsS0FBSzs2QkFDTCxLQUFLO3dCQUVMLE1BQU07d0JBQ04sTUFBTTt1QkFDTixNQUFNO3VCQUNOLE1BQU07MEJBQ04sTUFBTTs7c0NBeEZUOzs7Ozs7O0FDQUE7Ozs7Z0JBS0MsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELFNBQVMsRUFBRTt3QkFDVCxtQkFBbUI7cUJBQ3BCO29CQUNELFlBQVksRUFBRSxDQUFDLDJCQUEyQixDQUFDO29CQUMzQyxPQUFPLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztpQkFDdkM7OzZCQWREOzs7Ozs7Ozs7Ozs7Ozs7In0=

/***/ }),

/***/ "./src/app/setup-guide/complete/complete.component.css":
/*!*************************************************************!*\
  !*** ./src/app/setup-guide/complete/complete.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*========Header==========*/\r\nheader{\r\n    display: flex;\r\n}\r\nheader img{\r\n    margin: 32px 0 29px 44px;\r\n}\r\nheader h5{\r\n    width: 141px;\r\n    height: 35px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 34px;\r\n    font-size: 22px;\r\n    text-align: center;\r\n    color: #001527; \r\n    margin: 33px 0 22px 578px;\r\n    white-space: nowrap;\r\n}\r\nheader a.save{\r\n    margin: 36px 55px 34px 490px;\r\n    width: 104px;\r\n    height: 22px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    text-align: right;\r\n    color: #757575;\r\n    white-space: nowrap;\r\n}\r\n/*==========Content========*/\r\n.step-line {\r\n    height: 5px;\r\n    background: #E0E0E0;\r\n    position: relative;\r\n    width: 1440px;\r\n}\r\n.step-line-2{\r\n    height: 5px;\r\n    position: absolute;\r\n    -webkit-animation-name: line;  \r\n    -webkit-animation-duration: 5s;   \r\n    -webkit-animation-fill-mode: forwards; \r\n    animation-name: line;\r\n    animation-duration: 5s;  \r\n    animation-fill-mode: forwards;\r\n    background-color: orange;\r\n}\r\n@-webkit-keyframes line {\r\n    from {width: 1080px;}\r\n    to {width: 1440px; }\r\n}\r\n@keyframes line {\r\n    from {width: 1080px;}\r\n    to {width: 1440px; }\r\n}\r\n#complete {\r\n    font-family: Lato;\r\n    margin-top: 245px;\r\n    width: 1440px;\r\n}\r\n#complete img{\r\n    width: 56px;\r\n    height: 56px;\r\n    margin: 0 692px;\r\n}\r\n#complete h4{\r\n    width: 297px;\r\n    height: 77px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 32px;\r\n    text-align: center;\r\n    color: #001527;\r\n    margin: 32px 571px 68px 572px;\r\n}\r\n#complete .link-end{\r\n    color: #FF9100;\r\n}\r\n#complete .link-end a{\r\n    color: #FF9100;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 22px;\r\n    width: 163px;\r\n    height: 27px;\r\n    margin-left: 627px\r\n}\r\n#complete .link-end i{\r\n    width: 14px;\r\n    height: 8px;\r\n    margin-left: 16px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dXAtZ3VpZGUvY29tcGxldGUvY29tcGxldGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEI7QUFDNUI7SUFDSSxjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSx5QkFBeUI7Q0FDNUI7QUFDRDtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7Q0FDdkI7QUFFRCw2QkFBNkI7QUFDN0I7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QiwrQkFBK0I7SUFDL0Isc0NBQXNDO0lBQ3RDLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLHlCQUF5QjtDQUM1QjtBQUNEO0lBQ0ksTUFBTSxjQUFjLENBQUM7SUFDckIsSUFBSSxjQUFjLEVBQUU7Q0FDdkI7QUFIRDtJQUNJLE1BQU0sY0FBYyxDQUFDO0lBQ3JCLElBQUksY0FBYyxFQUFFO0NBQ3ZCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7Q0FDakI7QUFDRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDhCQUE4QjtDQUNqQztBQUNEO0lBQ0ksZUFBZTtDQUNsQjtBQUNEO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9zZXR1cC1ndWlkZS9jb21wbGV0ZS9jb21wbGV0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PUhlYWRlcj09PT09PT09PT0qL1xyXG5oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbmhlYWRlciBpbWd7XHJcbiAgICBtYXJnaW46IDMycHggMCAyOXB4IDQ0cHg7XHJcbn1cclxuaGVhZGVyIGg1e1xyXG4gICAgd2lkdGg6IDE0MXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzAwMTUyNzsgXHJcbiAgICBtYXJnaW46IDMzcHggMCAyMnB4IDU3OHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5oZWFkZXIgYS5zYXZle1xyXG4gICAgbWFyZ2luOiAzNnB4IDU1cHggMzRweCA0OTBweDtcclxuICAgIHdpZHRoOiAxMDRweDtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLyo9PT09PT09PT09Q29udGVudD09PT09PT09Ki9cclxuLnN0ZXAtbGluZSB7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICNFMEUwRTA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTQ0MHB4O1xyXG59XHJcbi5zdGVwLWxpbmUtMntcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogbGluZTsgIFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDVzOyAgIFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgXHJcbiAgICBhbmltYXRpb24tbmFtZTogbGluZTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7ICBcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG59XHJcbkBrZXlmcmFtZXMgbGluZSB7XHJcbiAgICBmcm9tIHt3aWR0aDogMTA4MHB4O31cclxuICAgIHRvIHt3aWR0aDogMTQ0MHB4OyB9XHJcbn1cclxuI2NvbXBsZXRlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMjQ1cHg7XHJcbiAgICB3aWR0aDogMTQ0MHB4O1xyXG59XHJcbiNjb21wbGV0ZSBpbWd7XHJcbiAgICB3aWR0aDogNTZweDtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIG1hcmdpbjogMCA2OTJweDtcclxufVxyXG4jY29tcGxldGUgaDR7XHJcbiAgICB3aWR0aDogMjk3cHg7XHJcbiAgICBoZWlnaHQ6IDc3cHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzAwMTUyNztcclxuICAgIG1hcmdpbjogMzJweCA1NzFweCA2OHB4IDU3MnB4O1xyXG59XHJcbiNjb21wbGV0ZSAubGluay1lbmR7XHJcbiAgICBjb2xvcjogI0ZGOTEwMDtcclxufVxyXG4jY29tcGxldGUgLmxpbmstZW5kIGF7XHJcbiAgICBjb2xvcjogI0ZGOTEwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHdpZHRoOiAxNjNweDtcclxuICAgIGhlaWdodDogMjdweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MjdweFxyXG59XHJcbiNjb21wbGV0ZSAubGluay1lbmQgaXtcclxuICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/setup-guide/complete/complete.component.html":
/*!**************************************************************!*\
  !*** ./src/app/setup-guide/complete/complete.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!----------Header----------->\r\n<header>\r\n    <a href=\"\">\r\n        <img src=\"assets/images/setup-guide/logo.png\" alt=\"\">\r\n    </a> \r\n    <h5>Account Setup</h5>\r\n    <a href=\"\" class=\"save\">Save and Exit</a>\r\n</header>\r\n  \r\n<!--------Content-------->\r\n<div class=\"step-line\">\r\n    <div class=\"step-line-2\"></div>\r\n</div>\r\n<div id=\"complete\">\r\n    <img src=\"assets/images/setup-guide/check.png\" alt=\"\">\r\n    <h4>You’re all set up and ready to go!</h4>\r\n    <div class=\"link-end\">\r\n        <a (click)=\"gotoDashboard()\" style=\"cursor: pointer;\">Go to dashboard</a>\r\n        <i class=\"fas fa-chevron-right\"></i>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/setup-guide/complete/complete.component.ts":
/*!************************************************************!*\
  !*** ./src/app/setup-guide/complete/complete.component.ts ***!
  \************************************************************/
/*! exports provided: CompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteComponent", function() { return CompleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var CompleteComponent = /** @class */ (function () {
    function CompleteComponent(router) {
        this.router = router;
    }
    CompleteComponent.prototype.ngOnInit = function () {
    };
    CompleteComponent.prototype.gotoDashboard = function () {
        this.router.navigateByUrl('dashboard');
    };
    CompleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-complete',
            template: __webpack_require__(/*! ./complete.component.html */ "./src/app/setup-guide/complete/complete.component.html"),
            styles: [__webpack_require__(/*! ./complete.component.css */ "./src/app/setup-guide/complete/complete.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CompleteComponent);
    return CompleteComponent;
}());



/***/ }),

/***/ "./src/app/setup-guide/desired-outcome/desired-outcome.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/setup-guide/desired-outcome/desired-outcome.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*========Header==========*/\r\nheader{\r\n    display: flex;\r\n}\r\nheader img{\r\n    margin: 32px 0 29px 44px;\r\n}\r\nheader h5{\r\n    width: 141px;\r\n    height: 35px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 34px;\r\n    font-size: 22px;\r\n    text-align: center;\r\n    color: #001527; \r\n    margin: 33px 0 22px 578px;\r\n    white-space: nowrap;\r\n}\r\nheader a.save{\r\n    margin: 36px 55px 34px 490px;\r\n    width: 104px;\r\n    height: 22px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    text-align: right;\r\n    color: #757575;\r\n    white-space: nowrap;\r\n}\r\n/*==========Content========*/\r\n.step-line {\r\n    height: 5px;\r\n    background: #E0E0E0;\r\n    position: relative;\r\n    width: 1440px;\r\n}\r\n.step-line-2{\r\n    height: 5px;\r\n    position: absolute;\r\n    -webkit-animation-name: line;  \r\n    -webkit-animation-duration: 5s;   \r\n    -webkit-animation-fill-mode: forwards; \r\n    animation-name: line;\r\n    animation-duration: 5s;  \r\n    animation-fill-mode: forwards;\r\n    background-color: #FF9100;\r\n}\r\n@-webkit-keyframes line {\r\n    0% {width: 720px;}\r\n    100% {width: 900px; }\r\n}\r\n@keyframes line {\r\n    0% {width: 720px;}\r\n    100% {width: 900px; }\r\n}\r\n#d-outcome {\r\n    margin-top: 79px;\r\n    font-family: Lato;\r\n    width: 1440px;\r\n}\r\n#d-outcome h4{\r\n    width: 611px;\r\n    height: 39px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 32px;\r\n    text-align: center;\r\n    color: #001527;\r\n    margin: 0 414px 47px 415px;\r\n}\r\n#d-outcome button.icon-left {\r\n    top: 426px;\r\n    left: 132px;\r\n    position: absolute;\r\n    width: 48px;\r\n    height: 48px;\r\n    background: #E0E0E0;\r\n    border: none;\r\n    border-radius: 50%;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n#d-outcome button.icon-left {\r\n    outline: none;\r\n}\r\n#d-outcome button.icon-left i{\r\n    width: 8px;\r\n    height: 14px;\r\n}\r\n#d-outcome .group-plan{\r\n    display: flex;\r\n    margin: 0 209px;\r\n}\r\n#d-outcome .group-plan h5{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 32px;\r\n    text-align: center;\r\n    color: #001527;\r\n}\r\n#d-outcome .group-plan p{\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 31px;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    color: #757575;\r\n}\r\n#d-outcome .group-plan button{\r\n    width: 240px;\r\n    height: 54px;\r\n    background: #FF9100;\r\n    border-radius: 44px;\r\n    color: #fff;\r\n    border: none;\r\n}\r\n#d-outcome .group-plan button:focus{\r\n    outline: none;\r\n}\r\n#d-outcome .group-plan button span{\r\n    width: 140px;\r\n    height: 24px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    color: #FFFFFF;\r\n    padding: 14px 51px 16px 49px;\r\n    white-space: nowrap;\r\n}\r\n#d-outcome .group-plan .item-1,#d-outcome .group-plan .item-2,#d-outcome .group-plan .item-3{\r\n    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);\r\n    border-radius: 12px;\r\n    width: 325px;\r\n    height: 498px;\r\n}\r\n#d-outcome .group-plan .item-1{\r\n    margin-right: 21px;\r\n}\r\n#d-outcome .group-plan .item-2{\r\n    margin-right: 26px;\r\n}\r\n#d-outcome .group-plan .item-1 img{\r\n    width: 176.96px;\r\n    height: 155.22px;\r\n    margin: 33px 74px 16px 74px;\r\n}\r\n#d-outcome .group-plan .item-2 img{\r\n    width: 132.96px;\r\n    height: 139.92px;\r\n    margin: 41px 96px 23px 96px;\r\n}\r\n#d-outcome .group-plan .item-3 img{\r\n    width: 73px;\r\n    height: 78px;\r\n    margin: 72px 126px 54px 126px;\r\n}\r\n#d-outcome .group-plan .item-1 p{\r\n    margin: 0 34px 24px 35px;\r\n    width: 256px;\r\n    height: 125px;\r\n}\r\n#d-outcome .group-plan .item-2 p{\r\n    margin: 0 27px 24px 28px;\r\n    width: 270px;\r\n    height: 125px;\r\n}\r\n#d-outcome .group-plan .item-3 p{\r\n    margin: 0 29px 24px 28px;\r\n    width: 268px;\r\n    height: 125px;\r\n}\r\n#d-outcome .group-plan .item-1 button,#d-outcome .group-plan .item-3 button{\r\n    margin: 0 55px 39px 30px;\r\n    cursor: pointer;\r\n}\r\n#d-outcome .group-plan .item-2 button{\r\n    margin: 0 53px 39px 32px;\r\n    cursor: pointer;\r\n}\r\n#d-outcome a{\r\n    width: 408px;\r\n    height: 37px;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    text-align: center;\r\n    color: #BDBDBD;\r\n    margin: 38px 516px 66px 516px;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dXAtZ3VpZGUvZGVzaXJlZC1vdXRjb21lL2Rlc2lyZWQtb3V0Y29tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRCQUE0QjtBQUM1QjtJQUNJLGNBQWM7Q0FDakI7QUFDRDtJQUNJLHlCQUF5QjtDQUM1QjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtDQUN2QjtBQUVELDZCQUE2QjtBQUM3QjtJQUNJLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGNBQWM7Q0FDakI7QUFDRDtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLCtCQUErQjtJQUMvQixzQ0FBc0M7SUFDdEMscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2Qiw4QkFBOEI7SUFDOUIsMEJBQTBCO0NBQzdCO0FBQ0Q7SUFDSSxJQUFJLGFBQWEsQ0FBQztJQUNsQixNQUFNLGFBQWEsRUFBRTtDQUN4QjtBQUhEO0lBQ0ksSUFBSSxhQUFhLENBQUM7SUFDbEIsTUFBTSxhQUFhLEVBQUU7Q0FDeEI7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztDQUNqQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiwyQkFBMkI7Q0FDOUI7QUFDRDtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksY0FBYztDQUNqQjtBQUNEO0lBQ0ksV0FBVztJQUNYLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksMkNBQTJDO0lBQzNDLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsY0FBYztDQUNqQjtBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsNEJBQTRCO0NBQy9CO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDRCQUE0QjtDQUMvQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7Q0FDakM7QUFDRDtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsY0FBYztDQUNqQjtBQUNEO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGNBQWM7Q0FDakI7QUFDRDtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLGVBQWU7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9zZXR1cC1ndWlkZS9kZXNpcmVkLW91dGNvbWUvZGVzaXJlZC1vdXRjb21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKj09PT09PT09SGVhZGVyPT09PT09PT09PSovXHJcbmhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuaGVhZGVyIGltZ3tcclxuICAgIG1hcmdpbjogMzJweCAwIDI5cHggNDRweDtcclxufVxyXG5oZWFkZXIgaDV7XHJcbiAgICB3aWR0aDogMTQxcHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAxNTI3OyBcclxuICAgIG1hcmdpbjogMzNweCAwIDIycHggNTc4cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbmhlYWRlciBhLnNhdmV7XHJcbiAgICBtYXJnaW46IDM2cHggNTVweCAzNHB4IDQ5MHB4O1xyXG4gICAgd2lkdGg6IDEwNHB4O1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4vKj09PT09PT09PT1Db250ZW50PT09PT09PT0qL1xyXG4uc3RlcC1saW5lIHtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI0UwRTBFMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxNDQwcHg7XHJcbn1cclxuLnN0ZXAtbGluZS0ye1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBsaW5lOyAgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNXM7ICAgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyBcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBsaW5lO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1czsgIFxyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY5MTAwO1xyXG59XHJcbkBrZXlmcmFtZXMgbGluZSB7XHJcbiAgICAwJSB7d2lkdGg6IDcyMHB4O31cclxuICAgIDEwMCUge3dpZHRoOiA5MDBweDsgfVxyXG59XHJcbiNkLW91dGNvbWUge1xyXG4gICAgbWFyZ2luLXRvcDogNzlweDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgd2lkdGg6IDE0NDBweDtcclxufVxyXG4jZC1vdXRjb21lIGg0e1xyXG4gICAgd2lkdGg6IDYxMXB4O1xyXG4gICAgaGVpZ2h0OiAzOXB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7XHJcbiAgICBtYXJnaW46IDAgNDE0cHggNDdweCA0MTVweDtcclxufVxyXG4jZC1vdXRjb21lIGJ1dHRvbi5pY29uLWxlZnQge1xyXG4gICAgdG9wOiA0MjZweDtcclxuICAgIGxlZnQ6IDEzMnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTBFMEUwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI2Qtb3V0Y29tZSBidXR0b24uaWNvbi1sZWZ0IHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuI2Qtb3V0Y29tZSBidXR0b24uaWNvbi1sZWZ0IGl7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG59XHJcbiNkLW91dGNvbWUgLmdyb3VwLXBsYW57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAwIDIwOXB4O1xyXG59XHJcbiNkLW91dGNvbWUgLmdyb3VwLXBsYW4gaDV7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzAwMTUyNztcclxufVxyXG4jZC1vdXRjb21lIC5ncm91cC1wbGFuIHB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMxcHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxufVxyXG4jZC1vdXRjb21lIC5ncm91cC1wbGFuIGJ1dHRvbntcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICAgIGhlaWdodDogNTRweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRjkxMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0NHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuI2Qtb3V0Y29tZSAuZ3JvdXAtcGxhbiBidXR0b246Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbiNkLW91dGNvbWUgLmdyb3VwLXBsYW4gYnV0dG9uIHNwYW57XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIHBhZGRpbmc6IDE0cHggNTFweCAxNnB4IDQ5cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbiNkLW91dGNvbWUgLmdyb3VwLXBsYW4gLml0ZW0tMSwjZC1vdXRjb21lIC5ncm91cC1wbGFuIC5pdGVtLTIsI2Qtb3V0Y29tZSAuZ3JvdXAtcGxhbiAuaXRlbS0ze1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHdpZHRoOiAzMjVweDtcclxuICAgIGhlaWdodDogNDk4cHg7XHJcbn1cclxuI2Qtb3V0Y29tZSAuZ3JvdXAtcGxhbiAuaXRlbS0xe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMXB4O1xyXG59XHJcbiNkLW91dGNvbWUgLmdyb3VwLXBsYW4gLml0ZW0tMntcclxuICAgIG1hcmdpbi1yaWdodDogMjZweDtcclxufVxyXG4jZC1vdXRjb21lIC5ncm91cC1wbGFuIC5pdGVtLTEgaW1ne1xyXG4gICAgd2lkdGg6IDE3Ni45NnB4O1xyXG4gICAgaGVpZ2h0OiAxNTUuMjJweDtcclxuICAgIG1hcmdpbjogMzNweCA3NHB4IDE2cHggNzRweDtcclxufVxyXG4jZC1vdXRjb21lIC5ncm91cC1wbGFuIC5pdGVtLTIgaW1ne1xyXG4gICAgd2lkdGg6IDEzMi45NnB4O1xyXG4gICAgaGVpZ2h0OiAxMzkuOTJweDtcclxuICAgIG1hcmdpbjogNDFweCA5NnB4IDIzcHggOTZweDtcclxufVxyXG4jZC1vdXRjb21lIC5ncm91cC1wbGFuIC5pdGVtLTMgaW1ne1xyXG4gICAgd2lkdGg6IDczcHg7XHJcbiAgICBoZWlnaHQ6IDc4cHg7XHJcbiAgICBtYXJnaW46IDcycHggMTI2cHggNTRweCAxMjZweDtcclxufVxyXG4jZC1vdXRjb21lIC5ncm91cC1wbGFuIC5pdGVtLTEgcHtcclxuICAgIG1hcmdpbjogMCAzNHB4IDI0cHggMzVweDtcclxuICAgIHdpZHRoOiAyNTZweDtcclxuICAgIGhlaWdodDogMTI1cHg7XHJcbn1cclxuI2Qtb3V0Y29tZSAuZ3JvdXAtcGxhbiAuaXRlbS0yIHB7XHJcbiAgICBtYXJnaW46IDAgMjdweCAyNHB4IDI4cHg7XHJcbiAgICB3aWR0aDogMjcwcHg7XHJcbiAgICBoZWlnaHQ6IDEyNXB4O1xyXG59XHJcbiNkLW91dGNvbWUgLmdyb3VwLXBsYW4gLml0ZW0tMyBwe1xyXG4gICAgbWFyZ2luOiAwIDI5cHggMjRweCAyOHB4O1xyXG4gICAgd2lkdGg6IDI2OHB4O1xyXG4gICAgaGVpZ2h0OiAxMjVweDtcclxufVxyXG4jZC1vdXRjb21lIC5ncm91cC1wbGFuIC5pdGVtLTEgYnV0dG9uLCNkLW91dGNvbWUgLmdyb3VwLXBsYW4gLml0ZW0tMyBidXR0b257XHJcbiAgICBtYXJnaW46IDAgNTVweCAzOXB4IDMwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI2Qtb3V0Y29tZSAuZ3JvdXAtcGxhbiAuaXRlbS0yIGJ1dHRvbntcclxuICAgIG1hcmdpbjogMCA1M3B4IDM5cHggMzJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jZC1vdXRjb21lIGF7XHJcbiAgICB3aWR0aDogNDA4cHg7XHJcbiAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI0JEQkRCRDtcclxuICAgIG1hcmdpbjogMzhweCA1MTZweCA2NnB4IDUxNnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/setup-guide/desired-outcome/desired-outcome.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/setup-guide/desired-outcome/desired-outcome.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!----------Header----------->\r\n<header>\r\n  <a href=\"\">\r\n      <img src=\"assets/images/setup-guide/logo.png\" alt=\"\">\r\n  </a> \r\n  <h5>Account Setup</h5>\r\n  <a href=\"\" class=\"save\">Save and Exit</a>\r\n</header>\r\n\r\n<!--------Content-------->\r\n<div class=\"step-line\">\r\n  <div class=\"step-line-2\"></div>\r\n</div>\r\n\r\n<div id=\"d-outcome\">\r\n    <h4>What is your desired outcome?</h4>\r\n    <button class=\"icon-left\" (click)=\"Marial()\">\r\n        <i class=\"fas fa-chevron-left\"></i>\r\n    </button>\r\n    <div class=\"group-plan\">\r\n        <div class=\"item-1\">\r\n            <img src=\"assets/images/setup-guide/plan-1.png\" alt=\"\">\r\n            <h5>Refund</h5>\r\n            <p>Better transfers enough money to cover taxes and a little extra to ensure a refund at the end of the year.</p>\r\n            <button>\r\n                <span>Select This Plan</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"item-2\">\r\n            <img src=\"assets/images/setup-guide/plan-2.png\" alt=\"\">\r\n            <h5>Breakeven</h5>\r\n            <p>Better transfers just enough money to Safehold to cover taxes. You won't get a large refund, but you won't owe.</p>\r\n            <button>\r\n                <span>Select This Plan</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"item-3\">\r\n            <img src=\"assets/images/setup-guide/plan-3.png\" alt=\"\">\r\n            <h5>Owe</h5>\r\n            <p>Better transfers enough money so you won’t incur penalties. However, you’ll still owe some for taxes.</p>\r\n            <button>\r\n                <span>Select This Plan</span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <a routerLink=\"/setup-guide/integrate-bank\">You will be able to change this at any time.</a>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/setup-guide/desired-outcome/desired-outcome.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/setup-guide/desired-outcome/desired-outcome.component.ts ***!
  \**************************************************************************/
/*! exports provided: DesiredOutcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesiredOutcomeComponent", function() { return DesiredOutcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var DesiredOutcomeComponent = /** @class */ (function () {
    function DesiredOutcomeComponent(router) {
        this.router = router;
    }
    DesiredOutcomeComponent.prototype.ngOnInit = function () {
    };
    DesiredOutcomeComponent.prototype.Marial = function () {
        this.router.navigateByUrl('setup-guide/marital-status');
    };
    DesiredOutcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-desired-outcome',
            template: __webpack_require__(/*! ./desired-outcome.component.html */ "./src/app/setup-guide/desired-outcome/desired-outcome.component.html"),
            styles: [__webpack_require__(/*! ./desired-outcome.component.css */ "./src/app/setup-guide/desired-outcome/desired-outcome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DesiredOutcomeComponent);
    return DesiredOutcomeComponent;
}());



/***/ }),

/***/ "./src/app/setup-guide/integrate-bank/integrate-bank.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/setup-guide/integrate-bank/integrate-bank.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*========Header==========*/\r\nheader{\r\n    display: flex;\r\n}\r\nheader img{\r\n    margin: 32px 0 29px 44px;\r\n}\r\nheader h5{\r\n    width: 141px;\r\n    height: 35px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 34px;\r\n    font-size: 22px;\r\n    text-align: center;\r\n    color: #001527; \r\n    margin: 33px 0 22px 578px;\r\n    white-space: nowrap;\r\n}\r\nheader a.save{\r\n    margin: 36px 55px 34px 490px;\r\n    width: 104px;\r\n    height: 22px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    text-align: right;\r\n    color: #757575;\r\n    white-space: nowrap;\r\n}\r\n/*==========Content========*/\r\n.step-line {\r\n    height: 5px;\r\n    background: #E0E0E0;\r\n    position: relative;\r\n    width: 1440px;\r\n}\r\n.step-line-2{\r\n    height: 5px;\r\n    position: absolute;\r\n    -webkit-animation-name: line;  \r\n    -webkit-animation-duration: 5s;   \r\n    -webkit-animation-fill-mode: forwards; \r\n    animation-name: line;\r\n    animation-duration: 5s;  \r\n    animation-fill-mode: forwards;\r\n    background-color: orange;\r\n}\r\n@-webkit-keyframes line {\r\n    from {width: 900px;}\r\n    to {width: 1080px; }\r\n}\r\n@keyframes line {\r\n    from {width: 900px;}\r\n    to {width: 1080px; }\r\n}\r\n#i-bank{\r\n    font-family: Lato;\r\n    margin-top : 186px;\r\n    width: 1440px;\r\n}\r\n#i-bank .title h4{\r\n    width: 354px;\r\n    height: 39px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 32px;\r\n    text-align: center;\r\n    color: #001527;\r\n    margin: 0 543px;\r\n}\r\n#i-bank .title p{\r\n    width: 548px;\r\n    height: 148px;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    text-align: center;\r\n    color: #757575;\r\n    margin: 29px 446px 0 446px;\r\n}\r\n#i-bank button.icon-left {\r\n    top: 426px;\r\n    left: 132px;\r\n    position: absolute;\r\n    width: 48px;\r\n    height: 48px;\r\n    background: #E0E0E0;\r\n    border: none;\r\n    border-radius: 50%;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n#i-bank button.icon-left:focus {\r\n    outline: none;\r\n}\r\n#i-bank button.icon-left i{\r\n    width: 8px;\r\n    height: 14px;\r\n}\r\n#i-bank .group-input{\r\n    width: 430px;\r\n    margin: 20px auto 0 auto;\r\n}\r\n#i-bank .group-input input{\r\n    border: 2px solid #E0E0E0;\r\n    width: 100%;\r\n    height: 62px;\r\n    margin-bottom: 8px;\r\n    box-sizing: border-box;\r\n    border-radius: 12px;\r\n    padding: 19px 32px;\r\n}\r\n#i-bank .group-input input:focus{\r\n    outline: none;\r\n}\r\n#i-bank .group-input input.type-integrate:focus{\r\n    border: 2px solid #FF9100;\r\n}\r\n#i-bank .enter-continue{\r\n    display: flex;\r\n    margin: 63px 637px 283px 642px ;\r\n}\r\n#i-bank .enter-continue p.continue{\r\n    width: 75px;\r\n    height: 22px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    color: #333;\r\n    margin-bottom: 0;\r\n}\r\n#i-bank .enter-continue p.enter{\r\n    width: 92px;\r\n    height: 22px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    color: #BDBDBD;\r\n}\r\n#i-bank .enter-continue button.icon-right{\r\n    width: 48px;\r\n    height: 48px;\r\n    background: #FF9100;\r\n    border-radius: 50%;\r\n    border: 1px solid #FF9100;\r\n    margin-left: 21px;\r\n    cursor: pointer;\r\n    color: #fff;\r\n}\r\n#i-bank .enter-continue button.icon-right:focus{\r\n    outline:none;\r\n}\r\n#i-bank .enter-continue button.icon-right i{\r\n    width: 8px;\r\n    height: 14px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dXAtZ3VpZGUvaW50ZWdyYXRlLWJhbmsvaW50ZWdyYXRlLWJhbmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEI7QUFDNUI7SUFDSSxjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSx5QkFBeUI7Q0FDNUI7QUFDRDtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7Q0FDdkI7QUFFRCw2QkFBNkI7QUFDN0I7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QiwrQkFBK0I7SUFDL0Isc0NBQXNDO0lBQ3RDLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLHlCQUF5QjtDQUM1QjtBQUNEO0lBQ0ksTUFBTSxhQUFhLENBQUM7SUFDcEIsSUFBSSxjQUFjLEVBQUU7Q0FDdkI7QUFIRDtJQUNJLE1BQU0sYUFBYSxDQUFDO0lBQ3BCLElBQUksY0FBYyxFQUFFO0NBQ3ZCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDJCQUEyQjtDQUM5QjtBQUNEO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtDQUM1QjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSwwQkFBMEI7Q0FDN0I7QUFDRDtJQUNJLGNBQWM7SUFDZCxnQ0FBZ0M7Q0FDbkM7QUFDRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksYUFBYTtDQUNoQjtBQUNEO0lBQ0ksV0FBVztJQUNYLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9zZXR1cC1ndWlkZS9pbnRlZ3JhdGUtYmFuay9pbnRlZ3JhdGUtYmFuay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PUhlYWRlcj09PT09PT09PT0qL1xyXG5oZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbmhlYWRlciBpbWd7XHJcbiAgICBtYXJnaW46IDMycHggMCAyOXB4IDQ0cHg7XHJcbn1cclxuaGVhZGVyIGg1e1xyXG4gICAgd2lkdGg6IDE0MXB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzAwMTUyNzsgXHJcbiAgICBtYXJnaW46IDMzcHggMCAyMnB4IDU3OHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5oZWFkZXIgYS5zYXZle1xyXG4gICAgbWFyZ2luOiAzNnB4IDU1cHggMzRweCA0OTBweDtcclxuICAgIHdpZHRoOiAxMDRweDtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLyo9PT09PT09PT09Q29udGVudD09PT09PT09Ki9cclxuLnN0ZXAtbGluZSB7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICNFMEUwRTA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTQ0MHB4O1xyXG59XHJcbi5zdGVwLWxpbmUtMntcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogbGluZTsgIFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDVzOyAgIFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkczsgXHJcbiAgICBhbmltYXRpb24tbmFtZTogbGluZTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7ICBcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG59XHJcbkBrZXlmcmFtZXMgbGluZSB7XHJcbiAgICBmcm9tIHt3aWR0aDogOTAwcHg7fVxyXG4gICAgdG8ge3dpZHRoOiAxMDgwcHg7IH1cclxufVxyXG4jaS1iYW5re1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBtYXJnaW4tdG9wIDogMTg2cHg7XHJcbiAgICB3aWR0aDogMTQ0MHB4O1xyXG59XHJcbiNpLWJhbmsgLnRpdGxlIGg0e1xyXG4gICAgd2lkdGg6IDM1NHB4O1xyXG4gICAgaGVpZ2h0OiAzOXB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7XHJcbiAgICBtYXJnaW46IDAgNTQzcHg7XHJcbn1cclxuI2ktYmFuayAudGl0bGUgcHtcclxuICAgIHdpZHRoOiA1NDhweDtcclxuICAgIGhlaWdodDogMTQ4cHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIG1hcmdpbjogMjlweCA0NDZweCAwIDQ0NnB4O1xyXG59XHJcbiNpLWJhbmsgYnV0dG9uLmljb24tbGVmdCB7XHJcbiAgICB0b3A6IDQyNnB4O1xyXG4gICAgbGVmdDogMTMycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGJhY2tncm91bmQ6ICNFMEUwRTA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jaS1iYW5rIGJ1dHRvbi5pY29uLWxlZnQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4jaS1iYW5rIGJ1dHRvbi5pY29uLWxlZnQgaXtcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbn1cclxuI2ktYmFuayAuZ3JvdXAtaW5wdXR7XHJcbiAgICB3aWR0aDogNDMwcHg7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAwIGF1dG87XHJcbn1cclxuI2ktYmFuayAuZ3JvdXAtaW5wdXQgaW5wdXR7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRTBFMEUwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHBhZGRpbmc6IDE5cHggMzJweDtcclxufVxyXG4jaS1iYW5rIC5ncm91cC1pbnB1dCBpbnB1dDpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuI2ktYmFuayAuZ3JvdXAtaW5wdXQgaW5wdXQudHlwZS1pbnRlZ3JhdGU6Zm9jdXN7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRkY5MTAwO1xyXG59XHJcbiNpLWJhbmsgLmVudGVyLWNvbnRpbnVle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogNjNweCA2MzdweCAyODNweCA2NDJweCA7XHJcbn1cclxuI2ktYmFuayAuZW50ZXItY29udGludWUgcC5jb250aW51ZXtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuI2ktYmFuayAuZW50ZXItY29udGludWUgcC5lbnRlcntcclxuICAgIHdpZHRoOiA5MnB4O1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogI0JEQkRCRDtcclxufVxyXG4jaS1iYW5rIC5lbnRlci1jb250aW51ZSBidXR0b24uaWNvbi1yaWdodHtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGOTEwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRjkxMDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMjFweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbiNpLWJhbmsgLmVudGVyLWNvbnRpbnVlIGJ1dHRvbi5pY29uLXJpZ2h0OmZvY3Vze1xyXG4gICAgb3V0bGluZTpub25lO1xyXG59XHJcbiNpLWJhbmsgLmVudGVyLWNvbnRpbnVlIGJ1dHRvbi5pY29uLXJpZ2h0IGl7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/setup-guide/integrate-bank/integrate-bank.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/setup-guide/integrate-bank/integrate-bank.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!----------Header----------->\r\n<header>\r\n    <a href=\"\">\r\n        <img src=\"assets/images/setup-guide/logo.png\" alt=\"\">\r\n    </a>\r\n    <h5>Account Setup</h5>\r\n    <a href=\"\" class=\"save\">Save and Exit</a>\r\n</header>\r\n\r\n<!--------Content-------->\r\n<div class=\"step-line\">\r\n    <div class=\"step-line-2\"></div>\r\n</div>\r\n<div id=\"i-bank\">\r\n    <div class=\"title\">\r\n        <h4>Integrate with your bank</h4>\r\n        <button class=\"icon-left\" (click)=\"Desired()\">\r\n            <i class=\"fas fa-chevron-left\"></i>\r\n        </button>\r\n        <p>We integrate with your bank to automatically track your income and stay on top of your tax situation. This\r\n            means there is no work required of you. We will take it from here.</p>\r\n    </div>\r\n    <ngx-plaid-link-button env=\"sandbox\" publicKey=\"4ea459a34f97c26bade8cd5b27f345\"\r\n        (Success)=\"onPlaidSuccess($event)\" (Exit)=\"onPlaidExit($event)\" (Load)=\"onPlaidLoad($event)\"\r\n        (Event)=\"onPlaidEvent($event)\" className=\"launch-plaid-link-button\"\r\n        (Click)=\"onPlaidClick($event)\">\r\n        <i class=\"fas fa-chevron-right\"></i>\r\n    </ngx-plaid-link-button>\r\n</div>"

/***/ }),

/***/ "./src/app/setup-guide/integrate-bank/integrate-bank.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/setup-guide/integrate-bank/integrate-bank.component.ts ***!
  \************************************************************************/
/*! exports provided: IntegrateBankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntegrateBankComponent", function() { return IntegrateBankComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var IntegrateBankComponent = /** @class */ (function () {
    function IntegrateBankComponent(router) {
        this.router = router;
        this.input = true;
    }
    IntegrateBankComponent.prototype.toggle = function () {
        this.input = false;
    };
    IntegrateBankComponent.prototype.ngOnInit = function () {
    };
    IntegrateBankComponent.prototype.Desired = function () {
        this.router.navigateByUrl('setup-guide/desired-outcome');
    };
    IntegrateBankComponent.prototype.Manual = function () {
        this.router.navigateByUrl('setup-guide/manual');
    };
    IntegrateBankComponent.prototype.onPlaidSuccess = function (event) {
        // Send the public token to your server so you can do the token exchange.
        this.router.navigate(['setup-guide/setup-complete']);
    };
    IntegrateBankComponent.prototype.onPlaidExit = function (event) {
        // Get errors or exit reason.
    };
    IntegrateBankComponent.prototype.onPlaidEvent = function (event) {
        // Log events so you can have insight into how your users are using plaid link.
    };
    IntegrateBankComponent.prototype.onPlaidLoad = function (event) {
        // Do something when the iframe loads.
    };
    IntegrateBankComponent.prototype.onPlaidClick = function (event) {
        // Do something when the button is clicked.
    };
    IntegrateBankComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-integrate-bank',
            template: __webpack_require__(/*! ./integrate-bank.component.html */ "./src/app/setup-guide/integrate-bank/integrate-bank.component.html"),
            styles: [__webpack_require__(/*! ./integrate-bank.component.css */ "./src/app/setup-guide/integrate-bank/integrate-bank.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], IntegrateBankComponent);
    return IntegrateBankComponent;
}());



/***/ }),

/***/ "./src/app/setup-guide/integrate-bank/ngx-plaid-link-button.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/setup-guide/integrate-bank/ngx-plaid-link-button.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".continue{\r\n    display: flex;\r\n    margin-left: 642px;\r\n    margin-top: 103px;\r\n}\r\n.continue .text-content{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    margin-right: 21px;\r\n}\r\n.continue .text-content p{\r\n    color: #000;\r\n    margin-bottom: 0;\r\n    width: 75px;\r\n    height: 22px;\r\n}\r\n.continue .text-content span{\r\n    color: #BDBDBD;\r\n    width: 92px;\r\n    height: 22px;\r\n}\r\nbutton{\r\n    width: 48px;\r\n    height: 48px;\r\n    background: #FF9100;\r\n    border-radius: 50%;\r\n    border: 1px solid #FF9100;\r\n    cursor: pointer;\r\n    color: #fff;\r\n    outline: 0;\r\n}\r\nbutton.fas {\r\n    width: 8px;\r\n    height: 14px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dXAtZ3VpZGUvaW50ZWdyYXRlLWJhbmsvbmd4LXBsYWlkLWxpbmstYnV0dG9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtDQUNoQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksV0FBVztJQUNYLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9zZXR1cC1ndWlkZS9pbnRlZ3JhdGUtYmFuay9uZ3gtcGxhaWQtbGluay1idXR0b24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250aW51ZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tbGVmdDogNjQycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDNweDtcclxufVxyXG4uY29udGludWUgLnRleHQtY29udGVudHtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMXB4O1xyXG59XHJcbi5jb250aW51ZSAudGV4dC1jb250ZW50IHB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIGhlaWdodDogMjJweDtcclxufVxyXG4uY29udGludWUgLnRleHQtY29udGVudCBzcGFue1xyXG4gICAgY29sb3I6ICNCREJEQkQ7XHJcbiAgICB3aWR0aDogOTJweDtcclxuICAgIGhlaWdodDogMjJweDtcclxufVxyXG5idXR0b257XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRjkxMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRkY5MTAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59XHJcbmJ1dHRvbi5mYXMge1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIGhlaWdodDogMTRweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/setup-guide/integrate-bank/ngx-plaid-link-button.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/setup-guide/integrate-bank/ngx-plaid-link-button.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"continue\">\r\n    <div class=\"text-content\">\r\n        <p>Continue</p>\r\n        <span>Press Enter</span>\r\n    </div>\r\n    <button (click)=\"onClick($event)\"  [class]=\"className\"\r\n            [disabled]=\"disabledButton\"  [ngStyle]=\"style\">\r\n        <i class=\"fas fa-chevron-right\"></i>\r\n    </button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/setup-guide/integrate-bank/ngx-plaid-link-button.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/setup-guide/integrate-bank/ngx-plaid-link-button.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NgxPlaidLinkButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPlaidLinkButtonComponent", function() { return NgxPlaidLinkButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_appService_ngx_plaid_link_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/appService/ngx-plaid-link.service */ "./src/app/appService/ngx-plaid-link.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




function getWindow() {
    return window;
}
var NgxPlaidLinkButtonComponent = /** @class */ (function () {
    function NgxPlaidLinkButtonComponent(plaidLinkLoader, router) {
        this.plaidLinkLoader = plaidLinkLoader;
        this.router = router;
        this.defaultProps = {
            apiVersion: 'v2',
            env: 'sandbox',
            institution: null,
            token: null,
            style: {},
            buttonText: '',
            webhook: '',
            product: ['auth'],
            className: 'plaid-link-button'
        };
        this.apiVersion = this.defaultProps.apiVersion;
        this.env = this.defaultProps.env;
        this.institution = this.defaultProps.institution;
        this.product = this.defaultProps.product;
        this.token = this.defaultProps.token;
        this.webhook = this.defaultProps.webhook;
        this.style = this.defaultProps.style;
        this.className = this.defaultProps.className;
        this.buttonText = this.defaultProps.buttonText;
        this.Event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.Click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.Load = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.Exit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.Success = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.disabledButton = true;
    }
    Object.defineProperty(NgxPlaidLinkButtonComponent.prototype, "nativeWindow", {
        get: function () {
            return getWindow();
        },
        enumerable: true,
        configurable: true
    });
    NgxPlaidLinkButtonComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var self = this;
        this.plaidLinkLoader.createPlaid({
            env: self.env,
            key: self.publicKey,
            product: self.product,
            apiVersion: 'v2',
            clientName: self.clientName,
            onSuccess: function (public_token, metadata) {
                self.onSuccess(public_token, metadata);
            },
            onExit: function (err, metadata) {
                self.onExit(err, metadata);
            },
            onEvent: function (eventName, metadata) {
                self.onEvent(eventName, metadata);
            },
            onLoad: function () {
                self.onLoad();
            },
            token: self.token || null,
            webhook: self.webhook || null
        }).then(function (handler) {
            _this.disabledButton = false;
            _this.plaidLinkHandler = handler;
        });
    };
    NgxPlaidLinkButtonComponent.prototype.onScriptError = function () {
        console.error('There was an issue loading the link-initialize.js script');
    };
    NgxPlaidLinkButtonComponent.prototype.onExit = function (error, metadata) {
        this.Exit.emit({
            error: error,
            metadata: metadata
        });
    };
    NgxPlaidLinkButtonComponent.prototype.onEvent = function (eventName, metadata) {
        this.Event.emit({
            eventName: eventName,
            metadata: metadata
        });
    };
    NgxPlaidLinkButtonComponent.prototype.onSuccess = function (public_token, metadata) {
        this.Success.emit({
            token: public_token,
            metadata: metadata
        });
    };
    NgxPlaidLinkButtonComponent.prototype.onClick = function ($event) {
        this.Click.emit($event);
        // Open to a specific institution if necessary;
        var institution = this.institution || null;
        if (this.plaidLinkHandler) {
            this.plaidLinkHandler.open(institution);
        }
    };
    NgxPlaidLinkButtonComponent.prototype.onLoad = function ($event) {
        if ($event === void 0) { $event = 'link_loaded'; }
        this.Load.emit($event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NgxPlaidLinkButtonComponent.prototype, "apiVersion", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NgxPlaidLinkButtonComponent.prototype, "clientName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NgxPlaidLinkButtonComponent.prototype, "env", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NgxPlaidLinkButtonComponent.prototype, "institution", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NgxPlaidLinkButtonComponent.prototype, "publicKey", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NgxPlaidLinkButtonComponent.prototype, "product", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NgxPlaidLinkButtonComponent.prototype, "token", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NgxPlaidLinkButtonComponent.prototype, "webhook", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxPlaidLinkButtonComponent.prototype, "style", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NgxPlaidLinkButtonComponent.prototype, "className", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NgxPlaidLinkButtonComponent.prototype, "buttonText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NgxPlaidLinkButtonComponent.prototype, "Event", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NgxPlaidLinkButtonComponent.prototype, "Click", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NgxPlaidLinkButtonComponent.prototype, "Load", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NgxPlaidLinkButtonComponent.prototype, "Exit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NgxPlaidLinkButtonComponent.prototype, "Success", void 0);
    NgxPlaidLinkButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-plaid-link-button',
            template: __webpack_require__(/*! ./ngx-plaid-link-button.component.html */ "./src/app/setup-guide/integrate-bank/ngx-plaid-link-button.component.html"),
            styles: [__webpack_require__(/*! ./ngx-plaid-link-button.component.css */ "./src/app/setup-guide/integrate-bank/ngx-plaid-link-button.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_appService_ngx_plaid_link_service__WEBPACK_IMPORTED_MODULE_2__["NgxPlaidLinkService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NgxPlaidLinkButtonComponent);
    return NgxPlaidLinkButtonComponent;
}());



/***/ }),

/***/ "./src/app/setup-guide/intro/intro.component.css":
/*!*******************************************************!*\
  !*** ./src/app/setup-guide/intro/intro.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*=======Header==========*/\r\nheader{\r\n    height: 92px;\r\n    z-index: 1;\r\n    position: relative;\r\n    width: 1440px;\r\n}\r\nheader img{\r\n    padding: 32px 0 30px 44px; \r\n}\r\n/*=======Intro==========*/\r\n.step-line{\r\n    height: 5px;\r\n    background:#E0E0E0;\r\n    width: 1440px;\r\n    z-index: 2;\r\n    position: relative;\r\n}\r\n#intro{\r\n    display: flex;\r\n    width: 1440px;\r\n}\r\n#intro .content-left{\r\n    margin-top: 119px;\r\n    z-index: 9;\r\n    padding-left: 170px;\r\n    margin-bottom: 162px;\r\n}\r\n#intro .content-left .title h4{\r\n    width: 296px;\r\n    height: 39px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 32px;\r\n    margin-bottom: 26px;\r\n}\r\n#intro .content-left .title p{\r\n    width: 504px;\r\n    height: 65px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 32px;\r\n    font-size: 18px;\r\n    color: #757575;\r\n    margin-bottom: 26px;\r\n}\r\n#intro .content-left ul{\r\n    list-style-type: none;\r\n    padding: 0;\r\n}\r\n#intro .content-left ul li{\r\n    display: flex;\r\n    position: relative;\r\n}\r\n#intro .content-left ul li span{\r\n    color: #FF9100;\r\n    position: absolute;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    width: 12px;\r\n    height: 24px;\r\n    top: 5px;\r\n    left: 13px;\r\n}\r\n#intro .content-left .item{\r\n    width: 569px;\r\n    height: 61px;\r\n}\r\n#intro .content-left .item {\r\n    font-family: Lato;\r\n    line-height: 30px;\r\n    font-size: 18px;\r\n}\r\n#intro .content-left .item h6{\r\n    color: #001527;\r\n    font-weight: bold;\r\n}\r\n#intro .content-left .item p{\r\n    color: #757575;\r\n}\r\n#intro .content-left img{\r\n    width: 38px;\r\n    height: 38px;\r\n    margin-right: 22px;\r\n    margin-bottom: 45px;\r\n}\r\n#intro .content-left button{\r\n    cursor: pointer;\r\n    padding: 14px 45px 16px 43px;\r\n    background: #FF9100;\r\n    border-radius: 44px;\r\n    margin-top: 34px;\r\n    height: 54px;\r\n    width: 266px;\r\n    border: 1px solid #FF9100;\r\n    outline: 0;\r\n}\r\n#intro .content-left button span{\r\n    width: 178px;\r\n    height: 24px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    color: #FFFFFF;\r\n    white-space: nowrap;\r\n}\r\n#intro .image-right img{\r\n    position: absolute;\r\n    left: 546px;\r\n    top: 71px;\r\n    z-index: 0;\r\n    width: 906px;\r\n    height: 732px;\r\n}\r\n/*=======Footer==========*/\r\n/* footer */\r\nfooter{\r\n    font-family: Lato;\r\n    padding-bottom: 34px;\r\n    width: 1440px;\r\n}\r\n.content-footer{\r\n    margin-left: 44px;\r\n    height: 32px;\r\n    position: relative;\r\n    padding-top: 4px;\r\n\r\n}\r\n#footer-left{\r\n    display: flex;\r\n    position: absolute;\r\n}\r\nfooter .text-content{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 17px;\r\n    color: #757575;\r\n}\r\n#footer-left .application img{\r\n    margin-left: 11px;\r\n    width: 24px;\r\n    height: 24px;\r\n}\r\n#footer-right{\r\n    position: absolute;\r\n    right: 0;\r\n    display: flex;\r\n}\r\n#footer-right .text-content {\r\n    margin-right: 60px;\r\n    padding-top: 5px;\r\n}\r\n#footer-right .text-content a{\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 17px;\r\n    color: #757575;\r\n}\r\n#footer-right .help .text-content{\r\n    margin-left: 7px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dXAtZ3VpZGUvaW50cm8vaW50cm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQkFBMkI7QUFDM0I7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSwwQkFBMEI7Q0FDN0I7QUFFRCwwQkFBMEI7QUFDMUI7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxXQUFXO0lBQ1gsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxjQUFjO0lBQ2QsY0FBYztDQUNqQjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIscUJBQXFCO0NBQ3hCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2IsU0FBUztJQUNULFdBQVc7Q0FDZDtBQUNEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0Isb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsV0FBVztDQUNkO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2IsY0FBYztDQUNqQjtBQUVELDJCQUEyQjtBQUUzQixZQUFZO0FBRVo7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjs7Q0FFcEI7QUFDRDtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsY0FBYztDQUNqQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NldHVwLWd1aWRlL2ludHJvL2ludHJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKj09PT09PT1IZWFkZXI9PT09PT09PT09Ki9cclxuaGVhZGVye1xyXG4gICAgaGVpZ2h0OiA5MnB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxNDQwcHg7XHJcbn1cclxuaGVhZGVyIGltZ3tcclxuICAgIHBhZGRpbmc6IDMycHggMCAzMHB4IDQ0cHg7IFxyXG59XHJcblxyXG4vKj09PT09PT1JbnRybz09PT09PT09PT0qL1xyXG4uc3RlcC1saW5le1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiNFMEUwRTA7XHJcbiAgICB3aWR0aDogMTQ0MHB4O1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4jaW50cm97XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDE0NDBweDtcclxufVxyXG4jaW50cm8gLmNvbnRlbnQtbGVmdHtcclxuICAgIG1hcmdpbi10b3A6IDExOXB4O1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIHBhZGRpbmctbGVmdDogMTcwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNjJweDtcclxufVxyXG4jaW50cm8gLmNvbnRlbnQtbGVmdCAudGl0bGUgaDR7XHJcbiAgICB3aWR0aDogMjk2cHg7XHJcbiAgICBoZWlnaHQ6IDM5cHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI2cHg7XHJcbn1cclxuI2ludHJvIC5jb250ZW50LWxlZnQgLnRpdGxlIHB7XHJcbiAgICB3aWR0aDogNTA0cHg7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjZweDtcclxufVxyXG4jaW50cm8gLmNvbnRlbnQtbGVmdCB1bHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuI2ludHJvIC5jb250ZW50LWxlZnQgdWwgbGl7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbiNpbnRybyAuY29udGVudC1sZWZ0IHVsIGxpIHNwYW57XHJcbiAgICBjb2xvcjogI0ZGOTEwMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIGxlZnQ6IDEzcHg7XHJcbn1cclxuI2ludHJvIC5jb250ZW50LWxlZnQgLml0ZW17XHJcbiAgICB3aWR0aDogNTY5cHg7XHJcbiAgICBoZWlnaHQ6IDYxcHg7XHJcbn1cclxuI2ludHJvIC5jb250ZW50LWxlZnQgLml0ZW0ge1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4jaW50cm8gLmNvbnRlbnQtbGVmdCAuaXRlbSBoNntcclxuICAgIGNvbG9yOiAjMDAxNTI3O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuI2ludHJvIC5jb250ZW50LWxlZnQgLml0ZW0gcHtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG59XHJcbiNpbnRybyAuY29udGVudC1sZWZ0IGltZ3tcclxuICAgIHdpZHRoOiAzOHB4O1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDVweDtcclxufVxyXG4jaW50cm8gLmNvbnRlbnQtbGVmdCBidXR0b257XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDQ1cHggMTZweCA0M3B4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGOTEwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQ0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzNHB4O1xyXG4gICAgaGVpZ2h0OiA1NHB4O1xyXG4gICAgd2lkdGg6IDI2NnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0ZGOTEwMDtcclxuICAgIG91dGxpbmU6IDA7XHJcbn1cclxuI2ludHJvIC5jb250ZW50LWxlZnQgYnV0dG9uIHNwYW57XHJcbiAgICB3aWR0aDogMTc4cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG4jaW50cm8gLmltYWdlLXJpZ2h0IGltZ3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDU0NnB4O1xyXG4gICAgdG9wOiA3MXB4O1xyXG4gICAgei1pbmRleDogMDtcclxuICAgIHdpZHRoOiA5MDZweDtcclxuICAgIGhlaWdodDogNzMycHg7XHJcbn1cclxuXHJcbi8qPT09PT09PUZvb3Rlcj09PT09PT09PT0qL1xyXG5cclxuLyogZm9vdGVyICovXHJcblxyXG5mb290ZXJ7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIHBhZGRpbmctYm90dG9tOiAzNHB4O1xyXG4gICAgd2lkdGg6IDE0NDBweDtcclxufVxyXG4uY29udGVudC1mb290ZXJ7XHJcbiAgICBtYXJnaW4tbGVmdDogNDRweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcblxyXG59XHJcbiNmb290ZXItbGVmdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuZm9vdGVyIC50ZXh0LWNvbnRlbnR7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxufVxyXG4jZm9vdGVyLWxlZnQgLmFwcGxpY2F0aW9uIGltZ3tcclxuICAgIG1hcmdpbi1sZWZ0OiAxMXB4O1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbn1cclxuI2Zvb3Rlci1yaWdodHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4jZm9vdGVyLXJpZ2h0IC50ZXh0LWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxufVxyXG4jZm9vdGVyLXJpZ2h0IC50ZXh0LWNvbnRlbnQgYXtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG59XHJcbiNmb290ZXItcmlnaHQgLmhlbHAgLnRleHQtY29udGVudHtcclxuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/setup-guide/intro/intro.component.html":
/*!********************************************************!*\
  !*** ./src/app/setup-guide/intro/intro.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!----------Header----------->\r\n<header>\r\n    <img src=\"assets/images/setup-guide/logo.png\" alt=\"\">\r\n</header> \r\n\r\n<!----------Intro----------->\r\n<div class=\"step-line\"></div>\r\n<div id=\"intro\">\r\n    <div class=\"content-left\">\r\n        <div class=\"title\">\r\n            <h4>Let’s get you started.</h4>\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac nisi varius, tincidunt nisl vel, pharetra leo.</p>\r\n        </div>\r\n        <div class=\"step\">\r\n            <ul>\r\n                <li>\r\n                    <img src=\"assets/images/setup-guide/eclip.png\" alt=\"\">\r\n                    <span>1</span>\r\n                    <div class=\"item\">\r\n                        <h6>Personal information</h6>\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> \r\n                    </div>   \r\n                </li>\r\n                <li>\r\n                    <img src=\"assets/images/setup-guide/eclip.png\" alt=\"\">\r\n                    <span>2</span>\r\n                    <div class=\"item\">\r\n                        <h6>Your desired outcome</h6>\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> \r\n                    </div>   \r\n                </li>\r\n                <li>\r\n                    <img src=\"assets/images/setup-guide/eclip.png\" alt=\"\">\r\n                    <span>3</span>\r\n                    <div class=\"item\">\r\n                        <h6>Link your bank account</h6>\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> \r\n                    </div>   \r\n                </li>\r\n            </ul>\r\n        </div>\r\n\r\n        <button (click)=\"Location()\">\r\n            <span>Begin setup process</span>\r\n        </button>\r\n    </div>\r\n\r\n    <div class=\"image-right\">\r\n        <img src=\"assets/images/setup-guide/image.png\" alt=\"\">\r\n    </div>\r\n</div>\r\n\r\n<!----------Footer----------->\r\n<footer>\r\n    <div class=\"content-footer\">\r\n      <div id=\"footer-left\">\r\n        <span class=\"text-content\">Download our mobile app</span>\r\n        <div class=\"application\">\r\n          <img [src]=\"imgApp\">\r\n          <img [src]=\"imgAndroid\">\r\n        </div>\r\n      </div>\r\n      <div id=\"footer-right\">\r\n        <div class=\"text-content\">\r\n          <a href=\"mailto: support@getsafehold.com\">support@getsafehold.com</a>\r\n        </div>\r\n        <div class=\"help\">\r\n          <img [src]=\"imgHelp\">\r\n          <span class=\"text-content\">Help & Support</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n\r\n"

/***/ }),

/***/ "./src/app/setup-guide/intro/intro.component.ts":
/*!******************************************************!*\
  !*** ./src/app/setup-guide/intro/intro.component.ts ***!
  \******************************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var IntroComponent = /** @class */ (function () {
    function IntroComponent(router) {
        this.router = router;
        //footer
        this.imgApp = "assets/images/apple.png";
        this.imgAndroid = "assets/images/android.png";
        this.imgHelp = "assets/images/Help.png";
    }
    IntroComponent.prototype.ngOnInit = function () {
    };
    IntroComponent.prototype.Location = function () {
        this.router.navigateByUrl('setup-guide/location');
    };
    IntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! ./intro.component.html */ "./src/app/setup-guide/intro/intro.component.html"),
            styles: [__webpack_require__(/*! ./intro.component.css */ "./src/app/setup-guide/intro/intro.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/setup-guide/location/location.component.css":
/*!*************************************************************!*\
  !*** ./src/app/setup-guide/location/location.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header{\r\n    display: flex;\r\n}\r\nheader img{\r\n    margin: 32px 0 29px 44px;\r\n}\r\nheader h5{\r\n    width: 141px;\r\n    height: 35px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 34px;\r\n    font-size: 22px;\r\n    text-align: center;\r\n    color: #001527; \r\n    margin: 33px 0 22px 578px;\r\n    white-space: nowrap;\r\n}\r\nheader a.save{\r\n    margin: 36px 55px 34px 490px;\r\n    width: 104px;\r\n    height: 22px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    text-align: right;\r\n    color: #757575;\r\n    white-space: nowrap;\r\n}\r\n.step-line{\r\n    height: 5px;\r\n    background:#E0E0E0;\r\n    width: 1440px;\r\n}\r\n#location{\r\n    font-family: Lato;\r\n    width: 1440px;\r\n}\r\n#location h4{\r\n    width: 124px;\r\n    height: 39px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 32px;\r\n    color: #001527;\r\n    margin: auto;\r\n    margin-top: 186px;\r\n    margin-bottom: 29px;\r\n}\r\n#location p.title{\r\n    width: 432px;\r\n    height: 74px;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 34px;\r\n    font-size: 22px;\r\n    text-align: center;\r\n    color: #757575;\r\n    margin: 0 504px 21px 504px;\r\n}\r\n#location input{\r\n    border: 2px solid #E0E0E0;\r\n    box-sizing: border-box;\r\n    border-radius: 12px;\r\n    padding: 18px 32.5px 20px 32.5px;\r\n    width: 430px;\r\n    margin: 0 505px 63px 505px;\r\n    height: 62px;\r\n}\r\n#location input:focus{\r\n    border: 2px solid #FF9100;\r\n    outline: none;\r\n}\r\n#location .enter-continue{\r\n    display: flex;\r\n    margin: 0 637px 283px 642px;\r\n}\r\n#location .enter-continue p.continue{\r\n    width: 75px;\r\n    height: 22px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    color: #333;\r\n    margin-bottom: 0;\r\n}\r\n#location .enter-continue p.enter{\r\n    width: 92px;\r\n    height: 22px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    color: #BDBDBD;\r\n}\r\n#location .enter-continue button.icon-right{\r\n    width: 48px;\r\n    height: 48px;\r\n    background: #FF9100;\r\n    border-radius: 50%;\r\n    border: 1px solid #FF9100;\r\n    margin-left: 21px;\r\n    cursor: pointer;\r\n    outline: 0;\r\n}\r\n#location .enter-continue button.icon-right{\r\n    outline: none;\r\n}\r\n#location .enter-continue button.icon-right i{\r\n    width: 8px;\r\n    height: 14px;\r\n    color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dXAtZ3VpZGUvbG9jYXRpb24vbG9jYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7Q0FDakI7QUFDRDtJQUNJLHlCQUF5QjtDQUM1QjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztDQUNqQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDJCQUEyQjtDQUM5QjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGNBQWM7SUFDZCw0QkFBNEI7Q0FDL0I7QUFDRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksY0FBYztDQUNqQjtBQUNEO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9zZXR1cC1ndWlkZS9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5oZWFkZXIgaW1ne1xyXG4gICAgbWFyZ2luOiAzMnB4IDAgMjlweCA0NHB4O1xyXG59XHJcbmhlYWRlciBoNXtcclxuICAgIHdpZHRoOiAxNDFweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7IFxyXG4gICAgbWFyZ2luOiAzM3B4IDAgMjJweCA1NzhweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuaGVhZGVyIGEuc2F2ZXtcclxuICAgIG1hcmdpbjogMzZweCA1NXB4IDM0cHggNDkwcHg7XHJcbiAgICB3aWR0aDogMTA0cHg7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLnN0ZXAtbGluZXtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYmFja2dyb3VuZDojRTBFMEUwO1xyXG4gICAgd2lkdGg6IDE0NDBweDtcclxufVxyXG4jbG9jYXRpb257XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIHdpZHRoOiAxNDQwcHg7XHJcbn1cclxuI2xvY2F0aW9uIGg0e1xyXG4gICAgd2lkdGg6IDEyNHB4O1xyXG4gICAgaGVpZ2h0OiAzOXB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxODZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI5cHg7XHJcbn1cclxuI2xvY2F0aW9uIHAudGl0bGV7XHJcbiAgICB3aWR0aDogNDMycHg7XHJcbiAgICBoZWlnaHQ6IDc0cHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIG1hcmdpbjogMCA1MDRweCAyMXB4IDUwNHB4O1xyXG59XHJcbiNsb2NhdGlvbiBpbnB1dHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFMEUwRTA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIHBhZGRpbmc6IDE4cHggMzIuNXB4IDIwcHggMzIuNXB4O1xyXG4gICAgd2lkdGg6IDQzMHB4O1xyXG4gICAgbWFyZ2luOiAwIDUwNXB4IDYzcHggNTA1cHg7XHJcbiAgICBoZWlnaHQ6IDYycHg7XHJcbn1cclxuI2xvY2F0aW9uIGlucHV0OmZvY3Vze1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0ZGOTEwMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuI2xvY2F0aW9uIC5lbnRlci1jb250aW51ZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDAgNjM3cHggMjgzcHggNjQycHg7XHJcbn1cclxuI2xvY2F0aW9uIC5lbnRlci1jb250aW51ZSBwLmNvbnRpbnVle1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4jbG9jYXRpb24gLmVudGVyLWNvbnRpbnVlIHAuZW50ZXJ7XHJcbiAgICB3aWR0aDogOTJweDtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICNCREJEQkQ7XHJcbn1cclxuI2xvY2F0aW9uIC5lbnRlci1jb250aW51ZSBidXR0b24uaWNvbi1yaWdodHtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGOTEwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRjkxMDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMjFweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6IDA7XHJcbn1cclxuI2xvY2F0aW9uIC5lbnRlci1jb250aW51ZSBidXR0b24uaWNvbi1yaWdodHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuI2xvY2F0aW9uIC5lbnRlci1jb250aW51ZSBidXR0b24uaWNvbi1yaWdodCBpe1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/setup-guide/location/location.component.html":
/*!**************************************************************!*\
  !*** ./src/app/setup-guide/location/location.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!----------Header----------->\r\n<header>\r\n    <a href=\"\">\r\n        <img src=\"assets/images/setup-guide/logo.png\" alt=\"\">\r\n    </a> \r\n    <h5>Account Setup</h5>\r\n    <a href=\"\" class=\"save\">Save and Exit</a>\r\n</header>\r\n\r\n<!----------Content----------->\r\n<div class=\"step-line\"></div>\r\n<div id=\"location\">\r\n    <h4>Location</h4>\r\n    <p class=\"title\">Firstly, we need to know where you’re based. This will help us calculate your local taxes.</p>\r\n    <input type=\"text\" placeholder=\"Zip Code\" #zipCode1>\r\n    <div class=\"enter-continue\">\r\n        <div class=\"text-left\">\r\n            <p class=\"continue\">Continue</p>\r\n            <p class=\"enter\">Press Enter</p>\r\n        </div>\r\n        <a (click)=\"zipCode()\">\r\n            <button class=\"icon-right\">\r\n                <i class=\"fas fa-chevron-right\"></i>\r\n            </button>\r\n        </a>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/setup-guide/location/location.component.ts":
/*!************************************************************!*\
  !*** ./src/app/setup-guide/location/location.component.ts ***!
  \************************************************************/
/*! exports provided: LocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return LocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LocationComponent = /** @class */ (function () {
    function LocationComponent(router) {
        this.router = router;
    }
    LocationComponent.prototype.ngOnInit = function () {
    };
    // zipCode(zipCode) {
    //   const regZip = new RegExp('/(^\d{5}$)|(^\d{5}-\d{4}$)/');
    //   if (!regZip.test(zipCode)) {
    //     this.router.navigateByUrl('setup-guide/what-you-do')
    //   } else {
    //     console.log('111')
    //     return false;
    //   }
    // }
    LocationComponent.prototype.zipCode = function () {
        this.router.navigateByUrl('setup-guide/what-you-do');
    };
    LocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location',
            template: __webpack_require__(/*! ./location.component.html */ "./src/app/setup-guide/location/location.component.html"),
            styles: [__webpack_require__(/*! ./location.component.css */ "./src/app/setup-guide/location/location.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LocationComponent);
    return LocationComponent;
}());



/***/ }),

/***/ "./src/app/setup-guide/log-in/log-in.component.css":
/*!*********************************************************!*\
  !*** ./src/app/setup-guide/log-in/log-in.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*========Header==========*/\r\nheader{\r\n    display: flex;\r\n}\r\nheader img{\r\n    margin: 32px 0 29px 44px;\r\n}\r\nheader h5{\r\n    width: 141px;\r\n    height: 35px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 34px;\r\n    font-size: 22px;\r\n    text-align: center;\r\n    color: #001527; \r\n    margin: 33px 0 22px 578px;\r\n    white-space: nowrap;\r\n}\r\nheader a.save{\r\n    margin: 36px 55px 34px 490px;\r\n    width: 104px;\r\n    height: 22px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    text-align: right;\r\n    color: #757575;\r\n    white-space: nowrap;\r\n}\r\n/*==========Content========*/\r\n.step-line {\r\n    height: 5px;\r\n    background: #E0E0E0;\r\n    position: relative;\r\n    width: 1440px;\r\n}\r\n.step-line-2{\r\n    height: 5px;\r\n    position: absolute;\r\n    -webkit-animation-name: line;  \r\n    -webkit-animation-duration: 5s;   \r\n    -webkit-animation-fill-mode: forwards; \r\n    animation-name: line;\r\n    animation-duration: 5s;  \r\n    animation-fill-mode: forwards;\r\n    background-color: orange;\r\n}\r\n@-webkit-keyframes line {\r\n    from {width: 1236px;}\r\n    to {width: 1260px; }\r\n}\r\n@keyframes line {\r\n    from {width: 1236px;}\r\n    to {width: 1260px; }\r\n}\r\n#log-in{\r\n    background-color: #C0343D;\r\n    width: 1440px;\r\n    height: 804px;\r\n}\r\n#log-in .group-input{\r\n    width: 375px;\r\n    margin: 0 579px;\r\n}\r\n#log-in .group-input h4{\r\n    padding-top: 211px;\r\n    text-transform: uppercase;\r\n    color: #F8D447;\r\n    font-size: 41px;\r\n    font-family: Clarendon ;\r\n    width: 282px ;\r\n    font-weight: bold;\r\n    text-align: center;\r\n}\r\n#log-in .group-input input{\r\n    width: 282px;\r\n    height: 56px;\r\n    background: #FFFFFF;\r\n    border-radius: 4px;\r\n    margin-top: 10px;\r\n    padding: 19px 32px;\r\n    border: none;\r\n}\r\n#log-in .group-input input:focus{\r\n    border: 2px solid #FF9100;\r\n    outline: none;\r\n}\r\n#log-in .group-input i.fa-lock{\r\n    position: absolute;\r\n    left: 833px;\r\n    top: 441px;\r\n    color: #AAAAAA;\r\n}\r\n#log-in .group-input  i.fa-exclamation-circle {\r\n    position: absolute;\r\n    color: #aaaaaa;\r\n    top: 508px;\r\n    left: 835px;\r\n    font-size: 18px;\r\n}\r\n#log-in button.icon-left {\r\n    top: 426px;\r\n    left: 132px;\r\n    position: absolute;\r\n    width: 48px;\r\n    height: 48px;\r\n    background: #fff;\r\n    border: none;\r\n    border-radius: 50%;\r\n    color: #C0343D;\r\n    cursor: pointer;\r\n}\r\n#log-in button.icon-left:focus {\r\n    outline: none;\r\n}\r\n#log-in button.icon-left i{\r\n    width: 8px;\r\n    height: 14px;\r\n}\r\n#log-in button.submit{\r\n    background: #FFFFFF;\r\n    border-radius: 4px;\r\n    color: #C0343D;\r\n    width: 282px;\r\n    height: 56px;\r\n    margin: 10px 579px 283px 579px;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n#log-in button.submit:focus{\r\n    outline: none;\r\n}\r\n#log-in button.submit span{\r\n    width: 64px;\r\n    height: 24px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    color: #C0343D;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dXAtZ3VpZGUvbG9nLWluL2xvZy1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRCQUE0QjtBQUM1QjtJQUNJLGNBQWM7Q0FDakI7QUFDRDtJQUNJLHlCQUF5QjtDQUM1QjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtDQUN2QjtBQUVELDZCQUE2QjtBQUM3QjtJQUNJLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGNBQWM7Q0FDakI7QUFDRDtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLCtCQUErQjtJQUMvQixzQ0FBc0M7SUFDdEMscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2Qiw4QkFBOEI7SUFDOUIseUJBQXlCO0NBQzVCO0FBQ0Q7SUFDSSxNQUFNLGNBQWMsQ0FBQztJQUNyQixJQUFJLGNBQWMsRUFBRTtDQUN2QjtBQUhEO0lBQ0ksTUFBTSxjQUFjLENBQUM7SUFDckIsSUFBSSxjQUFjLEVBQUU7Q0FDdkI7QUFDRDtJQUNJLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsY0FBYztDQUNqQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLGNBQWM7Q0FDakI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksY0FBYztDQUNqQjtBQUNEO0lBQ0ksV0FBVztJQUNYLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGFBQWE7SUFDYixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLGFBQWE7SUFDYixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGNBQWM7Q0FDakI7QUFDRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTs7Q0FFbEIiLCJmaWxlIjoic3JjL2FwcC9zZXR1cC1ndWlkZS9sb2ctaW4vbG9nLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKj09PT09PT09SGVhZGVyPT09PT09PT09PSovXHJcbmhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuaGVhZGVyIGltZ3tcclxuICAgIG1hcmdpbjogMzJweCAwIDI5cHggNDRweDtcclxufVxyXG5oZWFkZXIgaDV7XHJcbiAgICB3aWR0aDogMTQxcHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAxNTI3OyBcclxuICAgIG1hcmdpbjogMzNweCAwIDIycHggNTc4cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbmhlYWRlciBhLnNhdmV7XHJcbiAgICBtYXJnaW46IDM2cHggNTVweCAzNHB4IDQ5MHB4O1xyXG4gICAgd2lkdGg6IDEwNHB4O1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4vKj09PT09PT09PT1Db250ZW50PT09PT09PT0qL1xyXG4uc3RlcC1saW5lIHtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI0UwRTBFMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxNDQwcHg7XHJcbn1cclxuLnN0ZXAtbGluZS0ye1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBsaW5lOyAgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNXM7ICAgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyBcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBsaW5lO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1czsgIFxyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuQGtleWZyYW1lcyBsaW5lIHtcclxuICAgIGZyb20ge3dpZHRoOiAxMjM2cHg7fVxyXG4gICAgdG8ge3dpZHRoOiAxMjYwcHg7IH1cclxufVxyXG4jbG9nLWlue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0MwMzQzRDtcclxuICAgIHdpZHRoOiAxNDQwcHg7XHJcbiAgICBoZWlnaHQ6IDgwNHB4O1xyXG59XHJcbiNsb2ctaW4gLmdyb3VwLWlucHV0e1xyXG4gICAgd2lkdGg6IDM3NXB4O1xyXG4gICAgbWFyZ2luOiAwIDU3OXB4O1xyXG59XHJcbiNsb2ctaW4gLmdyb3VwLWlucHV0IGg0e1xyXG4gICAgcGFkZGluZy10b3A6IDIxMXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiAjRjhENDQ3O1xyXG4gICAgZm9udC1zaXplOiA0MXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IENsYXJlbmRvbiA7XHJcbiAgICB3aWR0aDogMjgycHggO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuI2xvZy1pbiAuZ3JvdXAtaW5wdXQgaW5wdXR7XHJcbiAgICB3aWR0aDogMjgycHg7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDE5cHggMzJweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4jbG9nLWluIC5ncm91cC1pbnB1dCBpbnB1dDpmb2N1c3tcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRjkxMDA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbiNsb2ctaW4gLmdyb3VwLWlucHV0IGkuZmEtbG9ja3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDgzM3B4O1xyXG4gICAgdG9wOiA0NDFweDtcclxuICAgIGNvbG9yOiAjQUFBQUFBO1xyXG59XHJcbiNsb2ctaW4gLmdyb3VwLWlucHV0ICBpLmZhLWV4Y2xhbWF0aW9uLWNpcmNsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb2xvcjogI2FhYWFhYTtcclxuICAgIHRvcDogNTA4cHg7XHJcbiAgICBsZWZ0OiA4MzVweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4jbG9nLWluIGJ1dHRvbi5pY29uLWxlZnQge1xyXG4gICAgdG9wOiA0MjZweDtcclxuICAgIGxlZnQ6IDEzMnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY29sb3I6ICNDMDM0M0Q7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI2xvZy1pbiBidXR0b24uaWNvbi1sZWZ0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuI2xvZy1pbiBidXR0b24uaWNvbi1sZWZ0IGl7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG59XHJcbiNsb2ctaW4gYnV0dG9uLnN1Ym1pdHtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjb2xvcjogI0MwMzQzRDtcclxuICAgIHdpZHRoOiAyODJweDtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIG1hcmdpbjogMTBweCA1NzlweCAyODNweCA1NzlweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jbG9nLWluIGJ1dHRvbi5zdWJtaXQ6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbiNsb2ctaW4gYnV0dG9uLnN1Ym1pdCBzcGFue1xyXG4gICAgd2lkdGg6IDY0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjQzAzNDNEO1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/setup-guide/log-in/log-in.component.html":
/*!**********************************************************!*\
  !*** ./src/app/setup-guide/log-in/log-in.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!----------Header----------->\r\n<header>\r\n    <a href=\"\">\r\n        <img src=\"assets/images/setup-guide/logo.png\" alt=\"\">\r\n    </a> \r\n    <h5>Account Setup</h5>\r\n    <a href=\"\" class=\"save\">Save and Exit</a>\r\n</header>\r\n  \r\n<!--------Content-------->\r\n<div class=\"step-line\">\r\n    <div class=\"step-line-2\"></div>\r\n</div>\r\n<div id=\"log-in\">\r\n    <div class=\"group-input\">\r\n        <h4>Wells fargo</h4>\r\n        <button class=\"icon-left\" (click)=\"Manual()\">\r\n            <i class=\"fas fa-chevron-left\"></i>\r\n        </button>\r\n        <input type=\"text\" placeholder=\"Username\"><i class=\"fas fa-lock\"></i>\r\n        <br>\r\n        <input type=\"text\" placeholder=\"Password\"><i class=\"fas fa-exclamation-circle\"></i>\r\n    </div>\r\n    <button class=\"submit\" (click)=\"Complete()\"><span>Submit</span></button>\r\n    \r\n</div>"

/***/ }),

/***/ "./src/app/setup-guide/log-in/log-in.component.ts":
/*!********************************************************!*\
  !*** ./src/app/setup-guide/log-in/log-in.component.ts ***!
  \********************************************************/
/*! exports provided: LogInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponent", function() { return LogInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LogInComponent = /** @class */ (function () {
    function LogInComponent(router) {
        this.router = router;
    }
    LogInComponent.prototype.ngOnInit = function () {
    };
    LogInComponent.prototype.Manual = function () {
        this.router.navigateByUrl('setup-guide/manual');
    };
    LogInComponent.prototype.Complete = function () {
        this.router.navigateByUrl('setup-guide/setup-complete');
    };
    LogInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-log-in',
            template: __webpack_require__(/*! ./log-in.component.html */ "./src/app/setup-guide/log-in/log-in.component.html"),
            styles: [__webpack_require__(/*! ./log-in.component.css */ "./src/app/setup-guide/log-in/log-in.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LogInComponent);
    return LogInComponent;
}());



/***/ }),

/***/ "./src/app/setup-guide/manual/manual.component.css":
/*!*********************************************************!*\
  !*** ./src/app/setup-guide/manual/manual.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*========Header==========*/\r\nheader{\r\n    display: flex;\r\n}\r\nheader img{\r\n    margin: 32px 0 29px 44px;\r\n}\r\nheader h5{\r\n    width: 141px;\r\n    height: 35px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 34px;\r\n    font-size: 22px;\r\n    text-align: center;\r\n    color: #001527; \r\n    margin: 33px 0 22px 578px;\r\n    white-space: nowrap;\r\n}\r\nheader a.save{\r\n    margin: 36px 55px 34px 490px;\r\n    width: 104px;\r\n    height: 22px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    text-align: right;\r\n    color: #757575;\r\n    white-space: nowrap;\r\n}\r\n/*==========Content========*/\r\n.step-line {\r\n    height: 5px;\r\n    background: #E0E0E0;\r\n    position: relative;\r\n    width: 1440px;\r\n}\r\n.step-line-2{\r\n    height: 5px;\r\n    position: absolute;\r\n    -webkit-animation-name: line;  \r\n    -webkit-animation-duration: 5s;   \r\n    -webkit-animation-fill-mode: forwards; \r\n    animation-name: line;\r\n    animation-duration: 5s;  \r\n    animation-fill-mode: forwards;\r\n    background-color: orange;\r\n}\r\n@-webkit-keyframes line {\r\n    from {width: 900px;}\r\n    to {width: 1236px; }\r\n}\r\n@keyframes line {\r\n    from {width: 900px;}\r\n    to {width: 1236px; }\r\n}\r\n#manual{\r\n    margin-top: 152px;\r\n    font-family: Lato;\r\n    width: 1440px;\r\n}\r\n#manual .title h4{\r\n    width: 548px;\r\n    height: 39px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 32px;\r\n    text-align: center;\r\n    color: #001527;\r\n    margin: 0 446px;\r\n}\r\n#manual .title p{\r\n    width: 577px;\r\n    height: 74px;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    text-align: center;\r\n    color: #757575;\r\n    margin: 29px 431px 11px 432px;\r\n}\r\n#manual button.icon-left {\r\n    top: 426px;\r\n    left: 132px;\r\n    position: absolute;\r\n    width: 48px;\r\n    height: 48px;\r\n    background: #E0E0E0;\r\n    border: none;\r\n    border-radius: 50%;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n#manual button.icon-left:focus {\r\n    outline: none;\r\n}\r\n#manual button.icon-left i{\r\n    width: 8px;\r\n    height: 14px;\r\n}\r\n#manual .group-input{\r\n    margin: 0 564px;\r\n}\r\n#manual .group-input button:focus{\r\n    outline: none;\r\n}\r\n#manual .group-input button.amount {\r\n    border: 2px solid #E0E0E0;\r\n    border-right:none; \r\n    border-top-left-radius: 8px;\r\n    border-bottom-left-radius: 8px;\r\n    width: 155px;\r\n    height: 62px;\r\n}\r\n#manual .group-input button.amount span{\r\n    font-style: normal;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    padding: 18px 39px 16px 36px;\r\n    width: 80px ;\r\n    height: 28px;\r\n    cursor: pointer;\r\n}\r\n#manual .group-input button.percentage{\r\n    cursor: pointer;\r\n    background: #FFFFFF;\r\n    border-top-right-radius: 8px;\r\n    border-bottom-right-radius: 8px;\r\n    width: 155px;\r\n    height: 62px;\r\n    border: none;\r\n    border: 2px solid #E0E0E0;\r\n    box-sizing: border-box;\r\n    border-left: none;\r\n}\r\n#manual .group-input button.percentage span{\r\n    font-style: normal;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    text-align: center;    \r\n    padding: 18px 28px 16px 27px;\r\n    width: 101px ;\r\n    height: 28px;  \r\n}\r\n#manual .group-input button.active{\r\n    background: #001527;\r\n    color: #fff;\r\n    font-weight: bold;\r\n}\r\n#manual .group-input button.none{\r\n    color: #757575;\r\n    background: #fff;\r\n    font-weight: normal;\r\n}\r\n#manual .group-input input{\r\n    border: 2px solid #E0E0E0;\r\n    box-sizing: border-box;\r\n    border-radius: 12px;\r\n    width: 312px;\r\n    height: 62px;\r\n    padding: 18px 23px 20px 23px;\r\n    margin-top:18px;  \r\n}\r\n#manual .group-input input:focus{\r\n    border: 2px solid #FF9100;\r\n    outline: none;\r\n}\r\n#manual .enter-continue{\r\n    display: flex;\r\n    margin: 63px 637px 283px 642px ;\r\n}\r\n#manual .enter-continue p.continue{\r\n    width: 75px;\r\n    height: 22px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    color: #333;\r\n    margin-bottom: 0;\r\n}\r\n#manual .enter-continue p.enter{\r\n    width: 92px;\r\n    height: 22px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    color: #BDBDBD;\r\n}\r\n#manual .enter-continue button.icon-right{\r\n    width: 48px;\r\n    height: 48px;\r\n    background: #FF9100;\r\n    border-radius: 50%;\r\n    border: 1px solid #FF9100;\r\n    margin-left: 21px;\r\n    cursor: pointer;\r\n    color: #fff;\r\n}\r\n#manual .enter-continue button.icon-right:focus {\r\n    outline: none;\r\n}\r\n#manual .enter-continue button.icon-right i{\r\n    width: 8px;\r\n    height: 14px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dXAtZ3VpZGUvbWFudWFsL21hbnVhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRCQUE0QjtBQUM1QjtJQUNJLGNBQWM7Q0FDakI7QUFDRDtJQUNJLHlCQUF5QjtDQUM1QjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtDQUN2QjtBQUVELDZCQUE2QjtBQUM3QjtJQUNJLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGNBQWM7Q0FDakI7QUFDRDtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLCtCQUErQjtJQUMvQixzQ0FBc0M7SUFDdEMscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2Qiw4QkFBOEI7SUFDOUIseUJBQXlCO0NBQzVCO0FBQ0Q7SUFDSSxNQUFNLGFBQWEsQ0FBQztJQUNwQixJQUFJLGNBQWMsRUFBRTtDQUN2QjtBQUhEO0lBQ0ksTUFBTSxhQUFhLENBQUM7SUFDcEIsSUFBSSxjQUFjLEVBQUU7Q0FDdkI7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsY0FBYztDQUNqQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsOEJBQThCO0NBQ2pDO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGNBQWM7Q0FDakI7QUFDRDtJQUNJLFdBQVc7SUFDWCxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGNBQWM7Q0FDakI7QUFDRDtJQUNJLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQixhQUFhO0lBQ2IsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQiw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksMEJBQTBCO0lBQzFCLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGNBQWM7SUFDZCxnQ0FBZ0M7Q0FDbkM7QUFDRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksY0FBYztDQUNqQjtBQUNEO0lBQ0ksV0FBVztJQUNYLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9zZXR1cC1ndWlkZS9tYW51YWwvbWFudWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKj09PT09PT09SGVhZGVyPT09PT09PT09PSovXHJcbmhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuaGVhZGVyIGltZ3tcclxuICAgIG1hcmdpbjogMzJweCAwIDI5cHggNDRweDtcclxufVxyXG5oZWFkZXIgaDV7XHJcbiAgICB3aWR0aDogMTQxcHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAxNTI3OyBcclxuICAgIG1hcmdpbjogMzNweCAwIDIycHggNTc4cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbmhlYWRlciBhLnNhdmV7XHJcbiAgICBtYXJnaW46IDM2cHggNTVweCAzNHB4IDQ5MHB4O1xyXG4gICAgd2lkdGg6IDEwNHB4O1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4vKj09PT09PT09PT1Db250ZW50PT09PT09PT0qL1xyXG4uc3RlcC1saW5lIHtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI0UwRTBFMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxNDQwcHg7XHJcbn1cclxuLnN0ZXAtbGluZS0ye1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBsaW5lOyAgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNXM7ICAgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyBcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBsaW5lO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1czsgIFxyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuQGtleWZyYW1lcyBsaW5lIHtcclxuICAgIGZyb20ge3dpZHRoOiA5MDBweDt9XHJcbiAgICB0byB7d2lkdGg6IDEyMzZweDsgfVxyXG59XHJcblxyXG4jbWFudWFse1xyXG4gICAgbWFyZ2luLXRvcDogMTUycHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIHdpZHRoOiAxNDQwcHg7XHJcbn1cclxuI21hbnVhbCAudGl0bGUgaDR7XHJcbiAgICB3aWR0aDogNTQ4cHg7XHJcbiAgICBoZWlnaHQ6IDM5cHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzAwMTUyNztcclxuICAgIG1hcmdpbjogMCA0NDZweDtcclxufVxyXG4jbWFudWFsIC50aXRsZSBwe1xyXG4gICAgd2lkdGg6IDU3N3B4O1xyXG4gICAgaGVpZ2h0OiA3NHB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzN3B4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICBtYXJnaW46IDI5cHggNDMxcHggMTFweCA0MzJweDtcclxufVxyXG4jbWFudWFsIGJ1dHRvbi5pY29uLWxlZnQge1xyXG4gICAgdG9wOiA0MjZweDtcclxuICAgIGxlZnQ6IDEzMnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTBFMEUwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI21hbnVhbCBidXR0b24uaWNvbi1sZWZ0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuI21hbnVhbCBidXR0b24uaWNvbi1sZWZ0IGl7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG59XHJcbiNtYW51YWwgLmdyb3VwLWlucHV0e1xyXG4gICAgbWFyZ2luOiAwIDU2NHB4O1xyXG59XHJcbiNtYW51YWwgLmdyb3VwLWlucHV0IGJ1dHRvbjpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuI21hbnVhbCAuZ3JvdXAtaW5wdXQgYnV0dG9uLmFtb3VudCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRTBFMEUwO1xyXG4gICAgYm9yZGVyLXJpZ2h0Om5vbmU7IFxyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xyXG4gICAgd2lkdGg6IDE1NXB4O1xyXG4gICAgaGVpZ2h0OiA2MnB4O1xyXG59XHJcbiNtYW51YWwgLmdyb3VwLWlucHV0IGJ1dHRvbi5hbW91bnQgc3BhbntcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxOHB4IDM5cHggMTZweCAzNnB4O1xyXG4gICAgd2lkdGg6IDgwcHggO1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiNtYW51YWwgLmdyb3VwLWlucHV0IGJ1dHRvbi5wZXJjZW50YWdle1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogOHB4O1xyXG4gICAgd2lkdGg6IDE1NXB4O1xyXG4gICAgaGVpZ2h0OiA2MnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0UwRTBFMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZTtcclxufVxyXG4jbWFudWFsIC5ncm91cC1pbnB1dCBidXR0b24ucGVyY2VudGFnZSBzcGFue1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXHJcbiAgICBwYWRkaW5nOiAxOHB4IDI4cHggMTZweCAyN3B4O1xyXG4gICAgd2lkdGg6IDEwMXB4IDtcclxuICAgIGhlaWdodDogMjhweDsgIFxyXG59XHJcbiNtYW51YWwgLmdyb3VwLWlucHV0IGJ1dHRvbi5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAxNTI3O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4jbWFudWFsIC5ncm91cC1pbnB1dCBidXR0b24ubm9uZXtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuI21hbnVhbCAuZ3JvdXAtaW5wdXQgaW5wdXR7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRTBFMEUwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICB3aWR0aDogMzEycHg7XHJcbiAgICBoZWlnaHQ6IDYycHg7XHJcbiAgICBwYWRkaW5nOiAxOHB4IDIzcHggMjBweCAyM3B4O1xyXG4gICAgbWFyZ2luLXRvcDoxOHB4OyAgXHJcbn1cclxuI21hbnVhbCAuZ3JvdXAtaW5wdXQgaW5wdXQ6Zm9jdXN7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRkY5MTAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4jbWFudWFsIC5lbnRlci1jb250aW51ZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDYzcHggNjM3cHggMjgzcHggNjQycHggO1xyXG59XHJcbiNtYW51YWwgLmVudGVyLWNvbnRpbnVlIHAuY29udGludWV7XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbiNtYW51YWwgLmVudGVyLWNvbnRpbnVlIHAuZW50ZXJ7XHJcbiAgICB3aWR0aDogOTJweDtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICNCREJEQkQ7XHJcbn1cclxuI21hbnVhbCAuZW50ZXItY29udGludWUgYnV0dG9uLmljb24tcmlnaHR7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRjkxMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRkY5MTAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIxcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4jbWFudWFsIC5lbnRlci1jb250aW51ZSBidXR0b24uaWNvbi1yaWdodDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbiNtYW51YWwgLmVudGVyLWNvbnRpbnVlIGJ1dHRvbi5pY29uLXJpZ2h0IGl7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/setup-guide/manual/manual.component.html":
/*!**********************************************************!*\
  !*** ./src/app/setup-guide/manual/manual.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!----------Header----------->\r\n<header>\r\n  <a href=\"\">\r\n      <img src=\"assets/images/setup-guide/logo.png\" alt=\"\">\r\n  </a> \r\n  <h5>Account Setup</h5>\r\n  <a href=\"\" class=\"save\">Save and Exit</a>\r\n</header>\r\n\r\n<!--------Content-------->\r\n<div class=\"step-line\">\r\n  <div class=\"step-line-2\"></div>\r\n</div>\r\n<div id=\"manual\">\r\n    <div class=\"title\">\r\n        <h4>How much would you like to withhold?</h4>\r\n        <button class=\"icon-left\" (click)=\"Integrate()\">\r\n            <i class=\"fas fa-chevron-left\"></i>\r\n        </button>\r\n        <p>Choose between an exact amount or a percentage of your income to withhold.</p>\r\n    </div>\r\n    <div class=\"group-input\">\r\n        <button class=\"amount\" (click)=\"clickEvent()\"  \r\n        [ngClass]=\"status ? 'active' : 'none'\" ><span>Amount</span></button>\r\n        <button class=\"percentage\" (click)=\"clickChange()\"\r\n        [ngClass]=\"display ? 'none' : 'active'\"><span>Percentage</span></button>\r\n        <br>\r\n        <input type=\"text\" placeholder=\"$\">\r\n    </div>\r\n    <div class=\"enter-continue\">\r\n        <div class=\"text-left\">\r\n            <p class=\"continue\">Continue</p>\r\n            <p class=\"enter\">Press Enter</p>\r\n        </div>\r\n        <button class=\"icon-right\" (click)=\"LogIn()\">\r\n            <i class=\"fas fa-chevron-right\"></i>\r\n        </button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/setup-guide/manual/manual.component.ts":
/*!********************************************************!*\
  !*** ./src/app/setup-guide/manual/manual.component.ts ***!
  \********************************************************/
/*! exports provided: ManualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualComponent", function() { return ManualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ManualComponent = /** @class */ (function () {
    function ManualComponent(router) {
        this.router = router;
        //Group input
        this.status = true;
        this.display = true;
    }
    ManualComponent.prototype.ngOnInit = function () {
    };
    //Router
    ManualComponent.prototype.Integrate = function () {
        this.router.navigateByUrl('setup-guide/integrate-bank');
    };
    ManualComponent.prototype.LogIn = function () {
        this.router.navigateByUrl('setup-guide/log-in');
    };
    ManualComponent.prototype.clickEvent = function () {
        this.display = true;
        this.status = true;
    };
    ManualComponent.prototype.clickChange = function () {
        this.status = false;
        this.display = false;
    };
    ManualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manual',
            template: __webpack_require__(/*! ./manual.component.html */ "./src/app/setup-guide/manual/manual.component.html"),
            styles: [__webpack_require__(/*! ./manual.component.css */ "./src/app/setup-guide/manual/manual.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ManualComponent);
    return ManualComponent;
}());



/***/ }),

/***/ "./src/app/setup-guide/marial-status/child/child.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/setup-guide/marial-status/child/child.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    text-align: center;\r\n    color: #001527;\r\n    width: 28.95px;\r\n    height: 28px;\r\n    margin: 0 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dXAtZ3VpZGUvbWFyaWFsLXN0YXR1cy9jaGlsZC9jaGlsZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGFBQWE7SUFDYixlQUFlO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2V0dXAtZ3VpZGUvbWFyaWFsLXN0YXR1cy9jaGlsZC9jaGlsZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMzdweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAxNTI3O1xyXG4gICAgd2lkdGg6IDI4Ljk1cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/setup-guide/marial-status/child/child.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/setup-guide/marial-status/child/child.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  {{value}}\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/setup-guide/marial-status/child/child.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/setup-guide/marial-status/child/child.component.ts ***!
  \********************************************************************/
/*! exports provided: ChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildComponent", function() { return ChildComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChildComponent = /** @class */ (function () {
    function ChildComponent() {
        this.value = 0;
    }
    ChildComponent.prototype.ngOnInit = function () {
    };
    ChildComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-child',
            template: __webpack_require__(/*! ./child.component.html */ "./src/app/setup-guide/marial-status/child/child.component.html"),
            styles: [__webpack_require__(/*! ./child.component.css */ "./src/app/setup-guide/marial-status/child/child.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChildComponent);
    return ChildComponent;
}());



/***/ }),

/***/ "./src/app/setup-guide/marial-status/marial-status.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/setup-guide/marial-status/marial-status.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*========Header==========*/\r\nheader{\r\n    display: flex;\r\n}\r\nheader img{\r\n    margin: 32px 0 29px 44px;\r\n}\r\nheader h5{\r\n    width: 141px;\r\n    height: 35px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 34px;\r\n    font-size: 22px;\r\n    text-align: center;\r\n    color: #001527; \r\n    margin: 33px 0 22px 578px;\r\n    white-space: nowrap;\r\n}\r\nheader a.save{\r\n    margin: 36px 55px 34px 490px;\r\n    width: 104px;\r\n    height: 22px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    text-align: right;\r\n    color: #757575;\r\n    white-space: nowrap;\r\n}\r\n/*==========Content========*/\r\n.step-line {\r\n    height: 5px;\r\n    background: #E0E0E0;\r\n    position: relative;\r\n    width: 1440px;\r\n}\r\n.step-line-2{\r\n    height: 5px;\r\n    position: absolute;\r\n    -webkit-animation-name: line;  \r\n    -webkit-animation-duration: 5s;   \r\n    -webkit-animation-fill-mode: forwards; \r\n    animation-name: line;\r\n    animation-duration: 5s;  \r\n    animation-fill-mode: forwards;\r\n    background-color: orange;\r\n}\r\n@-webkit-keyframes line {\r\n    0% {width: 540px;}\r\n    100% {width: 720px; }\r\n}\r\n@keyframes line {\r\n    0% {width: 540px;}\r\n    100% {width: 720px; }\r\n}\r\n#marial-status{\r\n    font-family: Lato;\r\n    margin-top: 146px;\r\n    width: 1440px;\r\n}\r\n#marial-status .title h4{\r\n    width: 611px;\r\n    height: 39px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 32px;\r\n    text-align: center;\r\n    color: #001527;\r\n    margin: 0 414px 29px 415px;\r\n}\r\n#marial-status .title p{\r\n    width: 554px;\r\n    height: 74px;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    text-align: center;\r\n    color: #757575;\r\n    margin: 0 443px 21px 443px;\r\n}\r\n#marial-status .radio-status p{\r\n    width: 510px;\r\n    height: 37px;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    text-align: center;\r\n    color: #757575;\r\n    margin: 0 465px;\r\n}\r\n#marial-status button.icon-left {\r\n    top: 426px;\r\n    left: 132px;\r\n    position: absolute;\r\n    width: 48px;\r\n    height: 48px;\r\n    background: #E0E0E0;\r\n    border: none;\r\n    border-radius: 50%;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n#marial-status button.icon-left:focus {\r\n    outline: none;\r\n}\r\n#marial-status button.icon-left i{\r\n    width: 8px;\r\n    height: 14px;\r\n}\r\n.chooseTaxe{\r\n    display: flex;\r\n    margin-left: 605px;\r\n    margin-bottom: 20px;\r\n    margin-top: 14px;\r\n}\r\n.chooseTaxe .chooseToggle:first-child{\r\n    margin-right: 32px;\r\n}\r\n.chooseTaxe .chooseToggle{\r\n    display: flex;\r\n}\r\n.chooseTaxe .chooseToggle span{\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    color: #001527;\r\n    height: 37px;\r\n}\r\n.chooseToggle .checked{\r\n    width: 28px;\r\n    height: 28px;\r\n    border-radius: 50%;\r\n    border: 2px solid #E0E0E0;\r\n    box-sizing: border-box;\r\n    cursor: pointer;\r\n    margin-right: 7px;\r\n    \r\n}\r\n.chooseToggle .check{\r\n    background: #FF9100;\r\n    width: 28px;\r\n    height: 28px;\r\n    border-radius: 50%;\r\n    position: relative;\r\n    margin-right: 8px;\r\n    cursor: pointer;\r\n}\r\n.chooseToggle .item-check{\r\n    position: absolute;\r\n    top: 7px;\r\n    left: 7px;\r\n    width: 14px;\r\n    height: 14px;\r\n    border-radius: 50%;\r\n    background: #FFFFFF;\r\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\r\n}\r\n#marial-status .view-child p{\r\n    width: 510px;\r\n    height: 37px;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    text-align: center;\r\n    color: #757575;\r\n    margin: 20px 464px 14px 466px;\r\n}\r\n#marial-status .view-child .button-view{\r\n    display: flex;\r\n    margin: 0 665px 0 668px;\r\n}\r\n#marial-status .view-child .button-view .child {\r\n    width: 28.95px;\r\n    height: 28px;\r\n    margin: 0 10px;\r\n    line-height: 28px;\r\n}\r\n#marial-status .view-child .button-view .child span{\r\n    margin: 0 8px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 28px;\r\n    font-size: 22px;\r\n    text-align: center;\r\n    color: #001527;\r\n}\r\n#marial-status .view-child .button-view button {\r\n    width: 28.95px;\r\n    height: 28px;\r\n    border-radius: 50%;\r\n    border: none;\r\n    color: #fff;\r\n    background: #ff9100;\r\n    outline: none;\r\n    cursor: pointer;\r\n    padding: 0;\r\n}\r\n#marial-status .enter-continue{\r\n    display: flex;\r\n    margin: 62px 637px 283px 642px ;\r\n}\r\n#marial-status .enter-continue p.continue{\r\n    width: 75px;\r\n    height: 22px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    color: #333;\r\n    margin-bottom: 0;\r\n}\r\n#marial-status .enter-continue p.enter{\r\n    width: 92px;\r\n    height: 22px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    color: #BDBDBD;\r\n}\r\n#marial-status .enter-continue button.icon-right{\r\n    width: 48px;\r\n    height: 48px;\r\n    background: #FF9100;\r\n    border-radius: 50%;\r\n    border: 1px solid #FF9100;\r\n    margin-left: 21px;\r\n    cursor: pointer;\r\n    color: #fff;\r\n}\r\n#marial-status .enter-continue button.icon-right:focus{\r\n    outline: none;\r\n}\r\n#marial-status.enter-continue button.icon-right i{\r\n    width: 8px;\r\n    height: 14px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dXAtZ3VpZGUvbWFyaWFsLXN0YXR1cy9tYXJpYWwtc3RhdHVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEJBQTRCO0FBQzVCO0lBQ0ksY0FBYztDQUNqQjtBQUNEO0lBQ0kseUJBQXlCO0NBQzVCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysb0JBQW9CO0NBQ3ZCO0FBRUQsNkJBQTZCO0FBQzdCO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsY0FBYztDQUNqQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsK0JBQStCO0lBQy9CLHNDQUFzQztJQUN0QyxxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5Qix5QkFBeUI7Q0FDNUI7QUFDRDtJQUNJLElBQUksYUFBYSxDQUFDO0lBQ2xCLE1BQU0sYUFBYSxFQUFFO0NBQ3hCO0FBSEQ7SUFDSSxJQUFJLGFBQWEsQ0FBQztJQUNsQixNQUFNLGFBQWEsRUFBRTtDQUN4QjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDJCQUEyQjtDQUM5QjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiwyQkFBMkI7Q0FDOUI7QUFDRDtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLGNBQWM7Q0FDakI7QUFDRDtJQUNJLFdBQVc7SUFDWCxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksY0FBYztDQUNqQjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsa0JBQWtCOztDQUVyQjtBQUNEO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsNENBQTRDO0NBQy9DO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDhCQUE4QjtDQUNqQztBQUNEO0lBQ0ksY0FBYztJQUNkLHdCQUF3QjtDQUMzQjtBQUNEO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixXQUFXO0NBQ2Q7QUFFRDtJQUNJLGNBQWM7SUFDZCxnQ0FBZ0M7Q0FDbkM7QUFDRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksY0FBYztDQUNqQjtBQUNEO0lBQ0ksV0FBVztJQUNYLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9zZXR1cC1ndWlkZS9tYXJpYWwtc3RhdHVzL21hcmlhbC1zdGF0dXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qPT09PT09PT1IZWFkZXI9PT09PT09PT09Ki9cclxuaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5oZWFkZXIgaW1ne1xyXG4gICAgbWFyZ2luOiAzMnB4IDAgMjlweCA0NHB4O1xyXG59XHJcbmhlYWRlciBoNXtcclxuICAgIHdpZHRoOiAxNDFweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7IFxyXG4gICAgbWFyZ2luOiAzM3B4IDAgMjJweCA1NzhweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuaGVhZGVyIGEuc2F2ZXtcclxuICAgIG1hcmdpbjogMzZweCA1NXB4IDM0cHggNDkwcHg7XHJcbiAgICB3aWR0aDogMTA0cHg7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi8qPT09PT09PT09PUNvbnRlbnQ9PT09PT09PSovXHJcbi5zdGVwLWxpbmUge1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTBFMEUwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDE0NDBweDtcclxufVxyXG4uc3RlcC1saW5lLTJ7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGxpbmU7ICBcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA1czsgICBcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7IFxyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGxpbmU7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDVzOyAgXHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxufVxyXG5Aa2V5ZnJhbWVzIGxpbmUge1xyXG4gICAgMCUge3dpZHRoOiA1NDBweDt9XHJcbiAgICAxMDAlIHt3aWR0aDogNzIwcHg7IH1cclxufVxyXG4jbWFyaWFsLXN0YXR1c3tcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTQ2cHg7XHJcbiAgICB3aWR0aDogMTQ0MHB4O1xyXG59XHJcbiNtYXJpYWwtc3RhdHVzIC50aXRsZSBoNHtcclxuICAgIHdpZHRoOiA2MTFweDtcclxuICAgIGhlaWdodDogMzlweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAxNTI3O1xyXG4gICAgbWFyZ2luOiAwIDQxNHB4IDI5cHggNDE1cHg7XHJcbn1cclxuI21hcmlhbC1zdGF0dXMgLnRpdGxlIHB7XHJcbiAgICB3aWR0aDogNTU0cHg7XHJcbiAgICBoZWlnaHQ6IDc0cHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIG1hcmdpbjogMCA0NDNweCAyMXB4IDQ0M3B4O1xyXG59XHJcbiNtYXJpYWwtc3RhdHVzIC5yYWRpby1zdGF0dXMgcHtcclxuICAgIHdpZHRoOiA1MTBweDtcclxuICAgIGhlaWdodDogMzdweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMzdweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgbWFyZ2luOiAwIDQ2NXB4O1xyXG59XHJcbiNtYXJpYWwtc3RhdHVzIGJ1dHRvbi5pY29uLWxlZnQge1xyXG4gICAgdG9wOiA0MjZweDtcclxuICAgIGxlZnQ6IDEzMnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTBFMEUwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI21hcmlhbC1zdGF0dXMgYnV0dG9uLmljb24tbGVmdDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbiNtYXJpYWwtc3RhdHVzIGJ1dHRvbi5pY29uLWxlZnQgaXtcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbn1cclxuLmNob29zZVRheGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbn1cclxuLmNob29zZVRheGUgLmNob29zZVRvZ2dsZTpmaXJzdC1jaGlsZHtcclxuICAgIG1hcmdpbi1yaWdodDogMzJweDtcclxufVxyXG4uY2hvb3NlVGF4ZSAuY2hvb3NlVG9nZ2xle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uY2hvb3NlVGF4ZSAuY2hvb3NlVG9nZ2xlIHNwYW57XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMzdweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjMDAxNTI3O1xyXG4gICAgaGVpZ2h0OiAzN3B4O1xyXG59XHJcbi5jaG9vc2VUb2dnbGUgLmNoZWNrZWR7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFMEUwRTA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICBcclxufVxyXG4uY2hvb3NlVG9nZ2xlIC5jaGVja3tcclxuICAgIGJhY2tncm91bmQ6ICNGRjkxMDA7XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jaG9vc2VUb2dnbGUgLml0ZW0tY2hlY2t7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDdweDtcclxuICAgIGxlZnQ6IDdweDtcclxuICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbn1cclxuI21hcmlhbC1zdGF0dXMgLnZpZXctY2hpbGQgcHtcclxuICAgIHdpZHRoOiA1MTBweDtcclxuICAgIGhlaWdodDogMzdweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMzdweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG4gICAgbWFyZ2luOiAyMHB4IDQ2NHB4IDE0cHggNDY2cHg7XHJcbn1cclxuI21hcmlhbC1zdGF0dXMgLnZpZXctY2hpbGQgLmJ1dHRvbi12aWV3e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMCA2NjVweCAwIDY2OHB4O1xyXG59XHJcbiNtYXJpYWwtc3RhdHVzIC52aWV3LWNoaWxkIC5idXR0b24tdmlldyAuY2hpbGQge1xyXG4gICAgd2lkdGg6IDI4Ljk1cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG59XHJcbiNtYXJpYWwtc3RhdHVzIC52aWV3LWNoaWxkIC5idXR0b24tdmlldyAuY2hpbGQgc3BhbntcclxuICAgIG1hcmdpbjogMCA4cHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAxNTI3O1xyXG59XHJcbiNtYXJpYWwtc3RhdHVzIC52aWV3LWNoaWxkIC5idXR0b24tdmlldyBidXR0b24ge1xyXG4gICAgd2lkdGg6IDI4Ljk1cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICNmZjkxMDA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuI21hcmlhbC1zdGF0dXMgLmVudGVyLWNvbnRpbnVle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogNjJweCA2MzdweCAyODNweCA2NDJweCA7XHJcbn1cclxuI21hcmlhbC1zdGF0dXMgLmVudGVyLWNvbnRpbnVlIHAuY29udGludWV7XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbiNtYXJpYWwtc3RhdHVzIC5lbnRlci1jb250aW51ZSBwLmVudGVye1xyXG4gICAgd2lkdGg6IDkycHg7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjQkRCREJEO1xyXG59XHJcbiNtYXJpYWwtc3RhdHVzIC5lbnRlci1jb250aW51ZSBidXR0b24uaWNvbi1yaWdodHtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGOTEwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRjkxMDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMjFweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbiNtYXJpYWwtc3RhdHVzIC5lbnRlci1jb250aW51ZSBidXR0b24uaWNvbi1yaWdodDpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuI21hcmlhbC1zdGF0dXMuZW50ZXItY29udGludWUgYnV0dG9uLmljb24tcmlnaHQgaXtcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/setup-guide/marial-status/marial-status.component.html":
/*!************************************************************************!*\
  !*** ./src/app/setup-guide/marial-status/marial-status.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!----------Header----------->\r\n<header>\r\n    <a href=\"\">\r\n        <img src=\"assets/images/setup-guide/logo.png\" alt=\"\">\r\n    </a>\r\n    <h5>Account Setup</h5>\r\n    <a href=\"\" class=\"save\">Save and Exit</a>\r\n</header>\r\n\r\n<!--------Content-------->\r\n<div class=\"step-line\">\r\n    <div class=\"step-line-2\"></div>\r\n</div>\r\n\r\n<div id=\"marial-status\">\r\n    <div class=\"title\">\r\n        <h4>Marital Status</h4>\r\n        <p>Tax rates can change depending on peoples marital status and children, so this will help is calculate\r\n            accurately.</p>\r\n    </div>\r\n    <div class=\"radio-status\">\r\n        <p>What is your marital status?</p>\r\n        <button class=\"icon-left\" (click)=\"W2()\">\r\n            <i class=\"fas fa-chevron-left\"></i>\r\n        </button>\r\n        <div class=\"chooseTaxe\">\r\n            <div class=\"chooseToggle\">\r\n                <div class=\"checked\" *ngIf=\"!checked\" (click)=\"ShowChecked()\"></div>\r\n                <div class=\"check\" *ngIf=\"checked\" (click)=\"ShowChecked()\">\r\n                    <div class=\"item-check\"></div>\r\n                </div>\r\n                <span>Single</span>\r\n            </div>\r\n            <div class=\"chooseToggle\">\r\n                <div class=\"checked\" *ngIf=\"checked\" (click)=\"ShowChecked()\"></div>\r\n                <div class=\"check\" *ngIf=\"!checked\" (click)=\"ShowChecked()\">\r\n                    <div class=\"item-check\"></div>\r\n                </div>\r\n                <span>Married</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"view-child\">\r\n        <p>Do you have children? If so, how many?</p>\r\n        <div class=\"button-view\">\r\n            <button (click)=\"onSub()\"><span> - </span></button>\r\n            <div class=\"child\"><span>{{value}}</span></div>\r\n            <button (click)=\"onAdd()\"><span> + </span></button>\r\n        </div>\r\n    </div>\r\n    <div class=\"enter-continue\">\r\n        <div class=\"text-left\">\r\n            <p class=\"continue\">Continue</p>\r\n            <p class=\"enter\">Press Enter</p>\r\n        </div>\r\n        <button class=\"icon-right\" (click)=\"Outcome()\">\r\n            <i class=\"fas fa-chevron-right\"></i>\r\n        </button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/setup-guide/marial-status/marial-status.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/setup-guide/marial-status/marial-status.component.ts ***!
  \**********************************************************************/
/*! exports provided: MarialStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarialStatusComponent", function() { return MarialStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var MarialStatusComponent = /** @class */ (function () {
    function MarialStatusComponent(router) {
        this.router = router;
        this.check = false;
        this.checked = true;
        this.value = 0;
    }
    MarialStatusComponent.prototype.onAdd = function () {
        this.value++;
    };
    MarialStatusComponent.prototype.onSub = function () {
        if (this.value > 0) {
            this.value--;
        }
        else {
            return;
        }
    };
    MarialStatusComponent.prototype.ngOnInit = function () {
    };
    MarialStatusComponent.prototype.W2 = function () {
        this.router.navigateByUrl('setup-guide/w2');
    };
    MarialStatusComponent.prototype.Outcome = function () {
        this.router.navigateByUrl('setup-guide/desired-outcome');
    };
    MarialStatusComponent.prototype.ShowCheck = function () {
        this.check = !this.check;
    };
    MarialStatusComponent.prototype.ShowChecked = function () {
        this.checked = !this.checked;
    };
    MarialStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marial-status',
            template: __webpack_require__(/*! ./marial-status.component.html */ "./src/app/setup-guide/marial-status/marial-status.component.html"),
            styles: [__webpack_require__(/*! ./marial-status.component.css */ "./src/app/setup-guide/marial-status/marial-status.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MarialStatusComponent);
    return MarialStatusComponent;
}());



/***/ }),

/***/ "./src/app/setup-guide/method/method.component.css":
/*!*********************************************************!*\
  !*** ./src/app/setup-guide/method/method.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*----------Header-----------*/\r\nheader{\r\n    display: flex;\r\n}\r\nheader img{\r\n    margin: 32px 0 29px 44px;\r\n}\r\nheader h5{\r\n    width: 141px;\r\n    height: 35px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    text-align: center;\r\n    color: #001527; \r\n    margin: 33px 0 22px 578px;\r\n    white-space: nowrap;\r\n}\r\nheader a.save{\r\n    margin: 36px 55px 34px 490px;\r\n    width: 104px;\r\n    height: 22px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    text-align: right;\r\n    color: #757575;\r\n    white-space: nowrap;\r\n}\r\n/*----------Content-----------*/\r\n.step-line{\r\n    height: 5px;\r\n    background:#E0E0E0;\r\n    position: relative;\r\n    width: 1440px;\r\n}\r\n.step-line-2{\r\n    width: 360px;\r\n    height: 5px;\r\n    position: absolute;\r\n    -webkit-animation-name: line;  \r\n    -webkit-animation-duration: 5s;   \r\n    -webkit-animation-fill-mode: forwards; \r\n    animation-name: line;\r\n    animation-duration: 5s;  \r\n    animation-fill-mode: forwards;\r\n    background-color: orange;\r\n}\r\n@-webkit-keyframes line {\r\n    from {width: 180px;}\r\n    to {width: 360px; }\r\n}\r\n@keyframes line {\r\n    from {width: 180px;}\r\n    to {width: 360px; }\r\n}\r\n#method{\r\n    font-family: Lato;\r\n    margin-top: 215px;\r\n    width: 1440px;\r\n}\r\n#method h4{\r\n    width: 235px;\r\n    height: 39px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 32px;\r\n    text-align: center;\r\n    color: #001527;\r\n    margin: 0 602px 29px 603px;\r\n}\r\n#method p.title{\r\n    width: 446px;\r\n    height: 74px;\r\n    margin: 0 497px 21px 497px;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    text-align: center;\r\n    color: #757575;\r\n}\r\n#method button.icon-left {\r\n    top: 426px;\r\n    left: 132px;\r\n    position: absolute;\r\n    width: 48px;\r\n    height: 48px;\r\n    background: #E0E0E0;\r\n    border: none;\r\n    border-radius: 50%;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n#method button.icon-left:focus {\r\n    outline : none;\r\n}\r\n#method button.icon-left i{\r\n    width: 8px;\r\n    height: 14px;\r\n}\r\n#method .info-icon{\r\n    position: absolute;\r\n    left: 975px;\r\n    top: 379px;\r\n    cursor: pointer;\r\n}\r\n#method .info-icon .infomation-hidden{\r\n    top: 56px;\r\n    border-radius: 10px;\r\n    left: -161px;\r\n}\r\n#method .infomation-hidden{\r\n    position: absolute;\r\n    width: 372px;\r\n    height: 222.94px;\r\n    background: #FFFFFF;\r\n    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);\r\n}\r\n#method .infomation-hidden:after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 7px;\r\n    left: 50%;\r\n    width: 0;\r\n    height: 0;\r\n    border: 24px solid transparent;\r\n    border-bottom-color: #ffffff;\r\n    border-top: 0;\r\n    margin-left: -32px;\r\n    margin-top: -31px;\r\n}\r\n#method .infomation-hidden p{\r\n    padding: 0 26px;\r\n    padding-top: 46.94px;\r\n    height: 153px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 22px;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    color: #757575;\r\n}\r\n#method button.continue{\r\n    width: 430px;\r\n    height: 62px;\r\n    background: #FF9100;\r\n    border-radius: 44px;\r\n    border: none;\r\n    margin: 0 505px 22px 505px;\r\n    padding: 18px 102px 20px 100px;\r\n    cursor: pointer;\r\n}\r\n#method button.continue:focus{\r\n    outline: none;\r\n}\r\n#method img.info{\r\n    position: absolute;\r\n}\r\n#method button.continue span{\r\n    white-space: nowrap;\r\n    width: 228px;\r\n    height: 24px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    color: #FFFFFF;\r\n}\r\n#method p.bottom{\r\n    width: 213px;\r\n    height: 37px;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    text-align: center;\r\n    color: #757575;\r\n    margin: 0 613px 305px 614px;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dXAtZ3VpZGUvbWV0aG9kL21ldGhvZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtCQUErQjtBQUMvQjtJQUNJLGNBQWM7Q0FDakI7QUFDRDtJQUNJLHlCQUF5QjtDQUM1QjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtDQUN2QjtBQUNELGdDQUFnQztBQUNoQztJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QiwrQkFBK0I7SUFDL0Isc0NBQXNDO0lBQ3RDLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLHlCQUF5QjtDQUM1QjtBQUNEO0lBQ0ksTUFBTSxhQUFhLENBQUM7SUFDcEIsSUFBSSxhQUFhLEVBQUU7Q0FDdEI7QUFIRDtJQUNJLE1BQU0sYUFBYSxDQUFDO0lBQ3BCLElBQUksYUFBYSxFQUFFO0NBQ3RCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsMkJBQTJCO0NBQzlCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksZUFBZTtDQUNsQjtBQUNEO0lBQ0ksV0FBVztJQUNYLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsNENBQTRDO0NBQy9DO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztJQUNULFVBQVU7SUFDViwrQkFBK0I7SUFDL0IsNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQiwrQkFBK0I7SUFDL0IsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NldHVwLWd1aWRlL21ldGhvZC9tZXRob2QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLS0tLS0tLS0tLUhlYWRlci0tLS0tLS0tLS0tKi9cclxuaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5oZWFkZXIgaW1ne1xyXG4gICAgbWFyZ2luOiAzMnB4IDAgMjlweCA0NHB4O1xyXG59XHJcbmhlYWRlciBoNXtcclxuICAgIHdpZHRoOiAxNDFweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzN3B4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7IFxyXG4gICAgbWFyZ2luOiAzM3B4IDAgMjJweCA1NzhweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuaGVhZGVyIGEuc2F2ZXtcclxuICAgIG1hcmdpbjogMzZweCA1NXB4IDM0cHggNDkwcHg7XHJcbiAgICB3aWR0aDogMTA0cHg7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLyotLS0tLS0tLS0tQ29udGVudC0tLS0tLS0tLS0tKi9cclxuLnN0ZXAtbGluZXtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYmFja2dyb3VuZDojRTBFMEUwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDE0NDBweDtcclxufVxyXG4uc3RlcC1saW5lLTJ7XHJcbiAgICB3aWR0aDogMzYwcHg7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGxpbmU7ICBcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA1czsgICBcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7IFxyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGxpbmU7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDVzOyAgXHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxufVxyXG5Aa2V5ZnJhbWVzIGxpbmUge1xyXG4gICAgZnJvbSB7d2lkdGg6IDE4MHB4O31cclxuICAgIHRvIHt3aWR0aDogMzYwcHg7IH1cclxufVxyXG4jbWV0aG9ke1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBtYXJnaW4tdG9wOiAyMTVweDtcclxuICAgIHdpZHRoOiAxNDQwcHg7XHJcbn1cclxuI21ldGhvZCBoNHtcclxuICAgIHdpZHRoOiAyMzVweDtcclxuICAgIGhlaWdodDogMzlweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAxNTI3O1xyXG4gICAgbWFyZ2luOiAwIDYwMnB4IDI5cHggNjAzcHg7XHJcbn1cclxuI21ldGhvZCBwLnRpdGxle1xyXG4gICAgd2lkdGg6IDQ0NnB4O1xyXG4gICAgaGVpZ2h0OiA3NHB4O1xyXG4gICAgbWFyZ2luOiAwIDQ5N3B4IDIxcHggNDk3cHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxufVxyXG4jbWV0aG9kIGJ1dHRvbi5pY29uLWxlZnQge1xyXG4gICAgdG9wOiA0MjZweDtcclxuICAgIGxlZnQ6IDEzMnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTBFMEUwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI21ldGhvZCBidXR0b24uaWNvbi1sZWZ0OmZvY3VzIHtcclxuICAgIG91dGxpbmUgOiBub25lO1xyXG59XHJcbiNtZXRob2QgYnV0dG9uLmljb24tbGVmdCBpe1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIGhlaWdodDogMTRweDtcclxufVxyXG4jbWV0aG9kIC5pbmZvLWljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA5NzVweDtcclxuICAgIHRvcDogMzc5cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI21ldGhvZCAuaW5mby1pY29uIC5pbmZvbWF0aW9uLWhpZGRlbntcclxuICAgIHRvcDogNTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBsZWZ0OiAtMTYxcHg7XHJcbn1cclxuI21ldGhvZCAuaW5mb21hdGlvbi1oaWRkZW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMzcycHg7XHJcbiAgICBoZWlnaHQ6IDIyMi45NHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbn1cclxuI21ldGhvZCAuaW5mb21hdGlvbi1oaWRkZW46YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDdweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYm9yZGVyOiAyNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci10b3A6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTMycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzFweDtcclxufVxyXG4jbWV0aG9kIC5pbmZvbWF0aW9uLWhpZGRlbiBwe1xyXG4gICAgcGFkZGluZzogMCAyNnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDQ2Ljk0cHg7XHJcbiAgICBoZWlnaHQ6IDE1M3B4O1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxufVxyXG4jbWV0aG9kIGJ1dHRvbi5jb250aW51ZXtcclxuICAgIHdpZHRoOiA0MzBweDtcclxuICAgIGhlaWdodDogNjJweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRjkxMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0NHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luOiAwIDUwNXB4IDIycHggNTA1cHg7XHJcbiAgICBwYWRkaW5nOiAxOHB4IDEwMnB4IDIwcHggMTAwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuI21ldGhvZCBidXR0b24uY29udGludWU6Zm9jdXN7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbiNtZXRob2QgaW1nLmluZm97XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuI21ldGhvZCBidXR0b24uY29udGludWUgc3BhbntcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3aWR0aDogMjI4cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcbiNtZXRob2QgcC5ib3R0b217XHJcbiAgICB3aWR0aDogMjEzcHg7XHJcbiAgICBoZWlnaHQ6IDM3cHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIG1hcmdpbjogMCA2MTNweCAzMDVweCA2MTRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/setup-guide/method/method.component.html":
/*!**********************************************************!*\
  !*** ./src/app/setup-guide/method/method.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!----------Header----------->\r\n<header>\r\n    <a href=\"\">\r\n        <img src=\"assets/images/setup-guide/logo.png\" alt=\"\">\r\n    </a> \r\n    <h5>Account Setup</h5>\r\n    <a href=\"\" class=\"save\">Save and Exit</a>\r\n</header>\r\n\r\n<!----------Content----------->\r\n<div class=\"step-line\">\r\n    <div class=\"step-line-2\"></div>\r\n</div>\r\n\r\n<div id=\"method\">\r\n    <h4>Tax Withholding</h4>\r\n    <p class=\"title\">Choose your own flat rate to withhold or let us help you decide by taking our tax interview.</p>\r\n    <button class=\"icon-left\" (click)=\"Whatyoudo()\">\r\n        <i class=\"fas fa-chevron-left\" ></i>\r\n    </button>\r\n    <div class=\"info-icon\">\r\n        <img (click)=\"textToggle()\" src=\"assets/images/setup-guide/info.png\" alt=\"\">\r\n        <div class=\"infomation-hidden\" [hidden]=\"text\">\r\n            <p >Taxes are due quarterly as a contractor and if they are not paid on time, then penalties are added to the amount you owe. Safeholding through Better ensures payments are made on time, saving you money. Answering just a few simple questions allows Better to fully automate this process, so you can focus on your work.</p>\r\n        </div>\r\n    </div>\r\n    <button class=\"continue\" (click)=\"W2()\">\r\n        <span>Continue to tax interview</span>\r\n    </button>\r\n    <p class=\"bottom\">I’ll decide my own rate</p>\r\n</div>"

/***/ }),

/***/ "./src/app/setup-guide/method/method.component.ts":
/*!********************************************************!*\
  !*** ./src/app/setup-guide/method/method.component.ts ***!
  \********************************************************/
/*! exports provided: MethodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MethodComponent", function() { return MethodComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var MethodComponent = /** @class */ (function () {
    function MethodComponent(router) {
        this.router = router;
        this.text = true;
    }
    MethodComponent.prototype.textToggle = function () {
        this.text = !this.text;
    };
    MethodComponent.prototype.ngOnInit = function () {
    };
    MethodComponent.prototype.W2 = function () {
        this.router.navigateByUrl('setup-guide/w2');
    };
    MethodComponent.prototype.Whatyoudo = function () {
        this.router.navigateByUrl('setup-guide/what-you-do');
    };
    MethodComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-method',
            template: __webpack_require__(/*! ./method.component.html */ "./src/app/setup-guide/method/method.component.html"),
            styles: [__webpack_require__(/*! ./method.component.css */ "./src/app/setup-guide/method/method.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MethodComponent);
    return MethodComponent;
}());



/***/ }),

/***/ "./src/app/setup-guide/page/header-setup/header-setup.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/setup-guide/page/header-setup/header-setup.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHVwLWd1aWRlL3BhZ2UvaGVhZGVyLXNldHVwL2hlYWRlci1zZXR1cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/setup-guide/page/header-setup/header-setup.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/setup-guide/page/header-setup/header-setup.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  header-setup works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/setup-guide/page/header-setup/header-setup.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/setup-guide/page/header-setup/header-setup.component.ts ***!
  \*************************************************************************/
/*! exports provided: HeaderSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderSetupComponent", function() { return HeaderSetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderSetupComponent = /** @class */ (function () {
    function HeaderSetupComponent() {
    }
    HeaderSetupComponent.prototype.ngOnInit = function () {
    };
    HeaderSetupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-setup',
            template: __webpack_require__(/*! ./header-setup.component.html */ "./src/app/setup-guide/page/header-setup/header-setup.component.html"),
            styles: [__webpack_require__(/*! ./header-setup.component.css */ "./src/app/setup-guide/page/header-setup/header-setup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderSetupComponent);
    return HeaderSetupComponent;
}());



/***/ }),

/***/ "./src/app/setup-guide/setup-guide-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/setup-guide/setup-guide-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SetupGuideRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupGuideRoutingModule", function() { return SetupGuideRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/setup-guide/intro/intro.component.ts");
/* harmony import */ var _location_location_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./location/location.component */ "./src/app/setup-guide/location/location.component.ts");
/* harmony import */ var _whatyoudo_whatyoudo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./whatyoudo/whatyoudo.component */ "./src/app/setup-guide/whatyoudo/whatyoudo.component.ts");
/* harmony import */ var _method_method_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./method/method.component */ "./src/app/setup-guide/method/method.component.ts");
/* harmony import */ var _w2_w2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./w2/w2.component */ "./src/app/setup-guide/w2/w2.component.ts");
/* harmony import */ var _marial_status_marial_status_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./marial-status/marial-status.component */ "./src/app/setup-guide/marial-status/marial-status.component.ts");
/* harmony import */ var _desired_outcome_desired_outcome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./desired-outcome/desired-outcome.component */ "./src/app/setup-guide/desired-outcome/desired-outcome.component.ts");
/* harmony import */ var _integrate_bank_integrate_bank_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./integrate-bank/integrate-bank.component */ "./src/app/setup-guide/integrate-bank/integrate-bank.component.ts");
/* harmony import */ var _manual_manual_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./manual/manual.component */ "./src/app/setup-guide/manual/manual.component.ts");
/* harmony import */ var _complete_complete_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./complete/complete.component */ "./src/app/setup-guide/complete/complete.component.ts");
/* harmony import */ var _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./log-in/log-in.component */ "./src/app/setup-guide/log-in/log-in.component.ts");














var routes = [
    {
        path: '',
        data: {
            title: 'setup-guide'
        },
        children: [
            {
                path: "",
                component: _intro_intro_component__WEBPACK_IMPORTED_MODULE_3__["IntroComponent"]
            },
            {
                path: 'location',
                component: _location_location_component__WEBPACK_IMPORTED_MODULE_4__["LocationComponent"]
            },
            {
                path: 'what-you-do',
                component: _whatyoudo_whatyoudo_component__WEBPACK_IMPORTED_MODULE_5__["WhatyoudoComponent"]
            },
            {
                path: 'method',
                component: _method_method_component__WEBPACK_IMPORTED_MODULE_6__["MethodComponent"]
            },
            {
                path: 'w2',
                component: _w2_w2_component__WEBPACK_IMPORTED_MODULE_7__["W2Component"]
            },
            {
                path: 'marital-status',
                component: _marial_status_marial_status_component__WEBPACK_IMPORTED_MODULE_8__["MarialStatusComponent"]
            },
            {
                path: 'desired-outcome',
                component: _desired_outcome_desired_outcome_component__WEBPACK_IMPORTED_MODULE_9__["DesiredOutcomeComponent"]
            },
            {
                path: 'integrate-bank',
                component: _integrate_bank_integrate_bank_component__WEBPACK_IMPORTED_MODULE_10__["IntegrateBankComponent"]
            },
            {
                path: 'manual',
                component: _manual_manual_component__WEBPACK_IMPORTED_MODULE_11__["ManualComponent"]
            },
            {
                path: 'log-in',
                component: _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_13__["LogInComponent"]
            },
            {
                path: 'setup-complete',
                component: _complete_complete_component__WEBPACK_IMPORTED_MODULE_12__["CompleteComponent"]
            }
        ]
    }
];
var SetupGuideRoutingModule = /** @class */ (function () {
    function SetupGuideRoutingModule() {
    }
    SetupGuideRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SetupGuideRoutingModule);
    return SetupGuideRoutingModule;
}());



/***/ }),

/***/ "./src/app/setup-guide/setup-guide.module.ts":
/*!***************************************************!*\
  !*** ./src/app/setup-guide/setup-guide.module.ts ***!
  \***************************************************/
/*! exports provided: SetupGuideModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupGuideModule", function() { return SetupGuideModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/setup-guide/intro/intro.component.ts");
/* harmony import */ var _location_location_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location/location.component */ "./src/app/setup-guide/location/location.component.ts");
/* harmony import */ var _marial_status_marial_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./marial-status/marial-status.component */ "./src/app/setup-guide/marial-status/marial-status.component.ts");
/* harmony import */ var _method_method_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./method/method.component */ "./src/app/setup-guide/method/method.component.ts");
/* harmony import */ var _w2_w2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./w2/w2.component */ "./src/app/setup-guide/w2/w2.component.ts");
/* harmony import */ var _whatyoudo_whatyoudo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./whatyoudo/whatyoudo.component */ "./src/app/setup-guide/whatyoudo/whatyoudo.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _setup_guide_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./setup-guide-routing.module */ "./src/app/setup-guide/setup-guide-routing.module.ts");
/* harmony import */ var _page_header_setup_header_setup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page/header-setup/header-setup.component */ "./src/app/setup-guide/page/header-setup/header-setup.component.ts");
/* harmony import */ var _marial_status_child_child_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./marial-status/child/child.component */ "./src/app/setup-guide/marial-status/child/child.component.ts");
/* harmony import */ var _desired_outcome_desired_outcome_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./desired-outcome/desired-outcome.component */ "./src/app/setup-guide/desired-outcome/desired-outcome.component.ts");
/* harmony import */ var _integrate_bank_integrate_bank_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./integrate-bank/integrate-bank.component */ "./src/app/setup-guide/integrate-bank/integrate-bank.component.ts");
/* harmony import */ var _manual_manual_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./manual/manual.component */ "./src/app/setup-guide/manual/manual.component.ts");
/* harmony import */ var _complete_complete_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./complete/complete.component */ "./src/app/setup-guide/complete/complete.component.ts");
/* harmony import */ var ngx_plaid_link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-plaid-link */ "./node_modules/ngx-plaid-link/fesm5/ngx-plaid-link.js");
/* harmony import */ var _integrate_bank_ngx_plaid_link_button_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./integrate-bank/ngx-plaid-link-button.component */ "./src/app/setup-guide/integrate-bank/ngx-plaid-link-button.component.ts");
/* harmony import */ var _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./log-in/log-in.component */ "./src/app/setup-guide/log-in/log-in.component.ts");




















var SetupGuideModule = /** @class */ (function () {
    function SetupGuideModule() {
    }
    SetupGuideModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _setup_guide_routing_module__WEBPACK_IMPORTED_MODULE_10__["SetupGuideRoutingModule"],
                ngx_plaid_link__WEBPACK_IMPORTED_MODULE_17__["NgxPlaidLinkModule"]
            ],
            declarations: [
                _intro_intro_component__WEBPACK_IMPORTED_MODULE_2__["IntroComponent"],
                _location_location_component__WEBPACK_IMPORTED_MODULE_3__["LocationComponent"],
                _marial_status_marial_status_component__WEBPACK_IMPORTED_MODULE_4__["MarialStatusComponent"],
                _method_method_component__WEBPACK_IMPORTED_MODULE_5__["MethodComponent"],
                _w2_w2_component__WEBPACK_IMPORTED_MODULE_6__["W2Component"],
                _whatyoudo_whatyoudo_component__WEBPACK_IMPORTED_MODULE_7__["WhatyoudoComponent"],
                _page_header_setup_header_setup_component__WEBPACK_IMPORTED_MODULE_11__["HeaderSetupComponent"],
                _marial_status_child_child_component__WEBPACK_IMPORTED_MODULE_12__["ChildComponent"],
                _desired_outcome_desired_outcome_component__WEBPACK_IMPORTED_MODULE_13__["DesiredOutcomeComponent"],
                _integrate_bank_integrate_bank_component__WEBPACK_IMPORTED_MODULE_14__["IntegrateBankComponent"],
                _manual_manual_component__WEBPACK_IMPORTED_MODULE_15__["ManualComponent"],
                _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_19__["LogInComponent"],
                _complete_complete_component__WEBPACK_IMPORTED_MODULE_16__["CompleteComponent"],
                _integrate_bank_ngx_plaid_link_button_component__WEBPACK_IMPORTED_MODULE_18__["NgxPlaidLinkButtonComponent"]
            ]
        })
    ], SetupGuideModule);
    return SetupGuideModule;
}());



/***/ }),

/***/ "./src/app/setup-guide/w2/w2.component.css":
/*!*************************************************!*\
  !*** ./src/app/setup-guide/w2/w2.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*========Header==========*/\r\nheader{\r\n    display: flex;\r\n}\r\nheader img{\r\n    margin: 32px 0 29px 44px;\r\n}\r\nheader h5{\r\n    width: 141px;\r\n    height: 35px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 34px;\r\n    font-size: 22px;\r\n    text-align: center;\r\n    color: #001527; \r\n    margin: 33px 0 22px 578px;\r\n    white-space: nowrap;\r\n}\r\nheader a.save{\r\n    margin: 36px 55px 34px 490px;\r\n    width: 104px;\r\n    height: 22px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    text-align: right;\r\n    color: #757575;\r\n    white-space: nowrap;\r\n}\r\n/*========Content==========*/\r\n.step-line {\r\n    height: 5px;\r\n    background: #E0E0E0;\r\n    position: relative;\r\n    width: 1440px;\r\n}\r\n.step-line-2{\r\n    height: 5px;\r\n    position: absolute;\r\n    -webkit-animation-name: line;  \r\n    -webkit-animation-duration: 5s;   \r\n    -webkit-animation-fill-mode: forwards; \r\n    animation-name: line;\r\n    animation-duration: 5s;  \r\n    animation-fill-mode: forwards;\r\n    background-color: orange;\r\n}\r\n@-webkit-keyframes line {\r\n    from {width: 360px;}\r\n    to {width: 540px; }\r\n}\r\n@keyframes line {\r\n    from {width: 360px;}\r\n    to {width: 540px; }\r\n}\r\n#w2{\r\n    margin-top: 123px; \r\n    font-family: Lato;\r\n    width: 1440px;\r\n}\r\n#w2 h4{\r\n    width: 611px;\r\n    height: 77px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 32px;\r\n    text-align: center;  \r\n    color: #001527;\r\n    margin: 0 414px 27px 415px;\r\n}\r\n#w2 p.title{\r\n    width: 490px;\r\n    height: 74px;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    text-align: center;\r\n    color: #757575;\r\n    margin: 0 475px;\r\n    margin-bottom: 21px;\r\n}\r\n.chooseTaxe{\r\n    display: flex;\r\n    margin-left: 639px;\r\n    margin-bottom: 27px;\r\n}\r\n.chooseTaxe .chooseToggle:first-child{\r\n    margin-right: 31px;\r\n}\r\n.chooseTaxe .chooseToggle{\r\n    display: flex;\r\n}\r\n.chooseToggle .checked{\r\n    width: 28px;\r\n    height: 28px;\r\n    border-radius: 50%;\r\n    border: 2px solid #E0E0E0;\r\n    box-sizing: border-box;\r\n    cursor: pointer;\r\n    margin-right: 7px;\r\n    \r\n}\r\n.chooseToggle .check{\r\n    background: #FF9100;\r\n    width: 28px;\r\n    height: 28px;\r\n    border-radius: 50%;\r\n    position: relative;\r\n    margin-right: 8px;\r\n    cursor: pointer;\r\n}\r\n.chooseToggle .item-check{\r\n    position: absolute;\r\n    top: 7px;\r\n    left: 7px;\r\n    width: 14px;\r\n    height: 14px;\r\n    border-radius: 50%;\r\n    background: #FFFFFF;\r\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\r\n}\r\n#w2 button.icon-left {\r\n    top: 426px;\r\n    left: 132px;\r\n    position: absolute;\r\n    width: 48px;\r\n    height: 48px;\r\n    background: #E0E0E0;\r\n    border: none;\r\n    border-radius: 50%;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n#w2 button.icon-left:focus {\r\n    outline: none;\r\n}\r\n#w2 button.icon-left i{\r\n    width: 8px;\r\n    height: 14px;\r\n}\r\n#w2 p.content{\r\n    margin: 27px 465px;\r\n    width: 510px;\r\n    height: 37px;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    text-align: center;\r\n    color: #757575;\r\n}\r\n#w2 input[type=text]{\r\n    width: 312px;\r\n    height: 62px;\r\n    border: 2px solid #E0E0E0;\r\n    box-sizing: border-box;\r\n    border-radius: 12px;\r\n    padding: 18px 24px 20px 24px;\r\n    margin: 0 564px 63px 564px;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n    color: #BDBDBD;\r\n}\r\n#w2 input[type=text]:focus{\r\n    border: 2px solid #FF9100;\r\n    outline: none;\r\n}\r\n#w2 .enter-continue{\r\n    display: flex;\r\n    margin: 0 637px 283px 642px ;\r\n}\r\n#w2 .enter-continue p.continue{\r\n    width: 75px;\r\n    height: 22px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    color: #333;\r\n    margin-bottom: 0;\r\n}\r\n#w2 .enter-continue p.enter{\r\n    width: 92px;\r\n    height: 22px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    color: #BDBDBD;\r\n}\r\n#w2 .enter-continue button.icon-right{\r\n    width: 48px;\r\n    height: 48px;\r\n    background: #FF9100;\r\n    border-radius: 50%;\r\n    border: none;\r\n    margin-left: 21px;\r\n    cursor: pointer;\r\n    color: #fff;\r\n}\r\n#w2 .enter-continue button.icon-right:focus{\r\n    outline: none;\r\n}\r\n#w2.enter-continue button.icon-right i{\r\n    width: 8px;\r\n    height: 14px;\r\n}\r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dXAtZ3VpZGUvdzIvdzIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEI7QUFDNUI7SUFDSSxjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSx5QkFBeUI7Q0FDNUI7QUFDRDtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7Q0FDdkI7QUFFRCw2QkFBNkI7QUFDN0I7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QiwrQkFBK0I7SUFDL0Isc0NBQXNDO0lBQ3RDLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLHlCQUF5QjtDQUM1QjtBQUNEO0lBQ0ksTUFBTSxhQUFhLENBQUM7SUFDcEIsSUFBSSxhQUFhLEVBQUU7Q0FDdEI7QUFIRDtJQUNJLE1BQU0sYUFBYSxDQUFDO0lBQ3BCLElBQUksYUFBYSxFQUFFO0NBQ3RCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsMkJBQTJCO0NBQzlCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7Q0FDdkI7QUFDRDtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGNBQWM7Q0FDakI7QUFDRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjs7Q0FFckI7QUFDRDtJQUNJLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLDRDQUE0QztDQUMvQztBQUNEO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLDZCQUE2QjtJQUM3QiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLDBCQUEwQjtJQUMxQixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxjQUFjO0lBQ2QsNkJBQTZCO0NBQ2hDO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0NBQ2Y7QUFDRDtJQUNJLGNBQWM7Q0FDakI7QUFDRDtJQUNJLFdBQVc7SUFDWCxhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc2V0dXAtZ3VpZGUvdzIvdzIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qPT09PT09PT1IZWFkZXI9PT09PT09PT09Ki9cclxuaGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5oZWFkZXIgaW1ne1xyXG4gICAgbWFyZ2luOiAzMnB4IDAgMjlweCA0NHB4O1xyXG59XHJcbmhlYWRlciBoNXtcclxuICAgIHdpZHRoOiAxNDFweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwMDE1Mjc7IFxyXG4gICAgbWFyZ2luOiAzM3B4IDAgMjJweCA1NzhweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuaGVhZGVyIGEuc2F2ZXtcclxuICAgIG1hcmdpbjogMzZweCA1NXB4IDM0cHggNDkwcHg7XHJcbiAgICB3aWR0aDogMTA0cHg7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi8qPT09PT09PT1Db250ZW50PT09PT09PT09PSovXHJcbi5zdGVwLWxpbmUge1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTBFMEUwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDE0NDBweDtcclxufVxyXG4uc3RlcC1saW5lLTJ7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGxpbmU7ICBcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA1czsgICBcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7IFxyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGxpbmU7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDVzOyAgXHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxufVxyXG5Aa2V5ZnJhbWVzIGxpbmUge1xyXG4gICAgZnJvbSB7d2lkdGg6IDM2MHB4O31cclxuICAgIHRvIHt3aWR0aDogNTQwcHg7IH1cclxufVxyXG4jdzJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMjNweDsgXHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIHdpZHRoOiAxNDQwcHg7XHJcbn1cclxuI3cyIGg0e1xyXG4gICAgd2lkdGg6IDYxMXB4O1xyXG4gICAgaGVpZ2h0OiA3N3B4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXHJcbiAgICBjb2xvcjogIzAwMTUyNztcclxuICAgIG1hcmdpbjogMCA0MTRweCAyN3B4IDQxNXB4O1xyXG59XHJcbiN3MiBwLnRpdGxle1xyXG4gICAgd2lkdGg6IDQ5MHB4O1xyXG4gICAgaGVpZ2h0OiA3NHB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzN3B4O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICBtYXJnaW46IDAgNDc1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMXB4O1xyXG59XHJcbi5jaG9vc2VUYXhle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MzlweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI3cHg7XHJcbn1cclxuLmNob29zZVRheGUgLmNob29zZVRvZ2dsZTpmaXJzdC1jaGlsZHtcclxuICAgIG1hcmdpbi1yaWdodDogMzFweDtcclxufVxyXG4uY2hvb3NlVGF4ZSAuY2hvb3NlVG9nZ2xle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uY2hvb3NlVG9nZ2xlIC5jaGVja2Vke1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRTBFMEUwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgXHJcbn1cclxuLmNob29zZVRvZ2dsZSAuY2hlY2t7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkY5MTAwO1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY2hvb3NlVG9nZ2xlIC5pdGVtLWNoZWNre1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA3cHg7XHJcbiAgICBsZWZ0OiA3cHg7XHJcbiAgICB3aWR0aDogMTRweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG59XHJcbiN3MiBidXR0b24uaWNvbi1sZWZ0IHtcclxuICAgIHRvcDogNDI2cHg7XHJcbiAgICBsZWZ0OiAxMzJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0UwRTBFMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiN3MiBidXR0b24uaWNvbi1sZWZ0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuI3cyIGJ1dHRvbi5pY29uLWxlZnQgaXtcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbn1cclxuI3cyIHAuY29udGVudHtcclxuICAgIG1hcmdpbjogMjdweCA0NjVweDtcclxuICAgIHdpZHRoOiA1MTBweDtcclxuICAgIGhlaWdodDogMzdweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMzdweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG59XHJcbiN3MiBpbnB1dFt0eXBlPXRleHRde1xyXG4gICAgd2lkdGg6IDMxMnB4O1xyXG4gICAgaGVpZ2h0OiA2MnB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI0UwRTBFMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMThweCAyNHB4IDIwcHggMjRweDtcclxuICAgIG1hcmdpbjogMCA1NjRweCA2M3B4IDU2NHB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogI0JEQkRCRDtcclxufVxyXG4jdzIgaW5wdXRbdHlwZT10ZXh0XTpmb2N1c3tcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRjkxMDA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbiN3MiAuZW50ZXItY29udGludWV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAwIDYzN3B4IDI4M3B4IDY0MnB4IDtcclxufVxyXG4jdzIgLmVudGVyLWNvbnRpbnVlIHAuY29udGludWV7XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIGhlaWdodDogMjJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbiN3MiAuZW50ZXItY29udGludWUgcC5lbnRlcntcclxuICAgIHdpZHRoOiA5MnB4O1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogI0JEQkRCRDtcclxufVxyXG4jdzIgLmVudGVyLWNvbnRpbnVlIGJ1dHRvbi5pY29uLXJpZ2h0e1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkY5MTAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIxcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4jdzIgLmVudGVyLWNvbnRpbnVlIGJ1dHRvbi5pY29uLXJpZ2h0OmZvY3Vze1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4jdzIuZW50ZXItY29udGludWUgYnV0dG9uLmljb24tcmlnaHQgaXtcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbn1cclxuICBcclxuIl19 */"

/***/ }),

/***/ "./src/app/setup-guide/w2/w2.component.html":
/*!**************************************************!*\
  !*** ./src/app/setup-guide/w2/w2.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!----------Header----------->\r\n<header>\r\n  <a href=\"\">\r\n    <img src=\"assets/images/setup-guide/logo.png\" alt=\"\">\r\n  </a>\r\n  <h5>Account Setup</h5>\r\n  <a href=\"\" class=\"save\">Save and Exit</a>\r\n</header>\r\n\r\n<!----------Content----------->\r\n<div class=\"step-line\">\r\n  <div class=\"step-line-2\"></div>\r\n</div>\r\n<div id=\"w2\">\r\n  <h4>Do you have a W-2 employee job where taxes are automatically taken out?</h4>\r\n  <p class=\"title\">We can factor this into our calculations and helps us accurately calculate your withholdings.</p>\r\n  <div class=\"chooseTaxe\">\r\n    <div class=\"chooseToggle\">\r\n      <div class=\"checked\" *ngIf=\"!checked\" (click)=\"ShowChecked()\"></div>\r\n      <div class=\"check\" *ngIf=\"checked\" (click)=\"ShowChecked()\">\r\n        <div class=\"item-check\"></div>\r\n      </div>\r\n      <span>Yes</span>\r\n    </div>\r\n    <div class=\"chooseToggle\">\r\n      <div class=\"checked\" *ngIf=\"checked\" (click)=\"ShowChecked()\"></div>\r\n      <div class=\"check\" *ngIf=\"!checked\" (click)=\"ShowChecked()\">\r\n        <div class=\"item-check\"></div>\r\n      </div>\r\n      <span>No</span>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"checked\">\r\n    <p class=\"content\">On average, how much does this job pay per month?</p>\r\n    <input type=\"text\" [value]=\"value\">\r\n  </div>\r\n  <button class=\"icon-left\" (click)=\"Method()\">\r\n    <i class=\"fas fa-chevron-left\"></i>\r\n  </button>\r\n  <div class=\"enter-continue\">\r\n    <div class=\"text-left\">\r\n      <p class=\"continue\">Continue</p>\r\n      <p class=\"enter\">Press Enter</p>\r\n    </div>\r\n    <button class=\"icon-right\" (click)=\"Marial()\">\r\n      <i class=\"fas fa-chevron-right\"></i>\r\n    </button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/setup-guide/w2/w2.component.ts":
/*!************************************************!*\
  !*** ./src/app/setup-guide/w2/w2.component.ts ***!
  \************************************************/
/*! exports provided: W2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W2Component", function() { return W2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var W2Component = /** @class */ (function () {
    function W2Component(router) {
        this.router = router;
        this.check = false;
        this.checked = true;
        this.value = "$";
    }
    W2Component.prototype.ngOnInit = function () {
    };
    W2Component.prototype.Method = function () {
        this.router.navigateByUrl('setup-guide/method');
    };
    W2Component.prototype.Marial = function () {
        this.router.navigateByUrl('setup-guide/marital-status');
    };
    W2Component.prototype.ShowCheck = function () {
        this.check = !this.check;
    };
    W2Component.prototype.ShowChecked = function () {
        this.checked = !this.checked;
    };
    W2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-w2',
            template: __webpack_require__(/*! ./w2.component.html */ "./src/app/setup-guide/w2/w2.component.html"),
            styles: [__webpack_require__(/*! ./w2.component.css */ "./src/app/setup-guide/w2/w2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], W2Component);
    return W2Component;
}());



/***/ }),

/***/ "./src/app/setup-guide/whatyoudo/whatyoudo.component.css":
/*!***************************************************************!*\
  !*** ./src/app/setup-guide/whatyoudo/whatyoudo.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*========Header==========*/\r\nheader{\r\n    display: flex;\r\n}\r\nheader img{\r\n    margin: 32px 0 29px 44px;\r\n}\r\nheader h5{\r\n    width: 141px;\r\n    height: 35px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 34px;\r\n    font-size: 22px;\r\n    text-align: center;\r\n    color: #001527; \r\n    margin: 33px 0 22px 578px;\r\n    white-space: nowrap;\r\n}\r\nheader a.save{\r\n    margin: 36px 55px 34px 490px;\r\n    width: 104px;\r\n    height: 22px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    text-align: right;\r\n    color: #757575;\r\n    white-space: nowrap;\r\n}\r\n/*========Content==========*/\r\n.step-line {\r\n    height: 5px;\r\n    background: #E0E0E0;\r\n    position: relative;\r\n    width: 1440px;\r\n}\r\n.step-line-2{\r\n    height: 5px;\r\n    position: absolute;\r\n    -webkit-animation-name: line;  \r\n    -webkit-animation-duration: 5s;   \r\n    -webkit-animation-fill-mode: forwards; \r\n    animation-name: line;\r\n    animation-duration: 5s;  \r\n    animation-fill-mode: forwards;\r\n    background-color: orange;\r\n}\r\n@-webkit-keyframes line {\r\n    from {width: 0px;}\r\n    to {width: 180px; }\r\n}\r\n@keyframes line {\r\n    from {width: 0px;}\r\n    to {width: 180px; }\r\n}\r\n#content{\r\n    font-family: Lato;\r\n    width: 1440px;\r\n}\r\n#content h4{\r\n    width: 191px;\r\n    height: 39px;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 32px;\r\n    color: #001527;\r\n    margin: 186px 625px 29px 624px;\r\n}\r\n#content p.title{\r\n    width: 430px;\r\n    height: 74px;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: 37px;\r\n    font-size: 22px;\r\n    text-align: center;\r\n    color: #757575;\r\n    margin: 0 505px;\r\n}\r\n#content .form-group select{\r\n    width: 430px;\r\n    height: 62px;\r\n    margin: auto;\r\n    border: 2px solid #E0E0E0;\r\n    box-sizing: border-box;\r\n    border-radius: 12px;\r\n    margin-top: 21px;\r\n    margin-bottom: 62px;\r\n    color: #001527;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    line-height: normal;\r\n    font-size: 20px;\r\n}\r\n#content .form-group>.form-control:focus {\r\n    border: 2px solid #FF9100;\r\n    box-sizing: border-box;\r\n    box-shadow: none;\r\n}\r\n#content button.icon-left {\r\n    top: 426px;\r\n    left: 132px;\r\n    position: absolute;\r\n    width: 48px;\r\n    height: 48px;\r\n    background: #E0E0E0;\r\n    border: none;\r\n    border-radius: 50%;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n#content button.icon-left:focus {\r\n    outline : none;\r\n}\r\n#content button.icon-left i{\r\n    width: 8px;\r\n    height: 14px;\r\n}\r\n#content .enter-continue{\r\n    display: flex;\r\n    display: flex;\r\n    margin: 0 637px 283px 642px ;\r\n}\r\n#content .enter-continue p.continue{\r\n    width: 75px;\r\n    height: 22px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    color: #333;\r\n    margin-bottom: 0;\r\n}\r\n#content .enter-continue p.exit{\r\n    width: 92px;\r\n    height: 22px;\r\n    font-family: Lato;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    line-height: normal;\r\n    font-size: 18px;\r\n    color: #BDBDBD;\r\n}\r\n#content .enter-continue button.icon-right{\r\n    width: 48px;\r\n    height: 48px;\r\n    background: #FF9100;\r\n    border-radius: 50%;\r\n    border: 1px solid #FF9100;\r\n    margin-left: 21px;\r\n    cursor: pointer;\r\n    color: #fff;\r\n}\r\n#content .enter-continue button.icon-right:focus{\r\n    outline: none;\r\n}\r\n#content .enter-continue button.icon-right i{\r\n    width: 8px;\r\n    height: 14px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dXAtZ3VpZGUvd2hhdHlvdWRvL3doYXR5b3Vkby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRCQUE0QjtBQUM1QjtJQUNJLGNBQWM7Q0FDakI7QUFDRDtJQUNJLHlCQUF5QjtDQUM1QjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtDQUN2QjtBQUVELDZCQUE2QjtBQUM3QjtJQUNJLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGNBQWM7Q0FDakI7QUFDRDtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLCtCQUErQjtJQUMvQixzQ0FBc0M7SUFDdEMscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2Qiw4QkFBOEI7SUFDOUIseUJBQXlCO0NBQzVCO0FBQ0Q7SUFDSSxNQUFNLFdBQVcsQ0FBQztJQUNsQixJQUFJLGFBQWEsRUFBRTtDQUN0QjtBQUhEO0lBQ0ksTUFBTSxXQUFXLENBQUM7SUFDbEIsSUFBSSxhQUFhLEVBQUU7Q0FDdEI7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0NBQ2pCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsK0JBQStCO0NBQ2xDO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxlQUFlO0NBQ2xCO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCw2QkFBNkI7Q0FDaEM7QUFDRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7Q0FDZjtBQUNEO0lBQ0ksY0FBYztDQUNqQjtBQUNEO0lBQ0ksV0FBVztJQUNYLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9zZXR1cC1ndWlkZS93aGF0eW91ZG8vd2hhdHlvdWRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKj09PT09PT09SGVhZGVyPT09PT09PT09PSovXHJcbmhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuaGVhZGVyIGltZ3tcclxuICAgIG1hcmdpbjogMzJweCAwIDI5cHggNDRweDtcclxufVxyXG5oZWFkZXIgaDV7XHJcbiAgICB3aWR0aDogMTQxcHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAxNTI3OyBcclxuICAgIG1hcmdpbjogMzNweCAwIDIycHggNTc4cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbmhlYWRlciBhLnNhdmV7XHJcbiAgICBtYXJnaW46IDM2cHggNTVweCAzNHB4IDQ5MHB4O1xyXG4gICAgd2lkdGg6IDEwNHB4O1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG87XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4vKj09PT09PT09Q29udGVudD09PT09PT09PT0qL1xyXG4uc3RlcC1saW5lIHtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogI0UwRTBFMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxNDQwcHg7XHJcbn1cclxuLnN0ZXAtbGluZS0ye1xyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBsaW5lOyAgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNXM7ICAgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzOyBcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBsaW5lO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1czsgIFxyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuQGtleWZyYW1lcyBsaW5lIHtcclxuICAgIGZyb20ge3dpZHRoOiAwcHg7fVxyXG4gICAgdG8ge3dpZHRoOiAxODBweDsgfVxyXG59XHJcblxyXG4jY29udGVudHtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gICAgd2lkdGg6IDE0NDBweDtcclxufVxyXG4jY29udGVudCBoNHtcclxuICAgIHdpZHRoOiAxOTFweDtcclxuICAgIGhlaWdodDogMzlweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGNvbG9yOiAjMDAxNTI3O1xyXG4gICAgbWFyZ2luOiAxODZweCA2MjVweCAyOXB4IDYyNHB4O1xyXG59XHJcbiNjb250ZW50IHAudGl0bGV7XHJcbiAgICB3aWR0aDogNDMwcHg7XHJcbiAgICBoZWlnaHQ6IDc0cHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIG1hcmdpbjogMCA1MDVweDtcclxufVxyXG4jY29udGVudCAuZm9ybS1ncm91cCBzZWxlY3R7XHJcbiAgICB3aWR0aDogNDMwcHg7XHJcbiAgICBoZWlnaHQ6IDYycHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRTBFMEUwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjJweDtcclxuICAgIGNvbG9yOiAjMDAxNTI3O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuI2NvbnRlbnQgLmZvcm0tZ3JvdXA+LmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRkY5MTAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuI2NvbnRlbnQgYnV0dG9uLmljb24tbGVmdCB7XHJcbiAgICB0b3A6IDQyNnB4O1xyXG4gICAgbGVmdDogMTMycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGJhY2tncm91bmQ6ICNFMEUwRTA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jY29udGVudCBidXR0b24uaWNvbi1sZWZ0OmZvY3VzIHtcclxuICAgIG91dGxpbmUgOiBub25lO1xyXG59XHJcbiNjb250ZW50IGJ1dHRvbi5pY29uLWxlZnQgaXtcclxuICAgIHdpZHRoOiA4cHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbn1cclxuI2NvbnRlbnQgLmVudGVyLWNvbnRpbnVle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDAgNjM3cHggMjgzcHggNjQycHggO1xyXG59XHJcbiNjb250ZW50IC5lbnRlci1jb250aW51ZSBwLmNvbnRpbnVle1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4jY29udGVudCAuZW50ZXItY29udGludWUgcC5leGl0e1xyXG4gICAgd2lkdGg6IDkycHg7XHJcbiAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICBmb250LWZhbWlseTogTGF0bztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjQkRCREJEO1xyXG59XHJcbiNjb250ZW50IC5lbnRlci1jb250aW51ZSBidXR0b24uaWNvbi1yaWdodHtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGOTEwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRjkxMDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMjFweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbiNjb250ZW50IC5lbnRlci1jb250aW51ZSBidXR0b24uaWNvbi1yaWdodDpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuI2NvbnRlbnQgLmVudGVyLWNvbnRpbnVlIGJ1dHRvbi5pY29uLXJpZ2h0IGl7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/setup-guide/whatyoudo/whatyoudo.component.html":
/*!****************************************************************!*\
  !*** ./src/app/setup-guide/whatyoudo/whatyoudo.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!----------Header----------->\r\n<header>\r\n    <a href=\"\">\r\n        <img src=\"assets/images/setup-guide/logo.png\" alt=\"\">\r\n    </a> \r\n    <h5>Account Setup</h5>\r\n    <a href=\"\" class=\"save\">Save and Exit</a>\r\n</header>\r\n<div class=\"step-line\">\r\n    <div class=\"step-line-2\"></div>\r\n</div>\r\n<div id=\"content\">\r\n    <h4>What You Do</h4>\r\n    <p class=\"title\">We would love to know what you do for a living so we help you as best we can.</p>\r\n    <!-- <input type=\"text\" placeholder=\"Job Title\"> -->\r\n    <div class=\"form-group\">\r\n        <select class=\"form-control\">\r\n            <option *ngFor=\"let job of lstJob\">{{job.name}}</option>\r\n        </select>\r\n    </div>\r\n    <button class=\"icon-left\" (click)=\"Location()\">\r\n        <i class=\"fas fa-chevron-left\"></i>\r\n    </button>\r\n    <div class=\"enter-continue\">\r\n        <div class=\"text-left\">\r\n            <p class=\"continue\">Continue</p>\r\n            <p class=\"exit\">Press Enter</p>\r\n        </div>\r\n        <button class=\"icon-right\" (click)=\"Method()\">\r\n            <i class=\"fas fa-chevron-right\"></i>\r\n        </button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/setup-guide/whatyoudo/whatyoudo.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/setup-guide/whatyoudo/whatyoudo.component.ts ***!
  \**************************************************************/
/*! exports provided: WhatyoudoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatyoudoComponent", function() { return WhatyoudoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_appService_setup_guide_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/appService/setup-guide.service */ "./src/app/appService/setup-guide.service.ts");




var WhatyoudoComponent = /** @class */ (function () {
    function WhatyoudoComponent(Router, _setupGuide) {
        this.Router = Router;
        this._setupGuide = _setupGuide;
        this.lstJob = [];
        this.Jobtitle = "";
    }
    WhatyoudoComponent.prototype.ngOnInit = function () {
        this.getJob();
    };
    WhatyoudoComponent.prototype.Location = function () {
        this.Router.navigateByUrl('setup-guide/location');
    };
    WhatyoudoComponent.prototype.Method = function () {
        this.Router.navigateByUrl('setup-guide/method');
    };
    WhatyoudoComponent.prototype.getJob = function () {
        var _this = this;
        this._setupGuide.getJob().subscribe(function (dt) {
            _this.lstJob = dt.data.data;
        });
    };
    WhatyoudoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-whatyoudo',
            template: __webpack_require__(/*! ./whatyoudo.component.html */ "./src/app/setup-guide/whatyoudo/whatyoudo.component.html"),
            styles: [__webpack_require__(/*! ./whatyoudo.component.css */ "./src/app/setup-guide/whatyoudo/whatyoudo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_appService_setup_guide_service__WEBPACK_IMPORTED_MODULE_3__["SetupGuideService"]])
    ], WhatyoudoComponent);
    return WhatyoudoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=setup-guide-setup-guide-module.js.map