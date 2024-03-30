import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

export const server = setupServer(
  http.get("https://your-mocked-url.com", () => {
    return HttpResponse.json({ mocked: true }, { status: 200 });
  })
);
