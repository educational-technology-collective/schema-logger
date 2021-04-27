import { Logger } from './logger';
interface IRegexToolS3BucketLoggerOptions {
    api: string;
    bucket: string;
    path?: string;
    errorHandler?(e: any): void;
}
export declare class RegexToolS3BucketLogger extends Logger {
    private seq;
    constructor({ api, bucket, path, errorHandler }: IRegexToolS3BucketLoggerOptions);
    log(msg: any, meta?: any): void;
}
export {};
