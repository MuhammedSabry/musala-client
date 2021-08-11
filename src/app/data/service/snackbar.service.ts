import {Injectable} from '@angular/core';
import {
    MatSnackBar,
    MatSnackBarConfig,
    MatSnackBarRef,
    SimpleSnackBar
} from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class SnackbarService {

    private readonly DEFAULT_DURATION = 2500;

    baseConfig: MatSnackBarConfig = {
        verticalPosition: 'top',
        duration: this.DEFAULT_DURATION
    };

    constructor(private matSnackbar: MatSnackBar) {
    }

    public error(message: string, params?: any, action?: string, duration?: number) {
        this.matSnackbar.open(message, action, {
            panelClass: 'snackbar-error',
            ...this.baseConfig,
            duration: duration ? duration : this.DEFAULT_DURATION
        });
    }

    public success(message: string, params?: any, action?: string, duration?: number): MatSnackBarRef<SimpleSnackBar> {
        return this.matSnackbar.open(message, action, {
            panelClass: 'snackbar-success',
            ...this.baseConfig,
            duration: duration ? duration : this.DEFAULT_DURATION
        });
    }

    public info(message: string, params?: any, duration?: number) {
        this.matSnackbar.open(message, undefined, {
            panelClass: 'snackbar-info',
            ...this.baseConfig,
            duration: duration ? duration : this.DEFAULT_DURATION
        });
    }

    warning(message: string, params?: any, action?: string, duration?: number): MatSnackBarRef<SimpleSnackBar> {
        return this.matSnackbar.open(message, action, {
            panelClass: 'snackbar-warning',
            ...this.baseConfig,
            duration: duration ? duration : this.DEFAULT_DURATION
        });
    }
}
