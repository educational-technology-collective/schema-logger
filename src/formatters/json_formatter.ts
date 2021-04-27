import { IFormatter } from '../types.js';


export class JSONFormatter implements IFormatter {

    public mediaType: string;

    constructor() {
        this.mediaType = "application/json";
    }

    format(msg: any) {

        switch (typeof msg) {
            case 'string':
                return msg;
            case 'object':
                return JSON.stringify(msg);
            default:
                return "";
        }
    }
}
