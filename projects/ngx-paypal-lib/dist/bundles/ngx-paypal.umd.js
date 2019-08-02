(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('ngx-paypal', ['exports', '@angular/common', '@angular/core', 'rxjs'], factory) :
    (global = global || self, factory(global['ngx-paypal'] = {}, global.ng.common, global.ng.core, global.rxjs));
}(this, function (exports, common, core, rxjs) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ScriptService = /** @class */ (function () {
        function ScriptService(zone) {
            this.zone = zone;
        }
        /**
         * @param {?} url
         * @param {?} globalVar
         * @param {?} onReady
         * @param {?} onError
         * @return {?}
         */
        ScriptService.prototype.registerScript = /**
         * @param {?} url
         * @param {?} globalVar
         * @param {?} onReady
         * @param {?} onError
         * @return {?}
         */
        function (url, globalVar, onReady, onError) {
            var _this = this;
            /** @type {?} */
            var existingGlobalVar = ((/** @type {?} */ (window)))[globalVar];
            if (existingGlobalVar) {
                // global variable is present = script was already loaded
                this.zone.run((/**
                 * @return {?}
                 */
                function () {
                    onReady(existingGlobalVar);
                }));
                return;
            }
            // prepare script elem
            /** @type {?} */
            var scriptElem = document.createElement('script');
            scriptElem.id = this.getElemId(globalVar);
            scriptElem.innerHTML = '';
            scriptElem.onload = (/**
             * @return {?}
             */
            function () {
                _this.zone.run((/**
                 * @return {?}
                 */
                function () {
                    onReady(((/** @type {?} */ (window)))[globalVar]);
                }));
            });
            scriptElem.onerror = (/**
             * @return {?}
             */
            function () {
                _this.zone.run((/**
                 * @return {?}
                 */
                function () {
                    onError();
                }));
            });
            scriptElem.src = url;
            scriptElem.async = true;
            scriptElem.defer = true;
            // add script to header
            document.getElementsByTagName('head')[0].appendChild(scriptElem);
        };
        /**
         * @param {?} globalVar
         * @return {?}
         */
        ScriptService.prototype.cleanup = /**
         * @param {?} globalVar
         * @return {?}
         */
        function (globalVar) {
            // remove script from DOM
            /** @type {?} */
            var scriptElem = document.getElementById(this.getElemId(globalVar));
            if (scriptElem) {
                scriptElem.remove();
            }
        };
        /**
         * @private
         * @param {?} globalVar
         * @return {?}
         */
        ScriptService.prototype.getElemId = /**
         * @private
         * @param {?} globalVar
         * @return {?}
         */
        function (globalVar) {
            return "ngx-paypal-script-elem-" + globalVar;
        };
        ScriptService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ScriptService.ctorParameters = function () { return [
            { type: core.NgZone }
        ]; };
        return ScriptService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PayPalScriptService = /** @class */ (function () {
        function PayPalScriptService(scriptService) {
            this.scriptService = scriptService;
            this.paypalWindowName = 'paypal';
        }
        /**
         * @param {?} config
         * @param {?} onReady
         * @param {?} onError
         * @return {?}
         */
        PayPalScriptService.prototype.registerPayPalScript = /**
         * @param {?} config
         * @param {?} onReady
         * @param {?} onError
         * @return {?}
         */
        function (config, onReady, onError) {
            this.scriptService.registerScript(this.getUrlForConfig(config), this.paypalWindowName, onReady, onError);
        };
        /**
         * @return {?}
         */
        PayPalScriptService.prototype.destroyPayPalScript = /**
         * @return {?}
         */
        function () {
            this.scriptService.cleanup(this.paypalWindowName);
        };
        /**
         * @private
         * @param {?} config
         * @return {?}
         */
        PayPalScriptService.prototype.getUrlForConfig = /**
         * @private
         * @param {?} config
         * @return {?}
         */
        function (config) {
            /** @type {?} */
            var params = [
                {
                    name: 'client-id',
                    value: config.clientId
                }
            ];
            if (config.currency) {
                params.push({
                    name: 'currency',
                    value: config.currency
                });
            }
            if (config.commit) {
                params.push({
                    name: 'commit',
                    value: config.commit
                });
            }
            if (config.extraParams) {
                params.push.apply(params, __spread(config.extraParams));
            }
            return "https://www.paypal.com/sdk/js" + this.getQueryString(params);
        };
        /**
         * @private
         * @param {?} queryParams
         * @return {?}
         */
        PayPalScriptService.prototype.getQueryString = /**
         * @private
         * @param {?} queryParams
         * @return {?}
         */
        function (queryParams) {
            /** @type {?} */
            var queryString = '';
            for (var i = 0; i < queryParams.length; i++) {
                /** @type {?} */
                var queryParam = queryParams[i];
                if (i === 0) {
                    queryString += '?';
                }
                else {
                    queryString += '&';
                }
                queryString += queryParam.name + "=" + queryParam.value;
            }
            return queryString;
        };
        PayPalScriptService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        PayPalScriptService.ctorParameters = function () { return [
            { type: ScriptService }
        ]; };
        return PayPalScriptService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxPaypalComponent = /** @class */ (function () {
        function NgxPaypalComponent(paypalScriptService, cdr, ngZone) {
            this.paypalScriptService = paypalScriptService;
            this.cdr = cdr;
            this.ngZone = ngZone;
            /**
             * If enabled, paypal SDK script will be loaded. Useful if you want to have multiple PayPal components on the same page
             * sharing base configuration. In such a case only a single component may register script.
             */
            this.registerScript = true;
            /**
             * Emitted when paypal script is loaded
             */
            this.scriptLoaded = new core.EventEmitter();
            this.scriptLoadError = new core.EventEmitter();
            this.ngUnsubscribe = new rxjs.Subject();
            /**
             * Flag that indicates if paypal should be initialized (required for handling script load events and availability of DOM element)
             */
            this.initializePayPal = true;
        }
        Object.defineProperty(NgxPaypalComponent.prototype, "payPalButtonContainer", {
            set: /**
             * @param {?} content
             * @return {?}
             */
            function (content) {
                this.payPalButtonContainerElem = content;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        NgxPaypalComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            var _this = this;
            if (!this.payPalButtonContainerId) {
                this.payPalButtonContainerId = this.generateElementId();
            }
            // first time config setup
            /** @type {?} */
            var config = this.config;
            if (changes.config.isFirstChange()) {
                if (config && this.registerScript) {
                    this.initPayPalScript(config, (/**
                     * @param {?} payPal
                     * @return {?}
                     */
                    function (payPal) {
                        // store reference to paypal global script
                        _this.payPal = payPal;
                        _this.doPayPalCheck();
                    }));
                }
            }
            // changes to config
            if (!changes.config.isFirstChange()) {
                this.reinitialize(config);
            }
        };
        /**
         * @return {?}
         */
        NgxPaypalComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.paypalScriptService.destroyPayPalScript();
            this.ngUnsubscribe.next();
            this.ngUnsubscribe.complete();
        };
        /**
         * @return {?}
         */
        NgxPaypalComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this.doPayPalCheck();
        };
        /**
         * @param {?} payPal
         * @return {?}
         */
        NgxPaypalComponent.prototype.customInit = /**
         * @param {?} payPal
         * @return {?}
         */
        function (payPal) {
            this.payPal = payPal;
            this.doPayPalCheck();
        };
        /**
         * @param {?} config
         * @return {?}
         */
        NgxPaypalComponent.prototype.reinitialize = /**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            var _this = this;
            this.config = config;
            this.payPal = undefined;
            this.paypalScriptService.destroyPayPalScript();
            this.payPalButtonContainerId = this.generateElementId();
            this.initializePayPal = true;
            if (this.payPalButtonContainerElem) {
                while (this.payPalButtonContainerElem.nativeElement.firstChild) {
                    this.payPalButtonContainerElem.nativeElement.removeChild(this.payPalButtonContainerElem.nativeElement.firstChild);
                }
            }
            this.cdr.detectChanges();
            if (this.config) {
                if (!this.payPal) {
                    this.initPayPalScript(this.config, (/**
                     * @param {?} payPal
                     * @return {?}
                     */
                    function (payPal) {
                        // store reference to paypal global script
                        _this.payPal = payPal;
                        _this.doPayPalCheck();
                    }));
                }
                else {
                    this.doPayPalCheck();
                }
            }
        };
        /**
         * @private
         * @return {?}
         */
        NgxPaypalComponent.prototype.doPayPalCheck = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.initializePayPal && this.config && this.payPal && this.payPalButtonContainerElem) {
                // make sure that id is also set
                if (this.payPalButtonContainerElem.nativeElement.id) {
                    this.initializePayPal = false;
                    this.initPayPal(this.config, this.payPal);
                }
            }
        };
        /**
         * @private
         * @param {?} config
         * @param {?} initPayPal
         * @return {?}
         */
        NgxPaypalComponent.prototype.initPayPalScript = /**
         * @private
         * @param {?} config
         * @param {?} initPayPal
         * @return {?}
         */
        function (config, initPayPal) {
            var _this = this;
            this.paypalScriptService.registerPayPalScript({
                clientId: config.clientId,
                commit: config.advanced && config.advanced.commit ? config.advanced.commit : undefined,
                currency: config.currency,
                extraParams: config.advanced && config.advanced.extraQueryParams ? config.advanced.extraQueryParams : []
            }, (/**
             * @param {?} paypal
             * @return {?}
             */
            function (paypal) {
                _this.scriptLoaded.next(paypal);
                initPayPal(paypal);
            }), (/**
             * @return {?}
             */
            function () {
                _this.scriptLoadError.emit(true);
            }));
        };
        /**
         * @private
         * @return {?}
         */
        NgxPaypalComponent.prototype.generateElementId = /**
         * @private
         * @return {?}
         */
        function () {
            return "ngx-captcha-id-" + new Date().valueOf();
        };
        /**
         * @private
         * @param {?} config
         * @param {?} paypal
         * @return {?}
         */
        NgxPaypalComponent.prototype.initPayPal = /**
         * @private
         * @param {?} config
         * @param {?} paypal
         * @return {?}
         */
        function (config, paypal) {
            var _this = this;
            // Running outside angular zone prevents infinite ngDoCheck lifecycle calls
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                // https://developer.paypal.com/docs/checkout/integrate/#2-add-the-paypal-script-to-your-web-page
                paypal.Buttons({
                    style: config.style,
                    createOrder: (/**
                     * @param {?} data
                     * @param {?} actions
                     * @return {?}
                     */
                    function (data, actions) {
                        return _this.ngZone.run((/**
                         * @return {?}
                         */
                        function () {
                            if (config.createOrderOnClient && config.createOrderOnServer) {
                                throw Error("Both 'createOrderOnClient' and 'createOrderOnServer' are defined.\n                        Please choose one or the other.");
                            }
                            if (!config.createOrderOnClient && !config.createOrderOnServer) {
                                throw Error("Neither 'createOrderOnClient' or 'createOrderOnServer' are defined.\n                        Please define one of these to create order.");
                            }
                            if (config.createOrderOnClient) {
                                return actions.order.create(config.createOrderOnClient(data));
                            }
                            if (config.createOrderOnServer) {
                                return config.createOrderOnServer(data);
                            }
                            throw Error("Invalid state for 'createOrder'.");
                        }));
                    }),
                    onApprove: (/**
                     * @param {?} data
                     * @param {?} actions
                     * @return {?}
                     */
                    function (data, actions) {
                        return _this.ngZone.run((/**
                         * @return {?}
                         */
                        function () {
                            if (config.onApprove) {
                                config.onApprove(data, actions);
                            }
                            // capture on server
                            if (config.authorizeOnServer) {
                                return config.authorizeOnServer(data, actions);
                            }
                            // capture on client
                            /** @type {?} */
                            var onClientAuthorization = config.onClientAuthorization;
                            if (onClientAuthorization) {
                                actions.order.capture().then((/**
                                 * @param {?} details
                                 * @return {?}
                                 */
                                function (details) {
                                    onClientAuthorization(details);
                                }));
                                return;
                            }
                        }));
                    }),
                    onError: (/**
                     * @param {?} error
                     * @return {?}
                     */
                    function (error) {
                        _this.ngZone.run((/**
                         * @return {?}
                         */
                        function () {
                            if (config.onError) {
                                config.onError(error);
                            }
                        }));
                    }),
                    onCancel: (/**
                     * @param {?} data
                     * @param {?} actions
                     * @return {?}
                     */
                    function (data, actions) {
                        _this.ngZone.run((/**
                         * @return {?}
                         */
                        function () {
                            if (config.onCancel) {
                                config.onCancel(data, actions);
                            }
                        }));
                    }),
                    onShippingChange: (/**
                     * @param {?} data
                     * @param {?} actions
                     * @return {?}
                     */
                    function (data, actions) {
                        return _this.ngZone.run((/**
                         * @return {?}
                         */
                        function () {
                            if (config.onShippingChange) {
                                return config.onShippingChange(data, actions);
                            }
                        }));
                    }),
                    onClick: (/**
                     * @param {?} data
                     * @param {?} actions
                     * @return {?}
                     */
                    function (data, actions) {
                        _this.ngZone.run((/**
                         * @return {?}
                         */
                        function () {
                            if (config.onClick) {
                                config.onClick(data, actions);
                            }
                        }));
                    }),
                    onInit: (/**
                     * @param {?} data
                     * @param {?} actions
                     * @return {?}
                     */
                    function (data, actions) {
                        _this.ngZone.run((/**
                         * @return {?}
                         */
                        function () {
                            if (config.onInit) {
                                config.onInit(data, actions);
                            }
                        }));
                    })
                }).render("#" + _this.payPalButtonContainerId);
            }));
        };
        NgxPaypalComponent.decorators = [
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        selector: 'ngx-paypal',
                        template: "\n    <div #payPalButtonContainer [id]=\"payPalButtonContainerId\"></div>\n    "
                    }] }
        ];
        /** @nocollapse */
        NgxPaypalComponent.ctorParameters = function () { return [
            { type: PayPalScriptService },
            { type: core.ChangeDetectorRef },
            { type: core.NgZone }
        ]; };
        NgxPaypalComponent.propDecorators = {
            config: [{ type: core.Input }],
            registerScript: [{ type: core.Input }],
            scriptLoaded: [{ type: core.Output }],
            scriptLoadError: [{ type: core.Output }],
            payPalButtonContainer: [{ type: core.ViewChild, args: ['payPalButtonContainer', { static: false },] }]
        };
        return NgxPaypalComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxPayPalModule = /** @class */ (function () {
        function NgxPayPalModule() {
        }
        NgxPayPalModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            NgxPaypalComponent,
                        ],
                        exports: [
                            NgxPaypalComponent,
                        ],
                        providers: [
                            ScriptService,
                            PayPalScriptService
                        ]
                    },] }
        ];
        return NgxPayPalModule;
    }());

    exports.NgxPayPalModule = NgxPayPalModule;
    exports.NgxPaypalComponent = NgxPaypalComponent;
    exports.PayPalScriptService = PayPalScriptService;
    exports.ɵa = ScriptService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-paypal.umd.js.map
