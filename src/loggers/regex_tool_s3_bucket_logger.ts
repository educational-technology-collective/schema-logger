
import { Level } from '../enums'
import { JSONFormatter } from '../formatters/json_formatter';
import { S3BucketHandler } from '../handlers/s3_bucket_handler';
import { ILoggerOptions, Logger} from './logger';

interface IRegexToolS3BucketLoggerOptions {
    api: string;
    bucket: string;
    path?: string;
    errorHandler?(e: any): void;
}

export class RegexToolS3BucketLogger extends Logger {
    private seq: number;

    constructor({ api, bucket, path, errorHandler = console.error }: IRegexToolS3BucketLoggerOptions) {

        const formatter = new JSONFormatter();

        const handler = new S3BucketHandler({
            formatter: formatter,
            api: api,
            bucket: bucket,
            path: path
        });

        super({ handlers: [handler], errorHandler });

        this.seq = 0;
    }

    log(msg: any, meta?: any): void {

        msg = {
            data: msg,
            seq: this.seq
        }

        super.log(msg);

        this.seq = this.seq + 1;
    }
}
