import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { LoadCustomerUseCase } from '../../../use-cases/load-customer.use-case';

export class LoadCustomerController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(LoadCustomerUseCase);
    const customer = await useCase.execute(req.params.id);

    if (!customer) {
      return res.status(404).json({ 
        code: 'CUSTOMER_NOT_FOUND', 
        message: 'Customer not found.'
      });
    }

    return res.status(200).json(customer);
  }
}