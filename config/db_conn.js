import mysql2 from "mysql2/promise"
import * as dotenv from "dotenv"

dotenv.config()

const { DATABASE_HOST, DATABASE_USER, DATABASE_PWD, DATABASE_DB } = process.env

export const db_conn = mysql2.createPool({
  host: DATABASE_HOST,
  user: DATABASE_USER,
  password: DATABASE_PWD,
  database: DATABASE_DB
})