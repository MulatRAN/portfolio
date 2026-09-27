import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/projects';

interface DetailedProjectCardProps {
  project: Project;
}

export function DetailedProjectCard({ project }: DetailedProjectCardProps) {
  const statusBadge = {
    completed: { label: 'Terminé', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
    'in-progress': { label: 'En cours', color: 'bg-amber-100 text-amber-700 border-amber-200' },
    concept: { label: 'Concept', color: 'bg-slate-100 text-slate-600 border-slate-200' },
  };

  const status = project.status || 'completed';

  return (
    <div className="bg-white border border-slate-200 overflow-hidden hover:border-slate-300 transition-all duration-200">
      {/* Image */}
      {project.image ? (
        <div className="relative w-full h-64 bg-slate-100">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
          />
        </div>
      ) : (
        <div className="w-full h-64 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
          <svg className="w-20 h-20 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
      )}

      {/* Content */}
      <div className="p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="text-xs font-medium text-amber-600 uppercase tracking-wide">
              {project.category}
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-2">
              {project.title}
            </h3>
          </div>
          <span className={`px-3 py-1 text-xs font-medium border rounded-full ${statusBadge[status].color}`}>
            {statusBadge[status].label}
          </span>
        </div>

        {/* Meta info */}
        <div className="flex items-center gap-4 text-sm text-slate-600 mb-6 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{project.year}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>{project.role}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-700 leading-relaxed mb-6">
          {project.longDescription || project.description}
        </p>

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-900 mb-3">Technologies utilisées</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm font-medium rounded hover:bg-amber-50 hover:text-amber-700 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Link if available */}
        {project.href && (
          <Link
            href={project.href}
            className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded px-2 py-1 -ml-2"
          >
            Voir plus de détails
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}
