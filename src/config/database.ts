require('dotenv').config();

const DB_URL = process.env.SUPABASE_DB_URL;
if (!DB_URL) throw new Error('SUPABASE_DB_URL is not defined in .env');

module.exports = {
  development: {
    url: DB_URL,
    dialect: 'postgres',
    dialectOptions: {
      ssl: { require: true, rejectUnauthorized: false },
      family: 4,
    },
    logging: console.log,
    pool: { max: 20, min: 0, acquire: 30000, idle: 10000 },
  },
  staging: {
    url: DB_URL,
    dialect: 'postgres',
    dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
    logging: false,
  },
  production: {
    url: DB_URL,
    dialect: 'postgres',
    dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
    logging: false,
  },
};
