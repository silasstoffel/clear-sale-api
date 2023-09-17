export class CustomerNotFoundException extends Error {
    public readonly name = 'CustomerNotFoundException';
    public readonly code = 'CUSTOMER_NOT_FOUND';

    constructor() {
        super('Customer not found.');
    }
}