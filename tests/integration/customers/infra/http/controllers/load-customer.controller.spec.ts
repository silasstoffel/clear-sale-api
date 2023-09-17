import customerModel from '../../../../../../src/customers/infra/database/mongoose/schema';
import { CreateCustomerRequest, LoadCustomerRequest } from '../../../../../helpers/customer';

describe("LoadCustomerController", () => {
    const customer = {
        status: "active",
        name: "Jonh Doe",
        document: "32280866000190",
        email: "jose.silva.32280866000190@example.com",
        mobilePhone: "+55 11 98765-4321",
        address: {
            street: "Rua das Flores, 123",
            city: "São Paulo",
            state: "SP",
            postalCode: "01234-567",
            country: "Brazil"
        }
    };

    describe("When is possible load a customer", () => {
        it("Should be able to load a customer", async () => {            
            const createResponse = await CreateCustomerRequest(customer)
            const loadResponse = await LoadCustomerRequest(createResponse.body.id)
            expect(createResponse.body).toEqual(loadResponse.body);
        });
    });

    describe("When is not possible load a customer", () => {
        it("Should be able to return 404 status", async () => {            
            const response = await LoadCustomerRequest('invalid-id');
            expect(response.status).toEqual(404);
            expect(response.body).toHaveProperty('code', 'CUSTOMER_NOT_FOUND');
            expect(response.body).toHaveProperty('message', 'Customer not found.');
        });
    });

});