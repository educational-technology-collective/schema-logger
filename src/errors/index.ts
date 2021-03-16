export class InvalidSchemaError extends Error {
    constructor(...params: any) {
        super(...params);
        this.name = 'InvalidSchemaError';
    }
}

export class LevelError extends Error {
    constructor(...params: any) {
        super(...params);
        this.name = 'LevelError';
    }
}

export class HTTPError extends Error {
    constructor(...params: any) {
        super(...params);
        this.name = 'HTTPError';
    }
}