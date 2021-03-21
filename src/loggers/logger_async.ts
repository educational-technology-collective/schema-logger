
import {
    IHandler,
    ILogMeta,
    ILogger,
    ILoggerOptions
} from '../types';

import { Level } from '../enums.js'

export class LoggerAsync implements ILogger {

    protected _handlers: IHandler[];
    protected _errorHandler: ((msg: any) => void) | undefined;

    constructor({ handlers = [], errorHandler }: ILoggerOptions) {

        this._handlers = handlers;
        this._errorHandler = errorHandler;
    }

    async log(msg: any, meta: ILogMeta = { level: Level.BASE }) {

        try {
            const promises = [];

            for (let handler of this._handlers) {
                promises.push(handler.handle(msg, meta));
            }
    
            return await Promise.all(promises);
        }
        catch(e) {

            if (typeof this._errorHandler === 'function') {
                this._errorHandler(e);
            }

            throw(e);
        }
    }

    async error(msg: any) {
        return await this.log(msg, { level: Level.ERROR });
    }

    async warn(msg: any) {
        return await this.log(msg, { level: Level.WARN });
    }

    async info(msg: any) {
        return await this.log(msg, { level: Level.INFO });
    }

    async debug(msg: any) {
        return await this.log(msg, { level: Level.DEBUG });
    }

    addHandler(handler: IHandler) {

        this._handlers.push(handler);
    }
}

