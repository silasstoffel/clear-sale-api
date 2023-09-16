import { container } from 'tsyringe';
import { ICustomerRepository } from '../../../customers/domain/customer.repository';
import { CustomerRepository } from '../../../customers/infra/database/mongoose/customer.repository';

container.registerSingleton<ICustomerRepository>('CustomerRepository', CustomerRepository);