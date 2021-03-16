import {
    IHandler,
    ILogMeta
} from '../types.js';

import { InvalidSchemaError, HTTPError } from '../errors'

import { SchemaHandler, ISchemaHandlerOptions } from '../handlers/schema_handler.js';

interface S3BucketSchemaHandlerOptions extends ISchemaHandlerOptions {
    api: string;
    bucket: string;
    enforce?: boolean;
}

export class S3BucketSchemaHandler extends SchemaHandler implements IHandler {

    private _enforce: boolean;
    private _api: string;
    private _bucket: string;

    constructor({
        api,
        bucket,
        schemas,
        formatter,
        level,
        enforce = false
    }: S3BucketSchemaHandlerOptions) {
        super({ schemas, formatter, level });

        this._api = api;
        this._bucket = bucket;
        this._enforce = enforce;
    }

    async handle(msg: any, meta: ILogMeta) {

        if (meta.level < this._level) {
            return;
        }

        if (this._enforce && !this.schemasContains(msg)) {
            throw new InvalidSchemaError('InvalidSchemaError');
        }

        msg = this._formatter.format(msg, meta);

        const date = new Date();
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const timestamp = date.getTime();

        let path = [this._bucket, year, month, day, timestamp].join('/');

        let url = this._api.replace(/\/+$/g, '') + '/' + path;

        let response = await fetch(url, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: msg // body data type must match "Content-Type" header
        });

        if (!response.ok) {
            throw new HTTPError(response.status + ' ' + response.statusText);
        }

        return response;
    }
}