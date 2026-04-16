import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import type { Project } from '../../types';

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const others = projects.filter((p) => p.slug !== featured?.slug);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-section__header reveal">
        <p className="section-label">Work</p>
        <h2 className="section-title">Projects</h2>
      </div>

      <div className="projects-section__layout">
        {featured && (
          <div className="projects-section__featured reveal">
            <ProjectCard project={featured} variant="featured" />
          </div>
        )}

        {others.length > 0 && (
          <div className="projects-section__others">
            {others.map((project, i) => (
              <div key={project.slug} className="reveal" style={{ animationDelay: `${i * 80}ms` }}>
                <ProjectCard project={project} variant="default" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
