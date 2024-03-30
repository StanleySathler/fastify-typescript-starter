import { server } from "./mocks/server";

beforeAll(async () => {
  // Start msw server
  server.listen();
});

afterEach(async () => {
  // Reset msw handlers after every test.
  server.resetHandlers();
});

afterAll(async () => {
  // Close msw after all tests.
  server.close();
});
