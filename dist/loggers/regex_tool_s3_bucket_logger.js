import { JSONFormatter } from '../formatters/json_formatter.js';
import { S3BucketHandler } from '../handlers/s3_bucket_handler.js';
export class RegexToolS3BucketLogger {
    seq;
    errorHandler;
    handlers;
    errorQueue;
    errorQueueTimeoutId;
    errorQueueTimeout;
    constructor({ api, bucket, path, errorQueueTimeout = 10000, errorHandler = console.error }) {
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
    addHandler(handler) {
        this.handlers.push(handler);
    }
    log(msg, meta) {
        let handler;
        for (handler of this.handlers) {
            (async () => {
                let response;
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
        let i;
        let msg;
        while (this.errorQueue.length) {
            msg = this.errorQueue.shift();
            this.log(msg);
        }
    }
}
//# sourceMappingURL=regex_tool_s3_bucket_logger.js.map