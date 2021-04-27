import { ILoggerOptions } from '../types';
import { LoggerAsync } from './logger_async';
export declare class SimpleLogger extends LoggerAsync {
    constructor({ handlers }: ILoggerOptions);
    error(msg: any): Promise<any>;
    warn(msg: any): Promise<any>;
    info(msg: any): Promise<any>;
    debug(msg: any): Promise<any>;
}
