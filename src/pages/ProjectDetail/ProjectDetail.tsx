import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Nav from '../../components/layout/Nav/Nav';
import Footer from '../../components/layout/Footer/Footer';
import ProjectIntro from '../../components/project/ProjectIntro/ProjectIntro';
import ProcessList from '../../components/sections/ProcessList/ProcessList';
import Outcomes from '../../components/sections/Outcomes/Outcomes';
import CaseSection from '../../components/project/CaseSection/CaseSection';
import SideNav from '../../components/project/SideNav/SideNav';
import Tag from '../../components/ui/Tag/Tag';
import ImagePlaceholder from '../../components/ui/ImagePlaceholder/ImagePlaceholder';
import { getProjectBySlug } from '../../data/projects';
import { stepContents } from '../../data/stepContents';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './ProjectDetail.module.css';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug ?? '');
  const isCase = project?.layoutType === 'case';
  const [activeStep, setActiveStep] = useState(1);
  const stepRefs = useRef<Record<number, HTMLElement | null>>({});

  useScrollReveal(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  useEffect(() => {
    if (!project) navigate('/', { replace: true });
  }, [project, navigate]);

  useEffect(() => {
    if (!isCase || !project) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute('data-step-id'));
            if (id) setActiveStep(id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    project.steps.forEach((step) => {
      const el = document.getElementById(`step-${step.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isCase, project]);

  if (!project) return null;

  /* ── Standard layout ─────────────────────────────────────────────────── */
  if (!isCase) {
    return (
      <>
        <Nav />
        <main>
          <ProjectIntro project={project} />
          <ProcessList steps={project.steps} projectSlug={project.slug} />
          <Outcomes outcomes={project.outcomes} />
        </main>
        <Footer />
      </>
    );
  }

  /* ── Case layout ─────────────────────────────────────────────────────── */
  const contents = stepContents[slug ?? ''] ?? {};

  return (
    <>
      <Nav theme="dark" />
      <main className={styles.page}>

        {/* 1 — Intro */}
        <section className={`${styles.intro} reveal`}>
          <p className="section-label">{project.context}</p>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.desc}>{project.description}</p>
          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <p className={styles.metaLabel}>Role</p>
              <p className={styles.metaValue}>{project.role}</p>
            </div>
            <div className={styles.metaItem}>
              <p className={styles.metaLabel}>Theme</p>
              <p className={styles.metaValue}>{project.theme}</p>
            </div>
            <div className={styles.metaItem}>
              <p className={styles.metaLabel}>Status</p>
              <p className={styles.metaValue}>Live · In testing</p>
            </div>
            <div className={styles.metaItem}>
              <p className={styles.metaLabel}>Tools</p>
              <p className={styles.metaValue}>Figma · Procreate</p>
            </div>
          </div>
        </section>

        {/* 2 — Hero image */}
        <section className={`${styles.heroImg} reveal`}>
          <ImagePlaceholder src="/inicio.png" label="Add hero image — product screenshot or cover" aspect="wide" />
        </section>

        {/* 3 — Body: sidebar + steps */}
        <div className={styles.body}>

          <aside className={styles.sidebar}>
            <SideNav
              steps={project.steps.map((s) => ({ id: s.id, title: s.title }))}
              activeStep={activeStep}
            />
          </aside>

          <div className={styles.content}>
            {project.steps.map((step) => {
              const content = contents[step.id];
              if (!content) return null;
              return (
                <article
                  key={step.id}
                  id={`step-${step.id}`}
                  data-step-id={step.id}
                  className={styles.step}
                  ref={(el) => { stepRefs.current[step.id] = el; }}
                >
                  <div className={`${styles.stepHeader} reveal`}>
                    <span className={styles.stepNum}>{String(step.id).padStart(2, '0')}</span>
                    <h2 className={styles.stepTitle}>{step.title}</h2>
                    <p className={styles.stepSubtitle}>{step.subtitle}</p>
                    <div className={styles.stepTags}>
                      {step.tags.map((tag) => <Tag key={tag} label={tag} variant="dark" />)}
                    </div>
                  </div>

                  <div className={styles.stepSections}>
                    {content.sections.map((section, i) => (
                      <CaseSection key={i} section={section} index={i} />
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* 4 — Outcomes */}
        <Outcomes outcomes={project.outcomes} />

      </main>
      <Footer />
    </>
  );
};

export default ProjectDetail;
