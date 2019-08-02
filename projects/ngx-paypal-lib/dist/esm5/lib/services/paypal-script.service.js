/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ScriptService } from './script.service';
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
            params.push.apply(params, tslib_1.__spread(config.extraParams));
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
        { type: Injectable }
    ];
    /** @nocollapse */
    PayPalScriptService.ctorParameters = function () { return [
        { type: ScriptService }
    ]; };
    return PayPalScriptService;
}());
export { PayPalScriptService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PayPalScriptService.prototype.paypalWindowName;
    /**
     * @type {?}
     * @protected
     */
    PayPalScriptService.prototype.scriptService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLXNjcmlwdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXBheXBhbC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9wYXlwYWwtc2NyaXB0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRDtJQU1JLDZCQUNjLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBSnpCLHFCQUFnQixHQUFHLFFBQVEsQ0FBQztJQU03QyxDQUFDOzs7Ozs7O0lBRUQsa0RBQW9COzs7Ozs7SUFBcEIsVUFBcUIsTUFBd0IsRUFBRSxPQUFpQyxFQUFFLE9BQW1CO1FBQ2pHLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM3RyxDQUFDOzs7O0lBRUQsaURBQW1COzs7SUFBbkI7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7Ozs7SUFFTyw2Q0FBZTs7Ozs7SUFBdkIsVUFBd0IsTUFBd0I7O1lBQ3RDLE1BQU0sR0FBa0I7WUFDMUI7Z0JBQ0ksSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLEtBQUssRUFBRSxNQUFNLENBQUMsUUFBUTthQUN6QjtTQUNKO1FBRUQsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ1IsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLEtBQUssRUFBRSxNQUFNLENBQUMsUUFBUTthQUN6QixDQUFDLENBQUM7U0FDTjtRQUVELElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ1IsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNO2FBQ3ZCLENBQUMsQ0FBQztTQUNOO1FBRUQsSUFBSSxNQUFNLENBQUMsV0FBVyxFQUFFO1lBQ3BCLE1BQU0sQ0FBQyxJQUFJLE9BQVgsTUFBTSxtQkFBUyxNQUFNLENBQUMsV0FBVyxHQUFFO1NBQ3RDO1FBRUQsT0FBTyxrQ0FBZ0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUcsQ0FBQztJQUN6RSxDQUFDOzs7Ozs7SUFFTyw0Q0FBYzs7Ozs7SUFBdEIsVUFBdUIsV0FBMEI7O1lBQ3pDLFdBQVcsR0FBRyxFQUFFO1FBRXBCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztnQkFDbkMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNULFdBQVcsSUFBSSxHQUFHLENBQUM7YUFDdEI7aUJBQU07Z0JBQ0gsV0FBVyxJQUFJLEdBQUcsQ0FBQzthQUN0QjtZQUVELFdBQVcsSUFBTyxVQUFVLENBQUMsSUFBSSxTQUFJLFVBQVUsQ0FBQyxLQUFPLENBQUM7U0FDM0Q7UUFFRCxPQUFPLFdBQVcsQ0FBQztJQUN2QixDQUFDOztnQkEvREosVUFBVTs7OztnQkFGRixhQUFhOztJQWtFdEIsMEJBQUM7Q0FBQSxBQWhFRCxJQWdFQztTQS9EWSxtQkFBbUI7Ozs7OztJQUU1QiwrQ0FBNkM7Ozs7O0lBSXpDLDRDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IElQYXlQYWxVcmxDb25maWcsIElRdWVyeVBhcmFtIH0gZnJvbSAnLi4vbW9kZWxzL3BheXBhbC1tb2RlbHMnO1xyXG5pbXBvcnQgeyBTY3JpcHRTZXJ2aWNlIH0gZnJvbSAnLi9zY3JpcHQuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQYXlQYWxTY3JpcHRTZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHBheXBhbFdpbmRvd05hbWUgPSAncGF5cGFsJztcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJvdGVjdGVkIHNjcmlwdFNlcnZpY2U6IFNjcmlwdFNlcnZpY2UsXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlclBheVBhbFNjcmlwdChjb25maWc6IElQYXlQYWxVcmxDb25maWcsIG9uUmVhZHk6IChwYXlQYWxBcGk6IGFueSkgPT4gdm9pZCwgb25FcnJvcjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2NyaXB0U2VydmljZS5yZWdpc3RlclNjcmlwdCh0aGlzLmdldFVybEZvckNvbmZpZyhjb25maWcpLCB0aGlzLnBheXBhbFdpbmRvd05hbWUsIG9uUmVhZHksIG9uRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3lQYXlQYWxTY3JpcHQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zY3JpcHRTZXJ2aWNlLmNsZWFudXAodGhpcy5wYXlwYWxXaW5kb3dOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFVybEZvckNvbmZpZyhjb25maWc6IElQYXlQYWxVcmxDb25maWcpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHBhcmFtczogSVF1ZXJ5UGFyYW1bXSA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2NsaWVudC1pZCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogY29uZmlnLmNsaWVudElkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBpZiAoY29uZmlnLmN1cnJlbmN5KSB7XHJcbiAgICAgICAgICAgIHBhcmFtcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdjdXJyZW5jeScsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogY29uZmlnLmN1cnJlbmN5XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZy5jb21taXQpIHtcclxuICAgICAgICAgICAgcGFyYW1zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2NvbW1pdCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogY29uZmlnLmNvbW1pdFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb25maWcuZXh0cmFQYXJhbXMpIHtcclxuICAgICAgICAgICAgcGFyYW1zLnB1c2goLi4uY29uZmlnLmV4dHJhUGFyYW1zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBgaHR0cHM6Ly93d3cucGF5cGFsLmNvbS9zZGsvanMke3RoaXMuZ2V0UXVlcnlTdHJpbmcocGFyYW1zKX1gO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UXVlcnlTdHJpbmcocXVlcnlQYXJhbXM6IElRdWVyeVBhcmFtW10pOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBxdWVyeVN0cmluZyA9ICcnO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXJ5UGFyYW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW0gPSBxdWVyeVBhcmFtc1tpXTtcclxuICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9ICc/JztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5U3RyaW5nICs9ICcmJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcXVlcnlTdHJpbmcgKz0gYCR7cXVlcnlQYXJhbS5uYW1lfT0ke3F1ZXJ5UGFyYW0udmFsdWV9YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBxdWVyeVN0cmluZztcclxuICAgIH1cclxufVxyXG4iXX0=