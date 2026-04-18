import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Tag from '../../components/ui/Tag/Tag';
import { projects } from '../../data/projects';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Projects: React.FC = () => {
  useScrollReveal();

  return (
    <>
      <Nav />
      <main className="projects-page">

        <div className="projects-page__header reveal">
          <p className="section-label">Portfolio</p>
          <h1 className="section-title">All Projects</h1>
        </div>

        <div className="projects-page__grid">
          {projects.map((project, i) => (
            <Link
              key={project.slug}
              to={`/project/${project.slug}`}
              className="projects-page__card reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="projects-page__card-top">
                <p className="projects-page__card-context">{project.context}</p>
                <span className="projects-page__card-arrow">→</span>
              </div>
              <h2 className="projects-page__card-title">{project.title}</h2>
              <p className="projects-page__card-role">{project.role}</p>
              {project.tags && (
                <div className="projects-page__card-tags">
                  {project.tags.map((tag) => (
                    <Tag key={tag} label={tag} variant="default" />
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>

      </main>
      <Footer />
    </>
  );
};

export default Projects;
