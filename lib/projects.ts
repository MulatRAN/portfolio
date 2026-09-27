// Type definitions for projects
export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  role: string;
  year: string;
  category: 'Électronique embarquée' | 'Développement web' | 'Conception analogique' | 'Systèmes mixtes';
  technologies: string[];
  image?: string;
  href?: string;
  featured?: boolean;
  status?: 'completed' | 'in-progress' | 'concept';
}

export const projects: Project[] = [
  {
    slug: 'arrosage-autonome',
    title: 'Système d\'arrosage autonome',
    description: 'Conception complète d\'un système d\'arrosage intelligent avec capteurs et gestion énergétique solaire.',
    longDescription: 'Projet de fin d\'année visant à créer un système d\'arrosage totalement autonome. Intégration de capteurs d\'humidité du sol, de température et de luminosité pour optimiser l\'irrigation. Gestion intelligente de l\'énergie via panneaux solaires et batterie tampon.',
    role: 'Conception hardware et software',
    year: '2025',
    category: 'Électronique embarquée',
    technologies: ['Arduino', 'C++', 'Capteurs analogiques', 'PCB Design', 'Gestion énergétique'],
    status: 'completed',
    featured: true,
  },
  {
    slug: 'interface-gestion-projet',
    title: 'Interface de gestion de projet d\'équipe',
    description: 'Application web moderne pour la coordination de projets techniques avec suivi temps réel.',
    longDescription: 'Développement d\'une plateforme collaborative pour faciliter la gestion de projets étudiants. Interface intuitive avec tableau de bord, gestion des tâches, partage de documents et notifications en temps réel.',
    role: 'Développeur Frontend & UI/UX',
    year: '2025',
    category: 'Développement web',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    status: 'completed',
    featured: true,
  },
  {
    slug: 'amplificateur-classe-d',
    title: 'Amplificateur audio classe D',
    description: 'Étude et réalisation d\'un amplificateur de puissance à haut rendement avec protection thermique.',
    longDescription: 'Projet académique de conception d\'un amplificateur de classe D pour application audio. Étude théorique complète, simulations sous SPICE, réalisation du PCB et tests de performances (THD, rendement, réponse en fréquence).',
    role: 'Conception et validation',
    year: '2024',
    category: 'Conception analogique',
    technologies: ['Analogique', 'LTSpice', 'KiCad', 'Analyse fréquentielle'],
    status: 'completed',
    featured: true,
  },
  {
    slug: 'station-meteo-iot',
    title: 'Station météo IoT',
    description: 'Station météorologique connectée avec transmission des données vers une interface web.',
    longDescription: 'Conception d\'une station météo autonome mesurant température, humidité, pression et qualité de l\'air. Transmission des données via WiFi vers un dashboard web pour visualisation et historique.',
    role: 'Développement full-stack',
    year: '2024',
    category: 'Systèmes mixtes',
    technologies: ['ESP32', 'C++', 'Next.js', 'API REST', 'Capteurs I2C'],
    status: 'in-progress',
    featured: false,
  },
  {
    slug: 'filtre-actif-ordre-3',
    title: 'Filtre actif d\'ordre 3',
    description: 'Conception et réalisation d\'un filtre passe-bas actif pour application audio.',
    longDescription: 'Projet de TP avancé : dimensionnement théorique, simulation et réalisation pratique d\'un filtre de Butterworth d\'ordre 3. Mesures et comparaison avec les spécifications.',
    role: 'Conception et tests',
    year: '2024',
    category: 'Conception analogique',
    technologies: ['Amplificateurs opérationnels', 'Filtrage', 'LTSpice', 'Oscilloscope'],
    status: 'completed',
    featured: false,
  },
];

// Helper functions
export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured);
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter(p => p.category === category);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export const categories: Project['category'][] = [
  'Électronique embarquée',
  'Développement web',
  'Conception analogique',
  'Systèmes mixtes',
];
