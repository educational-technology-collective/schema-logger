import { ILogMeta, IFormatter } from '../types.js';

export class JSONFormatter implements IFormatter {

    format(msg: any, meta: ILogMeta) {

        switch (typeof msg) {
            case 'string':
            case 'object':
            default:
        }

        return JSON.stringify(msg);
    }
}
