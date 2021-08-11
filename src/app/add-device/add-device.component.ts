import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: 'app-add-device',
    templateUrl: './add-device.component.html',
    styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent implements OnInit {

    constructor(private dialogRef: MatDialogRef<AddDeviceComponent>) {
    }

    ngOnInit(): void {
    }

    closeClick() {
        this.dialogRef.close(false)
    }

    saveClick() {

    }
}
