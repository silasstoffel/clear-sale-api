import { Customer } from "./customer";

export interface ICustomerRepository {
    create(customer: Customer): Promise<Customer>;

    update(id: string, customer: Customer): Promise<Customer>;

    delete(id: string): Promise<void>;

    find(id: string): Promise<Customer | null>;

    findAll(id: string): Promise<Customer[]>;
}