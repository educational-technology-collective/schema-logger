import { IHandler, ILogger, ILoggerOptions } from '../types.js';
export declare class SimpleLogger implements ILogger {
    private handlers;
    constructor({ handlers }: ILoggerOptions);
    addHandler(handler: IHandler): void;
    log(msg: any, meta?: any): Promise<any>;
    error(msg: any): Promise<any>;
    warn(msg: any): Promise<any>;
    info(msg: any): Promise<any>;
    debug(msg: any): Promise<any>;
}
//# sourceMappingURL=simple_logger_async.d.ts.map