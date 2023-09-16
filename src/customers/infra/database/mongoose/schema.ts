
import { model, Schema, SchemaTypes, Document } from 'mongoose';
import { ulid } from 'ulid';
import { Customer, Address } from '../../../domain/customer';

const addressSchema = new Schema<Address>({
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postalCode: { type: String, required: false },
    country: { type: String, required: false }
}, { _id: false, timestamps: false  });

const customerSchema = new Schema<Customer & Document>({
    _id: { type: SchemaTypes.ObjectId, auto: true },
    id: { type: String, required: true, index: true, unique: true, default: () => ulid() },
    name: { type: String, required: true },
    document: { type: String, required: true, index: true, unique: true },
    email: { type: String, required: true, index: true, unique: true },
    mobilePhone: { type: String, required: true },
    status: { type: String, required: false, default: () => 'active' },
    address: { type: addressSchema, required: true }
},
{
    timestamps: true, 
    autoIndex: true 
});

export default model<Customer>('customers', customerSchema, 'customers');