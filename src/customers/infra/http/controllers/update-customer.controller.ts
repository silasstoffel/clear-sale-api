import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateCustomerUseCase } from '../../../use-cases/update-customer.use-case';
import { CustomerDto } from '../../../use-cases/customer.dto';
import { updateCustomerSchema } from './schemas/update.schema';

export class UpdateCustomerController {
  async handle(req: Request, res: Response): Promise<Response> {    
    const useCase = container.resolve(UpdateCustomerUseCase);
    const data = updateCustomerSchema.cast(req.body) as CustomerDto;
    const customer = await useCase.execute(req.params.id, data);
    
    return res.status(200).json(customer);
  }
}