const { Pool } = require('pg');

const pool = new Pool({
  user: 'zliwjhcf',
  host: 'suleiman.db.elephantsql.com',
  database: 'zliwjhcf',
  password: '0DsTnHrkh7hfC0ECnJPBCLxnOMSY42FL', // Здесь укажите ваш пароль
  port: 5432, // По умолчанию порт PostgreSQL 5432
});

module.exports = pool;
