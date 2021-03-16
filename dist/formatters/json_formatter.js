"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONFormatter = void 0;
var JSONFormatter = /** @class */ (function () {
    function JSONFormatter() {
    }
    JSONFormatter.prototype.format = function (msg, meta) {
        switch (typeof msg) {
            case 'string':
            case 'object':
            default:
        }
        return JSON.stringify(msg);
    };
    return JSONFormatter;
}());
exports.JSONFormatter = JSONFormatter;
//# sourceMappingURL=json_formatter.js.map