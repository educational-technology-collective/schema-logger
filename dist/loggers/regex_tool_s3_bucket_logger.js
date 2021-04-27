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
var json_formatter_1 = require("../formatters/json_formatter");
var s3_bucket_handler_1 = require("../handlers/s3_bucket_handler");
var logger_1 = require("./logger");
var RegexToolS3BucketLogger = /** @class */ (function (_super) {
    __extends(RegexToolS3BucketLogger, _super);
    function RegexToolS3BucketLogger(_a) {
        var api = _a.api, bucket = _a.bucket, path = _a.path, _b = _a.errorHandler, errorHandler = _b === void 0 ? console.error : _b;
        var _this = this;
        var formatter = new json_formatter_1.JSONFormatter();
        var handler = new s3_bucket_handler_1.S3BucketHandler({
            formatter: formatter,
            api: api,
            bucket: bucket,
            path: path
        });
        _this = _super.call(this, { handlers: [handler], errorHandler: errorHandler }) || this;
        _this.seq = 0;
        return _this;
    }
    RegexToolS3BucketLogger.prototype.log = function (msg, meta) {
        msg = {
            data: msg,
            seq: this.seq
        };
        _super.prototype.log.call(this, msg);
        this.seq = this.seq + 1;
    };
    return RegexToolS3BucketLogger;
}(logger_1.Logger));
exports.RegexToolS3BucketLogger = RegexToolS3BucketLogger;
//# sourceMappingURL=regex_tool_s3_bucket_logger.js.map