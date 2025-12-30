import { useState } from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/Footer';

function App() {
  const [activeSection, setActiveSection] = useState<'about' | 'projects' | 'contact'>('about');

  return (
    <>
      {/* Passa a função para o Header */}
      <Header setActiveSection={setActiveSection} />

      {/* Renderiza apenas a seção ativa */}
      {activeSection === 'about' && <About />}
      {activeSection === 'projects' && <Projects />}
      {activeSection === 'contact' && <Contact />}

      <Footer />
    </>
  );
}

export default App;
