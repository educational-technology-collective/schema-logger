import { IHandler, ILogMeta } from '../types.js';
import { SchemaHandler, ISchemaHandlerOptions } from '../handlers/schema_handler.js';
interface IConsoleSchemaHandlerOptions extends ISchemaHandlerOptions {
    enforce: boolean;
}
export declare class ConsoleSchemaHandler extends SchemaHandler implements IHandler {
    private _enforce;
    constructor({ schemas, formatter, level, enforce }: IConsoleSchemaHandlerOptions);
    handle(msg: any, meta: ILogMeta): Promise<void>;
}
export {};
