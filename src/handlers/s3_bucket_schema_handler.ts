import {
    IHandler,
    ILogMeta
} from '../types.js';

import { InvalidSchemaError, HTTPError } from '../errors'

import { S3BucketHandler, IS3BucketHandlerOptions} from '../handlers/s3_bucket_handler';

import Ajv, { JSONSchemaType, ValidateFunction } from 'ajv';

const ajv = new Ajv();

interface IS3BucketSchemaHandlerOptions extends IS3BucketHandlerOptions {
    schemas: Array<any>;
    enforce?: boolean;
}

export class S3BucketSchemaHandler extends S3BucketHandler implements IHandler {

    private _enforce: boolean;
    private _validators: Array<any>;

    constructor({
        api,
        bucket,
        path,
        schemas = [],
        formatter,
        level,
        enforce = false
    }: IS3BucketSchemaHandlerOptions) {
        super({ api, bucket, path, formatter, level });

        this._validators = schemas.map((cur, idx, arr) => ajv.compile(cur));
        this._enforce = enforce;
    }

    public async handle(msg: any, meta: ILogMeta) {

        if (this._enforce && !this.schemasContains(msg)) {
            throw new InvalidSchemaError("InvalidSchemaError");
        }

        return super.handle(msg, meta);
    }

    private schemasContains(msg: any): boolean {

        for (let validator of this._validators) {

            if (validator(msg)){
                return true;
            }
        }

        return false;
    }

    public addSchema(schema: JSONSchemaType<unknown>): boolean {

        this._validators.push(ajv.compile(schema));
        return true;
    }
}