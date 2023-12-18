import Fastify from "fastify";
import fastifyCookie from "@fastify/cookie";

import { productRouter } from "./services/product/router";

export const setupApp = () => {
  const fastify = Fastify({
    logger: true,
  });

  /*
   * Plugins.
   */
  // Add support for reading and setting cookies.
  fastify.register(fastifyCookie, {
    secret: "cookie-secret-signature",
  });

  /*
   * Router.
   */
  fastify.register(productRouter, { prefix: "product" });

  return fastify;
};
