import { ILogMeta, IFormatter } from '../types.js';
export declare class JSONFormatter implements IFormatter {
    format(msg: any, meta: ILogMeta): string;
}
