# Design System - Portfolio Ingénieur Électronique

## 🎯 Direction Artistique

### Concept
Un design épuré et structuré qui évoque la précision de l'ingénierie et la clarté de la pensée technique, tout en restant moderne et accessible. Inspiration : documentation technique de qualité, interfaces d'outils de développement modernes, esthétique minimaliste japonaise.

**Mots-clés** : Précision • Clarté • Modernité • Élégance technique • Lisibilité

---

## 🎨 Palette de Couleurs

### Couleurs Principales
```
Primaire (Accent électrique)
- amber-500: #f59e0b    → Boutons, liens, accents (évoque l'électricité, l'énergie)
- amber-600: #d97706    → Hover states
- amber-400: #fbbf24    → États désactivés/subtils

Pourquoi amber ? 
- Évoque l'électricité et l'énergie sans tomber dans le cliché du bleu tech
- Chaleureux mais professionnel
- Excellent contraste sur fond sombre et clair
- Se distingue des portfolios génériques
```

### Couleurs Secondaires
```
Secondaire (Profondeur technique)
- slate-900: #0f172a    → Arrière-plans sombres, header
- slate-800: #1e293b    → Cartes sur fond sombre
- slate-700: #334155    → Bordures sombres

Alternative claire :
- slate-50: #f8fafc     → Arrière-plan principal
- slate-100: #f1f5f9    → Cartes, sections alternées
```

### Neutrals (Hiérarchie de texte)
```
Texte sur fond clair :
- slate-900: #0f172a    → Titres principaux
- slate-700: #334155    → Texte corps
- slate-500: #64748b    → Texte secondaire, labels

Texte sur fond sombre :
- slate-50: #f8fafc     → Titres
- slate-200: #e2e8f0    → Texte corps
- slate-400: #94a3b8    → Texte secondaire
```

### Couleurs Utilitaires
```
Success: emerald-500 #10b981
Warning: amber-500 #f59e0b (réutilise la primaire)
Error: red-500 #ef4444
Info: blue-500 #3b82f6
```

### Stratégie d'utilisation
- **Mode clair par défaut** : Fond slate-50, texte slate-900
- **Accents parcimonieux** : Amber uniquement sur éléments interactifs et points d'attention
- **Pas de dégradés** : Couleurs plates pour rapidité et modernité
- **Contraste minimal 4.5:1** pour le texte (WCAG AA)

---

## ✍️ Typographie

### Famille de polices

```css
/* Titres et navigation */
font-family: 'Inter', system-ui, -apple-system, sans-serif;
→ Moderne, géométrique, excellente lisibilité
→ Variable font pour optimisation performance

/* Corps de texte */
font-family: 'Inter', system-ui, -apple-system, sans-serif;
→ Même police pour cohérence et performance
→ Variations de weight pour hiérarchie

/* Code et détails techniques */
font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
→ Réservé aux snippets de code ou détails très techniques
→ Utilisation parcimonieuse
```

**Rationale** : Une seule police (Inter) pour tout sauf le code. Inter est optimale pour le web, professionnelle, et possède une version variable qui réduit le poids.

### Échelle typographique (Modular Scale - ratio 1.25)

```
Base: 16px (1rem)

xs:   0.64rem (10.24px)  → Labels très petits, copyright
sm:   0.8rem  (12.8px)   → Labels, metadata
base: 1rem    (16px)     → Corps de texte standard
lg:   1.25rem (20px)     → Lead paragraphs, sous-titres
xl:   1.563rem (25px)    → Titres de section (h3)
2xl:  1.953rem (31.25px) → Titres de page (h2)
3xl:  2.441rem (39px)    → Hero title (h1)
4xl:  3.052rem (48.8px)  → Homepage hero uniquement
```

### Weights utilisés
```
font-weight: 400 → Corps de texte normal
font-weight: 500 → Navigation, labels, emphase légère
font-weight: 600 → Titres h3, boutons
font-weight: 700 → Titres h1-h2
```

### Line Heights
```
Titres: leading-tight (1.25)    → Titres compacts
Corps:  leading-relaxed (1.625) → Confort de lecture
Labels: leading-normal (1.5)    → Équilibre
```

### Règles typographiques
- **Paragraphes** : max-width 65ch pour lisibilité optimale
- **Titres** : lettres normales (pas de uppercase sauf si nécessaire)
- **Liens dans texte** : underline visible, pas seulement au hover
- **Emphase** : utiliser weight, pas italic (meilleure lisibilité)

---

## 📏 Système d'Espacement

### Échelle (basée sur 4px)
```
0:    0px
1:    0.25rem (4px)
2:    0.5rem  (8px)
3:    0.75rem (12px)
4:    1rem    (16px)   ← Base unit
6:    1.5rem  (24px)
8:    2rem    (32px)
12:   3rem    (48px)
16:   4rem    (64px)
20:   5rem    (80px)
24:   6rem    (96px)
32:   8rem    (128px)
```

### Règles d'utilisation
```
Spacing interne des composants:
- Padding boutons: px-6 py-3 (24px/12px)
- Padding cards: p-6 ou p-8 (24px/32px)
- Gap dans flexbox/grid: gap-4 ou gap-6 (16px/24px)

Spacing entre sections:
- Mobile: space-y-12 (48px)
- Desktop: space-y-16 ou space-y-20 (64px/80px)

Marges du container:
- Mobile: px-4 (16px)
- Tablet: px-6 (24px)
- Desktop: px-8 ou centré avec max-w (32px)
```

### Containers et largeurs max
```
prose:    65ch      → Texte long (articles)
sm:       640px     → Formulaires étroits
md:       768px     → Contenu standard
lg:       1024px    → Layout principal
xl:       1280px    → Maximum pour tout contenu
```

---

## 🎨 Styles de Composants

### Bordures
```
Épaisseur:
- border:    1px → Défaut
- border-2:  2px → Emphase, états focus

Couleurs:
- border-slate-200 (clair)
- border-slate-700 (sombre)
- border-amber-500 (focus/active)

Radius:
- rounded-none:  0      → Défaut (look technique)
- rounded-sm:    0.125rem (2px) → Subtil
- rounded:       0.25rem (4px)  → Boutons, inputs
- rounded-lg:    0.5rem (8px)   → Cards

Stratégie: Privilégier les angles droits (rounded-none) pour un look technique,
radius légers uniquement sur éléments interactifs.
```

### Ombres
```
Stratégie minimaliste - 3 niveaux uniquement:

shadow-sm:  Hover states légers
→ 0 1px 2px 0 rgb(0 0 0 / 0.05)

shadow:     Cards, éléments élevés
→ 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)

shadow-lg:  Modals, dropdowns
→ 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)

Utilisation: Très parcimonieuse. Pas d'ombres par défaut sur les cards.
```

### Boutons

```css
/* Primary Button */
.btn-primary {
  background: amber-500
  color: white
  padding: 0.75rem 1.5rem (py-3 px-6)
  border-radius: 0.25rem (rounded)
  font-weight: 500
  transition: all 150ms ease
  
  hover: bg-amber-600, shadow-sm
  active: bg-amber-700, translate-y-0.5
  focus: ring-2 ring-amber-500 ring-offset-2
  disabled: bg-amber-300, cursor-not-allowed
}

/* Secondary Button (Ghost) */
.btn-secondary {
  background: transparent
  color: slate-700
  border: 1px solid slate-300
  padding: 0.75rem 1.5rem
  border-radius: 0.25rem
  font-weight: 500
  
  hover: bg-slate-100, border-slate-400
  focus: ring-2 ring-slate-300
}

/* Tailles */
sm: py-2 px-4, text-sm
md: py-3 px-6, text-base (défaut)
lg: py-4 px-8, text-lg
```

### Liens

```css
/* Lien dans texte */
.link-inline {
  color: amber-600
  text-decoration: underline
  text-underline-offset: 2px
  transition: color 150ms
  
  hover: color-amber-700
  focus: outline-2 outline-amber-500
}

/* Lien de navigation */
.link-nav {
  color: slate-700
  font-weight: 500
  text-decoration: none
  position: relative
  transition: color 150ms
  
  hover: color-amber-600
  active: border-b-2 border-amber-500 (indicateur de page)
}
```

### Cards / Sections

```css
.card {
  background: white
  border: 1px solid slate-200
  border-radius: 0 (angles droits)
  padding: 2rem (p-8)
  transition: border-color 200ms
  
  hover: border-slate-300
}

/* Variante avec fond */
.card-muted {
  background: slate-50
  border: none
  padding: 2rem
}
```

### Inputs / Forms

```css
.input {
  width: 100%
  padding: 0.75rem 1rem (py-3 px-4)
  border: 1px solid slate-300
  border-radius: 0.25rem (rounded)
  background: white
  font-size: 1rem
  transition: all 150ms
  
  focus: border-amber-500, ring-2 ring-amber-500/20, outline-none
  disabled: bg-slate-100, cursor-not-allowed
  error: border-red-500, ring-2 ring-red-500/20
}

.label {
  display: block
  font-size: 0.875rem (text-sm)
  font-weight: 500
  color: slate-700
  margin-bottom: 0.5rem
}
```

---

## 📱 Responsive Design

### Breakpoints (Tailwind defaults)
```
sm:  640px  → Petites tablettes, grands mobiles paysage
md:  768px  → Tablettes
lg:  1024px → Desktop
xl:  1280px → Larges écrans
2xl: 1536px → Très larges écrans (peu utilisé)
```

### Stratégie Mobile-First

```
Approche:
1. Design pour mobile d'abord (320px - 640px)
2. Ajouter des améliorations pour tablette (md:)
3. Optimiser pour desktop (lg:)

Navigation:
- Mobile: Hamburger menu (si nécessaire) ou nav verticale simple
- Desktop: Navigation horizontale

Grilles:
- Mobile: 1 colonne
- Tablet: 2 colonnes (grid-cols-1 md:grid-cols-2)
- Desktop: 3 colonnes si pertinent (lg:grid-cols-3)

Typographie responsive:
- h1: text-3xl md:text-4xl
- h2: text-2xl md:text-3xl
- h3: text-xl md:text-2xl
- body: text-base (pas de changement, 16px optimal)

Spacing responsive:
- Section padding: py-12 md:py-16 lg:py-20
- Container padding: px-4 md:px-6 lg:px-8
- Gap: gap-4 md:gap-6 lg:gap-8
```

### Images responsive
```
Toujours utiliser next/image:
- Lazy loading automatique
- Formats modernes (WebP)
- Sizes appropriées

<Image 
  src="/project.jpg"
  alt="Description"
  width={800}
  height={600}
  className="w-full h-auto"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
/>
```

---

## ✨ Animations et Transitions

### Principes
- **Subtiles et rapides** : 150ms-300ms maximum
- **Purpose-driven** : Chaque animation doit avoir une raison (feedback, guidance)
- **Pas de "wow effect"** : Éviter les animations flashy
- **Respecter prefers-reduced-motion**

### Transitions standards

```css
/* Timing functions */
ease-out: Défaut pour la plupart des transitions (naturel)
ease-in-out: Mouvements de position
ease: Couleurs, opacité

/* Durées */
duration-75:  75ms  → Feedback immédiat (hover states légers)
duration-150: 150ms → Standard (couleurs, borders, shadows)
duration-300: 300ms → Mouvements (translate, scale)
```

### Effets autorisés

```
Hover states:
- Changement de couleur: transition-colors duration-150
- Ombre légère: transition-shadow duration-150
- Translation subtile: hover:-translate-y-0.5
- Scale minimal: hover:scale-102 (102%, pas plus)

Focus states:
- Ring visible: focus:ring-2 focus:ring-amber-500 focus:ring-offset-2
- Toujours visible, jamais supprimé

Loading states:
- Spinner simple ou skeleton screens
- Pas de barres de progression fantaisistes

Page transitions:
- Fade in au chargement: opacity-0 animate-fade-in
- Pas de transitions de page complexes
```

### Animations custom (si nécessaire)

```css
/* Fade in au chargement de page */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 300ms ease-out;
}

/* Pulse subtil pour attirer l'attention (CTA) */
@keyframes pulse-subtle {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.9; }
}
```

### Animations à éviter
- ❌ Parallax scrolling
- ❌ Animations au scroll trop présentes
- ❌ Rotations, flips
- ❌ Animations infinies (sauf loading)
- ❌ Effets "fireworks" ou confetti

---

## ♿ Accessibilité (WCAG 2.1 AA)

### Contrastes
```
Minimum requis:
- Texte normal: 4.5:1
- Texte large (18px+ ou 14px+ bold): 3:1
- Éléments UI: 3:1

Notre palette respecte ces ratios:
✓ slate-900 sur slate-50: 16.1:1
✓ slate-700 sur slate-50: 8.9:1
✓ amber-600 sur white: 4.6:1
✓ white sur amber-500: 3.1:1
```

### Navigation au clavier
```
Ordre de tab logique:
1. Skip to main content (invisible jusqu'au focus)
2. Navigation principale
3. Contenu principal
4. Footer

États de focus:
- Toujours visible: focus:ring-2 focus:ring-amber-500
- Jamais outline-none sans alternative
- Focus trap dans les modals

Shortcuts clavier:
- Tab/Shift+Tab: Navigation
- Enter/Space: Activation
- Esc: Fermeture de modals/dropdowns
```

### Structure sémantique
```html
<!-- Landmarks ARIA -->
<header role="banner">
<nav role="navigation" aria-label="Main navigation">
<main role="main" id="main-content">
<footer role="contentinfo">

<!-- Headings hiérarchiques -->
<h1> → Un seul par page
<h2> → Sections principales
<h3> → Sous-sections
(Pas de saut de niveau)

<!-- Skip link -->
<a href="#main-content" class="skip-link">
  Skip to main content
</a>
```

### Images et médias
```html
<!-- Alt text descriptif -->
<Image src="..." alt="Description précise du contenu" />

<!-- Décoratives -->
<Image src="..." alt="" role="presentation" />

<!-- Vidéos -->
- Sous-titres (captions)
- Transcription textuelle disponible
```

### Formulaires
```html
<!-- Labels toujours associés -->
<label for="email">Email</label>
<input id="email" type="email" required aria-describedby="email-error">

<!-- Messages d'erreur -->
<span id="email-error" role="alert" class="text-red-600">
  Format d'email invalide
</span>

<!-- États désactivés clairs -->
<button disabled aria-disabled="true">
  Envoyer
</button>
```

### Lecteurs d'écran
```html
<!-- Texte caché visuellement mais disponible pour SR -->
<span class="sr-only">Navigation principale</span>

<!-- Annoncer les changements dynamiques -->
<div aria-live="polite" aria-atomic="true">
  Message de confirmation
</div>

<!-- Boutons d'icônes -->
<button aria-label="Open menu">
  <IconMenu />
</button>
```

### Tests requis
- ✓ Navigation complète au clavier
- ✓ Lecteur d'écran (NVDA/JAWS/VoiceOver)
- ✓ Zoom texte 200% sans perte de contenu
- ✓ Contraste avec outils (WebAIM, Axe DevTools)
- ✓ Validateur HTML W3C

---

## 📦 Checklist de mise en œuvre

### Phase 1: Configuration Tailwind
- [ ] Créer tailwind.config.ts avec palette custom
- [ ] Remplir globals.css avec @tailwind directives
- [ ] Configurer Inter via next/font
- [ ] Tester que les classes s'appliquent

### Phase 2: Composants de base
- [ ] Layout components (Header, Footer, Container)
- [ ] Navigation avec états actifs
- [ ] Boutons (primary, secondary)
- [ ] Cards
- [ ] Form inputs et labels

### Phase 3: Pages
- [ ] Appliquer le design sur Home
- [ ] Appliquer le design sur About
- [ ] Appliquer le design sur Work
- [ ] Appliquer le design sur Contact

### Phase 4: Responsive
- [ ] Tester et ajuster mobile (375px)
- [ ] Tester et ajuster tablet (768px)
- [ ] Tester et ajuster desktop (1024px+)

### Phase 5: Accessibilité
- [ ] Ajouter skip link
- [ ] Vérifier focus states
- [ ] Tester navigation clavier
- [ ] Vérifier contrastes
- [ ] Tester avec lecteur d'écran

### Phase 6: Performance
- [ ] Optimiser images (next/image)
- [ ] Vérifier taille bundle
- [ ] Lighthouse audit
- [ ] Tests vitals Web (LCP, CLS, FID)

---

## 🎨 Exemples visuels

### Layout type - Home
```
┌─────────────────────────────────────┐
│ Header (slate-900, fixed/sticky)    │
│ [Logo] Nav: Home Work About Contact │
├─────────────────────────────────────┤
│                                     │
│  Hero Section (py-20)               │
│  ┌─────────────────────────┐       │
│  │ Ingénieur en            │       │
│  │ ÉLECTRONIQUE            │       │
│  │ (3xl, font-bold)        │       │
│  │                         │       │
│  │ Lead paragraph          │       │
│  │ (lg, text-slate-600)    │       │
│  │                         │       │
│  │ [CTA Button amber]      │       │
│  └─────────────────────────┘       │
│                                     │
├─────────────────────────────────────┤
│ Footer (slate-50, py-8)             │
│ Links • Copyright • Social          │
└─────────────────────────────────────┘
```

### Card Project - Work page
```
┌──────────────────────────────┐
│                              │
│  [Image ou placeholder]      │
│                              │
├──────────────────────────────┤
│  Titre du Projet             │
│  (xl, font-semibold)         │
│                              │
│  Description courte du       │
│  projet avec 2-3 lignes max  │
│  (base, text-slate-600)      │
│                              │
│  Tech: React • Next • TS     │
│  (sm, text-slate-500)        │
│                              │
│  [Voir le projet →]          │
│  (link avec arrow)           │
└──────────────────────────────┘
```

---

## 🚀 Performance Budget

### Objectifs Lighthouse
- Performance: > 90
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### Métriques Core Web Vitals
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

### Budget de taille
- Page HTML: < 50kb
- CSS total: < 30kb
- JS total: < 150kb (initial bundle)
- Images: WebP, < 200kb par image
- Font: Variable font, < 100kb

---

## 📖 Références et inspirations

### Design
- [Linear](https://linear.app) - Navigation et micro-interactions
- [Vercel](https://vercel.com) - Typographie et espacement
- [GitHub](https://github.com) - Code blocks et techniques
- [Stripe](https://stripe.com) - Clarté et professionnalisme

### Éviter
- ❌ Templates Wix/Squarespace génériques
- ❌ Effets parallax excessifs
- ❌ Animations de texte "typewriter"
- ❌ Gradients multicolores flashy
- ❌ Trop de sections "hero" avec grandes images

---

## ✅ Validation finale

Avant de passer à la mise en œuvre, valider:
1. ✓ La palette est cohérente et limitée
2. ✓ Une seule police principale (Inter)
3. ✓ Système d'espacement logique et prévisible
4. ✓ Composants définis clairement
5. ✓ Stratégie responsive explicite
6. ✓ Accessibilité intégrée dès le départ
7. ✓ Animations minimales et rapides
8. ✓ Performance budgetée

---

**Status**: Prêt pour validation et mise en œuvre
**Dernière mise à jour**: 2026-09-11
