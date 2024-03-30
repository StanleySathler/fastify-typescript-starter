it("Should, given a request to an external URL, mock the response", async () => {
  const res = await fetch("https://your-mocked-url.com");
  expect(res.status).toBe(200);
  expect(await res.json()).toEqual({ mocked: true });
});
