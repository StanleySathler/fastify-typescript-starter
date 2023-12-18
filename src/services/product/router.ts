import { FastifyInstance } from "fastify";

import * as authController from "./controller";

export const productRouter = async (instance: FastifyInstance) => {
  // TODO: add schemas
  instance.get("/", authController.listProducts);
};
