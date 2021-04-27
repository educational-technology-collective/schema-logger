import { IHandler, IHandlerOptions } from "../types.js";
export interface IS3BucketHandlerOptions extends IHandlerOptions {
    api: string;
    bucket: string;
    path?: string;
}
export declare class S3BucketHandler implements IHandler {
    private api;
    private bucket;
    private path;
    private formatter;
    constructor({ formatter, api, bucket, path }: IS3BucketHandlerOptions);
    setPath(path: string): void;
    handle(msg: any): Promise<Response>;
}
