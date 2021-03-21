"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONDataFormatter = void 0;
var enums_js_1 = require("../enums.js");
var JSONDataFormatter = /** @class */ (function () {
    function JSONDataFormatter() {
    }
    JSONDataFormatter.prototype.format = function (msg, meta) {
        switch (typeof msg) {
            case 'string':
                break;
            case 'object':
                msg = {
                    data: msg,
                    "Date.now()": Date.now(),
                    Level: enums_js_1.Level[meta.level]
                };
                break;
            default:
        }
        return JSON.stringify(msg);
    };
    return JSONDataFormatter;
}());
exports.JSONDataFormatter = JSONDataFormatter;
//# sourceMappingURL=json_formatter.js.map