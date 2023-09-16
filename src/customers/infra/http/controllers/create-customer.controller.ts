import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCustomerUseCase } from '../../../use-cases/create-customer.use-case';
import { createCustomerSchema } from './schemas/create.schema';

export class CreateCustomerController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(CreateCustomerUseCase);
    const customer = await useCase.execute(
      createCustomerSchema.cast(req.body)
    );
    
    return res.status(201).json(customer);
  }
}