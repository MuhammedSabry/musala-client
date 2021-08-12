import {ChangeDetectorRef, Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {BaseComponent} from "../base-component";
import {AbstractControl, FormControl, ValidationErrors, Validators} from "@angular/forms";
import {SnackbarService} from "../data/service/snackbar.service";
import {AddGatewayInteractor} from "../data/interactor/add-gateway-interactor.service";

@Component({
    selector: 'app-add-gateway',
    templateUrl: './add-gateway.component.html',
    styleUrls: ['./add-gateway.component.css']
})
export class AddGatewayComponent extends BaseComponent {

    nameFormControl: FormControl = new FormControl('', []);
    online: boolean = true;
    isLoading: boolean = false;

    constructor(protected cdk: ChangeDetectorRef,
                private snackbarService: SnackbarService,
                private dialogRef: MatDialogRef<AddGatewayComponent>,
                private addGatewayInteractor: AddGatewayInteractor) {
        super(cdk);
    }

    isValidAddress = (control: AbstractControl): ValidationErrors | null => {
        let address = control.value;
        if (!address)
            return null;
        let addressParts: string[] = address.split(".");
        if (addressParts.length != 4) {
            return {
                invalid: true
            };
        }
        if (!!addressParts.find(part => parseInt(part) > 255 || parseInt(part) < 0)) {
            return {
                invalid: true
            }
        }
        return null;
    };

    addressFormControl: FormControl = new FormControl('', [Validators.required, this.isValidAddress]);

    closeClick() {
        this.dialogRef.close(false)
    }

    saveClick() {
        if (!this.addressFormControl.valid) {
            return;
        }
        this.addSubscription(
            this.addGatewayInteractor.execute({
                uuid: '',
                name: this.nameFormControl.value,
                address: this.addressFormControl.value
            }).subscribe(() => {
                this.snackbarService.success('Gateway added successfully');
                this.dialogRef.close(true);
            }, () => {
                this.snackbarService.error("Gateway cannot be added");
                this.isLoading = false;
                this.markForCheck();
            })
        );
    }
}
