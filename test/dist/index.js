import { JSONFormatter } from "schema_logger";
import { ConsoleHandler } from "schema_logger";
import { SimpleLogger } from "schema_logger";
import { S3BucketHandler } from "schema_logger";
let formatter = new JSONFormatter();
let consoleHandler = new ConsoleHandler({ formatter });
let s3BucketHandler = new S3BucketHandler({
    formatter,
    api: 'https://telemetry.mentoracademy.org',
    bucket: 'telemetry-edtech-labs-si-umich-edu',
    path: '/prod/ohtool'
});
let simpleLogger = new SimpleLogger({ handlers: [consoleHandler, s3BucketHandler] });
simpleLogger.info('TEST OHTOOL');
//# sourceMappingURL=index.js.map