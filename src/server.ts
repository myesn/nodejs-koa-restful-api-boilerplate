import Koa from 'koa';

import Battle from './services/interfaces/battle';
import container from './config/inversify.config';
import SERVICE_IDENTIFIER from './constants/identifiers';

// Composition root
const epicBattle = container.get<Battle>(SERVICE_IDENTIFIER.BATTLE);
console.log(epicBattle.fight());

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
