import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: 'app-add-gateway',
    templateUrl: './add-gateway.component.html',
    styleUrls: ['./add-gateway.component.css']
})
export class AddGatewayComponent implements OnInit {

    constructor(private dialogRef: MatDialogRef<AddGatewayComponent>) {
    }

    ngOnInit(): void {
    }

    closeClick() {
        this.dialogRef.close(false)
    }

    saveClick() {

    }
}
