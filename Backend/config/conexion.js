const { Pool } = require('pg');
const { db_user, db_password, db_name } = require('../config');

const pool = new Pool({
  user: db_user,
  host: 'localhost',
  database: db_name,
  password: db_password,
  port: 5432,
});

module.exports = pool;