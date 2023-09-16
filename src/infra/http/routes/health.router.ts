import { Router } from 'express';
import { Request, Response } from 'express';

const healthCheckRoute = Router();

healthCheckRoute.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        status: 'OK',
    });
});

export { healthCheckRoute }