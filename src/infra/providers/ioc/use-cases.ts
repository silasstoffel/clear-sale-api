import { container } from "tsyringe";
import { CreateCustomerUseCase } from "../../../customers/use-cases/create-customer.use-case";

container.register<CreateCustomerUseCase>(CreateCustomerUseCase, CreateCustomerUseCase);
