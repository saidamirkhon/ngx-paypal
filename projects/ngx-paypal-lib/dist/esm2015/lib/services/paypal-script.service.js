/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ScriptService } from './script.service';
export class PayPalScriptService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLXNjcmlwdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXBheXBhbC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9wYXlwYWwtc2NyaXB0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBR2pELE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFLNUIsWUFDYyxhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUp6QixxQkFBZ0IsR0FBRyxRQUFRLENBQUM7SUFNN0MsQ0FBQzs7Ozs7OztJQUVELG9CQUFvQixDQUFDLE1BQXdCLEVBQUUsT0FBaUMsRUFBRSxPQUFtQjtRQUNqRyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDN0csQ0FBQzs7OztJQUVELG1CQUFtQjtRQUNmLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7OztJQUVPLGVBQWUsQ0FBQyxNQUF3Qjs7Y0FDdEMsTUFBTSxHQUFrQjtZQUMxQjtnQkFDSSxJQUFJLEVBQUUsV0FBVztnQkFDakIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRO2FBQ3pCO1NBQ0o7UUFFRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDUixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRO2FBQ3pCLENBQUMsQ0FBQztTQUNOO1FBRUQsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDUixJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU07YUFDdkIsQ0FBQyxDQUFDO1NBQ047UUFFRCxJQUFJLE1BQU0sQ0FBQyxXQUFXLEVBQUU7WUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN0QztRQUVELE9BQU8sZ0NBQWdDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUN6RSxDQUFDOzs7Ozs7SUFFTyxjQUFjLENBQUMsV0FBMEI7O1lBQ3pDLFdBQVcsR0FBRyxFQUFFO1FBRXBCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztrQkFDbkMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNULFdBQVcsSUFBSSxHQUFHLENBQUM7YUFDdEI7aUJBQU07Z0JBQ0gsV0FBVyxJQUFJLEdBQUcsQ0FBQzthQUN0QjtZQUVELFdBQVcsSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLElBQUksVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzNEO1FBRUQsT0FBTyxXQUFXLENBQUM7SUFDdkIsQ0FBQzs7O1lBL0RKLFVBQVU7Ozs7WUFGRixhQUFhOzs7Ozs7O0lBS2xCLCtDQUE2Qzs7Ozs7SUFJekMsNENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSVBheVBhbFVybENvbmZpZywgSVF1ZXJ5UGFyYW0gfSBmcm9tICcuLi9tb2RlbHMvcGF5cGFsLW1vZGVscyc7XHJcbmltcG9ydCB7IFNjcmlwdFNlcnZpY2UgfSBmcm9tICcuL3NjcmlwdC5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBheVBhbFNjcmlwdFNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGF5cGFsV2luZG93TmFtZSA9ICdwYXlwYWwnO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90ZWN0ZWQgc2NyaXB0U2VydmljZTogU2NyaXB0U2VydmljZSxcclxuICAgICkge1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyUGF5UGFsU2NyaXB0KGNvbmZpZzogSVBheVBhbFVybENvbmZpZywgb25SZWFkeTogKHBheVBhbEFwaTogYW55KSA9PiB2b2lkLCBvbkVycm9yOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zY3JpcHRTZXJ2aWNlLnJlZ2lzdGVyU2NyaXB0KHRoaXMuZ2V0VXJsRm9yQ29uZmlnKGNvbmZpZyksIHRoaXMucGF5cGFsV2luZG93TmFtZSwgb25SZWFkeSwgb25FcnJvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveVBheVBhbFNjcmlwdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNjcmlwdFNlcnZpY2UuY2xlYW51cCh0aGlzLnBheXBhbFdpbmRvd05hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0VXJsRm9yQ29uZmlnKGNvbmZpZzogSVBheVBhbFVybENvbmZpZyk6IHN0cmluZyB7XHJcbiAgICAgICAgY29uc3QgcGFyYW1zOiBJUXVlcnlQYXJhbVtdID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnY2xpZW50LWlkJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBjb25maWcuY2xpZW50SWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGlmIChjb25maWcuY3VycmVuY3kpIHtcclxuICAgICAgICAgICAgcGFyYW1zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2N1cnJlbmN5JyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBjb25maWcuY3VycmVuY3lcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29uZmlnLmNvbW1pdCkge1xyXG4gICAgICAgICAgICBwYXJhbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnY29tbWl0JyxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBjb25maWcuY29tbWl0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZy5leHRyYVBhcmFtcykge1xyXG4gICAgICAgICAgICBwYXJhbXMucHVzaCguLi5jb25maWcuZXh0cmFQYXJhbXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGBodHRwczovL3d3dy5wYXlwYWwuY29tL3Nkay9qcyR7dGhpcy5nZXRRdWVyeVN0cmluZyhwYXJhbXMpfWA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRRdWVyeVN0cmluZyhxdWVyeVBhcmFtczogSVF1ZXJ5UGFyYW1bXSk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHF1ZXJ5U3RyaW5nID0gJyc7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVlcnlQYXJhbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgcXVlcnlQYXJhbSA9IHF1ZXJ5UGFyYW1zW2ldO1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcXVlcnlTdHJpbmcgKz0gJz8nO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcXVlcnlTdHJpbmcgKz0gJyYnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBxdWVyeVN0cmluZyArPSBgJHtxdWVyeVBhcmFtLm5hbWV9PSR7cXVlcnlQYXJhbS52YWx1ZX1gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHF1ZXJ5U3RyaW5nO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==