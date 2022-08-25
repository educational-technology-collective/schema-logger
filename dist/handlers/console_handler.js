import { Level } from '../enums.js';
export class ConsoleHandler {
    formatter;
    constructor({ formatter }) {
        this.formatter = formatter;
    }
    async handle(msg, meta) {
        msg = this.formatter.format(msg);
        meta = meta;
        switch (meta.level) {
            case Level.ERROR:
                console.error(msg);
            default:
                console.log(msg);
        }
    }
}
//# sourceMappingURL=console_handler.js.map