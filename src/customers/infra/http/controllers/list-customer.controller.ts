import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListCustomerUseCase } from '../../../use-cases/list-customer.use-case';
import { filterSchema, findAllParametersSchema } from './schemas/list.schema';

export class ListCustomerController {
  async handle(req: Request, res: Response): Promise<Response> {
    const useCase = container.resolve(ListCustomerUseCase);
    
    const filter = filterSchema.cast(req?.query);
    const findAllParams = findAllParametersSchema.cast({
      ...req?.query, filter
    })

    const result = await useCase.execute(findAllParams);
    
    return res.status(200).json(result);
  }
}