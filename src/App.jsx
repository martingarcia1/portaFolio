import Header from './app/components/header';
import Hero from './app/components/hero';
import About from './app/components/about';
import Projects from './app/components/projects';
import Skills from './app/components/skills';
import Certificates from './app/components/certificates';
import Contact from './app/components/contact';
import Footer from './app/components/footer';

function App() {
  return (
    <div className="font-sans antialiased selection:bg-blue-500/30">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
