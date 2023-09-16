import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteCustomerUseCase } from '../../../use-cases/delete-customer.use-case';

export class DeleteCustomerController {
  async handle(req: Request, res: Response): Promise<Response> {    
    const useCase = container.resolve(DeleteCustomerUseCase);
    await useCase.execute(req.params.id);
    return res.status(204).json({});
  }
}