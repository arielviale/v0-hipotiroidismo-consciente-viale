-- Create comments table for Hipotiroidismo Consciente
-- Version 2: Ensuring table creation in public schema

CREATE TABLE IF NOT EXISTS public.comments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_comments_created_at ON public.comments(created_at DESC);

-- Insert a test comment to verify the table works
INSERT INTO public.comments (name, message) 
VALUES ('Sistema', 'Tabla de comentarios creada exitosamente. ¡Bienvenidos a Hipotiroidismo Consciente!')
ON CONFLICT DO NOTHING;
