/**
 * Contenus textuels du site
 *
 * Ce fichier centralise tous les textes, titres, descriptions et labels
 * pour faciliter la traduction et la maintenance.
 */

// Types
export interface PageContent {
  title: string;
  description: string;
}

export interface CTAContent {
  title: string;
  description: string;
  primaryButton: string;
  secondaryButton?: string;
}

// Navigation
export const navigation = {
  home: 'Accueil',
  about: 'À propos',
  work: 'Projets',
  contact: 'Contact',
};

// Page d'accueil
export const homeContent = {
  hero: {
    badge: 'Disponible pour stages et projets',
    title: 'Ingénieur en',
    titleHighlight: 'électronique',
    description: 'Je conçois des systèmes électroniques de bout en bout : du circuit imprimé aux interfaces logicielles qui les pilotent. Une approche complète pour des solutions cohérentes et fiables.',
    primaryCta: 'Découvrir mes projets',
    secondaryCta: 'Me contacter',
  },
  expertise: {
    title: 'Une double expertise',
    description: 'Actuellement en Master 1 Électronique, je développe une vision complète des systèmes techniques : de la conception de circuits imprimés à l\'architecture logicielle qui les exploite.',
    hardware: {
      title: 'Hardware',
      description: 'Conception de circuits, prototypage, gestion énergétique, capteurs et actionneurs.',
    },
    software: {
      title: 'Software',
      description: 'Développement web moderne, interfaces utilisateur, systèmes embarqués.',
    },
    cta: 'En savoir plus sur mon parcours',
  },
  projects: {
    title: 'Projets sélectionnés',
    cta: 'Voir tous les projets',
  },
  skills: {
    title: 'Compétences techniques',
  },
  finalCta: {
    title: 'Un projet en tête ?',
    description: 'Que vous ayez besoin d\'aide sur un projet électronique, d\'un développement logiciel ou d\'une expertise complète sur un système, je serais ravi d\'en discuter avec vous.',
    primaryButton: 'Discutons de votre projet',
    secondaryButton: 'Email direct',
  },
};

// Page À propos
export const aboutContent = {
  hero: {
    title: 'À propos de moi',
    subtitle: 'Ingénieur en électronique avec une vision complète des systèmes techniques',
  },
  intro: {
    whoIAm: 'Qui je suis',
    whoIAmText: '[VOTRE NOM], actuellement en Master 1 Électronique. Passionné par la conception de systèmes complets, je m\'intéresse autant aux circuits imprimés qu\'aux logiciels qui les pilotent.',
    whatIDo: 'Ce que je fais',
    whatIDoText: 'Je conçois des systèmes électroniques embarqués en combinant hardware et software. De la modélisation théorique au prototype fonctionnel, je prends en charge toutes les étapes du développement.',
    interests: 'Les projets qui m\'intéressent',
    interestsList: [
      'Systèmes embarqués autonomes et objets connectés',
      'Interfaces de contrôle et tableaux de bord interactifs',
      'Conception analogique et traitement du signal',
      'Prototypage rapide et validation de concepts',
    ],
  },
  approach: {
    title: 'Mon approche',
    work: {
      title: 'Comment je travaille',
      description: '[PLACEHOLDER] Je privilégie une approche méthodique : analyse du besoin, conception itérative, tests rigoureux et documentation claire. Chaque étape est pensée pour garantir la fiabilité du système final.',
    },
    problemSolving: {
      title: 'Résolution de problèmes',
      description: '[PLACEHOLDER] Face à un problème technique, je combine analyse théorique et expérimentation pratique. J\'aime comprendre la cause racine plutôt que d\'appliquer des solutions de surface.',
    },
    difference: {
      title: 'Ce qui me différencie',
      description: '[PLACEHOLDER] Ma double compétence hardware/software me permet de concevoir des systèmes cohérents de bout en bout, en optimisant à la fois les circuits et les interfaces utilisateur.',
    },
  },
  skills: {
    title: 'Compétences',
    subtitle: 'Un ensemble de compétences techniques et humaines pour mener à bien des projets complexes',
  },
  timeline: {
    title: 'Mon parcours',
    subtitle: 'Les étapes clés de mon parcours académique et professionnel',
  },
  values: {
    title: 'Mes valeurs professionnelles',
    subtitle: 'Les principes qui guident ma façon de travailler et de collaborer',
    clarity: {
      title: 'Clarté',
      description: 'Code lisible, documentation précise, communication transparente. La clarté évite les malentendus et facilite la collaboration.',
    },
    collaboration: {
      title: 'Collaboration',
      description: 'Les meilleurs projets naissent du travail d\'équipe. J\'aime partager mes connaissances et apprendre des autres.',
    },
    quality: {
      title: 'Qualité',
      description: 'Tests rigoureux, validation complète, attention aux détails. Un système fiable vaut mieux qu\'un système rapide mais fragile.',
    },
    learning: {
      title: 'Apprentissage continu',
      description: 'Technologies évolutives, nouveaux outils, nouvelles méthodes. Je reste curieux et à l\'écoute des innovations du domaine.',
    },
  },
  cta: {
    title: 'Travaillons ensemble',
    description: 'Vous avez un projet en tête ? Besoin d\'expertise sur un système embarqué ou d\'un développement logiciel ? Je serais ravi d\'échanger avec vous.',
    primaryButton: 'Me contacter',
    secondaryButton: 'Voir mes projets',
  },
};

// Page Projets
export const workContent = {
  hero: {
    title: 'Mes projets',
    description: 'Une sélection de projets académiques et personnels illustrant mes compétences en conception électronique, systèmes embarqués et développement logiciel.',
  },
  filter: {
    all: 'Tous les projets',
  },
  empty: {
    title: 'Aucun projet dans cette catégorie',
    description: 'Essayez une autre catégorie',
  },
  counter: {
    total: (count: number) => `${count} projet${count > 1 ? 's' : ''} au total`,
    filtered: (current: number, total: number) => `${current} projet${current > 1 ? 's' : ''} sur ${total}`,
  },
  cta: {
    title: 'Intéressé par mes projets ?',
    description: 'Je suis toujours ouvert à discuter de nouveaux projets, de collaborations ou de partager mon expérience sur ces réalisations.',
    primaryButton: 'Discutons ensemble',
    secondaryButton: 'En savoir plus sur moi',
  },
};

// Page Contact
export const contactContent = {
  hero: {
    title: 'Prenons contact',
    description: 'Vous avez un projet en tête, une question technique ou une opportunité de collaboration ? Je serais ravi d\'échanger avec vous.',
  },
  openTo: {
    title: 'Je suis ouvert à',
    internships: {
      title: 'Stages & Alternances',
      description: 'Opportunités en électronique embarquée ou développement logiciel',
    },
    projects: {
      title: 'Projets Techniques',
      description: 'Collaborations sur des systèmes embarqués ou applications web',
    },
    discussions: {
      title: 'Échanges Techniques',
      description: 'Questions, conseils ou discussions sur l\'électronique',
    },
  },
  direct: {
    title: 'Contactez-moi directement',
    email: {
      title: 'Email',
      note: 'Réponse sous 24-48h en général',
    },
    social: {
      title: 'Réseaux professionnels',
    },
  },
  form: {
    title: 'Ou utilisez le formulaire',
    description: 'Remplissez les champs ci-dessous et je vous répondrai rapidement',
    fields: {
      name: {
        label: 'Nom',
        placeholder: 'Votre nom',
        required: true,
      },
      email: {
        label: 'Email',
        placeholder: 'votre.email@exemple.com',
        required: true,
      },
      subject: {
        label: 'Sujet',
        placeholder: 'Sujet de votre message',
        required: true,
      },
      message: {
        label: 'Message',
        placeholder: 'Votre message...',
        required: true,
      },
    },
    submit: 'Envoyer le message',
    submitting: 'Envoi en cours...',
    requiredNote: 'Tous les champs marqués d\'un * sont obligatoires',
    success: {
      title: 'Message envoyé !',
      description: 'Merci pour votre message. Je vous répondrai dans les plus brefs délais.',
    },
    error: {
      title: 'Erreur d\'envoi',
      description: 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer ou me contacter directement par email.',
    },
    validation: {
      nameRequired: 'Le nom est requis',
      nameTooShort: 'Le nom doit contenir au moins 2 caractères',
      emailRequired: 'L\'email est requis',
      emailInvalid: 'L\'email n\'est pas valide',
      subjectRequired: 'Le sujet est requis',
      subjectTooShort: 'Le sujet doit contenir au moins 3 caractères',
      messageRequired: 'Le message est requis',
      messageTooShort: 'Le message doit contenir au moins 10 caractères',
    },
  },
};

// Placeholders et warnings
export const warnings = {
  projectsPlaceholder: {
    title: 'Note sur les contenus',
    description: 'Les descriptions de projets sont actuellement des placeholders destinés à illustrer la structure. Les images, liens et détails complets seront ajoutés progressivement avec les vrais contenus et visuels des projets réalisés.',
  },
  aboutPlaceholder: {
    title: 'Contenu à personnaliser',
    description: 'Les sections marquées [PLACEHOLDER] contiennent des exemples génériques à remplacer par vos vraies informations : parcours, expériences, dates et réalisations personnelles. Les valeurs et l\'approche peuvent également être adaptées à votre personnalité professionnelle.',
  },
  contactPlaceholder: {
    title: 'Informations à personnaliser',
    description: 'Les liens email et réseaux sociaux sont actuellement des placeholders. Remplacez-les par vos vraies coordonnées. Le formulaire nécessite également la configuration d\'un service d\'envoi d\'emails (voir l\'encart bleu sous le formulaire).',
  },
  apiIntegration: {
    title: 'Configuration requise',
    description: 'Ce formulaire est prêt à être connecté à votre service d\'envoi d\'emails. Pour le rendre fonctionnel, vous devez :',
    steps: [
      'Créer un endpoint API (ex: /api/contact)',
      'Configurer un service d\'envoi (Resend, SendGrid, Nodemailer, etc.)',
      'Remplacer le code de simulation dans handleSubmit',
    ],
  },
};

// Footer
export const footerContent = {
  copyright: (year: number, name: string) => `© ${year} ${name}. Tous droits réservés.`,
  builtWith: 'Conçu avec Next.js & Tailwind CSS',
};

// Accessibilité
export const a11y = {
  skipToContent: 'Aller au contenu principal',
  openMenu: 'Ouvrir le menu',
  closeMenu: 'Fermer le menu',
  required: 'requis',
  loading: 'Chargement...',
};
