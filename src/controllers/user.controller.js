import pool from "../config/db.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createUser = asyncHandler(async (req, res) => {
  const { username, name, email, password } = req.body;
  //it is not a good practice to write queries in the controller
  const user = await pool.query(
    `INSERT INTO users (username,name,email,password) VALUES ($1,$2,$3,$4) RETURNING *`,
    [username, name, email, password]
  );
  console.log("user", user.rows[0]);
  return res.json(
    new ApiResponse(200, user.rows[0], "User created successfully")
  );
});

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await pool.query("SELECT * FROM users");
  return res.json(new ApiResponse(200, users.rows, "All users fetched"));
});

const getUserById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const users = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
  if (!users.rows.length) {
    return res.json(new ApiResponse(404, null, "User not found"));
  }
  return res.json(
    new ApiResponse(200, users.rows[0], "User fetched successfully")
  );
});

const updateUser = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;
  const users = await pool.query(
    `UPDATE users SET  name = $1 , email = $2 WHERE id = $3 RETURNING *`,
    [name, email, id]
  );

  if (!users.rows.length) {
    return res.json(new ApiResponse(404, null, "User was not updated"));
  }
  return res.json(
    new ApiResponse(200, users.rows[0], "User fetched successfully")
  );
});

const deleteUser = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const users = await pool.query(
    `DELETE FROM users WHERE id = $1 RETURNING *`,
    [id]
  );

  if (!users.rows.length) {
    return res.json(new ApiResponse(404, null, "User was not updated"));
  }
  return res.json(
    new ApiResponse(200, users.rows[0], "User fetched successfully")
  );
});

export { createUser, deleteUser, getAllUsers, getUserById, updateUser };
