/**
 * Informations personnelles et métadonnées du site
 *
 * Ce fichier centralise toutes les informations personnelles
 * pour faciliter la maintenance et éviter la duplication.
 */

// Types
export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'linkedin' | 'email' | 'twitter' | 'website';
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  availability: string;
}

export interface SiteMetadata {
  name: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  bio: string;
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
  seo: {
    keywords: string[];
    ogImage?: string;
  };
}

// Données du site
export const siteMetadata: SiteMetadata = {
  // Informations personnelles de base
  name: '[VOTRE NOM COMPLET]',
  title: 'Ingénieur en électronique',

  // Descriptions
  shortDescription: 'Je conçois des systèmes électroniques de bout en bout : du circuit imprimé aux interfaces logicielles qui les pilotent.',

  longDescription: 'Ingénieur en électronique spécialisé dans la conception de circuits et le développement logiciel. De la modélisation de systèmes embarqués aux interfaces web modernes.',

  bio: `Actuellement en Master 1 Électronique, je développe une vision complète des systèmes techniques : de la conception de circuits imprimés à l'architecture logicielle qui les exploite.`,

  // Contact
  contactInfo: {
    email: '[VOTRE-EMAIL@example.com]',
    phone: '[OPTIONNEL: +33 X XX XX XX XX]',
    location: '[OPTIONNEL: Ville, Pays]',
    availability: 'Disponible pour stages et projets',
  },

  // Réseaux sociaux
  socialLinks: [
    {
      name: 'GitHub',
      url: '[https://github.com/VOTRE-USERNAME]',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      url: '[https://www.linkedin.com/in/VOTRE-PROFIL]',
      icon: 'linkedin',
    },
    {
      name: 'Email',
      url: '[mailto:VOTRE-EMAIL@example.com]',
      icon: 'email',
    },
  ],

  // SEO
  seo: {
    keywords: [
      'ingénieur électronique',
      'conception circuits',
      'développement logiciel',
      'systèmes embarqués',
      'Next.js',
      'TypeScript',
      'électronique embarquée',
      'PCB Design',
    ],
    ogImage: '/og-image.png', // Optionnel
  },
};

// Helper pour obtenir un lien social par type
export const getSocialLink = (icon: SocialLink['icon']): SocialLink | undefined => {
  return siteMetadata.socialLinks.find(link => link.icon === icon);
};

// Helper pour obtenir l'email
export const getEmail = (): string => {
  return siteMetadata.contactInfo.email;
};

// Helper pour obtenir le nom complet du site (nom + titre)
export const getFullTitle = (): string => {
  return `${siteMetadata.name} | ${siteMetadata.title}`;
};
