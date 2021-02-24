
import {
    IHandler,
    ILogMeta,
    ILogger
} from '../types';

import { Level } from '../enums.js'

export class Logger implements ILogger {

    private _handlers: IHandler[];

    constructor(handlers: IHandler[]) {

        this._handlers = handlers;
    }

    log(msg: any, meta: ILogMeta = { level: Level.DEBUG }) {

        const promises = [];

        for (let handler of this._handlers) {
            promises.push(handler.handle(msg, meta));
        }

        Promise.all(promises).catch((e) => {
            console.error(e);
            //  Log error to default error handler.
        });
    }

    error(msg: any) {
        this.log(msg, { level: Level.ERROR });
    }

    warn(msg: any) {
        this.log(msg, { level: Level.WARN });
    }

    info(msg: any) {
        this.log(msg, { level: Level.INFO });
    }

    debug(msg: any) {
        this.log(msg, { level: Level.DEBUG });
    }

    addHandler(handler: IHandler) {

        this._handlers.push(handler);
    }
}

