
import {
    IHandler,
    ILogger,
    ILoggerOptions
} from '../types.js';

import { Level } from '../enums.js';

export class SimpleLogger implements ILogger {

    private handlers: Array<IHandler>;

    constructor({ handlers = [] }: ILoggerOptions) {

        this.handlers = handlers;
    }

    addHandler(handler: IHandler) {

        this.handlers.push(handler);
    }

    async log(msg: any, meta?: any): Promise<any> {

        let promises: Array<Promise<any>> = [];

        for (let handler of this.handlers) {
            promises.push(handler.handle(msg, meta));
        }
        
        return Promise.all(promises);
    }

    async error(msg: any) {
        return this.log(msg, { level: Level.ERROR });
    }

    async warn(msg: any) {
        return this.log(msg, { level: Level.WARN });
    }

    async info(msg: any) {
        return this.log(msg, { level: Level.INFO });
    }

    async debug(msg: any) {
        return this.log(msg, { level: Level.DEBUG });
    }
}

