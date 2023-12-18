import { FastifyReply, FastifyRequest } from "fastify";

export const listProducts = async (req: FastifyRequest, res: FastifyReply) => {
  // Set cookie with token. Cookies are sent on every request, automatically.
  // - Path - ensure token is set for the entire domain, not only `/auth/google/callback`.
  // - HttpOnly - ensure token is not accessible from JavaScript to prevent XSS attacks.
  res.header("Set-Cookie", `token=abcdefg; Path=/; HttpOnly;`);

  res.send({ data: [{ id: 1, name: "iPhone", price: 3599.99 }] });
};
