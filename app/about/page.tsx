import type { Metadata } from 'next';
import { PageSection } from '@/components/layout';
import { SectionHeading, LinkButton, SkillCategory } from '@/components/ui';
import { siteMetadata, getFullTitle } from '@/lib/site';
import { aboutContent, warnings } from '@/lib/content';
import { skillCategories } from '@/lib/skills';

export const metadata: Metadata = {
  title: `À propos - ${getFullTitle()}`,
  description: `${siteMetadata.title} passionné par la conception de systèmes complets. Découvrez mon parcours, mes compétences et ma façon de travailler.`,
  keywords: ['ingénieur électronique', 'parcours', 'compétences', 'conception systèmes', 'développement'],
  openGraph: {
    title: `À propos - ${siteMetadata.name}`,
    description: `Parcours et compétences d'un ${siteMetadata.title}`,
    type: 'profile',
  },
};

export default function About() {
  return (
    <>
      {/* Hero - Introduction personnelle */}
      <PageSection className="bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <SectionHeading level={1}>
              {aboutContent.hero.title}
            </SectionHeading>
            <p className="text-lg text-slate-600 mt-4">
              {aboutContent.hero.subtitle}
            </p>
          </div>

          <div className="prose prose-slate prose-lg max-w-none">
            <div className="bg-white border border-slate-200 p-8 md:p-10 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 mt-0">{aboutContent.intro.whoIAm}</h2>
              <p className="text-slate-700 leading-relaxed mb-6">
                {aboutContent.intro.whoIAmText}
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">{aboutContent.intro.whatIDo}</h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                {aboutContent.intro.whatIDoText}
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">{aboutContent.intro.interests}</h3>
              <ul className="space-y-2 text-slate-700">
                {aboutContent.intro.interestsList.map((interest, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-amber-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Mon approche */}
      <PageSection className="bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeading level={2} className="text-center mb-12">
            {aboutContent.approach.title}
          </SectionHeading>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Comment je travaille */}
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {aboutContent.approach.work.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {aboutContent.approach.work.description}
              </p>
            </div>

            {/* Résolution de problèmes */}
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {aboutContent.approach.problemSolving.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {aboutContent.approach.problemSolving.description}
              </p>
            </div>

            {/* Ce qui me différencie */}
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {aboutContent.approach.difference.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {aboutContent.approach.difference.description}
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Compétences */}
      <PageSection className="bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <SectionHeading level={2} className="text-center mb-4">
            {aboutContent.skills.title}
          </SectionHeading>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            {aboutContent.skills.subtitle}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <SkillCategory
                key={category.title}
                title={category.title}
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {category.icon === 'electronics' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    )}
                    {category.icon === 'code' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    )}
                    {category.icon === 'tools' && (
                      <>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </>
                    )}
                    {category.icon === 'design' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    )}
                    {category.icon === 'people' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    )}
                    {category.icon === 'methodology' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    )}
                  </svg>
                }
                skills={category.skills}
              />
            ))}
          </div>
        </div>
      </PageSection>

      {/* Parcours / Timeline */}
      <PageSection className="bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionHeading level={2} className="text-center mb-4">
            Mon parcours
          </SectionHeading>
          <p className="text-center text-slate-600 mb-12">
            Les étapes clés de mon parcours académique et professionnel
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-amber-200" aria-hidden="true" />

            {/* Timeline items */}
            <div className="space-y-12">
              {/* Item 1 - Current */}
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center z-10 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="flex-grow bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                      [ANNÉE] - Présent
                    </span>
                    <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                      En cours
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Master 1 Électronique
                  </h3>
                  <p className="text-slate-600 mb-3">
                    <strong className="text-amber-600">[NOM DE L&apos;UNIVERSITÉ / ÉCOLE]</strong>
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <strong className="text-amber-600">[PLACEHOLDER]</strong> Spécialisation en
                    systèmes embarqués et conception de circuits. Projets académiques incluant
                    [décrire vos projets principaux].
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-slate-400 rounded-full flex items-center justify-center z-10 shadow">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-grow bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-slate-200 text-slate-700 text-xs font-semibold rounded-full">
                      [ANNÉE] - [ANNÉE]
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    [EXPÉRIENCE / STAGE / PROJET]
                  </h3>
                  <p className="text-slate-600 mb-3">
                    <strong className="text-amber-600">[NOM DE L&apos;ENTREPRISE / ORGANISATION]</strong>
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <strong className="text-amber-600">[PLACEHOLDER]</strong> Description de l&apos;expérience,
                    des responsabilités et des réalisations clés. Technologies utilisées : [liste].
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-slate-300 rounded-full flex items-center justify-center z-10 shadow">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="flex-grow bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-slate-200 text-slate-700 text-xs font-semibold rounded-full">
                      [ANNÉE] - [ANNÉE]
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    [DIPLÔME / FORMATION PRÉCÉDENTE]
                  </h3>
                  <p className="text-slate-600 mb-3">
                    <strong className="text-amber-600">[NOM DE L&apos;ÉTABLISSEMENT]</strong>
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    <strong className="text-amber-600">[PLACEHOLDER]</strong> Formation fondamentale
                    en [domaine]. Projets marquants : [liste des projets ou réalisations].
                  </p>
                </div>
              </div>

              {/* Add more timeline items as needed */}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-slate-500 italic">
              ⚠️ Les dates et expériences ci-dessus sont des <strong>placeholders</strong> à personnaliser
            </p>
          </div>
        </div>
      </PageSection>

      {/* Valeurs professionnelles */}
      <PageSection className="bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <SectionHeading level={2} className="text-center mb-4">
            Mes valeurs professionnelles
          </SectionHeading>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Les principes qui guident ma façon de travailler et de collaborer
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Clarté */}
            <div className="bg-white p-6 rounded-lg border-2 border-slate-200 hover:border-amber-500 transition-colors">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Clarté</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Code lisible, documentation précise, communication transparente. La clarté
                évite les malentendus et facilite la collaboration.
              </p>
            </div>

            {/* Collaboration */}
            <div className="bg-white p-6 rounded-lg border-2 border-slate-200 hover:border-amber-500 transition-colors">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Collaboration</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Les meilleurs projets naissent du travail d&apos;équipe. J&apos;aime partager
                mes connaissances et apprendre des autres.
              </p>
            </div>

            {/* Qualité */}
            <div className="bg-white p-6 rounded-lg border-2 border-slate-200 hover:border-amber-500 transition-colors">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Qualité</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tests rigoureux, validation complète, attention aux détails. Un système
                fiable vaut mieux qu&apos;un système rapide mais fragile.
              </p>
            </div>

            {/* Apprentissage continu */}
            <div className="bg-white p-6 rounded-lg border-2 border-slate-200 hover:border-amber-500 transition-colors">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Apprentissage continu</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Technologies évolutives, nouveaux outils, nouvelles méthodes. Je reste
                curieux et à l&apos;écoute des innovations du domaine.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* CTA Final */}
      <PageSection className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Travaillons ensemble
          </h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Vous avez un projet en tête ? Besoin d&apos;expertise sur un système embarqué ou
            d&apos;un développement logiciel ? Je serais ravi d&apos;échanger avec vous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LinkButton href="/work" size="lg" variant="secondary">
              Voir mes projets
            </LinkButton>
            <LinkButton href="/contact" size="lg">
              Me contacter
            </LinkButton>
          </div>
        </div>
      </PageSection>

      {/* Note about placeholders */}
      <PageSection className="bg-amber-50 border-t border-amber-200">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <h3 className="font-semibold text-amber-900 mb-2">Contenu à personnaliser</h3>
              <p className="text-sm text-amber-800 leading-relaxed">
                Les sections marquées <strong>[PLACEHOLDER]</strong> contiennent des exemples
                génériques à remplacer par vos vraies informations : parcours, expériences,
                dates et réalisations personnelles. Les valeurs et l&apos;approche peuvent
                également être adaptées à votre personnalité professionnelle.
              </p>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
