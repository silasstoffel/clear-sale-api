import { Router } from 'express';
import { CreateCustomerController } from './controllers/create-customer.controller';
import { UpdateCustomerController } from './controllers/update-customer.controller';
import { ListCustomerController } from './controllers/list-customer.controller';
import { LoadCustomerController } from './controllers/load-customer.controller';
import { DeleteCustomerController } from './controllers/delete-customer.controller';
import { createCustomerSchema } from './controllers/schemas/create.schema';
import { updateCustomerSchema } from './controllers/schemas/update.schema';
import { YupValidatorMiddleware } from './middlewares/yup-validator';

const customerRoute = Router();

customerRoute.post(
    '/',
    YupValidatorMiddleware(createCustomerSchema),
    new CreateCustomerController().handle
);

customerRoute.put(
    '/:id',
    YupValidatorMiddleware(updateCustomerSchema),
    new UpdateCustomerController().handle
);

customerRoute.get('/', new ListCustomerController().handle);
customerRoute.get('/:id', new LoadCustomerController().handle);
customerRoute.delete('/:id', new DeleteCustomerController().handle);

export { customerRoute }