
import {
    IHandler,
    ILogMeta,
    ILogger,
    ILoggerOptions
} from '../types';

import { Level } from '../enums.js'

export class Logger implements ILogger {

    protected _handlers: IHandler[];
    protected _errorHandler: ((msg: any) => void) | undefined;

    constructor({ handlers = [], errorHandler = console.error }: ILoggerOptions) {

        this._handlers = handlers;
        this._errorHandler = errorHandler;
    }

    log(msg: any, meta: ILogMeta = { level: Level.BASE }) {

        const promises = [];

        for (let handler of this._handlers) {
            promises.push(handler.handle(msg, meta));
        }

        Promise.all(promises).catch(this._errorHandler);
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

