import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import StepSection from '../../components/StepSection/StepSection';
import StepNav from '../../components/StepNav/StepNav';
import { getProjectBySlug } from '../../data/projects';
import { getStepById, getPrevStep, getNextStep } from '../../data/steps';
import { stepContents } from '../../data/stepContents';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const StepDetail: React.FC = () => {
  const { slug, id } = useParams<{ slug: string; id: string }>();
  const navigate = useNavigate();

  const project = getProjectBySlug(slug ?? '');
  const stepId = Number(id);
  const step = project ? getStepById(project.steps, stepId) : undefined;
  const prev = project ? getPrevStep(project.steps, stepId) : undefined;
  const next = project ? getNextStep(project.steps, stepId) : undefined;
  const content = slug ? stepContents[slug]?.[stepId] : undefined;

  useScrollReveal(stepId);

  useEffect(() => {
    if (!project || !step) navigate('/', { replace: true });
  }, [project, step, navigate]);

  useEffect(() => {
    if (!step) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [stepId, step]);

  if (!project || !step) return null;

  return (
    <>
      <Nav theme="dark" />
      <main className="step-detail">

        <div className="step-detail__top-title">
          <p className="step-detail__top-eyebrow">
            Step {String(stepId).padStart(2, '0')} of {String(project.steps.length).padStart(2, '0')}
          </p>
          <h1 className="step-detail__top-heading">{step.title}</h1>
        </div>

        <StepNav
          prev={prev}
          next={next}
          currentId={stepId}
          projectSlug={project.slug}
          totalSteps={project.steps.length}
          top
        />

        <div className="step-detail__content">
          {content?.sections.map((section, i) => (
            <StepSection key={i} section={section} />
          ))}

          {(!content || content.sections.length === 0) && (
            <div className="step-detail__empty">
              <p className="step-detail__empty-label">Content coming soon</p>
              <p className="step-detail__empty-text">
                This step is being documented. Check back soon.
              </p>
            </div>
          )}
        </div>

        <StepNav
          prev={prev}
          next={next}
          currentId={stepId}
          projectSlug={project.slug}
          totalSteps={project.steps.length}
        />

      </main>
      <Footer />
    </>
  );
};

export default StepDetail;
