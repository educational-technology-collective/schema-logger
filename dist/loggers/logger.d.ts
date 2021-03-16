import { IHandler, ILogMeta, ILogger, ILoggerOptions } from '../types';
export declare class Logger implements ILogger {
    protected _handlers: IHandler[];
    protected _errorHandler: ((msg: any) => void) | null;
    constructor({ handlers, errorHandler }: ILoggerOptions);
    log(msg: any, meta?: ILogMeta): void;
    error(msg: any): void;
    warn(msg: any): void;
    info(msg: any): void;
    debug(msg: any): void;
    addHandler(handler: IHandler): void;
}
