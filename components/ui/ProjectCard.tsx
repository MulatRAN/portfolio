import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image?: string;
  href?: string;
  tags?: string[];
}

export function ProjectCard({ title, category, description, image, href, tags }: ProjectCardProps) {
  const content = (
    <div className="group h-full bg-white border border-slate-200 hover:border-slate-300 transition-all duration-200 overflow-hidden">
      {/* Image placeholder or actual image */}
      {image ? (
        <div className="relative w-full h-48 bg-slate-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ) : (
        <div className="w-full h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
          <svg className="w-16 h-16 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <span className="text-xs font-medium text-amber-600 uppercase tracking-wide">
          {category}
        </span>

        <h3 className="text-xl font-semibold text-slate-900 mt-2 mb-3 group-hover:text-amber-600 transition-colors">
          {title}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Link arrow */}
        {href && (
          <span className="inline-flex items-center text-sm font-medium text-amber-600 group-hover:gap-2 transition-all">
            Voir le projet
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded">
        {content}
      </Link>
    );
  }

  return <div className="h-full">{content}</div>;
}
