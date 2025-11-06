import { Braces, Code2, Palette, Server, Shapes, Sparkles } from "lucide-react";

const skills = [
  { icon: Code2, title: "HTML & CSS", desc: "Semantic HTML, modern CSS, responsive layouts." },
  { icon: Palette, title: "Tailwind CSS", desc: "Utility-first styling, design systems, theming." },
  { icon: Braces, title: "TypeScript", desc: "Types for safety, DX, and maintainable code." },
  { icon: Shapes, title: "React", desc: "Hooks, state management, performance patterns." },
  { icon: Server, title: "Next.js", desc: "App Router, SSR/SSG, API routes, SEO." },
  { icon: Sparkles, title: "UX Practices", desc: "Accessibility, animations, micro-interactions." },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-gray-900">Skills</h2>
        <p className="mt-2 text-center text-gray-600">Tools and technologies I use to craft polished front-end products.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((s) => (
            <div key={s.title} className="rounded-xl border border-gray-200 p-5 hover:shadow-sm transition">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50 text-gray-700">
                  <s.icon size={18} />
                </span>
                <div>
                  <h3 className="font-medium text-gray-900">{s.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
