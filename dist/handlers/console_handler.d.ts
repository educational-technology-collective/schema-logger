import { IHandler, IHandlerOptions } from '../types.js';
export declare class ConsoleHandler implements IHandler {
    private formatter;
    constructor({ formatter }: IHandlerOptions);
    handle(msg: any, meta: any): Promise<void>;
}
//# sourceMappingURL=console_handler.d.ts.map