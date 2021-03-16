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
exports.HTTPError = exports.LevelError = exports.InvalidSchemaError = void 0;
var InvalidSchemaError = /** @class */ (function (_super) {
    __extends(InvalidSchemaError, _super);
    function InvalidSchemaError() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var _this = _super.apply(this, params) || this;
        _this.name = 'InvalidSchemaError';
        return _this;
    }
    return InvalidSchemaError;
}(Error));
exports.InvalidSchemaError = InvalidSchemaError;
var LevelError = /** @class */ (function (_super) {
    __extends(LevelError, _super);
    function LevelError() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var _this = _super.apply(this, params) || this;
        _this.name = 'LevelError';
        return _this;
    }
    return LevelError;
}(Error));
exports.LevelError = LevelError;
var HTTPError = /** @class */ (function (_super) {
    __extends(HTTPError, _super);
    function HTTPError() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        var _this = _super.apply(this, params) || this;
        _this.name = 'HTTPError';
        return _this;
    }
    return HTTPError;
}(Error));
exports.HTTPError = HTTPError;
//# sourceMappingURL=index.js.map