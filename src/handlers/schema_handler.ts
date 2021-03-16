import {
    IFormatter,
    IHandler,
    IHandlerOptions,
    ILogMeta
} from '../types';

import Ajv, { JSONSchemaType, ValidateFunction } from 'ajv';

import { Level } from '../enums';

const ajv = new Ajv();

export interface ISchemaHandlerOptions extends IHandlerOptions {
    schemas?: Array<object>;
}

export abstract class SchemaHandler implements IHandler {

    protected _formatter: IFormatter;
    private _validators: ValidateFunction[];
    protected _level: Level;

    constructor({ schemas = [], formatter, level = Level.BASE }: ISchemaHandlerOptions) {
        this._validators = schemas.map((cur, idx, arr) => ajv.compile(cur));
        this._formatter = formatter;
        this._level = level;
    }

    public abstract handle(msg: any, meta: ILogMeta): Promise<any>

    protected schemasContains(msg: any): boolean {

        for (let validator of this._validators) {

            if (validator(msg))
                return true;
        }

        return false;
    }

    public addSchema(schema: JSONSchemaType<unknown>): boolean {

        this._validators.push(ajv.compile(schema));
        return true;
    }
}