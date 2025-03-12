import { Knex } from 'knex';
import { join } from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

const databaseConfig: Knex.Config = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  pool: {
    min: 2,
    max: 3000,
    idleTimeoutMillis: 300000,
    createTimeoutMillis: 300000,
  },
  acquireConnectionTimeout: 300000,
  seeds: {
    directory: join(__dirname, 'seeds'),
  },
};

export default databaseConfig;
