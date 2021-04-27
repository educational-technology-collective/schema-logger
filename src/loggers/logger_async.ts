
import { IHandler, ILogger } from "../types";

interface ILoggerAsyncOptions {
    handlers: Array<IHandler>;
}

export class LoggerAsync implements ILogger {

    private handlers: Array<IHandler>;

    constructor({ handlers = [] }: ILoggerAsyncOptions) {
        this.handlers = handlers;
    }

    async log(msg: any, meta?: any): Promise<any> {

        let promises: Array<Promise<any>> = [];

        for (let handler of this.handlers) {
            promises.push(handler.handle(msg, meta));
        }
        
        return Promise.all(promises);
    }

    addHandler(handler: IHandler) {

        this.handlers.push(handler);
    }
}