import { Component, ElementRef, Input, OnChanges, OnDestroy, SimpleChanges, ViewChild } from '@angular/core';

import { PayPalFunding } from '../models/paypal-funding';
import { PayPalIntegrationType } from '../models/paypal-integration';
import { IPaypalClient, IPayPalPaymentCompleteData, PayPalConfig } from '../models/paypal-models';

/**
 * Global variable where PayPal is loaded to
 */
declare var paypal: any;

@Component({
    selector: 'ngx-paypal',
    template: `
    <div #payPalScriptElem></div>
    <div [id]="payPalButtonContainerId"></div>
    `
})
export class NgxPaypalComponent implements OnChanges, OnDestroy {

    /**
     * Configuration for paypal.
     */
    @Input() config: PayPalConfig;

    /**
     * Indicates if global configuration (provided via 'forRoot') is used
     */
    @Input() useGlobalConfig = false;

    @ViewChild('payPalScriptElem') paypalScriptElem: ElementRef;

    /**
    * Name of the global variable where paypal is stored
    */
    private readonly paypalWindowName = 'paypal';

    /**
     * PayPal integration script url
     */
    private readonly paypalScriptUrl = 'https://www.paypalobjects.com/api/checkout.js';

    /**
     * Id of the element where PayPal button will be rendered
     */
    private readonly payPalButtonContainerId = 'ngx-paypal-button-container';

    constructor(
    ) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        // init when config once its available
        if (this.config) {
            this.initPayPal();
        }
    }

    ngOnDestroy(): void {
        // cleanup
        window[this.paypalWindowName] = undefined;
    }

    private initPayPal(): void {
        // check if paypal was already register and if so, don't add it to page again
        if (!window[this.paypalWindowName]) {
            // register script
            this.addPaypalScriptToPage();
        } else {
            // just register payment
            this.setupScript();
        }

    }

    private addPaypalScriptToPage(): void {
        const script = document.createElement('script');
        script.innerHTML = '';
        script.src = this.paypalScriptUrl;
        script.onload = () => this.setupScript();
        script.async = true;
        script.defer = true;

        this.paypalScriptElem.nativeElement.appendChild(script);
    }

    private setupScript(): void {
        // first clear container
        this.paypalScriptElem.nativeElement.innerHTML = '';

        // render PayPal button as per their docs at
        // https://developer.paypal.com/docs/integration/direct/express-checkout/integration-jsv4/add-paypal-button/
        paypal.Button.render({
            // set environment
            env: this.config.environment.toString(),

            // Show the buyer a 'Pay Now' button in the checkout flow
            commit: this.config.commit,

            // init client for client side integration
            client: this.getClient(),

            // set button config if available
            style: this.config.button,

            // set funding if available
            funding: this.getFunding(),

            // payment() is called when the button is clicked
            payment: (data, actions) => {
                if (this.config.integrationType === PayPalIntegrationType.ServerSideREST) {
                    // client needs to create payment on server side
                    if (!this.config.payment) {
                        throw Error(`You need set up a create payment method and return
                            PayPal's payment id when using server side integration`);
                    }

                    // Paypal expects promise with payment id (string) to be returned
                    return this.config.payment().toPromise()
                        .then(paymentId => {
                            return paymentId;
                        });
                }

                if (this.config.integrationType === PayPalIntegrationType.ClientSideREST) {
                    if (!this.config.transactions || !Array.isArray(this.config.transactions) || this.config.transactions.length <= 0) {
                        throw Error(`You need to provide at least 1 transaction for client side integration`);
                    }

                    return actions.payment.create({
                        payment: {
                            transactions: this.config.transactions
                        }
                    });
                }
            },

            // onAuthorize() is called when the buyer approves the payment
            onAuthorize: (data: IPayPalPaymentCompleteData, actions: any) => {
                if (this.config.integrationType === PayPalIntegrationType.ServerSideREST) {
                    // client needs to server to execute the payment
                    if (!this.config.onAuthorize) {
                        throw Error(`You need set up an execute method when using server side integration`);
                    }

                    // Paypal expects promise
                    return this.config.onAuthorize(data, actions).toPromise();
                }

                if (this.config.integrationType === PayPalIntegrationType.ClientSideREST) {
                    // Make a call to the REST api to execute the payment
                    return actions.payment.execute().then(() => {
                        if (!this.config.onPaymentComplete) {
                            throw Error(`You should provide some callback when payment is finished when using client side integration`);
                        }
                        this.config.onPaymentComplete(data, actions);
                    });
                }
            },

            onError: (err) => {
                if (this.config.onError) {
                    this.config.onError(err);
                }
            },

            onCancel: (data, actions) => {
                if (this.config.onCancel) {
                    this.config.onCancel(data, actions);
                }
            }


        }, `#${this.payPalButtonContainerId}`);
    }

    private getClient(): IPaypalClient {
        if (this.config.integrationType === PayPalIntegrationType.ClientSideREST) {
            if (!this.config.client) {
                throw Error(`You need to setup client information when using client side integration`);
            }
        }
        return {
            production: this.config.client.production,
            sandbox: this.config.client.sandbox
        };
    }

    private getFunding(): {
        allowed: any[],
        disallowed: any[]
    } | undefined {
        // resolve funding to use paypal's properties
        if (!this.config.funding) {
            // no funding provided
            return undefined;
        }

        const allowed: any[] = [];
        const disallowed: any[] = [];

        if (this.config.funding.allowed) {
            this.config.funding.allowed.forEach(type => {
                allowed.push(this.mapFundingType(type));
            });
        }

        if (this.config.funding.allowed) {
            this.config.funding.allowed.forEach(type => {
                allowed.push(this.mapFundingType(type));
            });
        }

        return {
            allowed: allowed,
            disallowed: disallowed
        };
    }

    private mapFundingType(type: PayPalFunding): any {
        if (type === PayPalFunding.Card) {
            return paypal.FUNDING.CARD;
        }
        if (type === PayPalFunding.Credit) {
            return paypal.FUNDING.CREDIT;
        }
        if (type === PayPalFunding.Elv) {
            return paypal.FUNDING.ELV;
        }
        throw Error(`Unsupported funding type '${type}'`);
    }
}

