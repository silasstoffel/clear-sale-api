import * as yup from 'yup';
import { Request, Response, NextFunction } from 'express';

export const YupValidatorMiddleware = (schema: yup.Schema<unknown>) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.validateSync(req.body, { abortEarly: false });
        } catch (err: unknown) {
            const { errors } = err as yup.ValidationError;
            return res.status(400).json({
                code: 'VALIDATION_ERROR',
                message: errors.join(', ')
            });
        }
        next();
    }
}

export const YupQueryStringValidatorMiddleware = (schema: yup.Schema<unknown>) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.validateSync(req.query, { abortEarly: false });
        } catch (err: unknown) {
            const { errors } = err as yup.ValidationError;
            return res.status(400).json({
                code: 'VALIDATION_ERROR',
                message: errors.join(', ')
            });
        }
        next();
    }
}
