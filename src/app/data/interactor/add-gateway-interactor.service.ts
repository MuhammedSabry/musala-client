import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {NetworkRepository} from "../repository/network/network-repository.service";
import {BaseInteractor} from "./base-interactor";
import {Gateway} from "../model/gateway";

@Injectable({
    providedIn: 'root'
})
export class AddGatewayInteractor implements BaseInteractor<Gateway, void> {

    constructor(protected networkRepository: NetworkRepository) {
    }

    public execute(gateway: Gateway): Observable<void> {
        return this.networkRepository.addGateway(gateway);
    }
}
