import { IHandler, IHandlerOptions, ILogMeta } from '../types.js';
import { Handler } from '../handlers/handler.js';
export declare class ConsoleHandler extends Handler implements IHandler {
    constructor(options: IHandlerOptions);
    handle(msg: any, meta: ILogMeta): Promise<void>;
}
