import path from 'path';
import { Environment } from '../constant/environment';

export type Config = {
  env: Environment;
  port: number;
  assetDirectory: string;
};

export const config: Config = {
  env: process.env.NODE_ENV || Environment.Development,
  port: process.env.PORT || 3000,
  assetDirectory: process.env.ASSET_DIRECTORY || path.join(__dirname, 'assets'),
};
