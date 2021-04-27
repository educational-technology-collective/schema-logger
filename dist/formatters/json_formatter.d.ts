import { IFormatter } from '../types.js';
export declare class JSONFormatter implements IFormatter {
    mediaType: string;
    constructor();
    format(msg: any): string;
}
