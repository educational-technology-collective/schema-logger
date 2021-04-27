
import { IHandler, ILogger } from "../types";

export interface ILoggerOptions {
    handlers: Array<IHandler>;
    errorHandler(e: any): void;
}

export class Logger implements ILogger {

    private handlers: Array<IHandler>;
    private errorHandler: (e: any) => void;
    private messages: Array<any>;

    constructor({ handlers = [], errorHandler = console.error }: ILoggerOptions) {
        this.handlers = handlers;
        this.errorHandler = errorHandler;
        this.messages = [];
    }

    log(msg: any, meta?: any): void {

        (async () => {

            try {

                let promises: Array<Promise<any>> = [];

                for (let handler of this.handlers) {
                    promises.push(handler.handle(msg, meta));
                }

                await Promise.all(promises);
            }
            catch (e) {
                this.errorHandler(e);
            }

        })();
    }

    addHandler(handler: IHandler) {

        this.handlers.push(handler);
    }
}