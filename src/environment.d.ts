import { Environment } from './constant/environment';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: Environment;
      PORT?: number;
    }
  }
}
export {};