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

const createTableIfNotExists = async () => {
    try {
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS user_data (
          id SERIAL PRIMARY KEY,
          username VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          password VARCHAR(255) NOT NULL,
          e_rupee DECIMAL(10, 2) DEFAULT 0.00
        )
      `;
      await pool.query(createTableQuery);
      console.log('user_data table created or already exists');
    } catch (error) {
      console.error('Error creating user_data table:', error);
    }
  };

  module.exports = {
    pool,
    createTableIfNotExists,
  };
