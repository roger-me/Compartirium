export interface Product {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  description: string;
  pedagogicalInfo: string;
  ageRange: string;
  stage: string;
  pricePerWeek: number;
  pricePerMonth: number;
  pricePerTerm: number;
  deposit: number;
  image: string;
  images: string[];
  available: boolean;
  stock: number;
  condition: 'nuevo' | 'excelente' | 'bueno';
  includes: string[];
}

export const categories = [
  { slug: 'libros', name: { ca: 'Llibres de text', es: 'Libros de texto' }, icon: 'book-open' },
  { slug: 'juegos', name: { ca: 'Jocs educatius', es: 'Juegos educativos' }, icon: 'puzzle-piece' },
  { slug: 'material', name: { ca: 'Material didàctic', es: 'Material didáctico' }, icon: 'cube' },
  { slug: 'mobiliario', name: { ca: 'Mobiliari', es: 'Mobiliario' }, icon: 'armchair' },
  { slug: 'dispositivos', name: { ca: 'Dispositius', es: 'Dispositivos' }, icon: 'device-tablet' },
  { slug: 'packs', name: { ca: 'Packs', es: 'Packs' }, icon: 'package' },
];

export const stages = [
  { slug: 'infantil', name: { ca: 'Infantil', es: 'Infantil' }, ageRange: { ca: '0-6 anys', es: '0-6 años' } },
  { slug: 'primaria', name: { ca: 'Primària', es: 'Primaria' }, ageRange: { ca: '6-12 anys', es: '6-12 años' } },
];

// Helper to get category name by language
export function getCategoryName(category: typeof categories[0], lang: 'ca' | 'es'): string {
  return category.name[lang];
}

// Helper to get stage name by language
export function getStageName(stage: typeof stages[0], lang: 'ca' | 'es'): string {
  return stage.name[lang];
}

export const products: Product[] = [
  // LIBROS
  {
    slug: 'pack-lectura-infantil-3-5',
    name: 'Pack Lectura Infantil 3-5 años',
    category: 'Libros de texto',
    categorySlug: 'libros',
    description: 'Colección de 10 libros ilustrados adaptados para primeros lectores. Incluye cuentos clásicos y modernos con ilustraciones a todo color.',
    pedagogicalInfo: 'Fomenta el hábito lector, desarrolla vocabulario y comprensión lectora. Ideal para lectura compartida con adultos.',
    ageRange: '3-5 años',
    stage: 'infantil',
    pricePerWeek: 8,
    pricePerMonth: 25,
    pricePerTerm: 60,
    deposit: 30,
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    ],
    available: true,
    stock: 12,
    condition: 'excelente',
    includes: ['10 libros ilustrados', 'Guía de lectura para familias', 'Bolsa de tela reutilizable'],
  },
  {
    slug: 'pack-lectura-primaria-1-2',
    name: 'Pack Lectura Primaria 1º-2º',
    category: 'Libros de texto',
    categorySlug: 'libros',
    description: 'Selección de 8 libros de lectura para primeros cursos de primaria. Historias con valores y aventuras adaptadas a su nivel.',
    pedagogicalInfo: 'Consolida la lectura autónoma, introduce estructuras narrativas más complejas y amplía vocabulario.',
    ageRange: '6-8 años',
    stage: 'primaria',
    pricePerWeek: 10,
    pricePerMonth: 30,
    pricePerTerm: 70,
    deposit: 35,
    image: 'https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=800',
    ],
    available: true,
    stock: 8,
    condition: 'bueno',
    includes: ['8 libros de lectura', 'Cuaderno de actividades', 'Marcapáginas'],
  },
  {
    slug: 'pack-lectura-primaria-3-4',
    name: 'Pack Lectura Primaria 3º-4º',
    category: 'Libros de texto',
    categorySlug: 'libros',
    description: 'Colección de 8 novelas cortas y libros de conocimiento para lectores con más autonomía.',
    pedagogicalInfo: 'Desarrolla el pensamiento crítico, introduce géneros literarios variados y fomenta la lectura por placer.',
    ageRange: '8-10 años',
    stage: 'primaria',
    pricePerWeek: 10,
    pricePerMonth: 30,
    pricePerTerm: 70,
    deposit: 35,
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800',
    ],
    available: true,
    stock: 6,
    condition: 'excelente',
    includes: ['8 libros variados', 'Guía de comprensión lectora'],
  },
  {
    slug: 'enciclopedia-naturaleza',
    name: 'Enciclopedia Ilustrada de la Naturaleza',
    category: 'Libros de texto',
    categorySlug: 'libros',
    description: 'Enciclopedia visual con más de 500 ilustraciones sobre fauna, flora, ecosistemas y fenómenos naturales.',
    pedagogicalInfo: 'Recurso de consulta para proyectos de ciencias naturales. Fomenta la curiosidad científica y el respeto por el medio ambiente.',
    ageRange: '6-12 años',
    stage: 'primaria',
    pricePerWeek: 6,
    pricePerMonth: 18,
    pricePerTerm: 45,
    deposit: 25,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800',
    ],
    available: true,
    stock: 4,
    condition: 'nuevo',
    includes: ['Enciclopedia tapa dura', 'Póster de ecosistemas'],
  },

  // JUEGOS EDUCATIVOS
  {
    slug: 'torre-montessori-formas',
    name: 'Torre Montessori de Formas',
    category: 'Juegos educativos',
    categorySlug: 'juegos',
    description: 'Torre de madera con piezas geométricas de diferentes colores y tamaños para encajar y apilar.',
    pedagogicalInfo: 'Desarrolla la motricidad fina, reconocimiento de formas, colores y tamaños. Introduce conceptos de secuencias y patrones.',
    ageRange: '2-5 años',
    stage: 'infantil',
    pricePerWeek: 7,
    pricePerMonth: 22,
    pricePerTerm: 50,
    deposit: 20,
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800',
    ],
    available: true,
    stock: 10,
    condition: 'excelente',
    includes: ['Base de madera', '15 piezas geométricas', 'Tarjetas de patrones'],
  },
  {
    slug: 'set-stem-robotica',
    name: 'Set STEM Robótica Básica',
    category: 'Juegos educativos',
    categorySlug: 'juegos',
    description: 'Kit de construcción con piezas para crear robots simples. Incluye motor y sensores básicos.',
    pedagogicalInfo: 'Introduce pensamiento computacional, causa-efecto, resolución de problemas y trabajo en equipo.',
    ageRange: '8-12 años',
    stage: 'primaria',
    pricePerWeek: 15,
    pricePerMonth: 45,
    pricePerTerm: 100,
    deposit: 50,
    image: 'https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=800',
    ],
    available: true,
    stock: 5,
    condition: 'nuevo',
    includes: ['150+ piezas de construcción', 'Motor', 'Sensor de distancia', 'Manual de proyectos'],
  },
  {
    slug: 'matematicas-manipulativas',
    name: 'Set Matemáticas Manipulativas',
    category: 'Juegos educativos',
    categorySlug: 'juegos',
    description: 'Colección de materiales para aprender matemáticas de forma tangible: regletas, bloques base 10, fracciones.',
    pedagogicalInfo: 'Facilita la comprensión de conceptos abstractos mediante manipulación. Cubre aritmética, fracciones y geometría básica.',
    ageRange: '5-10 años',
    stage: 'primaria',
    pricePerWeek: 10,
    pricePerMonth: 30,
    pricePerTerm: 70,
    deposit: 30,
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800',
    ],
    available: true,
    stock: 8,
    condition: 'bueno',
    includes: ['Regletas Cuisenaire', 'Bloques base 10', 'Círculos de fracciones', 'Guía didáctica'],
  },
  {
    slug: 'memory-animales-bilingue',
    name: 'Memory Animales Bilingüe',
    category: 'Juegos educativos',
    categorySlug: 'juegos',
    description: 'Juego de memoria con 48 cartas de animales. Cada animal aparece con su nombre en español e inglés.',
    pedagogicalInfo: 'Ejercita la memoria visual, introduce vocabulario en inglés y conocimiento de fauna mundial.',
    ageRange: '3-8 años',
    stage: 'infantil',
    pricePerWeek: 5,
    pricePerMonth: 15,
    pricePerTerm: 35,
    deposit: 15,
    image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800',
    ],
    available: true,
    stock: 15,
    condition: 'excelente',
    includes: ['48 cartas plastificadas', 'Caja de almacenamiento', 'Lista de vocabulario'],
  },
  {
    slug: 'puzzle-mapa-europa',
    name: 'Puzzle Mapa de Europa',
    category: 'Juegos educativos',
    categorySlug: 'juegos',
    description: 'Puzzle de 100 piezas con el mapa político de Europa. Cada país es una pieza independiente.',
    pedagogicalInfo: 'Enseña geografía europea, capitales y banderas. Desarrolla orientación espacial y paciencia.',
    ageRange: '6-12 años',
    stage: 'primaria',
    pricePerWeek: 6,
    pricePerMonth: 18,
    pricePerTerm: 40,
    deposit: 20,
    image: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=800',
    ],
    available: false,
    stock: 0,
    condition: 'bueno',
    includes: ['Puzzle 100 piezas', 'Póster con solución', 'Fichas de capitales'],
  },

  // MATERIAL DIDÁCTICO
  {
    slug: 'globo-terraqueo-interactivo',
    name: 'Globo Terráqueo Interactivo',
    category: 'Material didáctico',
    categorySlug: 'material',
    description: 'Globo terráqueo de 30cm con información geográfica y política. Incluye lupa y libro de actividades.',
    pedagogicalInfo: 'Recurso fundamental para geografía. Visualiza conceptos como continentes, océanos, husos horarios y climas.',
    ageRange: '6-12 años',
    stage: 'primaria',
    pricePerWeek: 12,
    pricePerMonth: 35,
    pricePerTerm: 80,
    deposit: 40,
    image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=800',
    ],
    available: true,
    stock: 3,
    condition: 'excelente',
    includes: ['Globo 30cm con base', 'Lupa', 'Libro de actividades', 'Pegatinas de países visitados'],
  },
  {
    slug: 'set-laboratorio-ciencias',
    name: 'Set Laboratorio de Ciencias',
    category: 'Material didáctico',
    categorySlug: 'material',
    description: 'Kit completo para experimentos de ciencias: microscopio, tubos de ensayo, pipetas, reactivos seguros.',
    pedagogicalInfo: 'Introduce el método científico, observación sistemática y registro de experimentos. Cubre biología, química y física básica.',
    ageRange: '8-12 años',
    stage: 'primaria',
    pricePerWeek: 18,
    pricePerMonth: 50,
    pricePerTerm: 120,
    deposit: 60,
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800',
    ],
    available: true,
    stock: 4,
    condition: 'nuevo',
    includes: ['Microscopio 400x', '20 tubos de ensayo', 'Pipetas', 'Reactivos seguros', '30 experimentos guiados'],
  },
  {
    slug: 'laminas-anatomia',
    name: 'Láminas Anatomía Humana',
    category: 'Material didáctico',
    categorySlug: 'material',
    description: 'Set de 10 láminas plastificadas tamaño A2 con sistemas del cuerpo humano: esqueleto, muscular, digestivo, etc.',
    pedagogicalInfo: 'Material visual para el estudio del cuerpo humano. Facilita la comprensión de sistemas y órganos.',
    ageRange: '8-12 años',
    stage: 'primaria',
    pricePerWeek: 8,
    pricePerMonth: 24,
    pricePerTerm: 55,
    deposit: 25,
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800',
    ],
    available: true,
    stock: 6,
    condition: 'excelente',
    includes: ['10 láminas A2 plastificadas', 'Tubo de transporte', 'Guía del profesor'],
  },
  {
    slug: 'abacos-madera-set5',
    name: 'Ábacos de Madera (Set de 5)',
    category: 'Material didáctico',
    categorySlug: 'material',
    description: 'Set de 5 ábacos de madera con 10 filas y 10 cuentas por fila en diferentes colores.',
    pedagogicalInfo: 'Herramienta clásica para cálculo mental, comprensión del sistema decimal y operaciones básicas.',
    ageRange: '4-8 años',
    stage: 'infantil',
    pricePerWeek: 10,
    pricePerMonth: 28,
    pricePerTerm: 65,
    deposit: 30,
    image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=800',
    ],
    available: true,
    stock: 4,
    condition: 'bueno',
    includes: ['5 ábacos de madera', 'Fichas de actividades'],
  },

  // MOBILIARIO
  {
    slug: 'mesa-infantil-madera',
    name: 'Mesa Infantil de Madera',
    category: 'Mobiliario',
    categorySlug: 'mobiliario',
    description: 'Mesa de madera maciza para niños, altura adaptada (50cm). Superficie fácil de limpiar.',
    pedagogicalInfo: 'Mobiliario adaptado a la ergonomía infantil. Fomenta la autonomía y el trabajo independiente.',
    ageRange: '3-6 años',
    stage: 'infantil',
    pricePerWeek: 20,
    pricePerMonth: 55,
    pricePerTerm: 130,
    deposit: 80,
    image: 'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?w=800',
    ],
    available: true,
    stock: 3,
    condition: 'excelente',
    includes: ['Mesa 60x60x50cm', 'Fieltros protectores'],
  },
  {
    slug: 'sillas-infantiles-set4',
    name: 'Sillas Infantiles (Set de 4)',
    category: 'Mobiliario',
    categorySlug: 'mobiliario',
    description: 'Set de 4 sillas de madera con asiento ergonómico para niños. Altura del asiento: 30cm.',
    pedagogicalInfo: 'Sillas diseñadas para la postura correcta de los más pequeños durante actividades de mesa.',
    ageRange: '3-6 años',
    stage: 'infantil',
    pricePerWeek: 25,
    pricePerMonth: 70,
    pricePerTerm: 160,
    deposit: 100,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800',
    ],
    available: true,
    stock: 2,
    condition: 'bueno',
    includes: ['4 sillas de madera', 'Fieltros protectores'],
  },
  {
    slug: 'estanteria-montessori',
    name: 'Estantería Montessori',
    category: 'Mobiliario',
    categorySlug: 'mobiliario',
    description: 'Estantería baja de madera con 4 estantes accesibles para niños. Diseño Montessori para fomentar autonomía.',
    pedagogicalInfo: 'Permite que el niño acceda y guarde materiales de forma independiente. Fundamental en ambientes Montessori.',
    ageRange: '2-8 años',
    stage: 'infantil',
    pricePerWeek: 30,
    pricePerMonth: 85,
    pricePerTerm: 200,
    deposit: 120,
    image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800',
    ],
    available: false,
    stock: 0,
    condition: 'excelente',
    includes: ['Estantería 120x80x35cm', 'Kit de montaje', 'Anclaje a pared'],
  },

  // DISPOSITIVOS
  {
    slug: 'tablet-educativa',
    name: 'Tablet Educativa 10"',
    category: 'Dispositivos',
    categorySlug: 'dispositivos',
    description: 'Tablet de 10 pulgadas con apps educativas preinstaladas, funda resistente y control parental.',
    pedagogicalInfo: 'Herramienta digital para apps educativas, lectura digital y proyectos multimedia.',
    ageRange: '6-12 años',
    stage: 'primaria',
    pricePerWeek: 20,
    pricePerMonth: 55,
    pricePerTerm: 130,
    deposit: 100,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800',
    ],
    available: true,
    stock: 8,
    condition: 'nuevo',
    includes: ['Tablet 10"', 'Funda resistente', 'Cargador', 'Apps educativas preinstaladas'],
  },
  {
    slug: 'pack-tablets-aula',
    name: 'Pack 5 Tablets para Aula',
    category: 'Dispositivos',
    categorySlug: 'dispositivos',
    description: 'Pack de 5 tablets educativas con maletín de carga y gestión centralizada de dispositivos.',
    pedagogicalInfo: 'Solución completa para integrar tecnología en el aula. Permite trabajo en grupo y proyectos digitales.',
    ageRange: '6-12 años',
    stage: 'primaria',
    pricePerWeek: 75,
    pricePerMonth: 200,
    pricePerTerm: 480,
    deposit: 400,
    image: 'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=800',
    ],
    available: true,
    stock: 2,
    condition: 'excelente',
    includes: ['5 tablets 10"', 'Maletín de carga', 'MDM configurado', 'Apps educativas'],
  },

  // PACKS
  {
    slug: 'pack-aula-infantil',
    name: 'Pack Aula Infantil Completo',
    category: 'Packs',
    categorySlug: 'packs',
    description: 'Todo lo necesario para equipar un rincón de aprendizaje: mesa, 4 sillas, estantería, juegos Montessori y libros.',
    pedagogicalInfo: 'Solución integral para crear un ambiente de aprendizaje Montessori en casa o en el aula.',
    ageRange: '3-6 años',
    stage: 'infantil',
    pricePerWeek: 95,
    pricePerMonth: 260,
    pricePerTerm: 600,
    deposit: 300,
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800',
    ],
    available: true,
    stock: 1,
    condition: 'excelente',
    includes: [
      'Mesa infantil',
      '4 sillas',
      'Estantería Montessori',
      'Torre de formas',
      'Memory bilingüe',
      'Pack lectura infantil',
      'Ábacos (set 5)',
    ],
  },
  {
    slug: 'pack-stem-primaria',
    name: 'Pack STEM Primaria',
    category: 'Packs',
    categorySlug: 'packs',
    description: 'Kit completo de ciencia y tecnología: laboratorio, robótica, matemáticas manipulativas y globo terráqueo.',
    pedagogicalInfo: 'Cubre las áreas STEM con materiales prácticos. Ideal para proyectos interdisciplinares.',
    ageRange: '8-12 años',
    stage: 'primaria',
    pricePerWeek: 50,
    pricePerMonth: 140,
    pricePerTerm: 320,
    deposit: 180,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800',
    ],
    available: true,
    stock: 3,
    condition: 'nuevo',
    includes: [
      'Set laboratorio ciencias',
      'Kit robótica básica',
      'Matemáticas manipulativas',
      'Globo terráqueo',
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(p => p.categorySlug === categorySlug);
}

export function getProductsByStage(stage: string): Product[] {
  return products.filter(p => p.stage === stage);
}

export function getAvailableProducts(): Product[] {
  return products.filter(p => p.available);
}
