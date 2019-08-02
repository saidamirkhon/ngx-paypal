/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function IPayPalConfig() { }
if (false) {
    /**
     * Currency - Defaults to USD if not provided
     * @type {?|undefined}
     */
    IPayPalConfig.prototype.currency;
    /**
     * Use when creating order on client
     * @type {?|undefined}
     */
    IPayPalConfig.prototype.createOrderOnClient;
    /**
     * Use for creating orders on server. PayPal expects you to return 'orderId' in this method
     * @type {?|undefined}
     */
    IPayPalConfig.prototype.createOrderOnServer;
    /**
     * Advanced configuration
     * @type {?|undefined}
     */
    IPayPalConfig.prototype.advanced;
    /**
     * Client id
     * @type {?}
     */
    IPayPalConfig.prototype.clientId;
    /**
     * Shipping callback
     * see https://developer.paypal.com/docs/checkout/integration-features/shipping-callback/
     * @type {?|undefined}
     */
    IPayPalConfig.prototype.onShippingChange;
    /**
     * Called when 'onApprove' event occurs
     * @type {?}
     */
    IPayPalConfig.prototype.onApprove;
    /**
     * Called when authorization on client succeeds
     * @type {?|undefined}
     */
    IPayPalConfig.prototype.onClientAuthorization;
    /**
     * Implement for authorizing on server side
     * @type {?|undefined}
     */
    IPayPalConfig.prototype.authorizeOnServer;
    /**
     * Button style configuration
     * @type {?|undefined}
     */
    IPayPalConfig.prototype.style;
    /**
     * Error handler
     * @type {?|undefined}
     */
    IPayPalConfig.prototype.onError;
    /**
     * Click handler
     * @type {?|undefined}
     */
    IPayPalConfig.prototype.onClick;
    /**
     * Cancel handler
     * @type {?|undefined}
     */
    IPayPalConfig.prototype.onCancel;
    /**
     * Init handler.
     * can be used for validation, see: https://developer.paypal.com/docs/checkout/integration-features/validation/#
     * @type {?|undefined}
     */
    IPayPalConfig.prototype.onInit;
}
/**
 * @record
 */
export function IPayPalUrlConfig() { }
if (false) {
    /** @type {?} */
    IPayPalUrlConfig.prototype.clientId;
    /** @type {?|undefined} */
    IPayPalUrlConfig.prototype.currency;
    /** @type {?|undefined} */
    IPayPalUrlConfig.prototype.commit;
    /** @type {?|undefined} */
    IPayPalUrlConfig.prototype.extraParams;
}
/**
 * @record
 */
export function IClientAuthorizeCallbackData() { }
if (false) {
    /** @type {?} */
    IClientAuthorizeCallbackData.prototype.links;
}
/**
 * @record
 */
export function IOrderDetails() { }
if (false) {
    /** @type {?} */
    IOrderDetails.prototype.create_time;
    /** @type {?} */
    IOrderDetails.prototype.update_time;
    /** @type {?} */
    IOrderDetails.prototype.id;
    /** @type {?} */
    IOrderDetails.prototype.intent;
    /** @type {?} */
    IOrderDetails.prototype.payer;
    /** @type {?} */
    IOrderDetails.prototype.status;
    /** @type {?} */
    IOrderDetails.prototype.links;
}
/**
 * @record
 */
export function ILinkDescription() { }
if (false) {
    /** @type {?} */
    ILinkDescription.prototype.href;
    /** @type {?} */
    ILinkDescription.prototype.rel;
    /** @type {?|undefined} */
    ILinkDescription.prototype.method;
}
/**
 * @record
 */
export function IQueryParam() { }
if (false) {
    /** @type {?} */
    IQueryParam.prototype.name;
    /** @type {?} */
    IQueryParam.prototype.value;
}
/**
 * @record
 */
export function IOnShippingChangeData() { }
if (false) {
    /** @type {?} */
    IOnShippingChangeData.prototype.paymentToken;
    /** @type {?} */
    IOnShippingChangeData.prototype.shipping_address;
    /** @type {?|undefined} */
    IOnShippingChangeData.prototype.selected_shipping_method;
}
/**
 * @record
 */
export function IOnShippingChangeActions() { }
if (false) {
    /** @type {?} */
    IOnShippingChangeActions.prototype.resolve;
    /** @type {?} */
    IOnShippingChangeActions.prototype.reject;
    /** @type {?} */
    IOnShippingChangeActions.prototype.patch;
}
/**
 * @record
 */
export function IAdvancedConfiguration() { }
if (false) {
    /** @type {?|undefined} */
    IAdvancedConfiguration.prototype.commit;
    /** @type {?|undefined} */
    IAdvancedConfiguration.prototype.extraQueryParams;
}
/**
 * @record
 */
export function IOnApproveCallbackData() { }
if (false) {
    /** @type {?} */
    IOnApproveCallbackData.prototype.orderID;
    /** @type {?} */
    IOnApproveCallbackData.prototype.payerID;
}
/**
 * @record
 */
export function ICreateOrderCallbackActions() { }
if (false) {
    /** @type {?} */
    ICreateOrderCallbackActions.prototype.order;
}
/**
 * @record
 */
export function ICancelCallbackData() { }
if (false) {
    /** @type {?} */
    ICancelCallbackData.prototype.orderID;
}
/**
 * @record
 */
export function IOnApproveCallbackActions() { }
if (false) {
    /** @type {?} */
    IOnApproveCallbackActions.prototype.redirect;
    /** @type {?} */
    IOnApproveCallbackActions.prototype.restart;
    /** @type {?} */
    IOnApproveCallbackActions.prototype.order;
}
/**
 * @record
 */
export function IOnInitCallbackActions() { }
if (false) {
    /** @type {?} */
    IOnInitCallbackActions.prototype.enable;
    /** @type {?} */
    IOnInitCallbackActions.prototype.disable;
}
/**
 * @record
 */
export function IInitCallbackData() { }
/**
 * @record
 */
export function IOnClickCallbackActions() { }
if (false) {
    /** @type {?} */
    IOnClickCallbackActions.prototype.resolve;
    /** @type {?} */
    IOnClickCallbackActions.prototype.reject;
}
/**
 * @record
 */
export function IPayPalButtonStyle() { }
if (false) {
    /** @type {?|undefined} */
    IPayPalButtonStyle.prototype.label;
    /** @type {?|undefined} */
    IPayPalButtonStyle.prototype.size;
    /** @type {?|undefined} */
    IPayPalButtonStyle.prototype.shape;
    /** @type {?|undefined} */
    IPayPalButtonStyle.prototype.color;
    /** @type {?|undefined} */
    IPayPalButtonStyle.prototype.layout;
    /** @type {?|undefined} */
    IPayPalButtonStyle.prototype.tagline;
}
/**
 * @record
 */
export function ICreateOrderRequest() { }
if (false) {
    /** @type {?} */
    ICreateOrderRequest.prototype.intent;
    /** @type {?} */
    ICreateOrderRequest.prototype.purchase_units;
    /** @type {?|undefined} */
    ICreateOrderRequest.prototype.payer;
    /** @type {?|undefined} */
    ICreateOrderRequest.prototype.application_context;
}
/**
 * @record
 */
export function IPayer() { }
if (false) {
    /** @type {?|undefined} */
    IPayer.prototype.name;
    /** @type {?|undefined} */
    IPayer.prototype.email_address;
    /** @type {?|undefined} */
    IPayer.prototype.payer_id;
    /** @type {?|undefined} */
    IPayer.prototype.birth_date;
    /** @type {?|undefined} */
    IPayer.prototype.tax_info;
    /** @type {?|undefined} */
    IPayer.prototype.address;
}
/**
 * @record
 */
export function IApplicationContext() { }
if (false) {
    /** @type {?|undefined} */
    IApplicationContext.prototype.brand_name;
    /** @type {?|undefined} */
    IApplicationContext.prototype.locale;
    /** @type {?|undefined} */
    IApplicationContext.prototype.landing_page;
    /** @type {?|undefined} */
    IApplicationContext.prototype.shipping_preference;
    /** @type {?|undefined} */
    IApplicationContext.prototype.user_action;
    /** @type {?|undefined} */
    IApplicationContext.prototype.payment_method;
    /** @type {?|undefined} */
    IApplicationContext.prototype.return_url;
    /** @type {?|undefined} */
    IApplicationContext.prototype.cancel_url;
}
/**
 * @record
 */
export function IPaymentMethod() { }
if (false) {
    /** @type {?|undefined} */
    IPaymentMethod.prototype.payer_selected;
    /** @type {?|undefined} */
    IPaymentMethod.prototype.payee_preferred;
}
/**
 * @record
 */
export function IPhone() { }
if (false) {
    /** @type {?|undefined} */
    IPhone.prototype.phone_type;
    /** @type {?|undefined} */
    IPhone.prototype.phone_number;
}
/**
 * @record
 */
export function ITaxInfo() { }
if (false) {
    /** @type {?} */
    ITaxInfo.prototype.tax_id;
    /** @type {?} */
    ITaxInfo.prototype.tax_id_type;
}
/**
 * @record
 */
export function IPhoneNumber() { }
if (false) {
    /** @type {?} */
    IPhoneNumber.prototype.national_number;
}
/**
 * @record
 */
export function IPurchaseUnit() { }
if (false) {
    /** @type {?} */
    IPurchaseUnit.prototype.amount;
    /** @type {?|undefined} */
    IPurchaseUnit.prototype.reference_id;
    /** @type {?|undefined} */
    IPurchaseUnit.prototype.payee;
    /** @type {?|undefined} */
    IPurchaseUnit.prototype.payment_instruction;
    /** @type {?|undefined} */
    IPurchaseUnit.prototype.description;
    /** @type {?|undefined} */
    IPurchaseUnit.prototype.custom_id;
    /** @type {?|undefined} */
    IPurchaseUnit.prototype.invoice_id;
    /** @type {?|undefined} */
    IPurchaseUnit.prototype.soft_descriptor;
    /** @type {?} */
    IPurchaseUnit.prototype.items;
    /** @type {?|undefined} */
    IPurchaseUnit.prototype.shipping;
}
/**
 * @record
 */
export function IPayee() { }
if (false) {
    /** @type {?|undefined} */
    IPayee.prototype.email_address;
    /** @type {?|undefined} */
    IPayee.prototype.merchant_id;
}
/**
 * @record
 */
export function IPaymentInstructions() { }
if (false) {
    /** @type {?|undefined} */
    IPaymentInstructions.prototype.platform_fees;
    /** @type {?|undefined} */
    IPaymentInstructions.prototype.disbursement_mode;
}
/**
 * @record
 */
export function IPlatformFee() { }
if (false) {
    /** @type {?} */
    IPlatformFee.prototype.amount;
    /** @type {?|undefined} */
    IPlatformFee.prototype.payee;
}
/**
 * @record
 */
export function ITransactionItem() { }
if (false) {
    /** @type {?} */
    ITransactionItem.prototype.name;
    /** @type {?} */
    ITransactionItem.prototype.unit_amount;
    /** @type {?} */
    ITransactionItem.prototype.quantity;
    /** @type {?|undefined} */
    ITransactionItem.prototype.description;
    /** @type {?|undefined} */
    ITransactionItem.prototype.sku;
    /** @type {?|undefined} */
    ITransactionItem.prototype.category;
    /** @type {?|undefined} */
    ITransactionItem.prototype.tax;
}
/**
 * @record
 */
export function ITax() { }
if (false) {
    /** @type {?} */
    ITax.prototype.currency_code;
    /** @type {?} */
    ITax.prototype.value;
}
/**
 * @record
 */
export function IUnitAmount() { }
if (false) {
    /** @type {?} */
    IUnitAmount.prototype.currency_code;
    /** @type {?} */
    IUnitAmount.prototype.value;
    /** @type {?|undefined} */
    IUnitAmount.prototype.breakdown;
}
/**
 * @record
 */
export function IMoney() { }
if (false) {
    /** @type {?} */
    IMoney.prototype.currency_code;
    /** @type {?} */
    IMoney.prototype.value;
}
/**
 * @record
 */
export function IUnitBreakdown() { }
if (false) {
    /** @type {?|undefined} */
    IUnitBreakdown.prototype.item_total;
    /** @type {?|undefined} */
    IUnitBreakdown.prototype.shipping;
    /** @type {?|undefined} */
    IUnitBreakdown.prototype.handling;
    /** @type {?|undefined} */
    IUnitBreakdown.prototype.tax_total;
    /** @type {?|undefined} */
    IUnitBreakdown.prototype.insurance;
    /** @type {?|undefined} */
    IUnitBreakdown.prototype.shipping_discount;
    /** @type {?|undefined} */
    IUnitBreakdown.prototype.discount;
}
/**
 * @record
 */
export function IPartyName() { }
if (false) {
    /** @type {?|undefined} */
    IPartyName.prototype.prefix;
    /** @type {?|undefined} */
    IPartyName.prototype.given_name;
    /** @type {?|undefined} */
    IPartyName.prototype.surname;
    /** @type {?|undefined} */
    IPartyName.prototype.middle_name;
    /** @type {?|undefined} */
    IPartyName.prototype.suffix;
    /** @type {?|undefined} */
    IPartyName.prototype.alternate_full_name;
    /** @type {?|undefined} */
    IPartyName.prototype.full_name;
}
/**
 * @record
 */
export function IAddressPortable() { }
if (false) {
    /** @type {?} */
    IAddressPortable.prototype.country_code;
    /** @type {?|undefined} */
    IAddressPortable.prototype.address_line_1;
    /** @type {?|undefined} */
    IAddressPortable.prototype.address_line_2;
    /** @type {?|undefined} */
    IAddressPortable.prototype.admin_area_2;
    /** @type {?|undefined} */
    IAddressPortable.prototype.admin_area_1;
    /** @type {?|undefined} */
    IAddressPortable.prototype.postal_code;
}
/**
 * @record
 */
export function IShipping() { }
if (false) {
    /** @type {?|undefined} */
    IShipping.prototype.name;
    /** @type {?|undefined} */
    IShipping.prototype.address;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLW1vZGVscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1wYXlwYWwvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL3BheXBhbC1tb2RlbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLG1DQXlFQzs7Ozs7O0lBcEVHLGlDQUFrQjs7Ozs7SUFLbEIsNENBQXlEOzs7OztJQUt6RCw0Q0FBcUQ7Ozs7O0lBS3JELGlDQUFrQzs7Ozs7SUFLbEMsaUNBQWlCOzs7Ozs7SUFNakIseUNBQTRDOzs7OztJQUs1QyxrQ0FBZ0U7Ozs7O0lBS2hFLDhDQUE4RTs7Ozs7SUFLOUUsMENBQWlGOzs7OztJQUtqRiw4QkFBMkI7Ozs7O0lBSzNCLGdDQUE2Qjs7Ozs7SUFLN0IsZ0NBQWdFOzs7OztJQUtoRSxpQ0FBNkQ7Ozs7OztJQU03RCwrQkFBNEU7Ozs7O0FBS2hGLHNDQUtDOzs7SUFKRyxvQ0FBaUI7O0lBQ2pCLG9DQUFrQjs7SUFDbEIsa0NBQW1COztJQUNuQix1Q0FBNEI7Ozs7O0FBR2hDLGtEQUVDOzs7SUFERyw2Q0FBMEI7Ozs7O0FBRzlCLG1DQVFDOzs7SUFQRyxvQ0FBb0I7O0lBQ3BCLG9DQUFvQjs7SUFDcEIsMkJBQVc7O0lBQ1gsK0JBQW9COztJQUNwQiw4QkFBYzs7SUFDZCwrQkFBb0I7O0lBQ3BCLDhCQUEwQjs7Ozs7QUFHOUIsc0NBSUM7OztJQUhHLGdDQUFhOztJQUNiLCtCQUFZOztJQUNaLGtDQUFvQjs7Ozs7QUFHeEIsaUNBR0M7OztJQUZHLDJCQUFhOztJQUNiLDRCQUFjOzs7OztBQUtsQiwyQ0FJQzs7O0lBSEcsNkNBQXFCOztJQUNyQixpREFBc0I7O0lBQ3RCLHlEQUErQjs7Ozs7QUFHbkMsOENBSUM7OztJQUhHLDJDQUFtQjs7SUFDbkIsMENBQWtCOztJQUNsQix5Q0FBaUI7Ozs7O0FBS3JCLDRDQUdDOzs7SUFGRyx3Q0FBbUI7O0lBQ25CLGtEQUFpQzs7Ozs7QUFHckMsNENBR0M7OztJQUZHLHlDQUFnQjs7SUFDaEIseUNBQWdCOzs7OztBQUdwQixpREFJQzs7O0lBSEcsNENBRUU7Ozs7O0FBR04seUNBRUM7OztJQURHLHNDQUFnQjs7Ozs7QUFHcEIsK0NBU0M7OztJQVJHLDZDQUFxQjs7SUFDckIsNENBQW9COztJQUNwQiwwQ0FLRTs7Ozs7QUFHTiw0Q0FHQzs7O0lBRkcsd0NBQW1COztJQUNuQix5Q0FBb0I7Ozs7O0FBSXhCLHVDQUNDOzs7O0FBRUQsNkNBR0M7OztJQUZHLDBDQUFvQjs7SUFDcEIseUNBQW1COzs7OztBQUd2Qix3Q0FPQzs7O0lBTkcsbUNBQXNEOztJQUN0RCxrQ0FBbUQ7O0lBQ25ELG1DQUF3Qjs7SUFDeEIsbUNBQW1DOztJQUNuQyxvQ0FBbUM7O0lBQ25DLHFDQUFrQjs7Ozs7QUFHdEIseUNBT0M7OztJQU5HLHFDQUFvQjs7SUFDcEIsNkNBQWdDOztJQUVoQyxvQ0FBZTs7SUFDZixrREFBMEM7Ozs7O0FBRzlDLDRCQU9DOzs7SUFORyxzQkFBa0I7O0lBQ2xCLCtCQUF1Qjs7SUFDdkIsMEJBQWtCOztJQUNsQiw0QkFBb0I7O0lBQ3BCLDBCQUFvQjs7SUFDcEIseUJBQTJCOzs7OztBQUcvQix5Q0FTQzs7O0lBUkcseUNBQW9COztJQUNwQixxQ0FBZ0I7O0lBQ2hCLDJDQUFpQzs7SUFDakMsa0RBQXlDOztJQUN6QywwQ0FBK0I7O0lBQy9CLDZDQUFnQzs7SUFDaEMseUNBQW9COztJQUNwQix5Q0FBb0I7Ozs7O0FBR3hCLG9DQUdDOzs7SUFGRyx3Q0FBK0I7O0lBQy9CLHlDQUFpQzs7Ozs7QUF1QnJDLDRCQUdDOzs7SUFGRyw0QkFBdUI7O0lBQ3ZCLDhCQUE0Qjs7Ozs7QUFHaEMsOEJBR0M7OztJQUZHLDBCQUFlOztJQUNmLCtCQUF1Qjs7Ozs7QUFHM0Isa0NBRUM7OztJQURHLHVDQUF3Qjs7Ozs7QUFHNUIsbUNBWUM7OztJQVhHLCtCQUFvQjs7SUFFcEIscUNBQXNCOztJQUN0Qiw4QkFBZTs7SUFDZiw0Q0FBMkM7O0lBQzNDLG9DQUFxQjs7SUFDckIsa0NBQW1COztJQUNuQixtQ0FBb0I7O0lBQ3BCLHdDQUF5Qjs7SUFDekIsOEJBQTBCOztJQUMxQixpQ0FBcUI7Ozs7O0FBR3pCLDRCQUdDOzs7SUFGRywrQkFBdUI7O0lBQ3ZCLDZCQUFxQjs7Ozs7QUFHekIsMENBR0M7OztJQUZHLDZDQUErQjs7SUFDL0IsaURBQXFDOzs7OztBQUd6QyxrQ0FHQzs7O0lBRkcsOEJBQW9COztJQUNwQiw2QkFBZTs7Ozs7QUFHbkIsc0NBU0M7OztJQVJHLGdDQUFhOztJQUNiLHVDQUF5Qjs7SUFDekIsb0NBQWlCOztJQUVqQix1Q0FBcUI7O0lBQ3JCLCtCQUFhOztJQUNiLG9DQUF3Qjs7SUFDeEIsK0JBQVc7Ozs7O0FBR2YsMEJBR0M7OztJQUZHLDZCQUFzQjs7SUFDdEIscUJBQWM7Ozs7O0FBR2xCLGlDQUlDOzs7SUFIRyxvQ0FBc0I7O0lBQ3RCLDRCQUFjOztJQUNkLGdDQUEyQjs7Ozs7QUFHL0IsNEJBR0M7OztJQUZHLCtCQUFzQjs7SUFDdEIsdUJBQWM7Ozs7O0FBR2xCLG9DQVFDOzs7SUFQRyxvQ0FBeUI7O0lBQ3pCLGtDQUF1Qjs7SUFDdkIsa0NBQXVCOztJQUN2QixtQ0FBd0I7O0lBQ3hCLG1DQUF3Qjs7SUFDeEIsMkNBQWdDOztJQUNoQyxrQ0FBa0I7Ozs7O0FBR3RCLGdDQVFDOzs7SUFQRyw0QkFBZ0I7O0lBQ2hCLGdDQUFvQjs7SUFDcEIsNkJBQWlCOztJQUNqQixpQ0FBcUI7O0lBQ3JCLDRCQUFnQjs7SUFDaEIseUNBQTZCOztJQUM3QiwrQkFBbUI7Ozs7O0FBR3ZCLHNDQVFDOzs7SUFQRyx3Q0FBcUI7O0lBRXJCLDBDQUF3Qjs7SUFDeEIsMENBQXdCOztJQUN4Qix3Q0FBc0I7O0lBQ3RCLHdDQUFzQjs7SUFDdEIsdUNBQXFCOzs7OztBQUd6QiwrQkFHQzs7O0lBRkcseUJBQWtCOztJQUNsQiw0QkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGludGVyZmFjZSBJUGF5UGFsQ29uZmlnIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEN1cnJlbmN5IC0gRGVmYXVsdHMgdG8gVVNEIGlmIG5vdCBwcm92aWRlZFxyXG4gICAgICovXHJcbiAgICBjdXJyZW5jeT86IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICogVXNlIHdoZW4gY3JlYXRpbmcgb3JkZXIgb24gY2xpZW50XHJcbiAgICAqL1xyXG4gICAgY3JlYXRlT3JkZXJPbkNsaWVudD86IChkYXRhOiBhbnkpID0+IElDcmVhdGVPcmRlclJlcXVlc3Q7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVc2UgZm9yIGNyZWF0aW5nIG9yZGVycyBvbiBzZXJ2ZXIuIFBheVBhbCBleHBlY3RzIHlvdSB0byByZXR1cm4gJ29yZGVySWQnIGluIHRoaXMgbWV0aG9kXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZU9yZGVyT25TZXJ2ZXI/OiAoZGF0YTogYW55KSA9PiBQcm9taXNlPHN0cmluZz47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZHZhbmNlZCBjb25maWd1cmF0aW9uXHJcbiAgICAgKi9cclxuICAgIGFkdmFuY2VkPzogSUFkdmFuY2VkQ29uZmlndXJhdGlvbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENsaWVudCBpZFxyXG4gICAgICovXHJcbiAgICBjbGllbnRJZDogc3RyaW5nO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2hpcHBpbmcgY2FsbGJhY2tcclxuICAgICAqIHNlZSBodHRwczovL2RldmVsb3Blci5wYXlwYWwuY29tL2RvY3MvY2hlY2tvdXQvaW50ZWdyYXRpb24tZmVhdHVyZXMvc2hpcHBpbmctY2FsbGJhY2svXHJcbiAgICAgKi9cclxuICAgIG9uU2hpcHBpbmdDaGFuZ2U/OiBPblNoaXBwaW5nQ2hhbmdlQ2FsbGJhY2s7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgd2hlbiAnb25BcHByb3ZlJyBldmVudCBvY2N1cnNcclxuICAgICAqL1xyXG4gICAgb25BcHByb3ZlOiAoZGF0YTogSU9uQXBwcm92ZUNhbGxiYWNrRGF0YSwgYWN0aW9uczogYW55KSA9PiB2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgKiBDYWxsZWQgd2hlbiBhdXRob3JpemF0aW9uIG9uIGNsaWVudCBzdWNjZWVkc1xyXG4gICAgKi9cclxuICAgIG9uQ2xpZW50QXV0aG9yaXphdGlvbj86IChhdXRob3JpemF0aW9uOiBJQ2xpZW50QXV0aG9yaXplQ2FsbGJhY2tEYXRhKSA9PiB2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW1wbGVtZW50IGZvciBhdXRob3JpemluZyBvbiBzZXJ2ZXIgc2lkZVxyXG4gICAgICovXHJcbiAgICBhdXRob3JpemVPblNlcnZlcj86IChkYXRhOiBJT25BcHByb3ZlQ2FsbGJhY2tEYXRhLCBhY3Rpb25zOiBhbnkpID0+IFByb21pc2U8YW55PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEJ1dHRvbiBzdHlsZSBjb25maWd1cmF0aW9uXHJcbiAgICAgKi9cclxuICAgIHN0eWxlPzogSVBheVBhbEJ1dHRvblN0eWxlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRXJyb3IgaGFuZGxlclxyXG4gICAgICovXHJcbiAgICBvbkVycm9yPzogKGVycjogYW55KSA9PiB2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2xpY2sgaGFuZGxlclxyXG4gICAgICovXHJcbiAgICBvbkNsaWNrPzogKGRhdGE6IGFueSwgYWN0aW9uczogSU9uQ2xpY2tDYWxsYmFja0FjdGlvbnMpID0+IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDYW5jZWwgaGFuZGxlclxyXG4gICAgICovXHJcbiAgICBvbkNhbmNlbD86IChkYXRhOiBJQ2FuY2VsQ2FsbGJhY2tEYXRhLCBhY3Rpb25zOiBhbnkpID0+IHZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0IGhhbmRsZXIuXHJcbiAgICAgKiBjYW4gYmUgdXNlZCBmb3IgdmFsaWRhdGlvbiwgc2VlOiBodHRwczovL2RldmVsb3Blci5wYXlwYWwuY29tL2RvY3MvY2hlY2tvdXQvaW50ZWdyYXRpb24tZmVhdHVyZXMvdmFsaWRhdGlvbi8jXHJcbiAgICAgKi9cclxuICAgIG9uSW5pdD86IChkYXRhOiBJSW5pdENhbGxiYWNrRGF0YSwgYWN0aW9uczogSU9uSW5pdENhbGxiYWNrQWN0aW9ucykgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVHJ1ZUZhbHNlID0gJ3RydWUnIHwgJ2ZhbHNlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBheVBhbFVybENvbmZpZyB7XHJcbiAgICBjbGllbnRJZDogc3RyaW5nO1xyXG4gICAgY3VycmVuY3k/OiBzdHJpbmc7XHJcbiAgICBjb21taXQ/OiBUcnVlRmFsc2U7XHJcbiAgICBleHRyYVBhcmFtcz86IElRdWVyeVBhcmFtW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNsaWVudEF1dGhvcml6ZUNhbGxiYWNrRGF0YSBleHRlbmRzIElPcmRlckRldGFpbHMge1xyXG4gICAgbGlua3M6IElMaW5rRGVzY3JpcHRpb25bXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJT3JkZXJEZXRhaWxzIHtcclxuICAgIGNyZWF0ZV90aW1lOiBzdHJpbmc7XHJcbiAgICB1cGRhdGVfdGltZTogc3RyaW5nO1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGludGVudDogT3JkZXJJbnRlbnQ7XHJcbiAgICBwYXllcjogSVBheWVyO1xyXG4gICAgc3RhdHVzOiBPcmRlclN0YXR1cztcclxuICAgIGxpbmtzOiBJTGlua0Rlc2NyaXB0aW9uW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUxpbmtEZXNjcmlwdGlvbiB7XHJcbiAgICBocmVmOiBzdHJpbmc7XHJcbiAgICByZWw6IFN0cmluZztcclxuICAgIG1ldGhvZD86IExpbmtNZXRob2Q7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVF1ZXJ5UGFyYW0ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgT25TaGlwcGluZ0NoYW5nZUNhbGxiYWNrID0gKGRhdGE6IElPblNoaXBwaW5nQ2hhbmdlRGF0YSwgYWN0aW9uczogSU9uU2hpcHBpbmdDaGFuZ2VBY3Rpb25zKSA9PiBhbnk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElPblNoaXBwaW5nQ2hhbmdlRGF0YSB7XHJcbiAgICBwYXltZW50VG9rZW46IHN0cmluZztcclxuICAgIHNoaXBwaW5nX2FkZHJlc3M6IGFueTtcclxuICAgIHNlbGVjdGVkX3NoaXBwaW5nX21ldGhvZD86IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJT25TaGlwcGluZ0NoYW5nZUFjdGlvbnMge1xyXG4gICAgcmVzb2x2ZTogKCkgPT4gYW55O1xyXG4gICAgcmVqZWN0OiAoKSA9PiBhbnk7XHJcbiAgICBwYXRjaDogKCkgPT4gYW55O1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBMaW5rTWV0aG9kID0gJ0dFVCcgfCAnUE9TVCcgfCAnUFVUJyB8ICdERUxFVEUnIHwgJ0hFQUQnIHwgJ0NPTk5FQ1QnIHwgJ09QVElPTlMnIHwgJ1BBVENIJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFkdmFuY2VkQ29uZmlndXJhdGlvbiB7XHJcbiAgICBjb21taXQ/OiBUcnVlRmFsc2U7XHJcbiAgICBleHRyYVF1ZXJ5UGFyYW1zPzogSVF1ZXJ5UGFyYW1bXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJT25BcHByb3ZlQ2FsbGJhY2tEYXRhIHtcclxuICAgIG9yZGVySUQ6IHN0cmluZztcclxuICAgIHBheWVySUQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ3JlYXRlT3JkZXJDYWxsYmFja0FjdGlvbnMge1xyXG4gICAgb3JkZXI6IHtcclxuICAgICAgICBjcmVhdGU6IChvcmRlcjogSUNyZWF0ZU9yZGVyUmVxdWVzdCkgPT4gUHJvbWlzZTxhbnk+O1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ2FuY2VsQ2FsbGJhY2tEYXRhIHtcclxuICAgIG9yZGVySUQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJT25BcHByb3ZlQ2FsbGJhY2tBY3Rpb25zIHtcclxuICAgIHJlZGlyZWN0OiAoKSA9PiB2b2lkO1xyXG4gICAgcmVzdGFydDogKCkgPT4gdm9pZDtcclxuICAgIG9yZGVyOiB7XHJcbiAgICAgICAgYXV0aG9yaXplOiAoKSA9PiBQcm9taXNlPGFueT47XHJcbiAgICAgICAgY2FwdHVyZTogKCkgPT4gUHJvbWlzZTxhbnk+O1xyXG4gICAgICAgIGdldDogKCkgPT4gUHJvbWlzZTxJT3JkZXJEZXRhaWxzPjtcclxuICAgICAgICBwYXRjaDogKCkgPT4gUHJvbWlzZTxhbnk+O1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJT25Jbml0Q2FsbGJhY2tBY3Rpb25zIHtcclxuICAgIGVuYWJsZTogKCkgPT4gdm9pZDtcclxuICAgIGRpc2FibGU6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eS1pbnRlcmZhY2VcclxuZXhwb3J0IGludGVyZmFjZSBJSW5pdENhbGxiYWNrRGF0YSB7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU9uQ2xpY2tDYWxsYmFja0FjdGlvbnMge1xyXG4gICAgcmVzb2x2ZTogKCkgPT4gdm9pZDtcclxuICAgIHJlamVjdDogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUGF5UGFsQnV0dG9uU3R5bGUge1xyXG4gICAgbGFiZWw/OiAncGF5cGFsJyB8ICdjaGVja291dCcgfCAncGF5JyB8ICdpbnN0YWxsbWVudCc7XHJcbiAgICBzaXplPzogJ3NtYWxsJyB8ICdtZWRpdW0nIHwgJ2xhcmdlJyB8ICdyZXNwb25zaXZlJztcclxuICAgIHNoYXBlPzogJ3BpbGwnIHwgJ3JlY3QnO1xyXG4gICAgY29sb3I/OiAnZ29sZCcgfCAnYmx1ZScgfCAnc2lsdmVyJztcclxuICAgIGxheW91dD86ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCc7XHJcbiAgICB0YWdsaW5lPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ3JlYXRlT3JkZXJSZXF1ZXN0IHtcclxuICAgIGludGVudDogT3JkZXJJbnRlbnQ7XHJcbiAgICBwdXJjaGFzZV91bml0czogSVB1cmNoYXNlVW5pdFtdO1xyXG5cclxuICAgIHBheWVyPzogSVBheWVyO1xyXG4gICAgYXBwbGljYXRpb25fY29udGV4dD86IElBcHBsaWNhdGlvbkNvbnRleHQ7XHJcblxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBheWVyIHtcclxuICAgIG5hbWU/OiBJUGFydHlOYW1lO1xyXG4gICAgZW1haWxfYWRkcmVzcz86IHN0cmluZztcclxuICAgIHBheWVyX2lkPzogc3RyaW5nO1xyXG4gICAgYmlydGhfZGF0ZT86IHN0cmluZztcclxuICAgIHRheF9pbmZvPzogSVRheEluZm87XHJcbiAgICBhZGRyZXNzPzogSUFkZHJlc3NQb3J0YWJsZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQXBwbGljYXRpb25Db250ZXh0IHtcclxuICAgIGJyYW5kX25hbWU/OiBzdHJpbmc7XHJcbiAgICBsb2NhbGU/OiBzdHJpbmc7XHJcbiAgICBsYW5kaW5nX3BhZ2U/OiBQYXlwYWxMYW5kaW5nUGFnZTtcclxuICAgIHNoaXBwaW5nX3ByZWZlcmVuY2U/OiBTaGlwcGluZ1ByZWZlcmVuY2U7XHJcbiAgICB1c2VyX2FjdGlvbj86IFBheVBhbFVzZXJBY3Rpb247XHJcbiAgICBwYXltZW50X21ldGhvZD86IElQYXltZW50TWV0aG9kO1xyXG4gICAgcmV0dXJuX3VybD86IHN0cmluZztcclxuICAgIGNhbmNlbF91cmw/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBheW1lbnRNZXRob2Qge1xyXG4gICAgcGF5ZXJfc2VsZWN0ZWQ/OiBQYXllclNlbGVjdGVkO1xyXG4gICAgcGF5ZWVfcHJlZmVycmVkPzogUGF5ZWVQcmVmZXJyZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFBheWVlUHJlZmVycmVkID0gJ1VOUkVTVFJJQ1RFRCcgfCAnSU1NRURJQVRFX1BBWU1FTlRfUkVRVUlSRUQnO1xyXG5cclxuZXhwb3J0IHR5cGUgUGF5ZXJTZWxlY3RlZCA9ICdQQVlQQUxfQ1JFRElUJyB8ICdQQVlQQUwnO1xyXG5cclxuZXhwb3J0IHR5cGUgUGF5UGFsVXNlckFjdGlvbiA9ICdDT05USU5VRScgfCAnUEFZX05PVyc7XHJcblxyXG5leHBvcnQgdHlwZSBTaGlwcGluZ1ByZWZlcmVuY2UgPSAnR0VUX0ZST01fRklMRScgfCAnTk9fU0hJUFBJTkcnIHwgJ1NFVF9QUk9WSURFRF9BRERSRVNTJztcclxuXHJcbmV4cG9ydCB0eXBlIFBheXBhbExhbmRpbmdQYWdlID0gJ0xPR0lOJyB8ICdCSUxMSU5HJztcclxuXHJcbmV4cG9ydCB0eXBlIE9yZGVySW50ZW50ID0gJ0NBUFRVUkUnIHwgJ0FVVEhPUklaRSc7XHJcblxyXG5leHBvcnQgdHlwZSBEaXNidXJzZW1lbnRNb2RlID0gJ0lOU1RBTlQnIHwgJ0RFTEFZRUQnO1xyXG5cclxuZXhwb3J0IHR5cGUgSXRlbUNhdGVnb3J5ID0gJ0RJR0lUQUxfR09PRFMnIHwgJ1BIWVNJQ0FMX0dPT0RTJztcclxuXHJcbmV4cG9ydCB0eXBlIFBob25lVHlwZSA9ICdGQVgnIHwgJ0hPTUUnIHwgJ01PQklMRScgfCAnT1RIRVInIHwgJ1BBR0VSJztcclxuXHJcbmV4cG9ydCB0eXBlIFRheElkVHlwZSA9ICdCUl9DUEYnIHwgJ0JSX0NOUEonO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUGhvbmUge1xyXG4gICAgcGhvbmVfdHlwZT86IFBob25lVHlwZTtcclxuICAgIHBob25lX251bWJlcj86IElQaG9uZU51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVGF4SW5mbyB7XHJcbiAgICB0YXhfaWQ6IHN0cmluZztcclxuICAgIHRheF9pZF90eXBlOiBUYXhJZFR5cGU7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBob25lTnVtYmVyIHtcclxuICAgIG5hdGlvbmFsX251bWJlcjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQdXJjaGFzZVVuaXQge1xyXG4gICAgYW1vdW50OiBJVW5pdEFtb3VudDtcclxuXHJcbiAgICByZWZlcmVuY2VfaWQ/OiBzdHJpbmc7XHJcbiAgICBwYXllZT86IElQYXllZTtcclxuICAgIHBheW1lbnRfaW5zdHJ1Y3Rpb24/OiBJUGF5bWVudEluc3RydWN0aW9ucztcclxuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4gICAgY3VzdG9tX2lkPzogc3RyaW5nO1xyXG4gICAgaW52b2ljZV9pZD86IHN0cmluZztcclxuICAgIHNvZnRfZGVzY3JpcHRvcj86IHN0cmluZztcclxuICAgIGl0ZW1zOiBJVHJhbnNhY3Rpb25JdGVtW107XHJcbiAgICBzaGlwcGluZz86IElTaGlwcGluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUGF5ZWUge1xyXG4gICAgZW1haWxfYWRkcmVzcz86IHN0cmluZztcclxuICAgIG1lcmNoYW50X2lkPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElQYXltZW50SW5zdHJ1Y3Rpb25zIHtcclxuICAgIHBsYXRmb3JtX2ZlZXM/OiBJUGxhdGZvcm1GZWVbXTtcclxuICAgIGRpc2J1cnNlbWVudF9tb2RlPzogRGlzYnVyc2VtZW50TW9kZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUGxhdGZvcm1GZWUge1xyXG4gICAgYW1vdW50OiBJVW5pdEFtb3VudDtcclxuICAgIHBheWVlPzogSVBheWVlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElUcmFuc2FjdGlvbkl0ZW0ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgdW5pdF9hbW91bnQ6IElVbml0QW1vdW50O1xyXG4gICAgcXVhbnRpdHk6IHN0cmluZztcclxuXHJcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcclxuICAgIHNrdT86IHN0cmluZztcclxuICAgIGNhdGVnb3J5PzogSXRlbUNhdGVnb3J5O1xyXG4gICAgdGF4PzogSVRheDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVGF4IHtcclxuICAgIGN1cnJlbmN5X2NvZGU6IHN0cmluZztcclxuICAgIHZhbHVlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVVuaXRBbW91bnQge1xyXG4gICAgY3VycmVuY3lfY29kZTogc3RyaW5nO1xyXG4gICAgdmFsdWU6IHN0cmluZztcclxuICAgIGJyZWFrZG93bj86IElVbml0QnJlYWtkb3duO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElNb25leSB7XHJcbiAgICBjdXJyZW5jeV9jb2RlOiBzdHJpbmc7XHJcbiAgICB2YWx1ZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElVbml0QnJlYWtkb3duIHtcclxuICAgIGl0ZW1fdG90YWw/OiBJVW5pdEFtb3VudDtcclxuICAgIHNoaXBwaW5nPzogSVVuaXRBbW91bnQ7XHJcbiAgICBoYW5kbGluZz86IElVbml0QW1vdW50O1xyXG4gICAgdGF4X3RvdGFsPzogSVVuaXRBbW91bnQ7XHJcbiAgICBpbnN1cmFuY2U/OiBJVW5pdEFtb3VudDtcclxuICAgIHNoaXBwaW5nX2Rpc2NvdW50PzogSVVuaXRBbW91bnQ7XHJcbiAgICBkaXNjb3VudD86IElNb25leTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUGFydHlOYW1lIHtcclxuICAgIHByZWZpeD86IHN0cmluZztcclxuICAgIGdpdmVuX25hbWU/OiBzdHJpbmc7XHJcbiAgICBzdXJuYW1lPzogc3RyaW5nO1xyXG4gICAgbWlkZGxlX25hbWU/OiBzdHJpbmc7XHJcbiAgICBzdWZmaXg/OiBzdHJpbmc7XHJcbiAgICBhbHRlcm5hdGVfZnVsbF9uYW1lPzogc3RyaW5nO1xyXG4gICAgZnVsbF9uYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBZGRyZXNzUG9ydGFibGUge1xyXG4gICAgY291bnRyeV9jb2RlOiBzdHJpbmc7XHJcblxyXG4gICAgYWRkcmVzc19saW5lXzE/OiBzdHJpbmc7XHJcbiAgICBhZGRyZXNzX2xpbmVfMj86IHN0cmluZztcclxuICAgIGFkbWluX2FyZWFfMj86IHN0cmluZztcclxuICAgIGFkbWluX2FyZWFfMT86IHN0cmluZztcclxuICAgIHBvc3RhbF9jb2RlPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTaGlwcGluZyB7XHJcbiAgICBuYW1lPzogSVBhcnR5TmFtZTtcclxuICAgIGFkZHJlc3M/OiBJQWRkcmVzc1BvcnRhYmxlO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBPcmRlclN0YXR1cyA9ICdBUFBST1ZFRCcgfCAnU0FWRUQnIHwgJ0NSRUFURUQnIHwgJ1ZPSURFRCcgfCAnQ09NUExFVEVEJztcclxuXHJcblxyXG4iXX0=