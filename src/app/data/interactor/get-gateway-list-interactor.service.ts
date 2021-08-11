import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {NetworkRepository} from "../repository/network/network-repository.service";
import {BaseInteractor} from "./base-interactor";
import {Gateway} from "../model/gateway";

@Injectable({
    providedIn: 'root'
})
export class GetGatewayListInteractorService implements BaseInteractor<void, Gateway[]> {

    constructor(protected networkRepository: NetworkRepository) {
    }

    public execute(): Observable<Gateway[]> {
        return this.networkRepository.getGatewayList();
    }
}
