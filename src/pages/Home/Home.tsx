import React from 'react';
import Nav from '../../components/Nav/Nav';
import Hero from '../../components/Hero/Hero';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';
import { projects } from '../../data/projects';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Home: React.FC = () => {
  useScrollReveal();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProjectsSection projects={projects} />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default Home;
