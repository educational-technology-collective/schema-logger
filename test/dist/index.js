import { JSONFormatter } from "schema_logger";
import { ConsoleHandler } from "schema_logger";
import { SimpleLogger } from "schema_logger";
let formatter = new JSONFormatter();
let handler = new ConsoleHandler({ formatter });
let logger = new SimpleLogger({ handlers: [handler] });
logger.info('INFO');
//# sourceMappingURL=index.js.map