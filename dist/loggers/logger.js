"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const enums_js_1 = require("../enums.js");
class Logger {
    constructor(handlers) {
        this._handlers = handlers;
    }
    log(msg, meta = { level: enums_js_1.Level.DEBUG }) {
        const promises = [];
        for (let handler of this._handlers) {
            promises.push(handler.handle(msg, meta));
        }
        Promise.all(promises).catch((e) => {
            console.error(e);
            //  Log error to default error handler.
        });
    }
    error(msg) {
        this.log(msg, { level: enums_js_1.Level.ERROR });
    }
    warn(msg) {
        this.log(msg, { level: enums_js_1.Level.WARN });
    }
    info(msg) {
        this.log(msg, { level: enums_js_1.Level.INFO });
    }
    debug(msg) {
        this.log(msg, { level: enums_js_1.Level.DEBUG });
    }
    addHandler(handler) {
        this._handlers.push(handler);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map