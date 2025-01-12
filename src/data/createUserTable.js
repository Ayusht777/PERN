import pool from "../config/db.js";
const userTableQuery = `CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
)`;

const createUserTable = async () => {
  try {
    await pool.query(userTableQuery);
    console.log("User table created successfully");
  } catch (error) {
    console.error("Error creating user table", error);
  }
};

export default createUserTable;
