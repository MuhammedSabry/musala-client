import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddDeviceComponent} from './add-device.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
    declarations: [
        AddDeviceComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class AddDeviceModule {
}
