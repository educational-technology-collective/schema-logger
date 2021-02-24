"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const index_js_1 = require("./index.js");
const schema = {
    type: "object",
    properties: {
        foo: { type: "number", minimum: 0 },
    },
    required: ["foo"],
    additionalProperties: false,
};
const formatter = new index_js_1.JSONFormatter();
const consoleHandler = new index_js_1.ConsoleHandler({
    formatter: formatter,
    enforceSchemas: false,
    level: index_js_1.Level.DEBUG
});
class DefaultLogger extends index_js_1.Logger {
    constructor(handlers = [consoleHandler]) {
        super(handlers);
    }
}
exports.log = new DefaultLogger();
let data = { foo: 1 };
exports.log.info(data);
data = { foo: 'a' };
exports.log.info(data);
//# sourceMappingURL=test.js.map