import { ILoggerOptions } from '../types.js';
import { Level } from '../enums.js';
import { LoggerAsync } from './logger_async.js';
interface IRegexToolS3BucketLoggerOptions extends ILoggerOptions {
    api: string;
    bucket: string;
    path?: string;
    level?: Level;
}
export declare class RegexToolS3BucketLogger extends LoggerAsync {
    constructor({ api, bucket, path, level, handlers, errorHandler }: IRegexToolS3BucketLoggerOptions);
}
export {};
