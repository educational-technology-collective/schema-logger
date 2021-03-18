import { ILoggerOptions } from '../types.js';
import { Logger } from './logger.js';
interface IRegexToolS3BucketLoggerOptions extends ILoggerOptions {
    api: string;
    bucket: string;
    path?: string;
    schemas?: Array<object>;
    enforce?: boolean;
}
export declare class RegexToolS3BucketLogger extends Logger {
    constructor({ api, bucket, path, schemas, enforce, handlers, errorHandler }: IRegexToolS3BucketLoggerOptions);
}
export {};
