import { ILoggerOptions} from '../types.js'

import { Logger } from './logger.js'

import { JSONFormatter } from '../formatters/json_formatter.js';

import { S3BucketSchemaHandler } from '../handlers/s3_bucket_schema_handler.js';

interface IS3BucketLoggerOptions extends ILoggerOptions {
    api: string;
    bucket: string;
    schemas?: Array<object>;
    enforce?: boolean;
}

export class S3BucketLogger extends Logger {

    constructor({ api, bucket, schemas, enforce, handlers = [], errorHandler = console.error }: IS3BucketLoggerOptions) {

        const formatter = new JSONFormatter();

        const handler = new S3BucketSchemaHandler({
            api: api,
            bucket: bucket,
            schemas: schemas,
            enforce: enforce,
            formatter: formatter
        });

        handlers.push(handler);

        super({ handlers, errorHandler });
    }
}
