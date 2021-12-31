import Koa from 'koa';

const server: Koa = new Koa();
const port = 3000;

server.use((ctx: Koa.DefaultContext) => {
  ctx.body = 'hi';
});

server.listen(port, () => {
  console.log(`Node.js v${process.versions.node}`);
  console.log(`Node.js environment: ${process.env.NODE_ENV}`);
  console.log(`Node.js process.env: ${process.env.DB_HOST}`);
  console.log(`Server running on http://localhost:${port}`);
});
