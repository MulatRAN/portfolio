/**
 * Compétences et catégories de compétences
 *
 * Ce fichier centralise toutes les compétences techniques et humaines
 * organisées par catégories.
 */

// Types
export interface SkillCategory {
  title: string;
  icon: 'electronics' | 'code' | 'tools' | 'design' | 'people' | 'methodology';
  skills: string[];
}

// Catégories de compétences
export const skillCategories: SkillCategory[] = [
  {
    title: 'Électronique & Circuits',
    icon: 'electronics',
    skills: [
      'Conception de circuits',
      'PCB Design (KiCad)',
      'Électronique analogique',
      'Électronique numérique',
      'Microcontrôleurs',
      'Gestion énergétique',
    ],
  },
  {
    title: 'Programmation & Logiciel',
    icon: 'code',
    skills: [
      'C / C++ (Embarqué)',
      'TypeScript / JavaScript',
      'React / Next.js',
      'Python (Automatisation)',
      'Git / GitHub',
      'Arduino / ESP32',
    ],
  },
  {
    title: 'Outils & Simulation',
    icon: 'tools',
    skills: [
      'MATLAB / Simulink',
      'LTspice (Simulation)',
      'Oscilloscope / Multimètre',
      'Analyseur logique',
      'Prototypage rapide',
      'Fer à souder / Station',
    ],
  },
  {
    title: 'Design & Interface',
    icon: 'design',
    skills: [
      'UI/UX pour systèmes',
      'Tailwind CSS',
      'Design responsive',
      'Figma / Wireframing',
      'Accessibilité (WCAG)',
      'Design systems',
    ],
  },
  {
    title: 'Compétences Humaines',
    icon: 'people',
    skills: [
      'Travail en équipe',
      'Communication technique',
      'Gestion de projet',
      'Résolution de problèmes',
      'Autonomie',
      'Curiosité / Veille techno',
    ],
  },
  {
    title: 'Méthodologie',
    icon: 'methodology',
    skills: [
      'Documentation technique',
      'Tests et validation',
      'Débogage systématique',
      'Versioning (Git)',
      'Revue de code',
      'Amélioration continue',
    ],
  },
];

// Compétences abrégées pour la page d'accueil (4 catégories principales)
export const homeSkillCategories: SkillCategory[] = [
  {
    title: 'Électronique & Systèmes',
    icon: 'electronics',
    skills: [
      'Conception de circuits',
      'PCB Design',
      'Microcontrôleurs',
      'Capteurs & Actionneurs',
      'Gestion énergétique',
      'Traitement du signal',
    ],
  },
  {
    title: 'Programmation & Logiciel',
    icon: 'code',
    skills: [
      'C / C++',
      'TypeScript',
      'React / Next.js',
      'Python',
      'Git',
      'Arduino / ESP32',
    ],
  },
  {
    title: 'Outils & Méthodologie',
    icon: 'tools',
    skills: [
      'KiCad / Altium',
      'MATLAB / Simulink',
      'Oscilloscope',
      'Multimètre',
      'Prototypage rapide',
      'Documentation technique',
    ],
  },
  {
    title: 'Soft Skills',
    icon: 'people',
    skills: [
      'Travail en équipe',
      'Résolution de problèmes',
      'Gestion de projet',
      'Communication technique',
      'Autonomie',
      'Curiosité',
    ],
  },
];

// Helper pour obtenir une catégorie par titre
export const getSkillCategoryByTitle = (title: string): SkillCategory | undefined => {
  return skillCategories.find(cat => cat.title === title);
};

// Helper pour obtenir toutes les compétences (flat list)
export const getAllSkills = (): string[] => {
  return skillCategories.flatMap(cat => cat.skills);
};
