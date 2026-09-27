'use client';

import { useState } from 'react';
import { Project } from '@/lib/projects';
import { ProjectCard } from './ProjectCard';

interface ProjectGridProps {
  projects: Project[];
  categories: Project['category'][];
}

export function ProjectGrid({ projects, categories }: ProjectGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<Project['category'] | 'all'>('all');

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div>
      {/* Category Filter */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded font-medium transition-all duration-150 ${
              selectedCategory === 'all'
                ? 'bg-amber-500 text-white shadow-sm'
                : 'bg-white text-slate-700 border border-slate-200 hover:border-amber-500 hover:text-amber-600'
            } focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2`}
          >
            Tous les projets ({projects.length})
          </button>
          {categories.map((category) => {
            const count = projects.filter(p => p.category === category).length;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded font-medium transition-all duration-150 ${
                  selectedCategory === category
                    ? 'bg-amber-500 text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-amber-500 hover:text-amber-600'
                } focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2`}
              >
                {category} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              category={project.category}
              description={project.description}
              image={project.image}
              href={project.href}
              tags={project.technologies}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <svg className="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="text-slate-600 text-lg mb-2">Aucun projet dans cette catégorie</p>
          <p className="text-slate-500 text-sm">Essayez une autre catégorie</p>
        </div>
      )}

      {/* Projects count indicator */}
      <div className="mt-12 text-center">
        <p className="text-sm text-slate-500">
          {filteredProjects.length === projects.length
            ? `${projects.length} projet${projects.length > 1 ? 's' : ''} au total`
            : `${filteredProjects.length} projet${filteredProjects.length > 1 ? 's' : ''} sur ${projects.length}`
          }
        </p>
      </div>
    </div>
  );
}
