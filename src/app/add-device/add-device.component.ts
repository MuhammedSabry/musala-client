import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {BaseComponent} from "../base-component";
import {FormControl} from "@angular/forms";
import {AddDeviceInteractorService} from "../data/interactor/add-device-interactor.service";
import {SnackbarService} from "../data/service/snackbar.service";

@Component({
    selector: 'app-add-device',
    templateUrl: './add-device.component.html',
    styleUrls: ['./add-device.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddDeviceComponent extends BaseComponent {

    @Input() gatewayID: string = '';
    vendorFormControl: FormControl = new FormControl('', []);
    online: boolean = true;
    isLoading: boolean = false;

    constructor(protected cdk: ChangeDetectorRef,
                private snackbarService: SnackbarService,
                private dialogRef: MatDialogRef<AddDeviceComponent>,
                private addDeviceInteractor: AddDeviceInteractorService) {
        super(cdk);
    }

    closeClick() {
        this.dialogRef.close(false)
    }

    saveClick() {
        this.addSubscription(
            this.addDeviceInteractor.execute({
                id: 0,
                online: this.online,
                vendor: this.vendorFormControl.value,
                gatewayID: this.gatewayID
            }).subscribe(() => {
                this.snackbarService.success('Device added successfully');
                this.dialogRef.close(true);
            }, () => {
                this.snackbarService.error("Device cannot be added");
                this.isLoading = false;
                this.markForCheck();
            })
        );
    }
}
