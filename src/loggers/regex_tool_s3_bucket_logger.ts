import { ILoggerOptions, ILogMeta } from '../types.js'

import {Level} from '../enums.js'

import { LoggerAsync } from './logger_async.js'

import { JSONDataFormatter } from '../formatters/json_formatter.js';

import { S3BucketHandler } from '../handlers/s3_bucket_handler.js';

interface IRegexToolS3BucketLoggerOptions extends ILoggerOptions {
    api: string;
    bucket: string;
    path?: string;
    level?: Level;
}

export class RegexToolS3BucketLogger extends LoggerAsync {

    constructor({ api, bucket, path, level = Level.BASE, handlers = [], errorHandler }: IRegexToolS3BucketLoggerOptions) {

        const formatter = new JSONDataFormatter();

        const handler = new S3BucketHandler({
            api: api,
            bucket: bucket,
            path: path,
            formatter: formatter,
            level: level
        });

        handlers.push(handler);

        super({ handlers, errorHandler });
    }
}
