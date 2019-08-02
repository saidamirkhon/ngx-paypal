import { CommonModule } from '@angular/common';
import { Injectable, NgZone, EventEmitter, Component, ChangeDetectionStrategy, ChangeDetectorRef, Input, Output, ViewChild, NgModule } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ScriptService {
    /**
     * @param {?} zone
     */
    constructor(zone) {
        this.zone = zone;
    }
    /**
     * @param {?} url
     * @param {?} globalVar
     * @param {?} onReady
     * @param {?} onError
     * @return {?}
     */
    registerScript(url, globalVar, onReady, onError) {
        /** @type {?} */
        const existingGlobalVar = ((/** @type {?} */ (window)))[globalVar];
        if (existingGlobalVar) {
            // global variable is present = script was already loaded
            this.zone.run((/**
             * @return {?}
             */
            () => {
                onReady(existingGlobalVar);
            }));
            return;
        }
        // prepare script elem
        /** @type {?} */
        const scriptElem = document.createElement('script');
        scriptElem.id = this.getElemId(globalVar);
        scriptElem.innerHTML = '';
        scriptElem.onload = (/**
         * @return {?}
         */
        () => {
            this.zone.run((/**
             * @return {?}
             */
            () => {
                onReady(((/** @type {?} */ (window)))[globalVar]);
            }));
        });
        scriptElem.onerror = (/**
         * @return {?}
         */
        () => {
            this.zone.run((/**
             * @return {?}
             */
            () => {
                onError();
            }));
        });
        scriptElem.src = url;
        scriptElem.async = true;
        scriptElem.defer = true;
        // add script to header
        document.getElementsByTagName('head')[0].appendChild(scriptElem);
    }
    /**
     * @param {?} globalVar
     * @return {?}
     */
    cleanup(globalVar) {
        // remove script from DOM
        /** @type {?} */
        const scriptElem = document.getElementById(this.getElemId(globalVar));
        if (scriptElem) {
            scriptElem.remove();
        }
    }
    /**
     * @private
     * @param {?} globalVar
     * @return {?}
     */
    getElemId(globalVar) {
        return `ngx-paypal-script-elem-${globalVar}`;
    }
}
ScriptService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ScriptService.ctorParameters = () => [
    { type: NgZone }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PayPalScriptService {
    /**
     * @param {?} scriptService
     */
    constructor(scriptService) {
        this.scriptService = scriptService;
        this.paypalWindowName = 'paypal';
    }
    /**
     * @param {?} config
     * @param {?} onReady
     * @param {?} onError
     * @return {?}
     */
    registerPayPalScript(config, onReady, onError) {
        this.scriptService.registerScript(this.getUrlForConfig(config), this.paypalWindowName, onReady, onError);
    }
    /**
     * @return {?}
     */
    destroyPayPalScript() {
        this.scriptService.cleanup(this.paypalWindowName);
    }
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    getUrlForConfig(config) {
        /** @type {?} */
        const params = [
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
            params.push(...config.extraParams);
        }
        return `https://www.paypal.com/sdk/js${this.getQueryString(params)}`;
    }
    /**
     * @private
     * @param {?} queryParams
     * @return {?}
     */
    getQueryString(queryParams) {
        /** @type {?} */
        let queryString = '';
        for (let i = 0; i < queryParams.length; i++) {
            /** @type {?} */
            const queryParam = queryParams[i];
            if (i === 0) {
                queryString += '?';
            }
            else {
                queryString += '&';
            }
            queryString += `${queryParam.name}=${queryParam.value}`;
        }
        return queryString;
    }
}
PayPalScriptService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PayPalScriptService.ctorParameters = () => [
    { type: ScriptService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxPaypalComponent {
    /**
     * @param {?} paypalScriptService
     * @param {?} cdr
     * @param {?} ngZone
     */
    constructor(paypalScriptService, cdr, ngZone) {
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
        this.scriptLoaded = new EventEmitter();
        this.scriptLoadError = new EventEmitter();
        this.ngUnsubscribe = new Subject();
        /**
         * Flag that indicates if paypal should be initialized (required for handling script load events and availability of DOM element)
         */
        this.initializePayPal = true;
    }
    /**
     * @param {?} content
     * @return {?}
     */
    set payPalButtonContainer(content) {
        this.payPalButtonContainerElem = content;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this.payPalButtonContainerId) {
            this.payPalButtonContainerId = this.generateElementId();
        }
        // first time config setup
        /** @type {?} */
        const config = this.config;
        if (changes.config.isFirstChange()) {
            if (config && this.registerScript) {
                this.initPayPalScript(config, (/**
                 * @param {?} payPal
                 * @return {?}
                 */
                (payPal) => {
                    // store reference to paypal global script
                    this.payPal = payPal;
                    this.doPayPalCheck();
                }));
            }
        }
        // changes to config
        if (!changes.config.isFirstChange()) {
            this.reinitialize(config);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.paypalScriptService.destroyPayPalScript();
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.doPayPalCheck();
    }
    /**
     * @param {?} payPal
     * @return {?}
     */
    customInit(payPal) {
        this.payPal = payPal;
        this.doPayPalCheck();
    }
    /**
     * @param {?} config
     * @return {?}
     */
    reinitialize(config) {
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
                (payPal) => {
                    // store reference to paypal global script
                    this.payPal = payPal;
                    this.doPayPalCheck();
                }));
            }
            else {
                this.doPayPalCheck();
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    doPayPalCheck() {
        if (this.initializePayPal && this.config && this.payPal && this.payPalButtonContainerElem) {
            // make sure that id is also set
            if (this.payPalButtonContainerElem.nativeElement.id) {
                this.initializePayPal = false;
                this.initPayPal(this.config, this.payPal);
            }
        }
    }
    /**
     * @private
     * @param {?} config
     * @param {?} initPayPal
     * @return {?}
     */
    initPayPalScript(config, initPayPal) {
        this.paypalScriptService.registerPayPalScript({
            clientId: config.clientId,
            commit: config.advanced && config.advanced.commit ? config.advanced.commit : undefined,
            currency: config.currency,
            extraParams: config.advanced && config.advanced.extraQueryParams ? config.advanced.extraQueryParams : []
        }, (/**
         * @param {?} paypal
         * @return {?}
         */
        (paypal) => {
            this.scriptLoaded.next(paypal);
            initPayPal(paypal);
        }), (/**
         * @return {?}
         */
        () => {
            this.scriptLoadError.emit(true);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    generateElementId() {
        return `ngx-captcha-id-${new Date().valueOf()}`;
    }
    /**
     * @private
     * @param {?} config
     * @param {?} paypal
     * @return {?}
     */
    initPayPal(config, paypal) {
        // Running outside angular zone prevents infinite ngDoCheck lifecycle calls
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            // https://developer.paypal.com/docs/checkout/integrate/#2-add-the-paypal-script-to-your-web-page
            paypal.Buttons({
                style: config.style,
                createOrder: (/**
                 * @param {?} data
                 * @param {?} actions
                 * @return {?}
                 */
                (data, actions) => {
                    return this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        if (config.createOrderOnClient && config.createOrderOnServer) {
                            throw Error(`Both 'createOrderOnClient' and 'createOrderOnServer' are defined.
                        Please choose one or the other.`);
                        }
                        if (!config.createOrderOnClient && !config.createOrderOnServer) {
                            throw Error(`Neither 'createOrderOnClient' or 'createOrderOnServer' are defined.
                        Please define one of these to create order.`);
                        }
                        if (config.createOrderOnClient) {
                            return actions.order.create(config.createOrderOnClient(data));
                        }
                        if (config.createOrderOnServer) {
                            return config.createOrderOnServer(data);
                        }
                        throw Error(`Invalid state for 'createOrder'.`);
                    }));
                }),
                onApprove: (/**
                 * @param {?} data
                 * @param {?} actions
                 * @return {?}
                 */
                (data, actions) => {
                    return this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        if (config.onApprove) {
                            config.onApprove(data, actions);
                        }
                        // capture on server
                        if (config.authorizeOnServer) {
                            return config.authorizeOnServer(data, actions);
                        }
                        // capture on client
                        /** @type {?} */
                        const onClientAuthorization = config.onClientAuthorization;
                        if (onClientAuthorization) {
                            actions.order.capture().then((/**
                             * @param {?} details
                             * @return {?}
                             */
                            (details) => {
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
                (error) => {
                    this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
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
                (data, actions) => {
                    this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
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
                (data, actions) => {
                    return this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
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
                (data, actions) => {
                    this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
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
                (data, actions) => {
                    this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        if (config.onInit) {
                            config.onInit(data, actions);
                        }
                    }));
                })
            }).render(`#${this.payPalButtonContainerId}`);
        }));
    }
}
NgxPaypalComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'ngx-paypal',
                template: `
    <div #payPalButtonContainer [id]="payPalButtonContainerId"></div>
    `
            }] }
];
/** @nocollapse */
NgxPaypalComponent.ctorParameters = () => [
    { type: PayPalScriptService },
    { type: ChangeDetectorRef },
    { type: NgZone }
];
NgxPaypalComponent.propDecorators = {
    config: [{ type: Input }],
    registerScript: [{ type: Input }],
    scriptLoaded: [{ type: Output }],
    scriptLoadError: [{ type: Output }],
    payPalButtonContainer: [{ type: ViewChild, args: ['payPalButtonContainer', { static: false },] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxPayPalModule {
}
NgxPayPalModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxPayPalModule, NgxPaypalComponent, PayPalScriptService, ScriptService as ɵa };
//# sourceMappingURL=ngx-paypal.js.map
