import React, { useEffect } from 'react';
import Nav from '../../components/Nav/Nav';
import Hero from '../../components/Hero/Hero';
import ProjectIntro from '../../components/ProjectIntro/ProjectIntro';
import ProcessList from '../../components/ProcessList/ProcessList';
import Outcomes from '../../components/Outcomes/Outcomes';
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';

const Home: React.FC = () => {
  useEffect(() => {
    // Scroll reveal observer
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProjectIntro />
        <ProcessList />
        <Outcomes />
        <About />
      </main>
      <Footer />
    </>
  );
};

export default Home;