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
exports.LoggerAsync = void 0;
var enums_js_1 = require("../enums.js");
var LoggerAsync = /** @class */ (function () {
    function LoggerAsync(_a) {
        var _b = _a.handlers, handlers = _b === void 0 ? [] : _b, errorHandler = _a.errorHandler;
        this._handlers = handlers;
        this._errorHandler = errorHandler;
    }
    LoggerAsync.prototype.log = function (msg, meta) {
        if (meta === void 0) { meta = { level: enums_js_1.Level.BASE }; }
        return __awaiter(this, void 0, void 0, function () {
            var promises, _i, _a, handler, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        promises = [];
                        for (_i = 0, _a = this._handlers; _i < _a.length; _i++) {
                            handler = _a[_i];
                            promises.push(handler.handle(msg, meta));
                        }
                        return [4 /*yield*/, Promise.all(promises)];
                    case 1: return [2 /*return*/, _b.sent()];
                    case 2:
                        e_1 = _b.sent();
                        if (typeof this._errorHandler === 'function') {
                            this._errorHandler(e_1);
                        }
                        throw (e_1);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoggerAsync.prototype.error = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.log(msg, { level: enums_js_1.Level.ERROR })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoggerAsync.prototype.warn = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.log(msg, { level: enums_js_1.Level.WARN })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoggerAsync.prototype.info = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.log(msg, { level: enums_js_1.Level.INFO })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoggerAsync.prototype.debug = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.log(msg, { level: enums_js_1.Level.DEBUG })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LoggerAsync.prototype.addHandler = function (handler) {
        this._handlers.push(handler);
    };
    return LoggerAsync;
}());
exports.LoggerAsync = LoggerAsync;
//# sourceMappingURL=logger_async.js.map