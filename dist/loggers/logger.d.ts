import { IHandler, ILogMeta, ILogger } from '../types';
export declare class Logger implements ILogger {
    private _handlers;
    constructor(handlers: IHandler[]);
    log(msg: any, meta?: ILogMeta): void;
    error(msg: any): void;
    warn(msg: any): void;
    info(msg: any): void;
    debug(msg: any): void;
    addHandler(handler: IHandler): void;
}
