import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GatewayItemComponent} from './gateway-item.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonModule} from "@angular/material/button";
import {ConfirmationDialogModule} from "../confirmation-dialog/confirmation-dialog.module";
import {MatDialogModule} from "@angular/material/dialog";
import {AddDeviceModule} from "../add-device/add-device.module";


@NgModule({
    declarations: [
        GatewayItemComponent
    ],
    exports: [
        GatewayItemComponent
    ],
    imports: [
        CommonModule,
        MatExpansionModule,
        MatButtonModule,
        ConfirmationDialogModule,
        MatDialogModule,
        AddDeviceModule
    ]
})
export class GatewayItemModule {
}
