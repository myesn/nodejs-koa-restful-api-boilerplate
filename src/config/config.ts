export interface Config {
  env: string;
  port?: number;
}

export const config: Config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 3000,
};
