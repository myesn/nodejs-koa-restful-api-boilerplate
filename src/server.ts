import bodyParser from 'koa-bodyparser';
import json from 'koa-json';
import logger from 'koa-logger';

import { container, server } from './config/inversify.config';
import { Config } from './config/config';
import SERVICE_IDENTIFIER from './constant/identifiers';
import { Environment } from './constant/environment';

const { port, env } = container.get<Config>(SERVICE_IDENTIFIER.CONFIG);
server
  .setConfig((app) => {
    if(env === Environment.Development){
      app.use(logger());
      app.use(json());
    }

    app.use(bodyParser());
  })
  .build()
  .listen(port, () => {
    console.log(`Node.js v${process.versions.node}`);
    console.log(`Node.js environment: ${process.env.NODE_ENV}`);
    console.log(`Server running on http://localhost:${port}`);
  });
