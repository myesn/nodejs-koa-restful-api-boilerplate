import bodyParser from 'koa-bodyparser';

import { server, container } from './config/inversify.config';
import { Config } from './config/config';
import SERVICE_IDENTIFIER from './constant/identifiers';

const port = container.get<Config>(SERVICE_IDENTIFIER.CONFIG).port;
server
  .setConfig((app) => {
    app.use(bodyParser());
  })
  .build()
  .listen(port, () => {
    console.log(`Node.js v${process.versions.node}`);
    console.log(`Node.js environment: ${process.env.NODE_ENV}`);
    console.log(`Server running on http://localhost:${port}`);
  });
