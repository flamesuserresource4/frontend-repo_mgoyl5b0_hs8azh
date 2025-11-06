import { Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">Let’s build something great</h2>
          <p className="mt-2 text-gray-600">Open for freelance and full-time roles. Drop a message and I’ll get back soon.</p>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-10 max-w-xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                required
                className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900"
                placeholder="Your name"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                required
                className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900"
                placeholder="you@example.com"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows={4}
                required
                className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900"
                placeholder="Tell me about your project..."
              />
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <a href="mailto:hello@auliya.dev" className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900">
              <Mail size={16} /> hello@auliya.dev
            </a>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-black"
            >
              Send message <Send size={16} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
