import {Device} from "./device";

export class Gateway {
    uuid: string = '';
    name?: string;
    address?: string;
    deviceList?: Device[];
}
