import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#hero" className="font-semibold tracking-tight text-gray-900">
          Auliya Kurniawan
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
          <a href="#work" className="text-gray-600 hover:text-gray-900">Work</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="mailto:hello@auliya.dev"
            aria-label="Email"
            className="p-2 rounded-md hover:bg-gray-100 text-gray-600 hover:text-gray-900"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-md hover:bg-gray-100 text-gray-600 hover:text-gray-900"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-md hover:bg-gray-100 text-gray-600 hover:text-gray-900"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
