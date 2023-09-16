import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateCustomerUseCase } from '../../../use-cases/update-customer.use-case';
import { CustomerDto } from '../../../use-cases/customer.dto';

export class UpdateCustomerController {
  async handle(req: Request, res: Response): Promise<Response> {    
    const useCase = container.resolve(UpdateCustomerUseCase);
    const customer = await useCase.execute(req.params.id, req.body as CustomerDto);
    return res.status(200).json(customer);
  }
}