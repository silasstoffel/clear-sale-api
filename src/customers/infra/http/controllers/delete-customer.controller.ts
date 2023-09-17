import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteCustomerUseCase } from '../../../use-cases/delete-customer.use-case';
import { ResponseResolver } from './response.resolver';

export class DeleteCustomerController {
  async handle(req: Request, res: Response): Promise<Response> {    
    const useCase = container.resolve(DeleteCustomerUseCase);
    try {
      await useCase.execute(req.params.id);
      return res.status(204).json();
    } catch (err: unknown) {
      return ResponseResolver.resolve(res, err);
    }
  }
}