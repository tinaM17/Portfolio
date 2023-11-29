import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Project from './components/projects/Project'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
function App() {

  return (
    <>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default App
