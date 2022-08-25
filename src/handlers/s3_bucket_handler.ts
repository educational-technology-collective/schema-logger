import {
    IFormatter,
    IHandler,
    IHandlerOptions
} from "../types.js";

import { HTTPError } from "../errors/index.js";

export interface IS3BucketHandlerOptions extends IHandlerOptions {
    api: string;
    bucket: string;
    path?: string;
}

export class S3BucketHandler implements IHandler {

    private api: string;
    private bucket: string;
    private path: string | undefined;
    private formatter: IFormatter;

    constructor({
        formatter,
        api,
        bucket,
        path
    }: IS3BucketHandlerOptions) {

        this.formatter = formatter;
        this.api = api;
        this.bucket = bucket;
        this.path = (typeof path != "string" ? "" : path);

    }

    setPath(path: string) {
        this.path = path;
    }

    async handle(msg: any) {

        let url: string;
        let response: Response;

        msg = this.formatter.format(msg);

        url = this.api.replace(/\/+$/g, "") + "/" + this.bucket + "/" + this.path;

        response = await fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            headers: {
                "Content-Type": this.formatter.mediaType
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: msg
        });

        if (!response.ok || response.status != 200) {
    
            throw new HTTPError(JSON.stringify({
                "response.status": response.status,
                "response.statusText": response.statusText,
                "response.text()": await response.text()
            }));
        }

        return response;

    }


}