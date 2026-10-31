import { Footer, Header, MouseEffects, Section } from './components';
import { Hero, About, Technologies, Projects, Experience, Certifications } from './pages';
import coverImage from './assets/cover.jpg';

function App() {
  return (
    <>
      <MouseEffects />
      <Header />
      <main>
        <div className="relative mx-auto mb-10 lg:max-w-7xl">
          <Hero />
          <img
            src={coverImage}
            alt=""
            width="1560"
            height="1170"
            className="mx-auto h-auto rounded-3xl p-4 opacity-70"
          />
        </div>

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
          <Projects />
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
