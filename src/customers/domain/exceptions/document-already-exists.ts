export class DocumentAlreadyExistsException extends Error {
    public readonly name = 'DocumentAlreadyExistsException';
    public readonly code = 'DOCUMENT_ALREADY_EXISTS';

    constructor() {
        super('Document already exists.');
    }
}
