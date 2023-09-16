export class CustomerNotException extends Error {
    public readonly name = 'CustomerNotException';
    public readonly code = 'CUSTOMER_NOT_FOUND';

    constructor() {
        super('Customer not found.');
    }
}