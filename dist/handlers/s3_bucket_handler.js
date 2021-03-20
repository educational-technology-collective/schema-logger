"use strict";
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
exports.S3BucketHandler = void 0;
var errors_1 = require("../errors");
var enums_js_1 = require("../enums.js");
var S3BucketHandler = /** @class */ (function () {
    function S3BucketHandler(_a) {
        var api = _a.api, bucket = _a.bucket, path = _a.path, formatter = _a.formatter, _b = _a.level, level = _b === void 0 ? enums_js_1.Level.BASE : _b;
        this._api = api;
        this._bucket = bucket;
        this._path = path;
        this._level = level;
        this._formatter = formatter;
    }
    S3BucketHandler.prototype.handle = function (msg, meta) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, headers_1, _a, _b, _c, _d;
            var _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        if (meta.level < this._level) {
                            return [2 /*return*/];
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
    return S3BucketHandler;
}());
exports.S3BucketHandler = S3BucketHandler;
//# sourceMappingURL=s3_bucket_handler.js.map