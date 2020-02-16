require('dotenv/config');

const pg = require('pg');

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

const pool = new pg.Pool({
  connectionString,
});

module.exports = pool;
