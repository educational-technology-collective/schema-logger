import { Level } from '../enums.js';
export class SimpleLogger {
    handlers;
    constructor({ handlers = [] }) {
        this.handlers = handlers;
    }
    addHandler(handler) {
        this.handlers.push(handler);
    }
    async log(msg, meta) {
        let promises = [];
        for (let handler of this.handlers) {
            promises.push(handler.handle(msg, meta));
        }
        return Promise.all(promises);
    }
    async error(msg) {
        return this.log(msg, { level: Level.ERROR });
    }
    async warn(msg) {
        return this.log(msg, { level: Level.WARN });
    }
    async info(msg) {
        return this.log(msg, { level: Level.INFO });
    }
    async debug(msg) {
        return this.log(msg, { level: Level.DEBUG });
    }
}
//# sourceMappingURL=simple_logger_async.js.map