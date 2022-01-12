import bodyParser from 'koa-bodyparser';
import json from 'koa-json';
import logger from 'koa-logger';
// 由于 pino 打印的数据实在是过于详细了，不太利于阅读，所以优先使用 koa-logger
// import logger from 'koa-pino-logger';
import responseTime from 'koa-response-time';
import cors from '@koa/cors';
import serve from 'koa-static';

import { container, server } from './config/inversifyConfig';
import { Config } from './config/config';
import SERVICE_IDENTIFIER from './constant/identifiers';
import { Environment } from './constant/environment';

const config = container.get<Config>(SERVICE_IDENTIFIER.CONFIG);
const { port, env, assetDirectory } = config;

server
  .setConfig((app) => {
    if (env === Environment.Development) {
      app.use(logger());
      app.use(responseTime());
      app.use(json());
    }

    app.use(cors());
    app.use(serve(assetDirectory));
    app.use(bodyParser());
  })
  .build()
  .listen(port, () => {
    console.log(`Node.js v${process.versions.node}`);
    console.log(`Server Configuration: ${JSON.stringify(config, null, 2)}`);
    console.log(`Server running on http://localhost:${port}`);
  });
