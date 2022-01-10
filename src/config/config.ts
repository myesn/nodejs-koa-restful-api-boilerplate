import { Environment } from '../constant/environment';

export interface Config {
  env: Environment;
  port?: number;
}

export const config: Config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 3000,
};