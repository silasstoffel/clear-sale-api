
import { Response } from "express";
import { DocumentAlreadyExistsException } from '../../../domain/exceptions/document-already-exists';
import { EmailAlreadyExistsException } from "../../../domain/exceptions/email-already-exists";
import { CustomerNotFoundException } from "../../../domain/exceptions/customer-not-found";

export class ResponseResolver {
    public static resolve(res: Response, error: unknown): Response {
        if (
            error instanceof DocumentAlreadyExistsException ||
            error instanceof EmailAlreadyExistsException
        ) {
            const { code, message } = error;
            return res.status(409).json({ code, message });
        }

        if (error instanceof CustomerNotFoundException) {
            const { code, message } = error;
            return res.status(404).json({ code, message });
        }

        let detail = undefined;
        let stack = undefined;

        if (process.env.ENVIRONMENT === 'development') {
            const exc = error as Error;
            detail = exc.message;
            stack = exc.stack;
        }

        return res.status(500).json({
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Internal server error.',
            detail,
            stack
        });
    }
}