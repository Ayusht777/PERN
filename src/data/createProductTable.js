import pool from "../config/db.js";
const productTableQuery = `CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    productName VARCHAR(100) NOT NULL UNIQUE,
    description TEXT NOT NULL,
    price FLOAT NOT NULL,
    quantity INT NOT NULL,
    owner INT REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
)`;

const createProductTable = async () => {
  try {
    await pool.query(productTableQuery);
    console.log("product table created successfully");
  } catch (error) {
    console.error("Error creating user table", error);
  }
};

export default createProductTable;
