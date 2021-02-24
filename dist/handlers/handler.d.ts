import { IFormatter, IHandlerOptions, ILogMeta } from '../types';
import { JSONSchemaType } from 'ajv';
export declare abstract class Handler {
    private _formatter;
    private _validators;
    private _enforceSchemas;
    private _level;
    constructor({ schemas, formatter, enforceSchemas, level }: IHandlerOptions);
    protected handle(msg: any, meta: ILogMeta): Promise<any>;
    private validatorsContains;
    addSchema(schema: JSONSchemaType<unknown>): boolean;
    set formatter(formatter: IFormatter);
}
