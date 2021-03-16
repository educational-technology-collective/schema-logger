import { ILoggerOptions } from '../types.js';
import { Logger } from './logger.js';
interface IS3BucketLoggerOptions extends ILoggerOptions {
    api: string;
    bucket: string;
    schemas?: Array<object>;
    enforce?: boolean;
}
export declare class S3BucketLogger extends Logger {
    constructor({ api, bucket, schemas, enforce, handlers, errorHandler }: IS3BucketLoggerOptions);
}
export {};
