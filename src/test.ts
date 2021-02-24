import { Logger, ConsoleHandler, JSONFormatter, Level } from './index.js';
import { JSONSchemaType } from "ajv";

type Message = { foo: number };

const schema: JSONSchemaType<Message> = {
    type: "object",
    properties: {
        foo: { type: "number", minimum: 0 },
    },
    required: ["foo"],
    additionalProperties: false,
}

const formatter = new JSONFormatter();

const consoleHandler = new ConsoleHandler({
    formatter: formatter,
    enforceSchemas: false,
    level: Level.DEBUG
});

class DefaultLogger extends Logger {
    constructor(handlers = [consoleHandler]) {
        super(handlers);
    }
}

export const log = new DefaultLogger();

let data: any = { foo: 1 };

log.info(data);

data = { foo: 'a' };

log.info(data);


