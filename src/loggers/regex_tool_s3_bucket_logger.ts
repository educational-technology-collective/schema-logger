
import { Level } from '../enums'
import { JSONFormatter } from '../formatters/json_formatter';
import { S3BucketHandler } from '../handlers/s3_bucket_handler';
import { IHandler, IHandlerOptions, ILogger, ILoggerOptions } from '../types';

interface IRegexToolS3BucketLoggerOptions extends ILoggerOptions {
    api: string;
    bucket: string;
    path?: string;
    errorQueueTimeout?: number;
    errorHandler?(e: any): void;
}

export class RegexToolS3BucketLogger implements ILogger {
    private seq: number;
    private errorHandler: (e: any) => void;
    private handlers: Array<IHandler>;
    private errorQueue: Array<any>;
    private errorQueueTimeoutId: number | undefined;
    private errorQueueTimeout: number;

    constructor({ api, bucket, path, errorQueueTimeout = 10000, errorHandler = console.error }: IRegexToolS3BucketLoggerOptions) {

        this.handlers = [];

        this.errorQueueTimeout = errorQueueTimeout;

        this.errorHandler = errorHandler;

        const formatter = new JSONFormatter();

        const handler = new S3BucketHandler({
            formatter: formatter,
            api: api,
            bucket: bucket,
            path: path
        });

        this.handlers.push(handler);

        this.seq = 0;

        this.errorQueue = [];

        this.processErrorQueue = this.processErrorQueue.bind(this);
    }

    addHandler(handler: IHandler) {

        this.handlers.push(handler);
    }

    log(msg: any, meta?: any): void {

        let handler: IHandler;

        for (handler of this.handlers) {

            (async () => {

                let response: Response;

                try {

                    await handler.handle({
                        data: msg,
                        seq: this.seq
                    }, meta);
                }
                catch (e) {

                    this.errorQueue.push(msg);

                    window.clearTimeout(this.errorQueueTimeoutId);

                    this.errorQueueTimeoutId = window.setTimeout(this.processErrorQueue, this.errorQueueTimeout);

                    this.errorHandler({ msg, e });
                }
                finally {
                    this.seq = this.seq + 1;
                }
            })();
        }
    }

    processErrorQueue() {

        let i: number;
        let msg: any;

        while(this.errorQueue.length) {
            msg = this.errorQueue.shift();            
            this.log(msg);
        }
    }
}
