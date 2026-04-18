import React from 'react';
import ProjectCard from '../../project/ProjectCard/ProjectCard';
import type { Project } from '../../../types';
import styles from './ProjectsSection.module.css';

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const others = projects.filter((p) => p.slug !== featured?.slug);

  return (
    <section id="projects" className={styles.section}>
      <div className={`${styles.header} reveal`}>
        <p className="section-label">Work</p>
        <h2 className="section-title">Projects</h2>
      </div>

      <div className={styles.layout}>
        {featured && (
          <div className={`${styles.featured} reveal`}>
            <ProjectCard project={featured} variant="featured" />
          </div>
        )}

        {others.length > 0 && (
          <div className={styles.others}>
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
