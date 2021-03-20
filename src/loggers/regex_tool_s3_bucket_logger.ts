import { ILoggerOptions} from '../types.js'

import { Logger } from './logger.js'

import { JSONFormatter } from '../formatters/json_formatter.js';

import { S3BucketHandler } from '../handlers/s3_bucket_handler.js';

interface IRegexToolS3BucketLoggerOptions extends ILoggerOptions {
    api: string;
    bucket: string;
    path?: string;
    schemas?: Array<object>;
    enforce?: boolean;
}

export class RegexToolS3BucketLogger extends Logger {

    constructor({ api, bucket, path = "", schemas, enforce, handlers = [], errorHandler = console.error }: IRegexToolS3BucketLoggerOptions) {

        const formatter = new JSONFormatter();

        const handler = new S3BucketHandler({
            api: api,
            bucket: bucket,
            path: path,
            formatter: formatter
        });

        handlers.push(handler);

        super({ handlers, errorHandler });
    }
}
