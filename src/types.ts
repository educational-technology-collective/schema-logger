import { Level } from './enums.js'

export interface ILoggerOptions {
    handlers?: Array<IHandler>;
}

export interface ILogMeta {
    level: Level;
}

export interface ILoggerAsync {
    log(msg: any, meta?: any): Promise<any>;
}

export interface ILogger {
    log(msg: any, meta?: any): void;
}


export interface IHandler {
    handle(msg: any, meta?: any): Promise<any>;
}

export interface IHandlerOptions {
    formatter: IFormatter;
}

export interface IFormatter {
    format(msg: any, meta?: ILogMeta): any;
    mediaType: string;
}

