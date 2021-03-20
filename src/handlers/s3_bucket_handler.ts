import {
    IFormatter,
    IHandler,
    IHandlerOptions,
    ILogMeta
} from '../types.js';

import { HTTPError } from '../errors'
import { Level } from '../enums.js';

interface IS3BucketHandlerOptions extends IHandlerOptions {
    api: string;
    bucket: string;
    path?: string;
}

export class S3BucketHandler implements IHandler {

    private _api: string;
    private _bucket: string;
    private _path: string | undefined;
    private _level: Level;
    private _formatter: IFormatter;

    constructor({
        api,
        bucket,
        path,
        formatter,
        level = Level.BASE
    }: IS3BucketHandlerOptions) {

        this._api = api;
        this._bucket = bucket;
        this._path = path;
        this._level = level;
        this._formatter = formatter;
    }

    async handle(msg: any, meta: ILogMeta) {

        if (meta.level < this._level) {
            return;
        }

        msg = this._formatter.format(msg, meta);

        let url = this._api.replace(/\/+$/g, '') + '/' + this._bucket + (this._path === undefined ? "" : '/' + this._path);

        let response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
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

            let headers: { [key:string]: string } = {};

            try  {
                response.headers.forEach((value, key)=>{
                    headers[key] = value;
                });
            }
            catch {}

            throw new HTTPError(JSON.stringify({
                "response.status": response.status,
                "response.statusText": response.statusText,
                "response.text()": await response.text(),
                "response.headers": headers
            }));
        }

        return response;
    }
}