import { useEffect, useMemo, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Hobbies from './components/Hobbies';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { projects } from './data/projects';
import { skills } from './data/skills';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const featuredProjects = useMemo(() => projects, []);
  const skillList = useMemo(() => skills, []);

  useEffect(() => {
    const timerId = window.setTimeout(() => setIsLoading(false), 700);
    return () => window.clearTimeout(timerId);
  }, []);

  return (
    <>
      <div className={`loading-overlay ${isLoading ? '' : 'is-hidden'}`} aria-hidden={!isLoading}>
        <div className="loader" />
      </div>
      <Header />
      <main>
        <Hero />
        <About />
        <Hobbies />
        <Projects projects={featuredProjects} />
        <Skills skills={skillList} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
