import { Router } from 'express';
import { CreateCustomerController } from './controllers/create-customer.controller';
import { UpdateCustomerController } from './controllers/update-customer.controller';
import { ListCustomerController } from './controllers/list-customer.controller';
import { LoadCustomerController } from './controllers/load-customer.controller';

const customerRoute = Router();

customerRoute.post('/', new CreateCustomerController().handle);
customerRoute.put('/', new UpdateCustomerController().handle);
customerRoute.get('/', new ListCustomerController().handle);
customerRoute.get('/:id', new LoadCustomerController().handle);

export { customerRoute }