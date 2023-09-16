import * as yup from 'yup';

const createCustomerAddressSchema = yup.object().shape({
    street: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    postalCode: yup.string().optional(),
    country: yup.string().optional(),
}).noUnknown();

const createCustomerSchema = yup.object().shape({
    name: yup.string().required(),
    document: yup.string().required(),
    email: yup.string().email().required(),
    mobilePhone: yup.string().required(),
    address: createCustomerAddressSchema.required(),
    status: yup.string().oneOf(['active', 'inactive']).required(),
}).noUnknown();

export { createCustomerAddressSchema, createCustomerSchema };
