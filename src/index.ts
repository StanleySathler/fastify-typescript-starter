import { setupApp } from "./utils";

const PORT = 3001;
const HOST = "::"; // This is required for Docker environments

/*
 * Start server.
 */
const app = setupApp();

app.listen({ port: PORT, host: HOST }, function (err) {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
