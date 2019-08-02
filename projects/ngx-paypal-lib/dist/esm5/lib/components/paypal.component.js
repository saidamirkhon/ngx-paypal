/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Output, ViewChild, } from '@angular/core';
import { Subject } from 'rxjs';
import { PayPalScriptService } from '../services/paypal-script.service';
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
        this.scriptLoaded = new EventEmitter();
        this.scriptLoadError = new EventEmitter();
        this.ngUnsubscribe = new Subject();
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
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'ngx-paypal',
                    template: "\n    <div #payPalButtonContainer [id]=\"payPalButtonContainerId\"></div>\n    "
                }] }
    ];
    /** @nocollapse */
    NgxPaypalComponent.ctorParameters = function () { return [
        { type: PayPalScriptService },
        { type: ChangeDetectorRef },
        { type: NgZone }
    ]; };
    NgxPaypalComponent.propDecorators = {
        config: [{ type: Input }],
        registerScript: [{ type: Input }],
        scriptLoaded: [{ type: Output }],
        scriptLoadError: [{ type: Output }],
        payPalButtonContainer: [{ type: ViewChild, args: ['payPalButtonContainer', { static: false },] }]
    };
    return NgxPaypalComponent;
}());
export { NgxPaypalComponent };
if (false) {
    /**
     * Configuration for paypal.
     * @type {?}
     */
    NgxPaypalComponent.prototype.config;
    /**
     * If enabled, paypal SDK script will be loaded. Useful if you want to have multiple PayPal components on the same page
     * sharing base configuration. In such a case only a single component may register script.
     * @type {?}
     */
    NgxPaypalComponent.prototype.registerScript;
    /**
     * Emitted when paypal script is loaded
     * @type {?}
     */
    NgxPaypalComponent.prototype.scriptLoaded;
    /** @type {?} */
    NgxPaypalComponent.prototype.scriptLoadError;
    /**
     * Id of the element where PayPal button will be rendered
     * @type {?}
     */
    NgxPaypalComponent.prototype.payPalButtonContainerId;
    /**
     * @type {?}
     * @private
     */
    NgxPaypalComponent.prototype.ngUnsubscribe;
    /**
     * @type {?}
     * @private
     */
    NgxPaypalComponent.prototype.payPalButtonContainerElem;
    /**
     * Flag that indicates if paypal should be initialized (required for handling script load events and availability of DOM element)
     * @type {?}
     * @private
     */
    NgxPaypalComponent.prototype.initializePayPal;
    /**
     * Reference to PayPal global API
     * @type {?}
     * @private
     */
    NgxPaypalComponent.prototype.payPal;
    /**
     * @type {?}
     * @private
     */
    NgxPaypalComponent.prototype.paypalScriptService;
    /**
     * @type {?}
     * @private
     */
    NgxPaypalComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NgxPaypalComponent.prototype.ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1wYXlwYWwvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wYXlwYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUgsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUdOLE1BQU0sRUFFTixTQUFTLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQWUvQixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUV4RTtJQWdESSw0QkFDWSxtQkFBd0MsRUFDeEMsR0FBc0IsRUFDdEIsTUFBYztRQUZkLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTs7Ozs7UUFqQ2pCLG1CQUFjLEdBQVksSUFBSSxDQUFDOzs7O1FBSzlCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN2QyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFPdkMsa0JBQWEsR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQzs7OztRQVU1RCxxQkFBZ0IsR0FBWSxJQUFJLENBQUM7SUFZekMsQ0FBQztJQW5CRCxzQkFBMkQscURBQXFCOzs7OztRQUFoRixVQUFpRixPQUFtQjtZQUNoRyxJQUFJLENBQUMseUJBQXlCLEdBQUcsT0FBTyxDQUFDO1FBQzdDLENBQUM7OztPQUFBOzs7OztJQW1CRCx3Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFBbEMsaUJBc0JDO1FBckJHLElBQUksQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDL0IsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUks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SUFFcEUsdURBQStDOzs7Ozs7SUFRL0MsOENBQXlDOzs7Ozs7SUFLekMsb0NBQW9COzs7OztJQUdoQixpREFBZ0Q7Ozs7O0lBQ2hELGlDQUE4Qjs7Ozs7SUFDOUIsb0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIEFmdGVyVmlld0luaXQsXHJcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICAgIENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIElucHV0LFxyXG4gICAgTmdab25lLFxyXG4gICAgT25DaGFuZ2VzLFxyXG4gICAgT25EZXN0cm95LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgU2ltcGxlQ2hhbmdlcyxcclxuICAgIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIElDYW5jZWxDYWxsYmFja0RhdGEsXHJcbiAgICBJQ2xpZW50QXV0aG9yaXplQ2FsbGJhY2tEYXRhLFxyXG4gICAgSUNyZWF0ZU9yZGVyQ2FsbGJhY2tBY3Rpb25zLFxyXG4gICAgSUluaXRDYWxsYmFja0RhdGEsXHJcbiAgICBJT25BcHByb3ZlQ2FsbGJhY2tBY3Rpb25zLFxyXG4gICAgSU9uQXBwcm92ZUNhbGxiYWNrRGF0YSxcclxuICAgIElPbkNsaWNrQ2FsbGJhY2tBY3Rpb25zLFxyXG4gICAgSU9uSW5pdENhbGxiYWNrQWN0aW9ucyxcclxuICAgIElPblNoaXBwaW5nQ2hhbmdlQWN0aW9ucyxcclxuICAgIElPblNoaXBwaW5nQ2hhbmdlRGF0YSxcclxuICAgIElQYXlQYWxDb25maWcsXHJcbn0gZnJvbSAnLi4vbW9kZWxzL3BheXBhbC1tb2RlbHMnO1xyXG5pbXBvcnQgeyBQYXlQYWxTY3JpcHRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcGF5cGFsLXNjcmlwdC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgICBzZWxlY3RvcjogJ25neC1wYXlwYWwnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgI3BheVBhbEJ1dHRvbkNvbnRhaW5lciBbaWRdPVwicGF5UGFsQnV0dG9uQ29udGFpbmVySWRcIj48L2Rpdj5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIE5neFBheXBhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbmZpZ3VyYXRpb24gZm9yIHBheXBhbC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgY29uZmlnPzogSVBheVBhbENvbmZpZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIElmIGVuYWJsZWQsIHBheXBhbCBTREsgc2NyaXB0IHdpbGwgYmUgbG9hZGVkLiBVc2VmdWwgaWYgeW91IHdhbnQgdG8gaGF2ZSBtdWx0aXBsZSBQYXlQYWwgY29tcG9uZW50cyBvbiB0aGUgc2FtZSBwYWdlXHJcbiAgICAgKiBzaGFyaW5nIGJhc2UgY29uZmlndXJhdGlvbi4gSW4gc3VjaCBhIGNhc2Ugb25seSBhIHNpbmdsZSBjb21wb25lbnQgbWF5IHJlZ2lzdGVyIHNjcmlwdC5cclxuICAgICAqL1xyXG4gICAgQElucHV0KCkgcmVnaXN0ZXJTY3JpcHQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRW1pdHRlZCB3aGVuIHBheXBhbCBzY3JpcHQgaXMgbG9hZGVkXHJcbiAgICAgKi9cclxuICAgIEBPdXRwdXQoKSBzY3JpcHRMb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIEBPdXRwdXQoKSBzY3JpcHRMb2FkRXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJZCBvZiB0aGUgZWxlbWVudCB3aGVyZSBQYXlQYWwgYnV0dG9uIHdpbGwgYmUgcmVuZGVyZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBheVBhbEJ1dHRvbkNvbnRhaW5lcklkPzogc3RyaW5nO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbmdVbnN1YnNjcmliZTogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBwYXlQYWxCdXR0b25Db250YWluZXJFbGVtPzogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoJ3BheVBhbEJ1dHRvbkNvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSB9KSBzZXQgcGF5UGFsQnV0dG9uQ29udGFpbmVyKGNvbnRlbnQ6IEVsZW1lbnRSZWYpIHtcclxuICAgICAgICB0aGlzLnBheVBhbEJ1dHRvbkNvbnRhaW5lckVsZW0gPSBjb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmxhZyB0aGF0IGluZGljYXRlcyBpZiBwYXlwYWwgc2hvdWxkIGJlIGluaXRpYWxpemVkIChyZXF1aXJlZCBmb3IgaGFuZGxpbmcgc2NyaXB0IGxvYWQgZXZlbnRzIGFuZCBhdmFpbGFiaWxpdHkgb2YgRE9NIGVsZW1lbnQpXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZVBheVBhbDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZWZlcmVuY2UgdG8gUGF5UGFsIGdsb2JhbCBBUElcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBwYXlQYWw6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHBheXBhbFNjcmlwdFNlcnZpY2U6IFBheVBhbFNjcmlwdFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmVcclxuICAgICkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMucGF5UGFsQnV0dG9uQ29udGFpbmVySWQpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXlQYWxCdXR0b25Db250YWluZXJJZCA9IHRoaXMuZ2VuZXJhdGVFbGVtZW50SWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGZpcnN0IHRpbWUgY29uZmlnIHNldHVwXHJcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5jb25maWc7XHJcblxyXG4gICAgICAgIGlmIChjaGFuZ2VzLmNvbmZpZy5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgICAgICAgaWYgKGNvbmZpZyAmJiB0aGlzLnJlZ2lzdGVyU2NyaXB0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRQYXlQYWxTY3JpcHQoY29uZmlnLCAocGF5UGFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RvcmUgcmVmZXJlbmNlIHRvIHBheXBhbCBnbG9iYWwgc2NyaXB0XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXlQYWwgPSBwYXlQYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb1BheVBhbENoZWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2hhbmdlcyB0byBjb25maWdcclxuICAgICAgICBpZiAoIWNoYW5nZXMuY29uZmlnLmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlaW5pdGlhbGl6ZShjb25maWcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBheXBhbFNjcmlwdFNlcnZpY2UuZGVzdHJveVBheVBhbFNjcmlwdCgpO1xyXG4gICAgICAgIHRoaXMubmdVbnN1YnNjcmliZS5uZXh0KCk7XHJcbiAgICAgICAgdGhpcy5uZ1Vuc3Vic2NyaWJlLmNvbXBsZXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZG9QYXlQYWxDaGVjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIGN1c3RvbUluaXQocGF5UGFsOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBheVBhbCA9IHBheVBhbDtcclxuICAgICAgICB0aGlzLmRvUGF5UGFsQ2hlY2soKTtcclxuICAgIH1cclxuXHJcbiAgICByZWluaXRpYWxpemUoY29uZmlnOiBJUGF5UGFsQ29uZmlnIHwgdW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgICAgICAgdGhpcy5wYXlQYWwgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5wYXlwYWxTY3JpcHRTZXJ2aWNlLmRlc3Ryb3lQYXlQYWxTY3JpcHQoKTtcclxuICAgICAgICB0aGlzLnBheVBhbEJ1dHRvbkNvbnRhaW5lcklkID0gdGhpcy5nZW5lcmF0ZUVsZW1lbnRJZCgpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVBheVBhbCA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBheVBhbEJ1dHRvbkNvbnRhaW5lckVsZW0pIHtcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMucGF5UGFsQnV0dG9uQ29udGFpbmVyRWxlbS5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGF5UGFsQnV0dG9uQ29udGFpbmVyRWxlbS5uYXRpdmVFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMucGF5UGFsQnV0dG9uQ29udGFpbmVyRWxlbS5uYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucGF5UGFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRQYXlQYWxTY3JpcHQodGhpcy5jb25maWcsIChwYXlQYWwpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RvcmUgcmVmZXJlbmNlIHRvIHBheXBhbCBnbG9iYWwgc2NyaXB0XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXlQYWwgPSBwYXlQYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb1BheVBhbENoZWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZG9QYXlQYWxDaGVjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGRvUGF5UGFsQ2hlY2soKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5pdGlhbGl6ZVBheVBhbCAmJiB0aGlzLmNvbmZpZyAmJiB0aGlzLnBheVBhbCAmJiB0aGlzLnBheVBhbEJ1dHRvbkNvbnRhaW5lckVsZW0pIHtcclxuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHRoYXQgaWQgaXMgYWxzbyBzZXRcclxuICAgICAgICAgICAgaWYgKHRoaXMucGF5UGFsQnV0dG9uQ29udGFpbmVyRWxlbS5uYXRpdmVFbGVtZW50LmlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemVQYXlQYWwgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFBheVBhbCh0aGlzLmNvbmZpZywgdGhpcy5wYXlQYWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdFBheVBhbFNjcmlwdChjb25maWc6IElQYXlQYWxDb25maWcsIGluaXRQYXlQYWw6IChwYXlwYWw6IGFueSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGF5cGFsU2NyaXB0U2VydmljZS5yZWdpc3RlclBheVBhbFNjcmlwdCh7XHJcbiAgICAgICAgICAgIGNsaWVudElkOiBjb25maWcuY2xpZW50SWQsXHJcbiAgICAgICAgICAgIGNvbW1pdDogY29uZmlnLmFkdmFuY2VkICYmIGNvbmZpZy5hZHZhbmNlZC5jb21taXQgPyBjb25maWcuYWR2YW5jZWQuY29tbWl0IDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBjdXJyZW5jeTogY29uZmlnLmN1cnJlbmN5LFxyXG4gICAgICAgICAgICBleHRyYVBhcmFtczogY29uZmlnLmFkdmFuY2VkICYmIGNvbmZpZy5hZHZhbmNlZC5leHRyYVF1ZXJ5UGFyYW1zID8gY29uZmlnLmFkdmFuY2VkLmV4dHJhUXVlcnlQYXJhbXMgOiBbXVxyXG4gICAgICAgIH0sIChwYXlwYWwpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zY3JpcHRMb2FkZWQubmV4dChwYXlwYWwpO1xyXG4gICAgICAgICAgICBpbml0UGF5UGFsKHBheXBhbCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zY3JpcHRMb2FkRXJyb3IuZW1pdCh0cnVlKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2VuZXJhdGVFbGVtZW50SWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYG5neC1jYXB0Y2hhLWlkLSR7bmV3IERhdGUoKS52YWx1ZU9mKCl9YDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRQYXlQYWwoY29uZmlnOiBJUGF5UGFsQ29uZmlnLCBwYXlwYWw6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIFJ1bm5pbmcgb3V0c2lkZSBhbmd1bGFyIHpvbmUgcHJldmVudHMgaW5maW5pdGUgbmdEb0NoZWNrIGxpZmVjeWNsZSBjYWxsc1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIucGF5cGFsLmNvbS9kb2NzL2NoZWNrb3V0L2ludGVncmF0ZS8jMi1hZGQtdGhlLXBheXBhbC1zY3JpcHQtdG8teW91ci13ZWItcGFnZVxyXG4gICAgICAgICAgICBwYXlwYWwuQnV0dG9ucyh7XHJcbiAgICAgICAgICAgICAgICBzdHlsZTogY29uZmlnLnN0eWxlLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlT3JkZXI6IChkYXRhOiBhbnksIGFjdGlvbnM6IElDcmVhdGVPcmRlckNhbGxiYWNrQWN0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLmNyZWF0ZU9yZGVyT25DbGllbnQgJiYgY29uZmlnLmNyZWF0ZU9yZGVyT25TZXJ2ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKGBCb3RoICdjcmVhdGVPcmRlck9uQ2xpZW50JyBhbmQgJ2NyZWF0ZU9yZGVyT25TZXJ2ZXInIGFyZSBkZWZpbmVkLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgY2hvb3NlIG9uZSBvciB0aGUgb3RoZXIuYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29uZmlnLmNyZWF0ZU9yZGVyT25DbGllbnQgJiYgIWNvbmZpZy5jcmVhdGVPcmRlck9uU2VydmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihgTmVpdGhlciAnY3JlYXRlT3JkZXJPbkNsaWVudCcgb3IgJ2NyZWF0ZU9yZGVyT25TZXJ2ZXInIGFyZSBkZWZpbmVkLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgZGVmaW5lIG9uZSBvZiB0aGVzZSB0byBjcmVhdGUgb3JkZXIuYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcuY3JlYXRlT3JkZXJPbkNsaWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnMub3JkZXIuY3JlYXRlKGNvbmZpZy5jcmVhdGVPcmRlck9uQ2xpZW50KGRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5jcmVhdGVPcmRlck9uU2VydmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uZmlnLmNyZWF0ZU9yZGVyT25TZXJ2ZXIoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKGBJbnZhbGlkIHN0YXRlIGZvciAnY3JlYXRlT3JkZXInLmApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBvbkFwcHJvdmU6IChkYXRhOiBJT25BcHByb3ZlQ2FsbGJhY2tEYXRhLCBhY3Rpb25zOiBJT25BcHByb3ZlQ2FsbGJhY2tBY3Rpb25zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcub25BcHByb3ZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWcub25BcHByb3ZlKGRhdGEsIGFjdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXB0dXJlIG9uIHNlcnZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLmF1dGhvcml6ZU9uU2VydmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uZmlnLmF1dGhvcml6ZU9uU2VydmVyKGRhdGEsIGFjdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXB0dXJlIG9uIGNsaWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvbkNsaWVudEF1dGhvcml6YXRpb24gPSBjb25maWcub25DbGllbnRBdXRob3JpemF0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob25DbGllbnRBdXRob3JpemF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLm9yZGVyLmNhcHR1cmUoKS50aGVuKChkZXRhaWxzOiBJQ2xpZW50QXV0aG9yaXplQ2FsbGJhY2tEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGllbnRBdXRob3JpemF0aW9uKGRldGFpbHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgb25FcnJvcjogKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLm9uRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZy5vbkVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBvbkNhbmNlbDogKGRhdGE6IElDYW5jZWxDYWxsYmFja0RhdGEsIGFjdGlvbnM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcub25DYW5jZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZy5vbkNhbmNlbChkYXRhLCBhY3Rpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uU2hpcHBpbmdDaGFuZ2U6IChkYXRhOiBJT25TaGlwcGluZ0NoYW5nZURhdGEsIGFjdGlvbnM6IElPblNoaXBwaW5nQ2hhbmdlQWN0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLm9uU2hpcHBpbmdDaGFuZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb25maWcub25TaGlwcGluZ0NoYW5nZShkYXRhLCBhY3Rpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IChkYXRhOiBhbnksIGFjdGlvbnM6IElPbkNsaWNrQ2FsbGJhY2tBY3Rpb25zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5vbkNsaWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWcub25DbGljayhkYXRhLCBhY3Rpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uSW5pdDogKGRhdGE6IElJbml0Q2FsbGJhY2tEYXRhLCBhY3Rpb25zOiBJT25Jbml0Q2FsbGJhY2tBY3Rpb25zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5vbkluaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZy5vbkluaXQoZGF0YSwgYWN0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkucmVuZGVyKGAjJHt0aGlzLnBheVBhbEJ1dHRvbkNvbnRhaW5lcklkfWApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl19