import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/lib/supabase/schema.ts",
  dbCredentials: {
    url: process.env.DATABASE_URL || '',
  }
});