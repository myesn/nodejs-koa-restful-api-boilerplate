import server from './config/inversify.config';
import bodyParser from 'koa-bodyparser';

const port = 3000;
server
  .setConfig((app) => {
    // app.use((ctx) => {
    //   ctx.body = 'hi';
    // });
    app.use(bodyParser());
  })
  .build()
  .listen(port, () => {
    console.log(`Node.js v${process.versions.node}`);
    console.log(`Node.js environment: ${process.env.NODE_ENV}`);
    console.log(`Node.js process.env: ${process.env.DB_HOST}`);
    console.log(`Server running on http://localhost:${port}`);
  });
