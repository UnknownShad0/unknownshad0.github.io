import { Footer, Header, MouseEffects, Section } from './components';
import { Hero, About, Technologies, Projects, Experience, Certifications } from './pages';

function App() {
  return (
    <>
      <MouseEffects />
      <Header />
      <main>
        <div className="mx-auto mb-8 max-w-sm p-4 sm:max-w-2xl lg:max-w-7xl">
          <Hero />
        </div>

        <Section className="rounded-2xl">
          <Projects />
        </Section>
        <Section className="rounded-3xl">
          <About />
        </Section>
        <Section className="rounded-3xl">
          <Experience />
        </Section>
        <Section className="rounded-3xl">
          <Technologies />
        </Section>
        <Section className="rounded-2xl">
          <Certifications />
        </Section>
      </main>

      <Footer />
    </>
  );
}

export default App;
