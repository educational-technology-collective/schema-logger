import { IHandler, ILogMeta, ILogger, ILoggerOptions } from '../types';
export declare class LoggerAsync implements ILogger {
    protected _handlers: IHandler[];
    protected _errorHandler: ((msg: any) => void) | undefined;
    constructor({ handlers, errorHandler }: ILoggerOptions);
    log(msg: any, meta?: ILogMeta): Promise<any[]>;
    error(msg: any): Promise<any[]>;
    warn(msg: any): Promise<any[]>;
    info(msg: any): Promise<any[]>;
    debug(msg: any): Promise<any[]>;
    addHandler(handler: IHandler): void;
}
