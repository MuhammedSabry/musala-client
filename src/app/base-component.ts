import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';

@Component({
    template: ``
})
export class BaseComponent implements OnDestroy {

    private subscriptions: Subscription[] = [];

    constructor(protected changeDetectorRef: ChangeDetectorRef) {
    }

    detectChanges() {
        this.changeDetectorRef.detectChanges();
    }

    addSubscription(subscription: Subscription) {
        this.subscriptions.push(subscription);
    }

    ngOnDestroy(): void {
        this.changeDetectorRef.detach();
        this.subscriptions.forEach(subscription => {
            if (!subscription.closed) {
                subscription.unsubscribe();
            }
        });
    }

    openAbsoluteLink(urlToOpen: string, target: '_blank' | '_self' = '_blank') {
        if (!urlToOpen || urlToOpen.trim().length === 0) {
            return;
        }
        let url = '';
        if (!/^http[s]?:\/\//.test(urlToOpen)) {
            url += 'http://';
        }

        url += urlToOpen;
        window.open(url, target);
    }

    markForCheck() {
        this.changeDetectorRef.markForCheck();
    }
}
