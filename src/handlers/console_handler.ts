import {
    IFormatter,
    IHandler,
    IHandlerOptions,
    ILogMeta
} from '../types.js';

import { Level } from '../enums.js';

export class ConsoleHandler implements IHandler {

    private formatter: IFormatter;

    constructor({ formatter }: IHandlerOptions) {
        this.formatter = formatter;
    }

    public async handle(msg: any, meta: any) {

        msg = this.formatter.format(msg);
        meta = (meta as ILogMeta);

        switch(meta.level) {
            case Level.ERROR:
                console.error(msg);
            default:
                console.log(msg);
        }
    }
}