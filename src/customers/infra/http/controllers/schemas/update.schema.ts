import * as yup from 'yup';

const updateCustomerAddressSchema = yup.object().shape({
    street: yup.string().optional(),
    city: yup.string().optional(),
    state: yup.string().optional(),
    postalCode: yup.string().optional(),
    country: yup.string().optional(),
}).noUnknown();

const updateCustomerSchema = yup.object().shape({
    name: yup.string().optional(),
    document: yup.string().optional(),
    email: yup.string().email().optional(),
    mobilePhone: yup.string().optional(),
    address: updateCustomerAddressSchema.optional(),
    status: yup.string().oneOf(['active', 'inactive']).optional(),
}).noUnknown();

export { updateCustomerAddressSchema, updateCustomerSchema };
