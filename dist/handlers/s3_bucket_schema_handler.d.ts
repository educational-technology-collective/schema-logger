import { IHandler, ILogMeta } from '../types.js';
import { SchemaHandler, ISchemaHandlerOptions } from '../handlers/schema_handler.js';
interface S3BucketSchemaHandlerOptions extends ISchemaHandlerOptions {
    api: string;
    bucket: string;
    enforce?: boolean;
}
export declare class S3BucketSchemaHandler extends SchemaHandler implements IHandler {
    private _enforce;
    private _api;
    private _bucket;
    constructor({ api, bucket, schemas, formatter, level, enforce }: S3BucketSchemaHandlerOptions);
    handle(msg: any, meta: ILogMeta): Promise<Response | undefined>;
}
export {};
