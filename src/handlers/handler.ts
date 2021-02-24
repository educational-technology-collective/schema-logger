import {
    IFormatter,
    IHandlerOptions,
    ILogMeta
} from '../types';

import {
    InvalidSchema
} from '../errors/index.js';

import { Level } from '../enums.js';

import Ajv, { JSONSchemaType, DefinedError, ValidateFunction } from 'ajv';

const ajv = new Ajv();

export abstract class Handler {

    private _formatter: IFormatter;
    private _validators: ValidateFunction[];
    private _enforceSchemas: boolean;
    private _level: Level;

    constructor({ schemas = [], formatter, enforceSchemas = true, level = Level.DEBUG }: IHandlerOptions) {
        this._validators = schemas.map((cur, idx, arr) => ajv.compile(cur));
        this._formatter = formatter;
        this._enforceSchemas = enforceSchemas;
        this._level = level;

    }

    protected async handle(msg: any, meta: ILogMeta) {

        if (!(meta.level >= this._level))
            return;

        if (!this._enforceSchemas) {
            return this._formatter.format(msg, meta);;
        }

        if (!this.validatorsContains(msg)) {  //  Here we do schema validation.

            throw new InvalidSchema('InvalidSchema');
        }

        return this._formatter.format(msg, meta);
    }

    private validatorsContains(msg: any): boolean {

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

    set formatter(formatter: IFormatter) {
        this._formatter = formatter;
    }
}