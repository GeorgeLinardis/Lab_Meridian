const server = Bun.serve({
  port: process.env.PORT ?? 3001,
  fetch(req) {
    return new Response("OK");
  },
});

console.log(`Server running on port ${server.port}`);
