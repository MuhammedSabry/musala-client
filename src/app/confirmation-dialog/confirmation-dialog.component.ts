import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
    selector: 'app-confirmation-dialog',
    templateUrl: './confirmation-dialog.component.html',
    styleUrls: ['./confirmation-dialog.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmationDialogComponent implements OnInit {
    @Input() confirmMessage = 'Are you sure you want to proceed? this cannot be undone';
    @Input() cancelButtonLabel = 'Cancel';
    @Input() confirmButtonLabel = 'Confirm';

    constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>) {
    }

    ngOnInit() {
    }

}
