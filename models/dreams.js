import { db_conn } from "../config/db_conn.js";

export const getAll = () => db_conn.query(`SELECT * FROM dreams`)

export const getOne = (id) => db_conn.query(
  `SELECT * FROM dreams WHERE id = ?`, [id]
)

export const insertOne = (prompt, response) => {
  console.log(prompt, response)
  db_conn.query(
  `INSERT INTO dreams (prompt, response) VALUES (?, ?)`,
  [prompt, response]
)}

export const deleteOne = (id) => db_conn.query(
  `DELETE FROM dreams WHERE id = ?`, [id]
)