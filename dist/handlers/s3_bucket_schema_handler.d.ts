import { IHandler, ILogMeta } from '../types.js';
import { S3BucketHandler, IS3BucketHandlerOptions } from '../handlers/s3_bucket_handler';
import { JSONSchemaType } from 'ajv';
interface IS3BucketSchemaHandlerOptions extends IS3BucketHandlerOptions {
    schemas: Array<any>;
    enforce?: boolean;
}
export declare class S3BucketSchemaHandler extends S3BucketHandler implements IHandler {
    private _enforce;
    private _validators;
    constructor({ api, bucket, path, schemas, formatter, level, enforce }: IS3BucketSchemaHandlerOptions);
    handle(msg: any, meta: ILogMeta): Promise<Response | undefined>;
    private schemasContains;
    addSchema(schema: JSONSchemaType<unknown>): boolean;
}
export {};
