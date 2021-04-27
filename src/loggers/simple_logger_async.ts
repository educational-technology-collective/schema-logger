
import {
    IHandler,
    ILoggerOptions
} from '../types';

import { Level } from '../enums';
import { LoggerAsync } from './logger_async';

export class SimpleLogger extends LoggerAsync {

    constructor({ handlers = [] }: ILoggerOptions) {
        super({ handlers });
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

