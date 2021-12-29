import Koa from 'koa';

const server: Koa = new Koa();
const port = 3000;

server.use((ctx: Koa.DefaultContext) => {
  ctx.body = 'hi';
});

server.listen(port, () => {
  console.log(`Node.js v${process.versions.node}`);
  console.log(`Server running on http://localhost:${port}`);
});
