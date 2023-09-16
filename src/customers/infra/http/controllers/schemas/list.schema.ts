import * as yup  from 'yup';

const filterSchema = yup.object().shape({
  status: yup.string().trim().min(1).max(255).optional(),
  email: yup.string().trim().email().max(255).optional(),
  document: yup.string().trim().min(1).max(255).optional(),
  id: yup.string().trim().min(1).max(255).optional(),
}).noUnknown()
.default(undefined);

const findAllParametersSchema = yup.object().shape({
  filter: filterSchema.default(undefined).optional(),
  page: yup.number().integer().positive().optional().default(1),
  limit: yup.number().integer().positive().optional().default(10),
}).noUnknown();

export { findAllParametersSchema, filterSchema }
