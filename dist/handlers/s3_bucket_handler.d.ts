import { IHandler, IHandlerOptions, ILogMeta } from "../types.js";
export interface IS3BucketHandlerOptions extends IHandlerOptions {
    api: string;
    bucket: string;
    path?: string;
}
export declare class S3BucketHandler implements IHandler {
    private _api;
    private _bucket;
    private _path;
    private _level;
    private _formatter;
    constructor({ api, bucket, path, formatter, level }: IS3BucketHandlerOptions);
    handle(msg: any, meta: ILogMeta): Promise<Response | undefined>;
}
