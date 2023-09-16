import { Router } from "express";
import { healthCheckRoute } from "./health.router";
import { customerRoute } from "../../../customers/infra/http/routes";

const router = Router();

const routers = [
    { path: "/health-check", action: healthCheckRoute },
    { path: "/v1/customers", action: customerRoute },
];

for (const route of routers) {
    router.use(route.path, route.action);
}

export { router };