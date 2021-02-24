import {
    IHandler,
    IHandlerOptions,
    ILogMeta
} from '../types.js';

import { Handler } from '../handlers/handler.js';

export class ConsoleHandler extends Handler implements IHandler {

    constructor(options: IHandlerOptions) {
        super(options);
    }

    async handle(msg: any, meta: ILogMeta) {
        
        msg = await super.handle(msg, meta);

        console.log(msg);
    }
}