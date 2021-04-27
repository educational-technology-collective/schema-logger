import { IHandler, ILogger } from "../types";
export interface ILoggerOptions {
    handlers: Array<IHandler>;
    errorHandler(e: any): void;
}
export declare class Logger implements ILogger {
    private handlers;
    private errorHandler;
    private messages;
    constructor({ handlers, errorHandler }: ILoggerOptions);
    log(msg: any, meta?: any): void;
    addHandler(handler: IHandler): void;
}
