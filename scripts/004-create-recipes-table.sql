-- Create recipes table
CREATE TABLE IF NOT EXISTS recipes (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  ingredients TEXT[] NOT NULL,
  instructions TEXT[] NOT NULL,
  prep_time INTEGER,
  cook_time INTEGER,
  servings INTEGER,
  image_url TEXT,
  category TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample recipes
INSERT INTO recipes (title, description, ingredients, instructions, prep_time, cook_time, servings, category)
VALUES
  (
    'Pan de Trigo Sarraceno',
    'Crujiente por fuera, suave por dentro. La alternativa perfecta para tus tostadas mañaneras.',
    ARRAY['200g harina de trigo sarraceno', '100ml agua', '5g levadura', '2g sal', '10ml aceite de oliva'],
    ARRAY['Mezclar ingredientes secos', 'Agregar agua lentamente', 'Amasar por 10 minutos', 'Dejar reposar 1 hora', 'Hornear a 200°C por 25 minutos'],
    15,
    25,
    4,
    'pan'
  ),
  (
    'Muffins de Arándanos',
    'Sin azúcar y llenos de antioxidantes. El snack ideal para media tarde.',
    ARRAY['150g harina de almendra', '100g arándanos frescos', '3 huevos', '50ml aceite de coco', '5ml extracto de vainilla', '5g polvo de hornear'],
    ARRAY['Mezclar secos en un bol', 'Batir huevos con aceite', 'Combinar ambas mezclas', 'Agregar arándanos', 'Verter en molde', 'Hornear a 180°C por 20 minutos'],
    10,
    20,
    12,
    'postres'
  );
