import { FastifyInstance } from "fastify";
import { Type } from "@sinclair/typebox";

import * as productController from "./controller";
import { productResourceSchema } from "./schema";

export const productRouter = async (instance: FastifyInstance) => {
  instance.addSchema(productResourceSchema);

  instance.get(
    "/",
    {
      schema: {
        response: {
          200: Type.Object({
            data: Type.Array(Type.Ref(productResourceSchema)),
          }),
        },
      },
    },
    productController.listProducts
  );
};
