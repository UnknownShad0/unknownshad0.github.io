import { Header, Footer } from './components';
import { Hero, About, Technologies, Projects, Experience, Certifications } from './pages';
import coverImage from './assets/cover.jpg';

function App() {
  return (
    <>
      <div className="mx-auto max-w-sm sm:max-w-3xl lg:max-w-6xl">
        <Header />
      </div>
      <div className="relative mx-auto mb-10 lg:max-w-7xl">
        <img src={coverImage} alt="" className="mx-auto h-auto rounded-3xl p-4 opacity-70" />
        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-sm sm:max-w-xl lg:max-w-7xl">
            <div className="flex-1"></div>
            <div className="flex flex-2 items-center justify-center">
              <div className="">
                <Hero />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mb-5 max-w-sm rounded-3xl sm:max-w-2xl lg:mb-8 lg:max-w-7xl">
        <About />
      </div>

      <div className="mx-auto mb-5 max-w-sm rounded-3xl sm:max-w-2xl lg:mb-8 lg:max-w-7xl">
        <Experience />
      </div>

      <div className="mx-auto mb-5 max-w-sm rounded-3xl sm:max-w-2xl lg:mb-8 lg:max-w-7xl">
        <Technologies />
      </div>

      <div className="mx-auto mb-5 max-w-sm rounded-2xl sm:max-w-2xl lg:mb-8 lg:max-w-7xl">
        <Projects />
      </div>

      <div className="mx-auto mb-5 max-w-sm rounded-2xl sm:max-w-2xl lg:mb-8 lg:max-w-7xl">
        <Certifications />
      </div>

      <Footer />
    </>
  );
}

export default App;
