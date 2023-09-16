import { Customer } from "./customer";

export interface IFindAllParameters {
    filter?: {
        status?: string;
        email?: string;
        document?: string;
        id?: string;
    }
    page?: number;
    limit?: number;
}
export interface IListResponse {
    type: string;
    url: string;
    data: Customer[];
    previous: number | null;
    next: number | null;
    currentPage: number | null;
}

export interface ICustomerRepository {
    create(customer: Customer): Promise<Customer>;
    update(id: string, customer: Partial<Customer>): Promise<Customer>;
    delete(id: string): Promise<void>;
    find(id: string): Promise<Customer | null>;
    findAll(params: IFindAllParameters): Promise<IListResponse>;
}
