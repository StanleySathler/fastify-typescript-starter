import type { FastifyInstance } from "fastify";
import { setupApp } from "../../utils";

let app: FastifyInstance;

beforeAll(() => {
  app = setupApp();
});

afterAll(async () => {
  await app.close();
});

describe("List products", () => {
  it("Should list all products", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/product",
    });

    expect(response.statusCode).toBe(200);
    expect(response.json().data).toContainEqual(
      expect.objectContaining({
        id: 1,
        name: "iPhone",
        price: 3599.99,
      })
    );
  });
});
