import {NgModule} from '@angular/core';
import {BrowserModule, HammerModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BaseUrlInterceptor} from "./data/repository/network/interceptor/base-url-interceptor";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BaseComponent} from "./base-component";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
    declarations: [
        AppComponent,
        BaseComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HammerModule,
        MatSnackBarModule,
        MatDialogModule,
        MatTooltipModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: BaseUrlInterceptor,
            multi: true,
        },
        MatSnackBar
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
