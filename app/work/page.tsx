import type { Metadata } from 'next';
import { PageSection } from '@/components/layout';
import { SectionHeading, ProjectGrid, LinkButton } from '@/components/ui';
import { projects, categories } from '@/lib/projects';
import { siteMetadata, getFullTitle } from '@/lib/site';
import { workContent, warnings } from '@/lib/content';

export const metadata: Metadata = {
  title: `Projets - ${getFullTitle()}`,
  description: workContent.hero.description,
  keywords: ['projets électronique', 'portfolio ingénieur', 'systèmes embarqués', 'développement web', 'conception circuits'],
  openGraph: {
    title: `Projets - ${siteMetadata.name}`,
    description: 'Portfolio de projets en électronique et développement logiciel',
    type: 'website',
  },
};

export default function Work() {
  return (
    <>
      {/* Hero Section */}
      <PageSection className="bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading level={1}>
            {workContent.hero.title}
          </SectionHeading>
          <p className="text-lg text-slate-600 leading-relaxed mt-4">
            {workContent.hero.description}
          </p>
        </div>
      </PageSection>

      {/* Projects Grid with Filter */}
      <PageSection className="bg-white">
        <ProjectGrid projects={projects} categories={categories} />
      </PageSection>

      {/* CTA Section */}
      <PageSection className="bg-slate-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            {workContent.cta.title}
          </h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            {workContent.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LinkButton href="/contact" size="lg">
              {workContent.cta.primaryButton}
            </LinkButton>
            <LinkButton href="/about" variant="secondary" size="lg">
              {workContent.cta.secondaryButton}
            </LinkButton>
          </div>
        </div>
      </PageSection>

      {/* Note about placeholders */}
      <PageSection className="bg-amber-50 border-t border-amber-200">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-semibold text-amber-900 mb-2">{warnings.projectsPlaceholder.title}</h3>
              <p className="text-sm text-amber-800 leading-relaxed">
                {warnings.projectsPlaceholder.description}
              </p>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
