import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import StepHero from '../../components/StepHero/StepHero';
import StepSection from '../../components/StepSection/StepSection';
import StepNav from '../../components/StepNav/StepNav';
import { getStepById, getPrevStep, getNextStep, totalSteps } from '../../data/steps';
import { stepContents } from '../../data/stepContents';

const StepDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const stepId = Number(id);
  const step = getStepById(stepId);
  const prev = getPrevStep(stepId);
  const next = getNextStep(stepId);
  const content = stepContents[stepId];

  // Redirect to home if step not found
  useEffect(() => {
    if (!step) navigate('/', { replace: true });
  }, [step, navigate]);

  // Scroll reveal observer
  useEffect(() => {
    if (!step) return;

    // Scroll to top on step change
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, i * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [stepId, step]);

  if (!step) return null;

  return (
    <>
      <Nav />
      <main className="step-detail">

        <StepHero step={step} total={totalSteps} />

        <div className="step-detail__content">
          {content?.sections.map((section, i) => (
            <StepSection key={i} section={section} />
          ))}

          {/* Fallback when no content has been added yet */}
          {(!content || content.sections.length === 0) && (
            <div className="step-detail__empty">
              <p className="step-detail__empty-label">Content coming soon</p>
              <p className="step-detail__empty-text">
                This step is being documented. Check back soon.
              </p>
            </div>
          )}
        </div>

        <StepNav prev={prev} next={next} currentId={stepId} />

      </main>
      <Footer />
    </>
  );
};

export default StepDetail;