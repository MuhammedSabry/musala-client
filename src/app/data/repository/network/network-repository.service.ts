import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Device} from "../../model/device";
import {Observable} from "rxjs";
import {Gateway} from "../../model/gateway";

@Injectable({
    providedIn: 'root'
})
export class NetworkRepository {
    constructor(private httpClient: HttpClient) {
    }

    // Device endpoints
    public addDevice(device: Device): Observable<void> {
        return this.httpClient.post<void>('/device', device);
    }

    public updateDevice(device: Device): Observable<void> {
        return this.httpClient.put<void>('/device', device);
    }

    public getDeviceById(deviceId: number): Observable<Device> {
        return this.httpClient.get<Device>(`/device/${deviceId}`);
    }

    public deleteDevice(deviceId: number): Observable<void> {
        return this.httpClient.delete<void>(`/device/${deviceId}`);
    }

    // Gateway endpoints
    public addGateway(gateway: Gateway): Observable<void> {
        return this.httpClient.post<void>('/gateway', gateway);
    }

    public getGatewayByID(gatewayID: string): Observable<Gateway> {
        return this.httpClient.get<Gateway>(`/gateway/${gatewayID}`);
    }

    public getGatewayList(): Observable<Gateway[]> {
        return this.httpClient.get<Gateway[]>(`/gateway/list`);
    }

    public deleteGateway(gatewayId: string): Observable<void> {
        return this.httpClient.delete<void>(`/gateway/${gatewayId}`);
    }
}
