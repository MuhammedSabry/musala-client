import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Gateway} from "../data/model/gateway";
import {GetGatewayListInteractorService} from "../data/interactor/get-gateway-list-interactor.service";
import {BaseComponent} from "../base-component";
import {SnackbarService} from "../data/service/snackbar.service";

@Component({
    selector: 'app-gateway-list',
    templateUrl: './gateway-list.component.html',
    styleUrls: ['./gateway-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GatewayListComponent extends BaseComponent implements OnInit {
    gatewayList: Gateway[] = [];
    isLoading: boolean = true;

    constructor(private getGatewayListInteractor: GetGatewayListInteractorService,
                private snackbarService: SnackbarService,
                protected cdk: ChangeDetectorRef) {
        super(cdk);
    }

    ngOnInit(): void {
        this.updateData();
    }

    updateData() {
        this.isLoading = true;
        this.markForCheck();
        this.addSubscription(
            this.getGatewayListInteractor.execute()
                .subscribe(gatewayList => {
                    this.gatewayList = gatewayList;
                    this.stopLoading();
                }, () => {
                    this.snackbarService.error("Couldn't load data, please try again later");
                })
        );
    }

    addGatewayClick() {

    }

    private stopLoading() {
        this.isLoading = false;
        this.markForCheck();
    }
}
