export declare class ResponseException extends Error {
    statusCode: number;
    constructor(message: string, statusCode: number);
    getStatusCode(): number;
}
