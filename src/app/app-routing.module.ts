import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GatewayListComponent} from "./gateway-list/gateway-list.component";

const appRoutes: Routes = [
    {
        path: '',
        component: GatewayListComponent,
        loadChildren: () => import('./gateway-list/gateway-list.module').then(mod => mod.GatewayListModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
