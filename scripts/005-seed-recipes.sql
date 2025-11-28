-- Seed initial recipes if table is empty
INSERT INTO recipes (title, description, image_url, category, prep_time, cook_time, servings, ingredients, instructions)
SELECT * FROM (VALUES
  (
    'Pan de Trigo Sarraceno',
    'Crujiente por fuera, suave por dentro. La alternativa perfecta para tus tostadas mañaneras.',
    '/placeholder.svg?height=300&width=400',
    'Desayunos',
    15,
    45,
    8,
    ARRAY['2 tazas de harina de trigo sarraceno', '1 cucharadita de sal', '1 cucharada de aceite de oliva', '1 taza de agua tibia', '1 cucharadita de levadura seca'],
    ARRAY['Mezclar los ingredientes secos', 'Agregar el agua tibia y el aceite', 'Amasar durante 10 minutos', 'Dejar reposar 1 hora', 'Hornear a 180°C por 45 minutos']
  ),
  (
    'Muffins de Arándanos',
    'Sin azúcar y llenos de antioxidantes. El snack ideal para media tarde.',
    '/placeholder.svg?height=300&width=400',
    'Snacks',
    10,
    25,
    12,
    ARRAY['2 tazas de harina de avena', '1 taza de arándanos frescos', '2 huevos', '1/2 taza de miel', '1/4 taza de aceite de coco'],
    ARRAY['Precalentar el horno a 180°C', 'Mezclar ingredientes secos', 'Incorporar húmedos', 'Agregar arándanos', 'Hornear 25 minutos']
  ),
  (
    'Bowl de Quinoa y Vegetales',
    'Nutritivo y colorido. Perfecto para un almuerzo equilibrado que cuida tu tiroides.',
    '/placeholder.svg?height=300&width=400',
    'Almuerzos',
    15,
    20,
    2,
    ARRAY['1 taza de quinoa', '1 zanahoria rallada', '1 pepino en cubos', '1/2 aguacate', 'Semillas de sésamo', 'Salsa de tahini'],
    ARRAY['Cocinar la quinoa según instrucciones', 'Preparar los vegetales', 'Armar el bowl con todos los ingredientes', 'Agregar la salsa de tahini', 'Decorar con semillas de sésamo']
  ),
  (
    'Smoothie Verde Energizante',
    'Cargado de nutrientes para comenzar el día con energía y apoyar tu metabolismo.',
    '/placeholder.svg?height=300&width=400',
    'Bebidas',
    5,
    0,
    1,
    ARRAY['1 taza de espinacas', '1 banana congelada', '1/2 taza de leche de almendras', '1 cucharada de semillas de chía', '1 cucharadita de miel'],
    ARRAY['Agregar todos los ingredientes a la licuadora', 'Licuar hasta obtener consistencia suave', 'Servir inmediatamente']
  )
) AS t(title, description, image_url, category, prep_time, cook_time, servings, ingredients, instructions)
WHERE NOT EXISTS (SELECT 1 FROM recipes LIMIT 1);
