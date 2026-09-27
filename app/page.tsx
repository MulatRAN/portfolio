import type { Metadata } from 'next';
import { PageSection } from '@/components/layout';
import { LinkButton, SectionHeading, ProjectCard, SkillCategory } from '@/components/ui';
import { siteMetadata, getFullTitle } from '@/lib/site';
import { homeContent } from '@/lib/content';
import { homeSkillCategories } from '@/lib/skills';
import { getFeaturedProjects } from '@/lib/projects';

export const metadata: Metadata = {
  title: `Accueil - ${getFullTitle()}`,
  description: siteMetadata.longDescription,
  keywords: siteMetadata.seo.keywords,
  openGraph: {
    title: getFullTitle(),
    description: siteMetadata.longDescription,
    type: 'website',
  },
};

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      {/* Hero Section */}
      <PageSection className="bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="max-w-4xl mx-auto text-center py-8 md:py-12">
          <div className="inline-block px-4 py-2 bg-amber-50 border border-amber-200 rounded-full text-sm font-medium text-amber-700 mb-6">
            {homeContent.hero.badge}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            {homeContent.hero.title}{' '}
            <span className="text-amber-600">{homeContent.hero.titleHighlight}</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {homeContent.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <LinkButton href="/work" size="lg">
              {homeContent.hero.primaryCta}
            </LinkButton>
            <LinkButton href="/contact" variant="secondary" size="lg">
              {homeContent.hero.secondaryCta}
            </LinkButton>
          </div>

          {/* Visual element - Circuit pattern */}
          <div className="mt-12 relative h-32 opacity-20" aria-hidden="true">
            <svg className="w-full h-full" viewBox="0 0 800 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 50 L100 50 L100 20 L200 20 L200 80 L300 80 L300 30 L400 30" stroke="currentColor" strokeWidth="2" className="text-amber-500"/>
              <circle cx="100" cy="50" r="4" fill="currentColor" className="text-amber-500"/>
              <circle cx="100" cy="20" r="4" fill="currentColor" className="text-amber-500"/>
              <circle cx="200" cy="20" r="4" fill="currentColor" className="text-amber-500"/>
              <circle cx="200" cy="80" r="4" fill="currentColor" className="text-amber-500"/>
              <circle cx="300" cy="80" r="4" fill="currentColor" className="text-amber-500"/>
              <circle cx="300" cy="30" r="4" fill="currentColor" className="text-amber-500"/>
              <path d="M400 30 L500 30 L500 70 L600 70 L600 40 L700 40 L700 50 L800 50" stroke="currentColor" strokeWidth="2" className="text-slate-300"/>
              <circle cx="400" cy="30" r="4" fill="currentColor" className="text-slate-300"/>
              <circle cx="500" cy="30" r="4" fill="currentColor" className="text-slate-300"/>
              <circle cx="500" cy="70" r="4" fill="currentColor" className="text-slate-300"/>
              <circle cx="600" cy="70" r="4" fill="currentColor" className="text-slate-300"/>
              <circle cx="600" cy="40" r="4" fill="currentColor" className="text-slate-300"/>
              <circle cx="700" cy="40" r="4" fill="currentColor" className="text-slate-300"/>
            </svg>
          </div>
        </div>
      </PageSection>

      {/* Quick Presentation */}
      <PageSection className="bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeading level={2} className="text-center mb-8">
            {homeContent.expertise.title}
          </SectionHeading>

          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              {homeContent.expertise.description}
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="p-6 bg-slate-50 border-l-4 border-amber-500">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {homeContent.expertise.hardware.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {homeContent.expertise.hardware.description}
                </p>
              </div>

              <div className="p-6 bg-slate-50 border-l-4 border-amber-500">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {homeContent.expertise.software.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {homeContent.expertise.software.description}
                </p>
              </div>
            </div>

            <p className="text-center">
              <LinkButton href="/about" variant="secondary">
                {homeContent.expertise.cta}
              </LinkButton>
            </p>
          </div>
        </div>
      </PageSection>

      {/* Featured Projects */}
      <PageSection className="bg-slate-50">
        <SectionHeading level={2} className="text-center mb-12">
          {homeContent.projects.title}
        </SectionHeading>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              category={project.category}
              description={project.description}
              tags={project.technologies}
              href="/work"
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <LinkButton href="/work" variant="secondary" size="lg">
            {homeContent.projects.cta}
          </LinkButton>
        </div>
      </PageSection>

      {/* Skills Section */}
      <PageSection className="bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeading level={2} className="text-center mb-12">
            {homeContent.skills.title}
          </SectionHeading>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {homeSkillCategories.map((category) => (
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
                    {category.icon === 'people' && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    )}
                  </svg>
                }
                skills={category.skills}
              />
            ))}
          </div>
        </div>
      </PageSection>

      {/* Final CTA */}
      <PageSection className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            {homeContent.finalCta.title}
          </h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            {homeContent.finalCta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LinkButton href="/contact" size="lg">
              {homeContent.finalCta.primaryButton}
            </LinkButton>
            <a
              href={`mailto:${siteMetadata.contactInfo.email}`}
              className="inline-flex items-center justify-center py-4 px-8 text-base font-medium rounded transition-all duration-150 bg-transparent text-white border border-slate-600 hover:bg-slate-800 hover:border-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              {homeContent.finalCta.secondaryButton}
            </a>
          </div>
        </div>
      </PageSection>
    </>
  );
}
