import { ILogMeta, IFormatter } from '../types.js';

import { Level } from '../enums.js';

export class JSONDataFormatter implements IFormatter {

    format(msg: any, meta: ILogMeta) {

        switch (typeof msg) {
            case 'string':
                break;
            case 'object':
                msg = {
                    data: msg,
                    "Date.now()": Date.now(),
                    Level: Level[meta.level]
                }
                break;
            default:
        }

        return JSON.stringify(msg);
    }
}
