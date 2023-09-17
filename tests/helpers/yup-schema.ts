import * as yup from 'yup';

export const YupSchemaValidator = (schema: yup.Schema<unknown>, data: object) => {
    try {
        schema.validateSync(data, { abortEarly: false });
        return null;
    } catch (err: unknown) {
        const { errors } = err as yup.ValidationError;
        return errors.join(', ')
    }
}
