import { IFormatter, IHandler, IHandlerOptions, ILogMeta } from '../types';
import { JSONSchemaType } from 'ajv';
import { Level } from '../enums';
export interface ISchemaHandlerOptions extends IHandlerOptions {
    schemas?: Array<object>;
}
export declare abstract class SchemaHandler implements IHandler {
    protected _formatter: IFormatter;
    private _validators;
    protected _level: Level;
    constructor({ schemas, formatter, level }: ISchemaHandlerOptions);
    abstract handle(msg: any, meta: ILogMeta): Promise<any>;
    protected schemasContains(msg: any): boolean;
    addSchema(schema: JSONSchemaType<unknown>): boolean;
}
