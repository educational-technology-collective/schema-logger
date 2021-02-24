import { Level } from './enums.js';
export interface IHandler {
    handle(msg: any, meta: ILogMeta): void;
    addSchema(schema: object): boolean;
}
export interface IHandlerOptions {
    schemas?: object[];
    formatter: IFormatter;
    enforceSchemas: boolean;
    level?: Level;
}
export interface ILogMeta {
    level: Level;
}
export interface ILogger {
    log(msg: any): void;
}
export interface IFormatter {
    format(msg: any, meta: ILogMeta): any;
}
