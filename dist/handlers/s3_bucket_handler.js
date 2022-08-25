import { HTTPError } from "../errors/index.js";
export class S3BucketHandler {
    api;
    bucket;
    path;
    formatter;
    constructor({ formatter, api, bucket, path }) {
        this.formatter = formatter;
        this.api = api;
        this.bucket = bucket;
        this.path = (typeof path != "string" ? "" : path);
    }
    setPath(path) {
        this.path = path;
    }
    async handle(msg) {
        let url;
        let response;
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
//# sourceMappingURL=s3_bucket_handler.js.map