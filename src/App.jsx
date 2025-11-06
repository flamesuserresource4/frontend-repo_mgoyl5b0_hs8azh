import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Work />
        <Contact />
      </main>
      <footer className="border-t border-black/5">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Auliya Kurniawan. All rights reserved.</p>
          <p>
            Built with React, Tailwind, and a playful 3D touch.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
