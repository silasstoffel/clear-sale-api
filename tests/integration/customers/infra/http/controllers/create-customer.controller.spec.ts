import customerModel from '../../../../../../src/customers/infra/database/mongoose/schema';
import { CreateCustomerRequest } from '../../../../../helpers/customer';

describe("CreateCustomerController", () => {
    const customer = {
        status: "active",
        name: "José da Silva Mendes",
        document: "1234567890",
        email: "jose.silva@example.com",
        mobilePhone: "+55 11 98765-4321",
        address: {
            street: "Rua das Flores, 123",
            city: "São Paulo",
            state: "SP",
            postalCode: "01234-567",
            country: "Brazil"
        }
    };

    beforeAll(async () => {
        await customerModel.deleteMany({});
    });

    describe("When is possible create a customer", () => {
        it("Should be able to create a new customer", async () => {            
            const response = await CreateCustomerRequest(customer)
            
            expect(response.status).toBe(201);

            expect(response.body).toHaveProperty('id');
            expect(response.body).toHaveProperty('createdAt');
            expect(response.body).toHaveProperty('updatedAt');

            const result = response.body;
            delete result.id;
            delete result.createdAt;
            delete result.updatedAt;
            expect(response.body).toEqual(customer);
        });
    });

    describe("When is not possible create a customer", () => {

        it("Should be able to return an error when email already exists", async () => {            
            const createCustomerPayload = {
                ...customer,
                document: '98876746000168',
                email: 'email-98876746000168@gmail.com'
            };

            await CreateCustomerRequest(createCustomerPayload)
            const response = await CreateCustomerRequest(createCustomerPayload)
            
            expect(response.status).toBe(409);
            expect(response.body).toHaveProperty('code', 'EMAIL_ALREADY_EXISTS');
        });

        it("Should be able to return an error when document already exists", async () => {            
            const createCustomerPayload = {
                ...customer,
                document: '98876746000169',
                email: 'email-98876746000166@gmail.com'
            };

            await CreateCustomerRequest(createCustomerPayload)
            const response = await CreateCustomerRequest({ 
                ...createCustomerPayload, 
                email:  'email-98876746000167@gmail.com'
            })
            
            expect(response.status).toBe(409);
            expect(response.body).toHaveProperty('code', 'DOCUMENT_ALREADY_EXISTS');
        });

        it("Should be able to validate a required parameters", async () => {            
            const response = await CreateCustomerRequest({ a:  'a' })
            
            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty('code', 'VALIDATION_ERROR');
            expect(response.body).toHaveProperty('message', 'name is a required field, document is a required field, email is a required field, mobilePhone is a required field, address.street is a required field, address.city is a required field, address.state is a required field, status is a required field');
        });
    });
});