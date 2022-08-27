import dotenv from 'dotenv';

dotenv.config();

export const serverConfig = {
  scryfallHost: process.env.SCRYFALL_HOST || 'api.scryfall.com',
  port: process.env.APOLLO_GRAPHQL_SERVICE_PORT ? Number.parseInt(process.env.APOLLO_GRAPHQL_SERVICE_PORT, 10) : 4000,
  redis: {
    disabled: process.env.REDIS_DISABLED ? !!process.env.REDIS_DISABLED : false,
    host: process.env.REDIS_HOST || 'redis',
    port: process.env.REDIS_SERVICE_PORT ? Number.parseInt(process.env.REDIS_SERVICE_PORT, 10) : 6379,
    db: process.env.REDIS_DB ? Number.parseInt(process.env.REDIS_DB, 10) : 1,
  },
};
