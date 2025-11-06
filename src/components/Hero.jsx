import Spline from "@splinetool/react-spline";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[80vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 text-center">
        <p className="inline-flex items-center gap-2 rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-gray-700">
          Frontend Developer • React • Next.js
        </p>
        <h1 className="mt-6 font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl text-gray-900">
          Auliya Kurniawan
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Building delightful, accessible web experiences with HTML, CSS, Tailwind, TypeScript, React, and Next.js.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-black"
          >
            Get in touch <ArrowRight size={16} />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            View work
          </a>
        </div>
      </div>
    </section>
  );
}
