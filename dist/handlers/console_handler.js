"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleHandler = void 0;
const handler_js_1 = require("../handlers/handler.js");
class ConsoleHandler extends handler_js_1.Handler {
    constructor(options) {
        super(options);
    }
    async handle(msg, meta) {
        msg = await super.handle(msg, meta);
        console.log(msg);
    }
}
exports.ConsoleHandler = ConsoleHandler;
//# sourceMappingURL=console_handler.js.map