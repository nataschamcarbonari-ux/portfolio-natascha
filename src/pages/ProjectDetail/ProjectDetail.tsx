import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import ProjectIntro from '../../components/ProjectIntro/ProjectIntro';
import ProcessList from '../../components/ProcessList/ProcessList';
import Outcomes from '../../components/Outcomes/Outcomes';
import { getProjectBySlug } from '../../data/projects';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug ?? '');

  useScrollReveal(slug);

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  React.useEffect(() => {
    if (!project) navigate('/', { replace: true });
  }, [project, navigate]);

  if (!project) return null;

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
};

export default ProjectDetail;
