import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/layout/Nav/Nav';
import Footer from '../../components/layout/Footer/Footer';
import Tag from '../../components/ui/Tag/Tag';
import { projects } from '../../data/projects';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  useScrollReveal();

  return (
    <>
      <Nav />
      <main className={styles.page}>

        <div className={`${styles.header} reveal`}>
          <p className="section-label">Portfolio</p>
          <h1 className="section-title">All Projects</h1>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <Link
              key={project.slug}
              to={`/project/${project.slug}`}
              className={`${styles.card} reveal`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={styles.cardTop}>
                <p className={styles.cardContext}>{project.context}</p>
                <span className={styles.cardArrow}>→</span>
              </div>
              <h2 className={styles.cardTitle}>{project.title}</h2>
              <p className={styles.cardRole}>{project.role}</p>
              {project.tags && (
                <div className={styles.cardTags}>
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
