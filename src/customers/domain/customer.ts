export class Address {
    public readonly street!: string; 
    public readonly city!: string;
    public readonly state!: string;
    public readonly postalCode?: string;
    public readonly country?: string;

    constructor(partial: Partial<Address>) {
        Object.assign(this, partial);
    }
}

export class Customer {
    public readonly id?: string;
    public readonly name!: string;
    public readonly document!: string;
    public readonly email!: string;
    public readonly mobilePhone!: string;
    public readonly address!: Address;
    public readonly status?: 'active' | 'inactive' = 'active';
    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;

    constructor(customer: Partial<Customer>) {
        Object.assign(this, {
            id: customer?.id,
            name: customer.name,
            document: customer.document,
            email: customer.email,
            mobilePhone: customer.mobilePhone,
            address: customer.address,
            status: customer.status,
            createdAt: customer?.createdAt,
            updatedAt: customer?.updatedAt
        });
    }
}