import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class LoadCustomerController {
  async handle(req: Request, res: Response): Promise<Response> {
    return res.status(200).json({ message: 'Hello World'});
  }
}