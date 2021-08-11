import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmationDialogComponent} from './confirmation-dialog.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule
    ],
    declarations: [
        ConfirmationDialogComponent
    ],
    exports: [
        ConfirmationDialogComponent
    ]
})
export class ConfirmationDialogModule {
}
