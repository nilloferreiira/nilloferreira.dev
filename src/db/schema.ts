import { pgTable, uuid, text, varchar, timestamp, serial } from "drizzle-orm/pg-core"

export const users = pgTable("users", {
	id: uuid("id").defaultRandom().primaryKey(),
	name: varchar("name").notNull(),
	email: varchar("email").unique().notNull(),
	password: varchar("password").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
	deletedAt: timestamp("deleted_at")
})

export const projects = pgTable("projects", {
	id: serial("id").primaryKey(),
	title: varchar("title").notNull(),
	description_en: text("description_en").notNull(),
	description_pt: text("description_pt").notNull(),
	imgSrc: varchar("img_src").notNull(),
	url: varchar("url").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
	deletedAt: timestamp("deleted_at")
})

export const experiences = pgTable("experiences", {
	id: serial("id").primaryKey(),
	title_en: varchar("title_en").notNull(),
	title_pt: varchar("title_pt").notNull(),
	description_en: text("description_en").notNull(),
	description_pt: text("description_pt").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
	deletedAt: timestamp("deleted_at")
})
