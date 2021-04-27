"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONFormatter = void 0;
var JSONFormatter = /** @class */ (function () {
    function JSONFormatter() {
        this.mediaType = "application/json";
    }
    JSONFormatter.prototype.format = function (msg) {
        switch (typeof msg) {
            case 'string':
                return msg;
            case 'object':
                return JSON.stringify(msg);
            default:
                return "";
        }
    };
    return JSONFormatter;
}());
exports.JSONFormatter = JSONFormatter;
//# sourceMappingURL=json_formatter.js.map