import request from 'supertest';
import { app } from '../../src/infra/http/app'

export async function CreateCustomerRequest(body: object) {
    return request(app)
    .post('/v1/customers')
    .send(body);
};

export async function LoadCustomerRequest(id: string) {
    return request(app)
    .get(`/v1/customers/${id}`)
    .send();
};
