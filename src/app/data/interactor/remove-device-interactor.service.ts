import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {NetworkRepository} from "../repository/network/network-repository.service";
import {BaseInteractor} from "./base-interactor";
import {Device} from "../model/device";

@Injectable({
    providedIn: 'root'
})
export class RemoveDeviceInteractorService implements BaseInteractor<Device, void> {

    constructor(protected networkRepository: NetworkRepository) {
    }

    public execute(device: Device): Observable<void> {
        return this.networkRepository.deleteDevice(device.id);
    }
}
