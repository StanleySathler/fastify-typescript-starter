import { FastifyInstance } from "fastify";

import * as productController from "./controller";

export const productRouter = async (instance: FastifyInstance) => {
  instance.addSchema({
    $id: "productResourceSchema",
    type: "object",
    properties: {
      id: { type: "number" },
      name: { type: "string" },
      price: { type: "number" },
    },
  });

  instance.get(
    "/",
    {
      schema: {
        response: {
          200: {
            type: "object",
            properties: {
              data: {
                type: "array",
                items: { $ref: "productResourceSchema" },
              },
            },
          },
        },
      },
    },
    productController.listProducts
  );
};
