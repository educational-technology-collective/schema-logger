import { IHandler, ILogger } from "../types";
interface ILoggerAsyncOptions {
    handlers: Array<IHandler>;
}
export declare class LoggerAsync implements ILogger {
    private handlers;
    constructor({ handlers }: ILoggerAsyncOptions);
    log(msg: any, meta?: any): Promise<any>;
    addHandler(handler: IHandler): void;
}
export {};
