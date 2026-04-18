import React from 'react';
import Nav from '../../components/layout/Nav/Nav';
import Hero from '../../components/sections/Hero/Hero';
import ProjectsSection from '../../components/sections/ProjectsSection/ProjectsSection';
import About from '../../components/sections/About/About';
import Footer from '../../components/layout/Footer/Footer';
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
