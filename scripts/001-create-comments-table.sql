-- Create comments table for Hipotiroidismo Consciente
CREATE TABLE IF NOT EXISTS comments (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_comments_created_at ON comments(created_at DESC);

-- Insert a test comment to verify the table works
INSERT INTO comments (name, message) 
VALUES ('Sistema', 'Tabla de comentarios creada exitosamente')
ON CONFLICT DO NOTHING;
