// db.js
const { Pool } = require('pg');

// PostgreSQL configuration
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'e_rupee',
  password: '123456',
  port: 5432 // Default PostgreSQL port
});

module.exports = pool;
