import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateCustomerUseCase } from '../../../use-cases/create-customer.use-case';
import { createCustomerSchema } from './schemas/create.schema';
import { ResponseResolver } from './response.resolver';

export class CreateCustomerController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(CreateCustomerUseCase);
    try {
      const customer = await useCase.execute(
        createCustomerSchema.cast(req.body)
      );
      return res.status(201).json(customer);
    } catch (err: unknown) {
      return ResponseResolver.resolve(res, err);
    }
  }
}
