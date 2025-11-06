import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Portfolio Redesign",
    desc: "A modern, performant portfolio built with Next.js App Router and Tailwind.",
    tags: ["Next.js", "Tailwind", "SEO"],
    live: "#",
    repo: "#",
  },
  {
    title: "UI Components Kit",
    desc: "Reusable, accessible React components with headless patterns.",
    tags: ["React", "TypeScript", "A11y"],
    live: "#",
    repo: "#",
  },
  {
    title: "3D Landing Hero",
    desc: "Interactive hero section powered by Spline with smooth overlays.",
    tags: ["Spline", "Framer Motion", "Vite"],
    live: "#",
    repo: "#",
  },
];

export default function Work() {
  return (
    <section id="work" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900">Selected Work</h2>
            <p className="mt-2 text-gray-600">A few projects that highlight craft, performance, and polish.</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-gray-200 bg-white p-5 hover:shadow-sm transition">
              <div className="flex items-center gap-2 text-gray-700">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50">
                  <Folder size={18} />
                </span>
                <h3 className="font-medium text-gray-900">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs text-gray-700">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href={p.live} className="inline-flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900">
                  <ExternalLink size={16} /> Live
                </a>
                <a href={p.repo} className="inline-flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900">
                  <Github size={16} /> Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
