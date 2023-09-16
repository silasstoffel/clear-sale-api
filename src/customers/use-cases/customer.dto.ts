export interface AddressDto {
    street: string;
    city: string;
    state: string;
    postalCode?: string;
    country?: string;
}

export interface CustomerDto {
    id?: string;
    name: string;
    document: string;
    email: string;
    mobilePhone: string;
    address: AddressDto;
    status: 'active' | 'inactive';
    createdAt?: Date;
    updatedAt?: Date;
}
