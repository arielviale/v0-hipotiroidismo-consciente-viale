CREATE TABLE IF NOT EXISTS stories (
  id SERIAL PRIMARY KEY,
  user_id UUID NOT NULL, -- Reference to Supabase Auth User ID
  author_name TEXT NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
