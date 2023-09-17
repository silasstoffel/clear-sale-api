import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { LoadCustomerUseCase } from '../../../use-cases/load-customer.use-case';
import { ResponseResolver } from './response.resolver';

export class LoadCustomerController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(LoadCustomerUseCase);
    try {
      const customer = await useCase.execute(req.params.id);
      return res.status(200).json(customer);
    } catch (err: unknown) {
      return ResponseResolver.resolve(res, err);
    }
  }
}