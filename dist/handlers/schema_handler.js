"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaHandler = void 0;
var ajv_1 = require("ajv");
var enums_1 = require("../enums");
var ajv = new ajv_1.default();
var SchemaHandler = /** @class */ (function () {
    function SchemaHandler(_a) {
        var _b = _a.schemas, schemas = _b === void 0 ? [] : _b, formatter = _a.formatter, _c = _a.level, level = _c === void 0 ? enums_1.Level.BASE : _c;
        this._validators = schemas.map(function (cur, idx, arr) { return ajv.compile(cur); });
        this._formatter = formatter;
        this._level = level;
    }
    SchemaHandler.prototype.schemasContains = function (msg) {
        for (var _i = 0, _a = this._validators; _i < _a.length; _i++) {
            var validator = _a[_i];
            if (validator(msg))
                return true;
        }
        return false;
    };
    SchemaHandler.prototype.addSchema = function (schema) {
        this._validators.push(ajv.compile(schema));
        return true;
    };
    return SchemaHandler;
}());
exports.SchemaHandler = SchemaHandler;
//# sourceMappingURL=schema_handler.js.map