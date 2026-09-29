'use client';

import Image, { type ImageProps } from 'next/image';
import { useEffect, useRef, useState } from 'react';

export interface Project {
  year: string;
  category: string;
  title: string;
  description: string;
  details: string;
  tools: string;
  image?: ImageProps['src'];
  imageAlt?: string;
}

interface ProjectsPanelProps {
  projects: Project[];
}

export function ProjectsPanel({ projects }: ProjectsPanelProps) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !activeProject) return;

    if (!dialog.open) dialog.showModal();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [activeProject]);

  return (
    <>
      <div className="project-list">
        {projects.map((project) => (
          <article
            className={`project-item${project.image ? ' project-item-with-image' : ' project-item-without-image'}`}
            key={project.title}
          >
            <div className="project-meta">
              <span className="project-number">{project.year}</span>
              <span>{project.category}</span>
            </div>

            {project.image && (
              <div className="project-image-frame">
                <Image
                  className="project-image"
                  src={project.image}
                  alt={project.imageAlt ?? project.title}
                  sizes="220px"
                />
              </div>
            )}

            <div className="project-copy">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <span className="project-tools">{project.tools}</span>
            </div>

            <button
              className="project-open"
              type="button"
              onClick={() => setActiveProject(project)}
              aria-label={`Voir les détails du projet ${project.title}`}
              aria-haspopup="dialog"
            >
              <span className="project-arrow" aria-hidden="true">-&gt;</span>
            </button>
          </article>
        ))}
      </div>

      <dialog
        className="project-dialog"
        ref={dialogRef}
        aria-labelledby="project-dialog-title"
        onClose={() => setActiveProject(null)}
        onCancel={(event) => {
          event.preventDefault();
          dialogRef.current?.close();
        }}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            event.preventDefault();
            dialogRef.current?.close();
          }
        }}
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
      >
        {activeProject && (
          <>
            <div className="project-dialog-header">
              <span>Détails du projet</span>
              <button
                className="project-dialog-close"
                type="button"
                onClick={() => dialogRef.current?.close()}
                aria-label="Fermer les détails du projet"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                  <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="project-dialog-content">
              <p className="project-dialog-meta">
                {activeProject.year} <span aria-hidden="true">/</span> {activeProject.category}
              </p>
              <h2 id="project-dialog-title">{activeProject.title}</h2>

              {activeProject.image && (
                <div className="project-dialog-image-frame">
                  <Image
                    className="project-dialog-image"
                    src={activeProject.image}
                    alt={activeProject.imageAlt ?? activeProject.title}
                    sizes="(max-width: 560px) 100vw, 500px"
                  />
                </div>
              )}

              <p className="project-dialog-description">{activeProject.description}</p>

              <section className="project-dialog-section" aria-labelledby="project-details-heading">
                <h3 id="project-details-heading">À propos du projet</h3>
                <p>{activeProject.details}</p>
              </section>

              <section className="project-dialog-section" aria-labelledby="project-tools-heading">
                <h3 id="project-tools-heading">Outils et technologies</h3>
                <p>{activeProject.tools}</p>
              </section>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}