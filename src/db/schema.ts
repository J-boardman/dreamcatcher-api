import { mysqlTable, mysqlSchema, AnyMySqlColumn, uniqueIndex, int, varchar, index, serial, text } from "drizzle-orm/mysql-core"

export const dreams = mysqlTable('dreams', {
  id: serial('id').primaryKey(),
  authorId: serial('author_id'),
    prompt: varchar('prompt', {length: 510 }),
  interpretation: varchar("interpretation", { length: 1024 })
})