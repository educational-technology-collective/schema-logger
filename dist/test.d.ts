import { Logger, ConsoleHandler } from './index.js';
declare class DefaultLogger extends Logger {
    constructor(handlers?: ConsoleHandler[]);
}
export declare const log: DefaultLogger;
export {};
