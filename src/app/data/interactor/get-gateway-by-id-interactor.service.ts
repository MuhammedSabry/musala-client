import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {NetworkRepository} from "../repository/network/network-repository.service";
import {BaseInteractor} from "./base-interactor";
import {Gateway} from "../model/gateway";

@Injectable({
    providedIn: 'root'
})
export class GetGatewayByIdInteractorService implements BaseInteractor<string, Gateway> {

    constructor(protected networkRepository: NetworkRepository) {
    }

    public execute(gatewayID: string): Observable<Gateway> {
        return this.networkRepository.getGatewayByID(gatewayID);
    }
}
