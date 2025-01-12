import pool from "./config/db.js";
import app from "./app.js";
import createUserTable from "./data/createUserTable.js";
import createProductTable from "./data/createProductTable.js";
const port = 8080 || process.env.PORT;

const startServer = async () => {
  try {
    await pool.connect();
    console.log(
      `Database connected successfully on port ${process.env.DB_PORT} 🚀`
    );
    createUserTable();
    createProductTable();
    app.listen(port, () => {
      console.log(`Server running on port ${port} 🚀`);
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

startServer();
