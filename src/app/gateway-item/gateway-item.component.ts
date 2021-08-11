import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import {Gateway} from "../data/model/gateway";
import {BaseComponent} from "../base-component";
import {Device} from "../data/model/device";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "../confirmation-dialog/confirmation-dialog.component";
import {RemoveDeviceInteractorService} from "../data/interactor/remove-device-interactor.service";
import {SnackbarService} from "../data/service/snackbar.service";
import {RemoveGatewayInteractorService} from "../data/interactor/remove-gateway-interactor.service";
import {AddDeviceComponent} from "../add-device/add-device.component";

@Component({
    selector: 'app-gateway-item',
    templateUrl: './gateway-item.component.html',
    styleUrls: ['./gateway-item.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GatewayItemComponent extends BaseComponent implements OnInit {
    @Input() gateway: Gateway = {uuid: ''};
    @Output() onGatewayUpdated: EventEmitter<void> = new EventEmitter<void>();

    constructor(protected cdk: ChangeDetectorRef,
                private matDialog: MatDialog,
                private snackbarService: SnackbarService,
                private deleteDeviceInteractor: RemoveDeviceInteractorService,
                private removeGatewayInteractorService: RemoveGatewayInteractorService) {
        super(cdk);
    }

    ngOnInit(): void {
    }

    addDeviceClick() {
        let matDialogRef = this.matDialog.open(AddDeviceComponent, {
            disableClose: true
        });
        matDialogRef.afterClosed().subscribe(hasChanges => hasChanges ? this.onGatewayUpdated.emit() : {});
    }

    deleteDeviceClick(device: Device) {
        this.matDialog.open(ConfirmationDialogComponent).afterClosed().subscribe(hasConfirmed => hasConfirmed ? this.deleteDevice(device) : {});
    }

    deleteGatewayClick() {
        this.matDialog.open(ConfirmationDialogComponent).afterClosed().subscribe(hasConfirmed => hasConfirmed ? this.deleteGateway() : {});
    }

    private deleteGateway() {
        this.addSubscription(
            this.removeGatewayInteractorService.execute(this.gateway)
                .subscribe(() => {
                    this.snackbarService.success('Gateway deleted successfully');
                    this.onGatewayUpdated.emit();
                }, () => {
                    this.snackbarService.error("Gateway cannot be deleted");
                })
        )
    }

    private deleteDevice(device: Device) {
        this.addSubscription(
            this.deleteDeviceInteractor.execute(device)
                .subscribe(() => {
                    this.snackbarService.success('Device deleted successfully');
                    this.onGatewayUpdated.emit();
                }, () => {
                    this.snackbarService.error("Device cannot be deleted");
                })
        )
    }
}
