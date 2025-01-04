import React from 'react';
import { Project } from '../../../types/resume';
import { ExternalLink } from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  if (projects.length === 0) return null;

  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Projects</h2>
      {projects.map((project) => (
        <div key={project.id} className="mb-4">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-gray-900">
              {project.name}
              {project.url && (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center ml-2 text-blue-600 hover:text-blue-800">
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </h3>
          </div>
          <p className="text-gray-700 mt-1">{project.description}</p>
          {project.technologies.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="px-2 py-1 bg-gray-100 text-sm text-gray-600 rounded">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}