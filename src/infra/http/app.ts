import 'reflect-metadata';
import express from 'express';
import swaggerUi from "swagger-ui-express";
import * as dotenv from 'dotenv';
dotenv.config();


import './../database/mongoose/config';
import '../providers/ioc'

import { router } from "./routes";
import swaggerFile from '../../swagger.json';

const app = express();

app.use(express.json());
app.use('/api-reference', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

export { app };