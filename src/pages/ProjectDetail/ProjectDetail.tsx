import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import ProjectIntro from '../../components/ProjectIntro/ProjectIntro';
import ProcessList from '../../components/ProcessList/ProcessList';
import Outcomes from '../../components/Outcomes/Outcomes';
import { getProjectBySlug } from '../../data/projects';
import { stepContents } from '../../data/stepContents';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import Tag from '../../components/ui/Tag/Tag';
import ImagePlaceholder from '../../components/ui/ImagePlaceholder/ImagePlaceholder';
import Card from '../../components/ui/Card/Card';
import type { StepSectionData } from '../../types';

/* ─── Case section ─────────────────────────────────────────────────────────── */
const CaseSection: React.FC<{ section: StepSectionData; index: number }> = ({ section, index }) => (
  <div className="cs-section reveal" style={{ animationDelay: `${index * 60}ms` }}>
    <p className="cs-section__label">{section.label}</p>
    <h3 className="cs-section__heading">{section.heading}</h3>
    {section.body && <p className="cs-section__body">{section.body}</p>}
    {section.cards && section.cards.length > 0 && (
      <div className="cs-section__cards">
        {section.cards.map((card, i) => (
          <Card key={i} label={card.label} text={card.text} wide={card.wide} />
        ))}
      </div>
    )}
    {section.images && section.images.length > 0 ? (
      <div className={`cs-section__images cs-section__images--${section.images.length > 1 ? 'grid' : 'single'}`}>
        {section.images.map((src, i) => (
          <ImagePlaceholder key={i} src={src || undefined} label="Add image" aspect={section.images!.length > 1 ? 'square' : 'wide'} />
        ))}
      </div>
    ) : (
      !section.cards || section.cards.length === 0 ? (
        <ImagePlaceholder label="Add image" aspect="wide" />
      ) : null
    )}
  </div>
);

/* ─── Sticky sidebar nav ───────────────────────────────────────────────────── */
interface SideNavProps {
  steps: { id: number; title: string }[];
  activeStep: number;
}

const SideNav: React.FC<SideNavProps> = ({ steps, activeStep }) => {
  const scrollTo = (id: number) => {
    const el = document.getElementById(`step-${id}`);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className="cs-sidenav">
      <p className="cs-sidenav__label">Process</p>
      <ul className="cs-sidenav__list">
        {steps.map((step) => (
          <li key={step.id}>
            <button
              className={`cs-sidenav__item ${activeStep === step.id ? 'cs-sidenav__item--active' : ''}`}
              onClick={() => scrollTo(step.id)}
            >
              <span className="cs-sidenav__num">{String(step.id).padStart(2, '0')}</span>
              <span className="cs-sidenav__title">{step.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

/* ─── Slugs that use the inline case layout ────────────────────────────────── */
const CASE_SLUGS = ['tennisconnect'];

/* ─── Main ─────────────────────────────────────────────────────────────────── */
const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug ?? '');
  const isCase = CASE_SLUGS.includes(slug ?? '');
  const [activeStep, setActiveStep] = useState(1);
  const stepRefs = useRef<Record<number, HTMLElement | null>>({});

  useScrollReveal(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  useEffect(() => {
    if (!project) navigate('/', { replace: true });
  }, [project, navigate]);

  /* Track which step is in view */
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
      <main className="cs-page">

        {/* 1 ── Intro */}
        <section className="cs-intro reveal">
          <p className="section-label">{project.context}</p>
          <h1 className="cs-intro__title">{project.title}</h1>
          <p className="cs-intro__desc">{project.description}</p>
          <div className="cs-intro__meta">
            <div className="meta-item">
              <p className="meta-item__label">Role</p>
              <p className="meta-item__value">{project.role}</p>
            </div>
            <div className="meta-item">
              <p className="meta-item__label">Theme</p>
              <p className="meta-item__value">{project.theme}</p>
            </div>
            <div className="meta-item">
              <p className="meta-item__label">Status</p>
              <p className="meta-item__value">Live · In testing</p>
            </div>
            <div className="meta-item">
              <p className="meta-item__label">Tools</p>
              <p className="meta-item__value">Figma · Procreate</p>
            </div>
          </div>
        </section>

        {/* 2 ── Hero image */}
        <section className="cs-hero-img reveal">
          <ImagePlaceholder label="Add hero image — product screenshot or cover" aspect="wide" />
        </section>

        {/* 3 ── Body: sidebar + steps */}
        <div className="cs-body">

          {/* Sticky sidebar */}
          <aside className="cs-sidebar">
            <SideNav
              steps={project.steps.map((s) => ({ id: s.id, title: s.title }))}
              activeStep={activeStep}
            />
          </aside>

          {/* Steps content */}
          <div className="cs-content">
            {project.steps.map((step) => {
              const content = contents[step.id];
              if (!content) return null;
              return (
                <article
                  key={step.id}
                  id={`step-${step.id}`}
                  data-step-id={step.id}
                  className="cs-step"
                  ref={(el) => { stepRefs.current[step.id] = el; }}
                >
                  {/* Step header */}
                  <div className="cs-step__header reveal">
                    <span className="cs-step__num">{String(step.id).padStart(2, '0')}</span>
                    <h2 className="cs-step__title">{step.title}</h2>
                    <p className="cs-step__subtitle">{step.subtitle}</p>
                    <div className="cs-step__tags">
                      {step.tags.map((tag) => <Tag key={tag} label={tag} variant="dark" />)}
                    </div>
                  </div>

                  {/* Step sections */}
                  <div className="cs-step__sections">
                    {content.sections.map((section, i) => (
                      <CaseSection key={i} section={section} index={i} />
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* 4 ── Outcomes */}
        <Outcomes outcomes={project.outcomes} />

      </main>
      <Footer />
    </>
  );
};

export default ProjectDetail;