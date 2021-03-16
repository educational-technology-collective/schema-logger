"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var enums_js_1 = require("../enums.js");
var Logger = /** @class */ (function () {
    function Logger(_a) {
        var _b = _a.handlers, handlers = _b === void 0 ? [] : _b, _c = _a.errorHandler, errorHandler = _c === void 0 ? console.error : _c;
        this._handlers = handlers;
        this._errorHandler = errorHandler;
    }
    Logger.prototype.log = function (msg, meta) {
        if (meta === void 0) { meta = { level: enums_js_1.Level.BASE }; }
        var promises = [];
        for (var _i = 0, _a = this._handlers; _i < _a.length; _i++) {
            var handler = _a[_i];
            promises.push(handler.handle(msg, meta));
        }
        Promise.all(promises).catch(this._errorHandler);
    };
    Logger.prototype.error = function (msg) {
        this.log(msg, { level: enums_js_1.Level.ERROR });
    };
    Logger.prototype.warn = function (msg) {
        this.log(msg, { level: enums_js_1.Level.WARN });
    };
    Logger.prototype.info = function (msg) {
        this.log(msg, { level: enums_js_1.Level.INFO });
    };
    Logger.prototype.debug = function (msg) {
        this.log(msg, { level: enums_js_1.Level.DEBUG });
    };
    Logger.prototype.addHandler = function (handler) {
        this._handlers.push(handler);
    };
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map