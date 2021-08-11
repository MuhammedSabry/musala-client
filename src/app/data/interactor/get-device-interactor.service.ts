import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {NetworkRepository} from "../repository/network/network-repository.service";
import {BaseInteractor} from "./base-interactor";
import {Device} from "../model/device";

@Injectable({
    providedIn: 'root'
})
export class GetDeviceInteractorService implements BaseInteractor<number, Device> {

    constructor(protected networkRepository: NetworkRepository) {
    }

    public execute(deviceID: number): Observable<Device> {
        return this.networkRepository.getDeviceById(deviceID);
    }
}
