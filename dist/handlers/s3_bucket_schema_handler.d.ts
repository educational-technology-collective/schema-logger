import { IHandler, ILogMeta } from '../types.js';
import { SchemaHandler, ISchemaHandlerOptions } from '../handlers/schema_handler.js';
interface IS3BucketSchemaHandlerOptions extends ISchemaHandlerOptions {
    api: string;
    bucket: string;
    path?: string;
    enforce?: boolean;
}
export declare class S3BucketSchemaHandler extends SchemaHandler implements IHandler {
    private _enforce;
    private _api;
    private _bucket;
    private _path;
    constructor({ api, bucket, path, schemas, formatter, level, enforce }: IS3BucketSchemaHandlerOptions);
    handle(msg: any, meta: ILogMeta): Promise<Response | undefined>;
}
export {};
