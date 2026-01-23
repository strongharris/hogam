import { pgTable, serial, text, timestamp, boolean } from 'drizzle-orm/pg-core'

export const todos = pgTable('todos', {
  id: serial().primaryKey(),
  title: text().notNull(),
  completed: boolean().default(false),
  createdAt: timestamp('created_at').defaultNow(),
})
