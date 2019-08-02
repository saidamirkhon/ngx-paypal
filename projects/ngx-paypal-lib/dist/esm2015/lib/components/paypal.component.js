/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgZone, Output, ViewChild, } from '@angular/core';
import { Subject } from 'rxjs';
import { PayPalScriptService } from '../services/paypal-script.service';
export class NgxPaypalComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1wYXlwYWwvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wYXlwYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUgsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUdOLE1BQU0sRUFFTixTQUFTLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQWUvQixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQVN4RSxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7SUF5QzNCLFlBQ1ksbUJBQXdDLEVBQ3hDLEdBQXNCLEVBQ3RCLE1BQWM7UUFGZCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7Ozs7O1FBakNqQixtQkFBYyxHQUFZLElBQUksQ0FBQzs7OztRQUs5QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdkMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBT3ZDLGtCQUFhLEdBQWtCLElBQUksT0FBTyxFQUFRLENBQUM7Ozs7UUFVNUQscUJBQWdCLEdBQVksSUFBSSxDQUFDO0lBWXpDLENBQUM7Ozs7O0lBbkJELElBQTJELHFCQUFxQixDQUFDLE9BQW1CO1FBQ2hHLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxPQUFPLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFtQkQsV0FBVyxDQUFDLE9BQXNCO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUU7WUFDL0IsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFB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RDs7Ozs7SUFLeEQscURBQXdDOzs7OztJQUV4QywyQ0FBb0U7Ozs7O0lBRXBFLHVEQUErQzs7Ozs7O0lBUS9DLDhDQUF5Qzs7Ozs7O0lBS3pDLG9DQUFvQjs7Ozs7SUFHaEIsaURBQWdEOzs7OztJQUNoRCxpQ0FBOEI7Ozs7O0lBQzlCLG9DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBBZnRlclZpZXdJbml0LFxyXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIENvbXBvbmVudCxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBJbnB1dCxcclxuICAgIE5nWm9uZSxcclxuICAgIE9uQ2hhbmdlcyxcclxuICAgIE9uRGVzdHJveSxcclxuICAgIE91dHB1dCxcclxuICAgIFNpbXBsZUNoYW5nZXMsXHJcbiAgICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBJQ2FuY2VsQ2FsbGJhY2tEYXRhLFxyXG4gICAgSUNsaWVudEF1dGhvcml6ZUNhbGxiYWNrRGF0YSxcclxuICAgIElDcmVhdGVPcmRlckNhbGxiYWNrQWN0aW9ucyxcclxuICAgIElJbml0Q2FsbGJhY2tEYXRhLFxyXG4gICAgSU9uQXBwcm92ZUNhbGxiYWNrQWN0aW9ucyxcclxuICAgIElPbkFwcHJvdmVDYWxsYmFja0RhdGEsXHJcbiAgICBJT25DbGlja0NhbGxiYWNrQWN0aW9ucyxcclxuICAgIElPbkluaXRDYWxsYmFja0FjdGlvbnMsXHJcbiAgICBJT25TaGlwcGluZ0NoYW5nZUFjdGlvbnMsXHJcbiAgICBJT25TaGlwcGluZ0NoYW5nZURhdGEsXHJcbiAgICBJUGF5UGFsQ29uZmlnLFxyXG59IGZyb20gJy4uL21vZGVscy9wYXlwYWwtbW9kZWxzJztcclxuaW1wb3J0IHsgUGF5UGFsU2NyaXB0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3BheXBhbC1zY3JpcHQuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gICAgc2VsZWN0b3I6ICduZ3gtcGF5cGFsJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2ICNwYXlQYWxCdXR0b25Db250YWluZXIgW2lkXT1cInBheVBhbEJ1dHRvbkNvbnRhaW5lcklkXCI+PC9kaXY+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hQYXlwYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25maWd1cmF0aW9uIGZvciBwYXlwYWwuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpIGNvbmZpZz86IElQYXlQYWxDb25maWc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJZiBlbmFibGVkLCBwYXlwYWwgU0RLIHNjcmlwdCB3aWxsIGJlIGxvYWRlZC4gVXNlZnVsIGlmIHlvdSB3YW50IHRvIGhhdmUgbXVsdGlwbGUgUGF5UGFsIGNvbXBvbmVudHMgb24gdGhlIHNhbWUgcGFnZVxyXG4gICAgICogc2hhcmluZyBiYXNlIGNvbmZpZ3VyYXRpb24uIEluIHN1Y2ggYSBjYXNlIG9ubHkgYSBzaW5nbGUgY29tcG9uZW50IG1heSByZWdpc3RlciBzY3JpcHQuXHJcbiAgICAgKi9cclxuICAgIEBJbnB1dCgpIHJlZ2lzdGVyU2NyaXB0OiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEVtaXR0ZWQgd2hlbiBwYXlwYWwgc2NyaXB0IGlzIGxvYWRlZFxyXG4gICAgICovXHJcbiAgICBAT3V0cHV0KCkgc2NyaXB0TG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBAT3V0cHV0KCkgc2NyaXB0TG9hZEVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSWQgb2YgdGhlIGVsZW1lbnQgd2hlcmUgUGF5UGFsIGJ1dHRvbiB3aWxsIGJlIHJlbmRlcmVkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwYXlQYWxCdXR0b25Db250YWluZXJJZD86IHN0cmluZztcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IG5nVW5zdWJzY3JpYmU6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICAgIHByaXZhdGUgcGF5UGFsQnV0dG9uQ29udGFpbmVyRWxlbT86IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKCdwYXlQYWxCdXR0b25Db250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgc2V0IHBheVBhbEJ1dHRvbkNvbnRhaW5lcihjb250ZW50OiBFbGVtZW50UmVmKSB7XHJcbiAgICAgICAgdGhpcy5wYXlQYWxCdXR0b25Db250YWluZXJFbGVtID0gY29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZsYWcgdGhhdCBpbmRpY2F0ZXMgaWYgcGF5cGFsIHNob3VsZCBiZSBpbml0aWFsaXplZCAocmVxdWlyZWQgZm9yIGhhbmRsaW5nIHNjcmlwdCBsb2FkIGV2ZW50cyBhbmQgYXZhaWxhYmlsaXR5IG9mIERPTSBlbGVtZW50KVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVQYXlQYWw6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVmZXJlbmNlIHRvIFBheVBhbCBnbG9iYWwgQVBJXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcGF5UGFsOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBwYXlwYWxTY3JpcHRTZXJ2aWNlOiBQYXlQYWxTY3JpcHRTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICBwcml2YXRlIG5nWm9uZTogTmdab25lXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBheVBhbEJ1dHRvbkNvbnRhaW5lcklkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGF5UGFsQnV0dG9uQ29udGFpbmVySWQgPSB0aGlzLmdlbmVyYXRlRWxlbWVudElkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBmaXJzdCB0aW1lIGNvbmZpZyBzZXR1cFxyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuY29uZmlnO1xyXG5cclxuICAgICAgICBpZiAoY2hhbmdlcy5jb25maWcuaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgICAgICAgIGlmIChjb25maWcgJiYgdGhpcy5yZWdpc3RlclNjcmlwdCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0UGF5UGFsU2NyaXB0KGNvbmZpZywgKHBheVBhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0b3JlIHJlZmVyZW5jZSB0byBwYXlwYWwgZ2xvYmFsIHNjcmlwdFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGF5UGFsID0gcGF5UGFsO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9QYXlQYWxDaGVjaygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNoYW5nZXMgdG8gY29uZmlnXHJcbiAgICAgICAgaWYgKCFjaGFuZ2VzLmNvbmZpZy5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWluaXRpYWxpemUoY29uZmlnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYXlwYWxTY3JpcHRTZXJ2aWNlLmRlc3Ryb3lQYXlQYWxTY3JpcHQoKTtcclxuICAgICAgICB0aGlzLm5nVW5zdWJzY3JpYmUubmV4dCgpO1xyXG4gICAgICAgIHRoaXMubmdVbnN1YnNjcmliZS5jb21wbGV0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRvUGF5UGFsQ2hlY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBjdXN0b21Jbml0KHBheVBhbDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYXlQYWwgPSBwYXlQYWw7XHJcbiAgICAgICAgdGhpcy5kb1BheVBhbENoZWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVpbml0aWFsaXplKGNvbmZpZzogSVBheVBhbENvbmZpZyB8IHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG4gICAgICAgIHRoaXMucGF5UGFsID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMucGF5cGFsU2NyaXB0U2VydmljZS5kZXN0cm95UGF5UGFsU2NyaXB0KCk7XHJcbiAgICAgICAgdGhpcy5wYXlQYWxCdXR0b25Db250YWluZXJJZCA9IHRoaXMuZ2VuZXJhdGVFbGVtZW50SWQoKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVQYXlQYWwgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wYXlQYWxCdXR0b25Db250YWluZXJFbGVtKSB7XHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLnBheVBhbEJ1dHRvbkNvbnRhaW5lckVsZW0ubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBheVBhbEJ1dHRvbkNvbnRhaW5lckVsZW0ubmF0aXZlRWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLnBheVBhbEJ1dHRvbkNvbnRhaW5lckVsZW0ubmF0aXZlRWxlbWVudC5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb25maWcpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBheVBhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0UGF5UGFsU2NyaXB0KHRoaXMuY29uZmlnLCAocGF5UGFsKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0b3JlIHJlZmVyZW5jZSB0byBwYXlwYWwgZ2xvYmFsIHNjcmlwdFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGF5UGFsID0gcGF5UGFsO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9QYXlQYWxDaGVjaygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRvUGF5UGFsQ2hlY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBkb1BheVBhbENoZWNrKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmluaXRpYWxpemVQYXlQYWwgJiYgdGhpcy5jb25maWcgJiYgdGhpcy5wYXlQYWwgJiYgdGhpcy5wYXlQYWxCdXR0b25Db250YWluZXJFbGVtKSB7XHJcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0aGF0IGlkIGlzIGFsc28gc2V0XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBheVBhbEJ1dHRvbkNvbnRhaW5lckVsZW0ubmF0aXZlRWxlbWVudC5pZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplUGF5UGFsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRQYXlQYWwodGhpcy5jb25maWcsIHRoaXMucGF5UGFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRQYXlQYWxTY3JpcHQoY29uZmlnOiBJUGF5UGFsQ29uZmlnLCBpbml0UGF5UGFsOiAocGF5cGFsOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBheXBhbFNjcmlwdFNlcnZpY2UucmVnaXN0ZXJQYXlQYWxTY3JpcHQoe1xyXG4gICAgICAgICAgICBjbGllbnRJZDogY29uZmlnLmNsaWVudElkLFxyXG4gICAgICAgICAgICBjb21taXQ6IGNvbmZpZy5hZHZhbmNlZCAmJiBjb25maWcuYWR2YW5jZWQuY29tbWl0ID8gY29uZmlnLmFkdmFuY2VkLmNvbW1pdCA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgY3VycmVuY3k6IGNvbmZpZy5jdXJyZW5jeSxcclxuICAgICAgICAgICAgZXh0cmFQYXJhbXM6IGNvbmZpZy5hZHZhbmNlZCAmJiBjb25maWcuYWR2YW5jZWQuZXh0cmFRdWVyeVBhcmFtcyA/IGNvbmZpZy5hZHZhbmNlZC5leHRyYVF1ZXJ5UGFyYW1zIDogW11cclxuICAgICAgICB9LCAocGF5cGFsKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NyaXB0TG9hZGVkLm5leHQocGF5cGFsKTtcclxuICAgICAgICAgICAgaW5pdFBheVBhbChwYXlwYWwpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NyaXB0TG9hZEVycm9yLmVtaXQodHJ1ZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdlbmVyYXRlRWxlbWVudElkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGBuZ3gtY2FwdGNoYS1pZC0ke25ldyBEYXRlKCkudmFsdWVPZigpfWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0UGF5UGFsKGNvbmZpZzogSVBheVBhbENvbmZpZywgcGF5cGFsOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyBSdW5uaW5nIG91dHNpZGUgYW5ndWxhciB6b25lIHByZXZlbnRzIGluZmluaXRlIG5nRG9DaGVjayBsaWZlY3ljbGUgY2FsbHNcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLnBheXBhbC5jb20vZG9jcy9jaGVja291dC9pbnRlZ3JhdGUvIzItYWRkLXRoZS1wYXlwYWwtc2NyaXB0LXRvLXlvdXItd2ViLXBhZ2VcclxuICAgICAgICAgICAgcGF5cGFsLkJ1dHRvbnMoe1xyXG4gICAgICAgICAgICAgICAgc3R5bGU6IGNvbmZpZy5zdHlsZSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZU9yZGVyOiAoZGF0YTogYW55LCBhY3Rpb25zOiBJQ3JlYXRlT3JkZXJDYWxsYmFja0FjdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5jcmVhdGVPcmRlck9uQ2xpZW50ICYmIGNvbmZpZy5jcmVhdGVPcmRlck9uU2VydmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihgQm90aCAnY3JlYXRlT3JkZXJPbkNsaWVudCcgYW5kICdjcmVhdGVPcmRlck9uU2VydmVyJyBhcmUgZGVmaW5lZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIGNob29zZSBvbmUgb3IgdGhlIG90aGVyLmApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbmZpZy5jcmVhdGVPcmRlck9uQ2xpZW50ICYmICFjb25maWcuY3JlYXRlT3JkZXJPblNlcnZlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoYE5laXRoZXIgJ2NyZWF0ZU9yZGVyT25DbGllbnQnIG9yICdjcmVhdGVPcmRlck9uU2VydmVyJyBhcmUgZGVmaW5lZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIGRlZmluZSBvbmUgb2YgdGhlc2UgdG8gY3JlYXRlIG9yZGVyLmApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLmNyZWF0ZU9yZGVyT25DbGllbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb25zLm9yZGVyLmNyZWF0ZShjb25maWcuY3JlYXRlT3JkZXJPbkNsaWVudChkYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcuY3JlYXRlT3JkZXJPblNlcnZlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbmZpZy5jcmVhdGVPcmRlck9uU2VydmVyKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihgSW52YWxpZCBzdGF0ZSBmb3IgJ2NyZWF0ZU9yZGVyJy5gKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgb25BcHByb3ZlOiAoZGF0YTogSU9uQXBwcm92ZUNhbGxiYWNrRGF0YSwgYWN0aW9uczogSU9uQXBwcm92ZUNhbGxiYWNrQWN0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLm9uQXBwcm92ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnLm9uQXBwcm92ZShkYXRhLCBhY3Rpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FwdHVyZSBvbiBzZXJ2ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5hdXRob3JpemVPblNlcnZlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbmZpZy5hdXRob3JpemVPblNlcnZlcihkYXRhLCBhY3Rpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FwdHVyZSBvbiBjbGllbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb25DbGllbnRBdXRob3JpemF0aW9uID0gY29uZmlnLm9uQ2xpZW50QXV0aG9yaXphdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9uQ2xpZW50QXV0aG9yaXphdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5vcmRlci5jYXB0dXJlKCkudGhlbigoZGV0YWlsczogSUNsaWVudEF1dGhvcml6ZUNhbGxiYWNrRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpZW50QXV0aG9yaXphdGlvbihkZXRhaWxzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIG9uRXJyb3I6IChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5vbkVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWcub25FcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgb25DYW5jZWw6IChkYXRhOiBJQ2FuY2VsQ2FsbGJhY2tEYXRhLCBhY3Rpb25zOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLm9uQ2FuY2VsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWcub25DYW5jZWwoZGF0YSwgYWN0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvblNoaXBwaW5nQ2hhbmdlOiAoZGF0YTogSU9uU2hpcHBpbmdDaGFuZ2VEYXRhLCBhY3Rpb25zOiBJT25TaGlwcGluZ0NoYW5nZUFjdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5vblNoaXBwaW5nQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uZmlnLm9uU2hpcHBpbmdDaGFuZ2UoZGF0YSwgYWN0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoZGF0YTogYW55LCBhY3Rpb25zOiBJT25DbGlja0NhbGxiYWNrQWN0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcub25DbGljaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnLm9uQ2xpY2soZGF0YSwgYWN0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvbkluaXQ6IChkYXRhOiBJSW5pdENhbGxiYWNrRGF0YSwgYWN0aW9uczogSU9uSW5pdENhbGxiYWNrQWN0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcub25Jbml0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWcub25Jbml0KGRhdGEsIGFjdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnJlbmRlcihgIyR7dGhpcy5wYXlQYWxCdXR0b25Db250YWluZXJJZH1gKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdfQ==