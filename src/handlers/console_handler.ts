import {
    IHandler,
    ILogMeta
} from '../types.js';

import { InvalidSchemaError } from '../errors'

import { SchemaHandler, ISchemaHandlerOptions } from '../handlers/schema_handler.js';

interface IConsoleSchemaHandlerOptions extends ISchemaHandlerOptions {
    enforce: boolean;
}

export class ConsoleSchemaHandler extends SchemaHandler implements IHandler {

    private _enforce: boolean;

    constructor({ schemas = [], formatter, level, enforce }: IConsoleSchemaHandlerOptions) {
        super({ schemas, formatter, level });

        this._enforce = enforce;
    }

    public async handle(msg: any, meta: ILogMeta) {

        if (this._enforce && !this.schemasContains(msg)) {
            throw new InvalidSchemaError('InvalidSchemaError');
        }

        console.log(msg);
    }
}