"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Handler = void 0;
const index_js_1 = require("../errors/index.js");
const enums_js_1 = require("../enums.js");
const ajv_1 = require("ajv");
const ajv = new ajv_1.default();
class Handler {
    constructor({ schemas = [], formatter, enforceSchemas = true, level = enums_js_1.Level.DEBUG }) {
        this._validators = schemas.map((cur, idx, arr) => ajv.compile(cur));
        this._formatter = formatter;
        this._enforceSchemas = enforceSchemas;
        this._level = level;
    }
    async handle(msg, meta) {
        if (!(meta.level >= this._level))
            return;
        if (!this._enforceSchemas) {
            return this._formatter.format(msg, meta);
            ;
        }
        if (!this.validatorsContains(msg)) { //  Here we do schema validation.
            throw new index_js_1.InvalidSchema('InvalidSchema');
        }
        return this._formatter.format(msg, meta);
    }
    validatorsContains(msg) {
        for (let validator of this._validators) {
            if (validator(msg))
                return true;
        }
        return false;
    }
    addSchema(schema) {
        this._validators.push(ajv.compile(schema));
        return true;
    }
    set formatter(formatter) {
        this._formatter = formatter;
    }
}
exports.Handler = Handler;
//# sourceMappingURL=handler.js.map