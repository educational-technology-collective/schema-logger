import { Level } from './enums.js';
export interface ILogger {
}
export interface ILoggerOptions {
    handlers?: IHandler[];
    errorHandler?: ((msg: any) => void);
}
export interface ILogMeta {
    level: Level;
}
export interface IHandler {
    handle(msg: any, meta?: ILogMeta): Promise<any>;
}
export interface IHandlerOptions {
    formatter: IFormatter;
    level?: Level;
}
export interface IFormatter {
    format(msg: any, meta: ILogMeta): any;
}
