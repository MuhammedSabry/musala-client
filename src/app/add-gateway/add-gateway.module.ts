import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddGatewayComponent} from './add-gateway.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
    declarations: [
        AddGatewayComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class AddGatewayModule {
}
