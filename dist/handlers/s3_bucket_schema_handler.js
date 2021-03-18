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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3BucketSchemaHandler = void 0;
var errors_1 = require("../errors");
var schema_handler_js_1 = require("../handlers/schema_handler.js");
var S3BucketSchemaHandler = /** @class */ (function (_super) {
    __extends(S3BucketSchemaHandler, _super);
    function S3BucketSchemaHandler(_a) {
        var api = _a.api, bucket = _a.bucket, path = _a.path, schemas = _a.schemas, formatter = _a.formatter, level = _a.level, _b = _a.enforce, enforce = _b === void 0 ? false : _b;
        var _this = _super.call(this, { schemas: schemas, formatter: formatter, level: level }) || this;
        _this._api = api;
        _this._bucket = bucket;
        _this._path = path;
        _this._enforce = enforce;
        return _this;
    }
    S3BucketSchemaHandler.prototype.handle = function (msg, meta) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, headers_1, _a, _b, _c, _d;
            var _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        if (meta.level < this._level) {
                            return [2 /*return*/];
                        }
                        if (this._enforce && !this.schemasContains(msg)) {
                            throw new errors_1.InvalidSchemaError("InvalidSchemaError");
                        }
                        msg = this._formatter.format(msg, meta);
                        url = this._api.replace(/\/+$/g, '') + '/' + this._bucket + (this._path === undefined ? "" : '/' + this._path);
                        return [4 /*yield*/, fetch(url, {
                                method: 'POST',
                                mode: 'cors',
                                cache: 'no-cache',
                                headers: {
                                    'Content-Type': 'application/json'
                                    // 'Content-Type': 'application/x-www-form-urlencoded',
                                },
                                redirect: 'follow',
                                referrerPolicy: 'no-referrer',
                                body: msg // body data type must match "Content-Type" header
                            })];
                    case 1:
                        response = _f.sent();
                        if (!!response.ok) return [3 /*break*/, 3];
                        headers_1 = {};
                        try {
                            response.headers.forEach(function (value, key) {
                                headers_1[key] = value;
                            });
                        }
                        catch (_g) { }
                        _a = errors_1.HTTPError.bind;
                        _c = (_b = JSON).stringify;
                        _e = {
                            "response.status": response.status,
                            "response.statusText": response.statusText
                        };
                        _d = "response.text()";
                        return [4 /*yield*/, response.text()];
                    case 2: throw new (_a.apply(errors_1.HTTPError, [void 0, _c.apply(_b, [(_e[_d] = _f.sent(),
                                _e["response.headers"] = headers_1,
                                _e)])]))();
                    case 3: return [2 /*return*/, response];
                }
            });
        });
    };
    return S3BucketSchemaHandler;
}(schema_handler_js_1.SchemaHandler));
exports.S3BucketSchemaHandler = S3BucketSchemaHandler;
//# sourceMappingURL=s3_bucket_schema_handler.js.map