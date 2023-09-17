import { createCustomerSchema } from "../../../../../../../src/customers/infra/http/controllers/schemas/create.schema";
import { YupSchemaValidator } from "../../../../../../helpers/yup-schema";

describe("CreateCustomerSchema", () => {

    const customer = {
        status: "active",
        name: "Batman da Silva",
        document: "36868839000193",
        email: "batman@dc.com",
        mobilePhone: "+55 11 98765-4321",
        address: {
            street: "Rua das Flores, 123",
            city: "São Paulo",
            state: "SP",
            postalCode: "01234-567",
            country: "Brazil"
        }
    };

    describe('Casting', () => {
        it('Should consider only schema property on casting', async () => {
            const result = createCustomerSchema.cast({
                ...customer,
                additionalProperty: 'any-value'
            });

            expect(result).toEqual(customer);
        });
    });

    describe('Validations', () => {
        it('Should be able to validate as required params from schema', () => {
            const result = YupSchemaValidator(createCustomerSchema, {})
            expect(result).toBe('name is a required field, document is a required field, email is a required field, mobilePhone is a required field, address.street is a required field, address.city is a required field, address.state is a required field, status is a required field')
        });

        it('Should be able to validate email parameter as valid email', () => {
            const result = YupSchemaValidator(createCustomerSchema, {
                ...customer,
                email: 'invalid-email'
            })
            expect(result).toBe('email must be a valid email')
        });
    });
});