export class EmailAlreadyExistsException extends Error {
    public readonly name = 'EmailAlreadyExistsException';
    public readonly code = 'EMAIL_ALREADY_EXISTS';

    constructor() {
        super('Email already exists.');
    }
}
