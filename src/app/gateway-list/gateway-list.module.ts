import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GatewayListComponent} from './gateway-list.component';
import {GatewayItemModule} from "../gateway-item/gateway-item.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {AddGatewayModule} from "../add-gateway/add-gateway.module";


@NgModule({
    declarations: [
        GatewayListComponent
    ],
    imports: [
        CommonModule,
        GatewayItemModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        AddGatewayModule
    ]
})
export class GatewayListModule {
}
