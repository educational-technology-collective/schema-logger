export class JSONFormatter {
    mediaType;
    constructor() {
        this.mediaType = "application/json";
    }
    format(msg) {
        switch (typeof msg) {
            case 'string':
                return msg;
            case 'object':
                return JSON.stringify(msg);
            default:
                return "";
        }
    }
}
//# sourceMappingURL=json_formatter.js.map