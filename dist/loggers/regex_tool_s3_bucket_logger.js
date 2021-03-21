"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegexToolS3BucketLogger = void 0;
var enums_js_1 = require("../enums.js");
var logger_async_js_1 = require("./logger_async.js");
var json_formatter_js_1 = require("../formatters/json_formatter.js");
var s3_bucket_handler_js_1 = require("../handlers/s3_bucket_handler.js");
var RegexToolS3BucketLogger = /** @class */ (function (_super) {
    __extends(RegexToolS3BucketLogger, _super);
    function RegexToolS3BucketLogger(_a) {
        var api = _a.api, bucket = _a.bucket, path = _a.path, _b = _a.level, level = _b === void 0 ? enums_js_1.Level.BASE : _b, _c = _a.handlers, handlers = _c === void 0 ? [] : _c, errorHandler = _a.errorHandler;
        var _this = this;
        var formatter = new json_formatter_js_1.JSONDataFormatter();
        var handler = new s3_bucket_handler_js_1.S3BucketHandler({
            api: api,
            bucket: bucket,
            path: path,
            formatter: formatter,
            level: level
        });
        handlers.push(handler);
        _this = _super.call(this, { handlers: handlers, errorHandler: errorHandler }) || this;
        return _this;
    }
    return RegexToolS3BucketLogger;
}(logger_async_js_1.LoggerAsync));
exports.RegexToolS3BucketLogger = RegexToolS3BucketLogger;
//# sourceMappingURL=regex_tool_s3_bucket_logger.js.map