import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Gateway} from "../data/model/gateway";
import {GetGatewayListInteractorService} from "../data/interactor/get-gateway-list-interactor.service";
import {BaseComponent} from "../base-component";
import {SnackbarService} from "../data/service/snackbar.service";
import {MatDialog} from "@angular/material/dialog";
import {AddGatewayComponent} from "../add-gateway/add-gateway.component";

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
                private matDialog: MatDialog,
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
        let matDialogRef = this.matDialog.open(AddGatewayComponent, {
            width: '600px',
            disableClose: true
        });
        matDialogRef.afterClosed().subscribe(hasChanges => hasChanges ? this.updateData() : {});
    }

    private stopLoading() {
        this.isLoading = false;
        this.markForCheck();
    }
}
