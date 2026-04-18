import React from 'react';
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

// ─── Inline case layout (used for tennisconnect and similar narrative cases) ──

interface CaseSectionData {
  label: string;
  heading: string;
  body?: string;
  cards?: { label: string; text: string; wide?: boolean }[];
  images?: string[];
}

const CaseSection: React.FC<{ section: CaseSectionData; index: number }> = ({ section, index }) => (
  <div className="case-section reveal" style={{ animationDelay: `${index * 60}ms` }}>
    <p className="case-section__label">{section.label}</p>
    <h3 className="case-section__heading">{section.heading}</h3>
    {section.body && <p className="case-section__body">{section.body}</p>}
    {section.cards && section.cards.length > 0 && (
      <div className="case-section__cards">
        {section.cards.map((card, i) => (
          <Card key={i} label={card.label} text={card.text} wide={card.wide} />
        ))}
      </div>
    )}
    {section.images && section.images.length > 0 && (
      <div className={`case-section__images case-section__images--${section.images.length > 1 ? 'grid' : 'single'}`}>
        {section.images.map((src, i) => (
          <ImagePlaceholder key={i} src={src || undefined} label="Add image" aspect={section.images!.length > 1 ? 'square' : 'wide'} />
        ))}
      </div>
    )}
    {(!section.images || section.images.length === 0) && !section.cards && (
      <ImagePlaceholder label="Add image" aspect="wide" />
    )}
  </div>
);

const CaseStep: React.FC<{ stepId: number; title: string; subtitle: string; tags: string[]; sections: CaseSectionData[] }> = ({
  stepId, title, subtitle, tags, sections,
}) => (
  <div className="case-step">
    <div className="case-step__header reveal">
      <div className="case-step__meta">
        <span className="case-step__num">{String(stepId).padStart(2, '0')}</span>
        <div>
          <h2 className="case-step__title">{title}</h2>
          <p className="case-step__subtitle">{subtitle}</p>
          <div className="case-step__tags">
            {tags.map((tag) => <Tag key={tag} label={tag} variant="dark" />)}
          </div>
        </div>
      </div>
    </div>
    <div className="case-step__content">
      {sections.map((section, i) => (
        <CaseSection key={i} section={section} index={i} />
      ))}
    </div>
  </div>
);

// ─── Main ProjectDetail ───────────────────────────────────────────────────────

const CASE_SLUGS = ['tennisconnect']; // slugs that use the inline case layout

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug ?? '');
  const isCase = CASE_SLUGS.includes(slug ?? '');

  useScrollReveal(slug);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  React.useEffect(() => {
    if (!project) navigate('/', { replace: true });
  }, [project, navigate]);

  if (!project) return null;

  // ── Standard layout (existing projects) ────────────────────────────────
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

  // ── Inline case layout ──────────────────────────────────────────────────
  const contents = stepContents[slug ?? ''] ?? {};

  return (
    <>
      <Nav />
      <main className="case-page">

        {/* ── 1. Project intro ── */}
        <section className="case-intro reveal">
          <p className="section-label">{project.context}</p>
          <h1 className="case-intro__title">{project.title}</h1>
          <p className="case-intro__desc">{project.description}</p>
          <div className="case-intro__meta">
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

        {/* ── 2. Hero image ── */}
        <section className="case-hero-image reveal">
          <ImagePlaceholder label="Add hero image — product screenshot or cover" aspect="wide" />
        </section>

        {/* ── 3. Process overview (step pills) ── */}
        <section className="case-process-overview surface-dark">
          <div className="reveal">
            <p className="section-label">Design Process</p>
            <h2 className="section-title">How we got there</h2>
          </div>
          <div className="case-process-pills reveal">
            {project.steps.map((step) => (
              <div key={step.id} className="case-pill">
                <span className="case-pill__num">{String(step.id).padStart(2, '0')}</span>
                <span className="case-pill__title">{step.title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. Steps with inline content ── */}
        <section className="case-steps surface-dark">
          {project.steps.map((step) => {
            const content = contents[step.id];
            if (!content) return null;
            return (
              <CaseStep
                key={step.id}
                stepId={step.id}
                title={step.title}
                subtitle={step.subtitle}
                tags={step.tags}
                sections={content.sections}
              />
            );
          })}
        </section>

        {/* ── 5. Outcomes ── */}
        <Outcomes outcomes={project.outcomes} />

      </main>
      <Footer />
    </>
  );
};

export default ProjectDetail;