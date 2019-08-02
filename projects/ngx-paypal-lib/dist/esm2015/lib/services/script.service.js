/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, NgZone } from '@angular/core';
export class ScriptService {
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
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ScriptService.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtcGF5cGFsLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3NjcmlwdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUduRCxNQUFNLE9BQU8sYUFBYTs7OztJQUV0QixZQUNjLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO0lBRTFCLENBQUM7Ozs7Ozs7O0lBRUQsY0FBYyxDQUFDLEdBQVcsRUFBRSxTQUFpQixFQUFFLE9BQWlDLEVBQUUsT0FBbUI7O2NBQzNGLGlCQUFpQixHQUFHLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDcEQsSUFBSSxpQkFBaUIsRUFBRTtZQUNuQix5REFBeUQ7WUFDekQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDL0IsQ0FBQyxFQUFDLENBQUM7WUFDSCxPQUFPO1NBQ1Y7OztjQUlLLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUNuRCxVQUFVLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDMUIsVUFBVSxDQUFDLE1BQU07OztRQUFHLEdBQUcsRUFBRTtZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztZQUFDLEdBQUcsRUFBRTtnQkFDZixPQUFPLENBQUMsQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsQ0FBQyxFQUFDLENBQUM7UUFDUCxDQUFDLENBQUEsQ0FBQztRQUNGLFVBQVUsQ0FBQyxPQUFPOzs7UUFBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2pCLE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLENBQUEsQ0FBQztRQUNGLFVBQVUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRXhCLHVCQUF1QjtRQUN2QixRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLFNBQWlCOzs7Y0FFZixVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXJFLElBQUksVUFBVSxFQUFFO1lBQ1osVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sU0FBUyxDQUFDLFNBQWlCO1FBQy9CLE9BQU8sMEJBQTBCLFNBQVMsRUFBRSxDQUFDO0lBQ2pELENBQUM7OztZQXBESixVQUFVOzs7O1lBRlUsTUFBTTs7Ozs7OztJQU1uQiw2QkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNjcmlwdFNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByb3RlY3RlZCB6b25lOiBOZ1pvbmUsXHJcbiAgICApIHtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlclNjcmlwdCh1cmw6IHN0cmluZywgZ2xvYmFsVmFyOiBzdHJpbmcsIG9uUmVhZHk6IChnbG9iYWxWYXI6IGFueSkgPT4gdm9pZCwgb25FcnJvcjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nR2xvYmFsVmFyID0gKHdpbmRvdyBhcyBhbnkpW2dsb2JhbFZhcl07XHJcbiAgICAgICAgaWYgKGV4aXN0aW5nR2xvYmFsVmFyKSB7XHJcbiAgICAgICAgICAgIC8vIGdsb2JhbCB2YXJpYWJsZSBpcyBwcmVzZW50ID0gc2NyaXB0IHdhcyBhbHJlYWR5IGxvYWRlZFxyXG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIG9uUmVhZHkoZXhpc3RpbmdHbG9iYWxWYXIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIHByZXBhcmUgc2NyaXB0IGVsZW1cclxuICAgICAgICBjb25zdCBzY3JpcHRFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgc2NyaXB0RWxlbS5pZCA9IHRoaXMuZ2V0RWxlbUlkKGdsb2JhbFZhcik7XHJcbiAgICAgICAgc2NyaXB0RWxlbS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBzY3JpcHRFbGVtLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvblJlYWR5KCh3aW5kb3cgYXMgYW55KVtnbG9iYWxWYXJdKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzY3JpcHRFbGVtLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgb25FcnJvcigpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzY3JpcHRFbGVtLnNyYyA9IHVybDtcclxuICAgICAgICBzY3JpcHRFbGVtLmFzeW5jID0gdHJ1ZTtcclxuICAgICAgICBzY3JpcHRFbGVtLmRlZmVyID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gYWRkIHNjcmlwdCB0byBoZWFkZXJcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHNjcmlwdEVsZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFudXAoZ2xvYmFsVmFyOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAvLyByZW1vdmUgc2NyaXB0IGZyb20gRE9NXHJcbiAgICAgICAgY29uc3Qgc2NyaXB0RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZ2V0RWxlbUlkKGdsb2JhbFZhcikpO1xyXG5cclxuICAgICAgICBpZiAoc2NyaXB0RWxlbSkge1xyXG4gICAgICAgICAgICBzY3JpcHRFbGVtLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEVsZW1JZChnbG9iYWxWYXI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIGBuZ3gtcGF5cGFsLXNjcmlwdC1lbGVtLSR7Z2xvYmFsVmFyfWA7XHJcbiAgICB9XHJcbn1cclxuIl19