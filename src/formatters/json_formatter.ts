import { ILogMeta, IFormatter } from '../types.js';


export class JSONFormatter implements IFormatter {

    format(msg: any, meta: ILogMeta) {

        return JSON.stringify(msg);
    }
}
