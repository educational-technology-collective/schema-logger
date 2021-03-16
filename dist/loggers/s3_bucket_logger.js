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
exports.S3BucketLogger = void 0;
var logger_js_1 = require("./logger.js");
var json_formatter_js_1 = require("../formatters/json_formatter.js");
var s3_bucket_schema_handler_js_1 = require("../handlers/s3_bucket_schema_handler.js");
var S3BucketLogger = /** @class */ (function (_super) {
    __extends(S3BucketLogger, _super);
    function S3BucketLogger(_a) {
        var api = _a.api, bucket = _a.bucket, schemas = _a.schemas, enforce = _a.enforce, _b = _a.handlers, handlers = _b === void 0 ? [] : _b, _c = _a.errorHandler, errorHandler = _c === void 0 ? console.error : _c;
        var _this = this;
        var formatter = new json_formatter_js_1.JSONFormatter();
        var handler = new s3_bucket_schema_handler_js_1.S3BucketSchemaHandler({
            api: api,
            bucket: bucket,
            schemas: schemas,
            enforce: enforce,
            formatter: formatter
        });
        handlers.push(handler);
        _this = _super.call(this, { handlers: handlers, errorHandler: errorHandler }) || this;
        return _this;
    }
    return S3BucketLogger;
}(logger_js_1.Logger));
exports.S3BucketLogger = S3BucketLogger;
//# sourceMappingURL=s3_bucket_logger.js.map