import { ILogMeta, IFormatter } from '../types.js';
export declare class JSONDataFormatter implements IFormatter {
    format(msg: any, meta: ILogMeta): string;
}
