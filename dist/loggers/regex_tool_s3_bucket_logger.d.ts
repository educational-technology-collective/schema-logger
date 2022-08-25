import { IHandler, ILogger, ILoggerOptions } from '../types.js';
interface IRegexToolS3BucketLoggerOptions extends ILoggerOptions {
    api: string;
    bucket: string;
    path?: string;
    errorQueueTimeout?: number;
    errorHandler?(e: any): void;
}
export declare class RegexToolS3BucketLogger implements ILogger {
    private seq;
    private errorHandler;
    private handlers;
    private errorQueue;
    private errorQueueTimeoutId;
    private errorQueueTimeout;
    constructor({ api, bucket, path, errorQueueTimeout, errorHandler }: IRegexToolS3BucketLoggerOptions);
    addHandler(handler: IHandler): void;
    log(msg: any, meta?: any): void;
    processErrorQueue(): void;
}
export {};
//# sourceMappingURL=regex_tool_s3_bucket_logger.d.ts.map